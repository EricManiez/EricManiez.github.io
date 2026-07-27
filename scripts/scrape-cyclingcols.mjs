#!/usr/bin/env node
// Scrapes a CyclingCols athlete profile and writes src/data/cyclingcols.json.
//
// Credentials come from env vars — the script never accepts them as CLI
// arguments (which would leak into shell history and process listings) and
// never prints them.
//
// Usage:
//   npm install --no-save playwright
//   npx playwright install chromium         (once)
//
//   CYCLINGCOLS_USER='you@example.com' \
//   CYCLINGCOLS_PASSWORD='...' \
//   CYCLINGCOLS_SLUG='eric' \
//     node scripts/scrape-cyclingcols.mjs
//
// Tip: prefix the command with a space to keep it out of shell history
// (works with HISTCONTROL=ignorespace, which is the default on many setups).
//
// Flags:
//   --debug    Save the raw HTML of the profile page next to the JSON output.
//              Useful when the extractor picks up the wrong bits and you want
//              to inspect the source to teach the script the right selectors.

import { chromium } from 'playwright';
import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const email = process.env.CYCLINGCOLS_USER;
const password = process.env.CYCLINGCOLS_PASSWORD;
const slug = process.env.CYCLINGCOLS_SLUG ?? 'eric';
const debug = process.argv.includes('--debug');

if (!email || !password) {
  console.error('Missing credentials. Set CYCLINGCOLS_USER and CYCLINGCOLS_PASSWORD.');
  process.exit(1);
}

const here = dirname(fileURLToPath(import.meta.url));
const outJson = resolve(here, '..', 'src', 'data', 'cyclingcols.json');
const outHtml = resolve(here, '..', 'src', 'data', 'cyclingcols.raw.html');

const loginUrl = 'https://www.cyclingcols.com/login';
// The `/cols/all/europe` view lists every climbed col with its stats — much
// easier to scrape than the summary dashboard at /athlete/{slug}.
const profileUrl =
  process.env.CYCLINGCOLS_URL ??
  `https://www.cyclingcols.com/athlete/${encodeURIComponent(slug)}/cols/all/europe`;

console.log('Launching browser...');
const browser = await chromium.launch();
const context = await browser.newContext({
  userAgent: 'Mozilla/5.0 (portfolio-scraper; personal-use)',
});
const page = await context.newPage();

try {
  console.log('Loading login page...');
  await page.goto(loginUrl, { waitUntil: 'domcontentloaded' });
  await page.waitForSelector('form[action="/login"]');

  console.log('Filling credentials...');
  await page.fill('form[action="/login"] input[name="email"]', email);
  await page.fill('form[action="/login"] input[name="password"]', password);
  // Leave the "company" honeypot untouched.
  // csrf_token is already populated by the server-rendered form.

  console.log('Submitting login...');
  await Promise.all([
    page.waitForNavigation({ waitUntil: 'domcontentloaded' }),
    page.click('form[action="/login"] button[type="submit"]'),
  ]);

  if (page.url().includes('/login')) {
    const errorText = await page.evaluate(() => document.body.innerText);
    console.error('Still on /login after submit. Credentials may be wrong.');
    if (debug) console.error('Body text:', errorText.slice(0, 500));
    process.exit(2);
  }
  console.log(`Logged in. Current URL: ${page.url()}`);

  console.log(`Fetching profile ${profileUrl} ...`);
  await page.goto(profileUrl, { waitUntil: 'networkidle' });

  if (page.url().includes('/login')) {
    console.error('Redirected to /login when opening profile. Session dropped or profile not accessible.');
    process.exit(3);
  }

  // Always save the raw HTML — it's the ground truth for iterating.
  await mkdir(dirname(outHtml), { recursive: true });
  await writeFile(outHtml, await page.content(), 'utf8');
  console.log(`Wrote raw HTML: ${outHtml}`);

  // Extract each climb event. The page is a vertical stack of `card-body`
  // blocks; every `<a href="/col/...">` outside the footer's "popular cols"
  // list is one climb entry. Its containing row also carries the date, the
  // country flag, and (when present) a Strava activity link.
  const climbs = await page.evaluate(() => {
    const months = { jan: 1, feb: 2, mar: 3, apr: 4, may: 5, jun: 6,
                     jul: 7, aug: 8, sep: 9, oct: 10, nov: 11, dec: 12 };
    const parseDate = (s) => {
      if (!s) return null;
      const m = s.match(/(\d{1,2})\s+([A-Za-z]{3,})\s+(\d{4})/);
      if (!m) return s;
      const mo = months[m[2].slice(0, 3).toLowerCase()];
      if (!mo) return s;
      return `${m[3]}-${String(mo).padStart(2, '0')}-${String(parseInt(m[1], 10)).padStart(2, '0')}`;
    };

    const out = [];
    document.querySelectorAll('a[href^="/col/"]').forEach((a) => {
      // Skip anchors inside the footer's "Most popular cols" list.
      if (a.closest('.cc-col-list')) return;

      const name = a.textContent.trim().replace(/\s+/g, ' ');
      const slug = a.getAttribute('href').replace(/^\/col\//, '').replace(/\/$/, '');

      // Walk up until we find an ancestor that also contains a date (.text-nowrap).
      let row = a.parentElement;
      for (let i = 0; i < 6 && row; i++) {
        if (row.querySelector('.text-nowrap')) break;
        row = row.parentElement;
      }

      const dateEl   = row?.querySelector('.text-nowrap');
      const flagEl   = row?.querySelector('img.cc-flag-xs, img.cc-flag-sm')
                     ?? a.parentElement?.querySelector('img.cc-flag-xs, img.cc-flag-sm');
      const stravaEl = row?.querySelector('a[href*="strava.com/activities/"]');
      const badgeEl  = row?.querySelector('.cc-badge-new');

      out.push({
        name,
        slug,
        country: (flagEl?.getAttribute('alt') || '').trim() || null,
        date: parseDate(dateEl?.textContent.trim() || ''),
        stravaUrl: stravaEl?.getAttribute('href') || null,
        firstTime: !!badgeEl,
      });
    });
    return out;
  });

  // Aggregate: unique cols with a count of climbs and the first/last dates.
  const byCol = new Map();
  for (const ev of climbs) {
    const key = ev.slug || ev.name;
    if (!byCol.has(key)) {
      byCol.set(key, {
        name: ev.name, slug: ev.slug, country: ev.country,
        times: 0, firstDate: null, lastDate: null,
      });
    }
    const agg = byCol.get(key);
    agg.times += 1;
    if (ev.date) {
      if (!agg.firstDate || ev.date < agg.firstDate) agg.firstDate = ev.date;
      if (!agg.lastDate  || ev.date > agg.lastDate)  agg.lastDate  = ev.date;
    }
  }
  const uniqueCols = Array.from(byCol.values())
    .sort((a, b) => (b.times - a.times) || a.name.localeCompare(b.name));

  console.log(`Extracted ${climbs.length} climb event(s), ${uniqueCols.length} unique col(s).`);

  await writeFile(outJson, JSON.stringify({
    scrapedAt: new Date().toISOString(),
    source: profileUrl,
    eventCount: climbs.length,
    uniqueColCount: uniqueCols.length,
    events: climbs,
    uniqueCols,
  }, null, 2), 'utf8');
  console.log(`Wrote ${outJson}`);
  console.log('Done. If the output looks off, rerun with --debug and share the raw HTML back for iteration.');
} finally {
  await browser.close();
}

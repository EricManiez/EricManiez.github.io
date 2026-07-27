// Screenshot QA tool for the showcase pages.
// Cycles through every tab of a showcase, saves a PNG per state, and shoots a
// mobile viewport too. Handy for verifying accent colors, layout, and mobile
// responsiveness without leaving the terminal.
//
// Usage:
//   npm install --no-save playwright && npx playwright install chromium
//   node shot.mjs [url] [outPrefix]
//   node shot.mjs http://localhost:4321/en/music/ /tmp/music
//   node shot.mjs https://ericmaniez.github.io/en/oddities/ /tmp/live

import { chromium } from 'playwright';

const url = process.argv[2] || 'http://localhost:4321/en/music/';
const outPrefix = process.argv[3] || '/tmp/music';

const browser = await chromium.launch();
const context = await browser.newContext({ viewport: { width: 1280, height: 900 }, deviceScaleFactor: 2 });
const page = await context.newPage();
await page.goto(url, { waitUntil: 'networkidle' });
await page.waitForTimeout(500);

const tabs = await page.$$('[data-tab]');
for (let i = 0; i < tabs.length; i++) {
  await tabs[i].click();
  await page.waitForTimeout(400);
  const accent = await page.evaluate(() =>
    getComputedStyle(document.querySelector('.showcase')).getPropertyValue('--accent').trim()
  );
  const slug = await tabs[i].getAttribute('data-slug');
  const path = `${outPrefix}-${i}-${slug}.png`;
  await page.screenshot({ path, fullPage: false });
  console.log(`shot ${path} — accent=${accent}`);
}

const mobile = await browser.newContext({
  viewport: { width: 390, height: 780 },
  deviceScaleFactor: 2,
  hasTouch: true,
  isMobile: true,
});
const mpage = await mobile.newPage();
await mpage.goto(url, { waitUntil: 'networkidle' });
await mpage.waitForTimeout(500);
await mpage.screenshot({ path: `${outPrefix}-mobile.png`, fullPage: false });
console.log(`shot ${outPrefix}-mobile.png`);

await browser.close();

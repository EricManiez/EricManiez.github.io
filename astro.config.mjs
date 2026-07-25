import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// User site at https://EricManiez.github.io — base stays '/'.
// Bilingual: /en/ and /fr/. Root redirects to defaultLocale.
// Flip defaultLocale to 'fr' when French translations are complete.
export default defineConfig({
  site: 'https://EricManiez.github.io',
  integrations: [mdx(), sitemap({ i18n: { defaultLocale: 'en', locales: { en: 'en-US', fr: 'fr-FR' } } })],
  // Astro's built-in `fallback` config conflicts with our parallel
  // per-locale page structure. Each locale is authored explicitly under
  // src/pages/{en,fr}/ and src/content/*/{en,fr}/. Missing translations
  // simply 404 or are absent from list pages. If you want automatic
  // fallback later, remove the /fr/ page files and add
  // `fallback: { fr: 'en' }, routing.fallbackType: 'rewrite'`.
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: true,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});

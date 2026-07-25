# Portfolio

Personal site — developer, musician, teacher. Built with [Astro](https://astro.build/) + TypeScript + Tailwind, deployed to GitHub Pages.

## Develop

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # static output → dist/
npm run preview   # serve the built site locally
```

## Adding content

Content lives under `src/content/` and is validated by Zod schemas in `src/content.config.ts`.

- **Projects** — `src/content/projects/*.mdx`
  - Frontmatter: `title`, `summary`, `date`, `tags[]`, optional `cover`, `repo`, `url`, `featured`, `draft`.
  - `featured: true` surfaces the entry on the home page.
- **Music** — `src/content/music/*.mdx`
  - Frontmatter: `title`, `date`, `provider` (`bandcamp` | `soundcloud` | `spotify` | `youtube`), `embedUrl`, optional `summary`, `role`, `draft`.
  - `embedUrl` must be the provider's iframe/embed URL, not a page URL.

Standalone pages (`about`, `teaching`) live in `src/pages/`.

## Deploy (GitHub Pages)

1. Create a repo named **`<username>.github.io`** (user site — required for the root URL).
2. In `astro.config.mjs`, replace `username` in `site: 'https://username.github.io'` with your GitHub username.
3. Push to `main`. The workflow in `.github/workflows/deploy.yml` builds and publishes automatically.
4. In the repo's **Settings → Pages**, set **Source: GitHub Actions**.

## Notes

- The `Embed` component (`src/components/Embed.astro`) generates provider-appropriate iframes with lazy loading.
- Tailwind v4 is wired via `@tailwindcss/vite` (see `astro.config.mjs`) and consumed from `src/styles/global.css`.
- If `npm install` doesn't pull in the native Rolldown binding on macOS, install it explicitly: `npm install @rolldown/binding-darwin-arm64` (or `-x64` on Intel/Rosetta). This is a known npm optional-deps quirk.

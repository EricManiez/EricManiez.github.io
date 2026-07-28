# Site assets — images

Drop images here to attach them to sections and pages. Astro processes
everything in `src/assets/` — auto-generated responsive sizes, lazy loading,
modern formats.

## Folder layout

```
src/assets/
  home/          ← hero portrait, home decorative bits
  music/         ← per-project covers (Emma, LTB, G&C, Others)
  engineering/   ← per-role covers (Weezevent, ITSF, MuseScore, Home lab)
  sports/        ← per-sport covers (Ultimate, Basketball, Biking)
  oddities/      ← per-piece covers (Sports commentary, Deep Convos, etc.)
  teaching/      ← per-pillar covers (Autonomy, Adaptability, Sérieux-joyeux)
```

## Attaching a cover to a section panel

Each content collection (music, engineering, sports, oddities, teaching) has
optional `cover` and `coverAlt` frontmatter fields. Reference the image with
a **path relative to the MDX file**:

```yaml
---
title: Emma Castellino
# … other frontmatter …
cover: ../../../assets/music/emma-castellino.jpg
coverAlt: Emma Castellino on stage, backlit, holding a strat.
---
```

- If `coverAlt` is omitted, the panel's title is used as alt text — passable
  but not great for accessibility. Prefer writing real alt text.
- Covers render at the top of the active panel, capped at 42rem wide, 16:9
  aspect. Object-fit is `cover`, centered.
- The small accent bar above the meta line auto-hides when a cover is present.

## Image guidelines

- **Aspect**: shoot/crop for 16:9 — the panel-cover box will crop to that.
- **Long edge**: 2000 px is plenty; Astro downscales for responsive sizes.
- **Format**: JPG for photos, PNG for graphics with hard edges, SVG for
  vector. Avif/WebP fallbacks are handled automatically by the Image
  component — no need to pre-convert.
- **Rights**: for press photos or third-party images, keep a note of the
  source and permission in the entry's MDX comments.

## Home hero portrait

Drop the portrait at `src/assets/home/portrait.jpg` (or `.png`) — the home
page will be updated separately to render it once a file lands.

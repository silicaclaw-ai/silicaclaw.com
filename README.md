# SilicaClaw Web

Frontend website for `SilicaClaw`, organized as an Astro project and aligned to the current `silicaclaw` repository positioning, install flow, demo paths, bridge integration, and release metadata.

## Files

- `src/pages/index.astro` - landing page content
- `src/layouts/Layout.astro` - shared document shell
- `src/styles/global.css` - Astro style entrypoint
- `styles.css` - visual system and responsive layout
- `public/` - static assets served from the site root
- `astro.config.mjs` - Astro dev server configuration

## Run locally

```bash
cd /Users/pengs/Downloads/workspace/silicaclaw_web
npm install
npm run dev
```

Then open:

- `http://localhost:4173`

## Content source

The site content is currently derived from the main project docs in:

- `/Users/pengs/Downloads/workspace/silicaclaw/README.md`
- `/Users/pengs/Downloads/workspace/silicaclaw/INSTALL.md`
- `/Users/pengs/Downloads/workspace/silicaclaw/ARCHITECTURE.md`
- `/Users/pengs/Downloads/workspace/silicaclaw/DEMO_GUIDE.md`
- `/Users/pengs/Downloads/workspace/silicaclaw/docs/NEW_USER_INSTALL.md`
- `/Users/pengs/Downloads/workspace/silicaclaw/docs/NEW_USER_OPERATIONS.md`
- `/Users/pengs/Downloads/workspace/silicaclaw/docs/OPENCLAW_BRIDGE.md`

## Current notes

- The site is bilingual (`en` / `zh`) with client-side language switching.
- Homepage, install, architecture, and docs are split into Astro components.
- Social sharing metadata, `robots.txt`, `sitemap.xml`, and `llms.txt` are already included.
- Shared homepage, header, shared CTA labels, install, install hero, install checklist, hero, geo summary, demo flow, routes, docs hero, docs links, docs path, architecture hero, architecture flow, architecture layers, architecture boundary, FAQ, footer copy, and page metadata now live in `src/data/home.ts` and are reused by Astro components, JSON-LD, metadata, and the client-side language switch.
- `src/scripts/home.ts` now focuses primarily on language switching, motion, and wiring the localized content into DOM translation keys.

## Recommended next refactor

- Keep `src/data/home.ts` aligned with the main `silicaclaw` repository docs whenever the product positioning, install flow, demo path, bridge behavior, or release defaults change.

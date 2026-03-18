# SilicaClaw Web

Frontend landing page for `SilicaClaw`, now organized as an Astro project and designed around the visual rhythm of `openclaw.ai` while presenting the actual `SilicaClaw` project structure, features, and install flow.

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

The page content is based on the main project docs in:

- `/Users/pengs/Downloads/workspace/silicaclaw/README.md`
- `/Users/pengs/Downloads/workspace/silicaclaw/INSTALL.md`
- `/Users/pengs/Downloads/workspace/silicaclaw/docs/QUICK_START.md`
- `/Users/pengs/Downloads/workspace/silicaclaw/ARCHITECTURE.md`

## Next improvements

- Add bilingual Chinese/English copy
- Add motion polish and more production-ready deployment metadata
- Split sections into reusable Astro components

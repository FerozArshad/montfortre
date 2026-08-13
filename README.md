# Montfort Real Estate — GHL AI Studio App

React 18 + Vite + TypeScript SPA for [montfortre.com](https://montfortre.com/), deployed via GHL AI Studio.

## Quick start

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs dist/
npm run typecheck
npm run lint
npm run test
```

## Project structure

```
src/
├── App.tsx              # Router shell (GHL standard entry)
├── main.tsx             # Vite bootstrap
├── pages/               # One component per route
├── components/          # Seo, MobileHeader, HarlemSchools, NavLink
├── hooks/               # useStyleHover, useCarousels, useTouchDropdowns
├── layouts/             # SiteLayout (optional shared shell)
├── lib/                 # Shared utilities (cn)
├── data/                # Static JSON
└── test/                # Vitest setup

public/
├── redesign-assets/     # Design images
├── instagram/           # Instagram grid
├── robots.txt
└── sitemap.xml
```

## Agent documentation

| File | Purpose |
|---|---|
| `AGENTS.md` | Short agent contract |
| `AGENT-ONBOARDING.md` | Start here |
| `PROJECT-CONTEXT.md` | Session continuity |
| `GHL-TRANSFER-TRACKING.md` | What GHL was sent vs fetched |
| `HANDOFF.md` | Launch blockers and constraints |
| `TRANSFER-GUIDE.md` | Copy files into GHL AI Studio |
| `GHL-PASTE-TO-STUDIO.md` / `GHL-FULL-FETCH.md` | Raw URLs for Studio |
| `ROUTES.tsx.snippet` | Route reference (mirrors `App.tsx`) |

## Routes

12 migrated pages + `NotMigrated` catch-all. See `src/App.tsx` for the canonical route list.

## Constraints

- SEO constants (`TITLE`, `METAS`, `LINKS`, `JSON_LD`) are frozen per page
- Desktop layout at ≥1440px must stay pixel-identical
- Do not serve HTTrack/scraped HTML — reference material lives outside this repo

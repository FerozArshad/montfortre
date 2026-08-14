# Montfort Real Estate — GHL AI Studio App

React 18 + Vite + TypeScript SPA for [montfortre.com](https://montfortre.com/), deployed via GHL AI Studio.

**Agents:** read **`DOCUMENTATION.md`** first (file tree, how to write TSX/CSS, pages done/left, SEO, branding, GHL).

## Quick start

```bash
npm install
npm run dev      # Vite; port may be 5173+
npm run build    # outputs dist/
npm run typecheck
npm run lint
npm run test
```

## Project structure

```
src/
├── App.tsx              # MobileHeader + 12 routes + NotMigrated
├── pages/               # Thin PageShell wrappers
├── components/          # *Content.tsx, layout, Seo, MobileHeader
├── layouts/PageShell.tsx
├── seo/pages/           # Frozen per-page head tags
├── styles/              # 31 CSS files (desktop + mobile)
├── hooks/
├── lib/siteOrigin.ts
└── data/harlemSchools.json

public/
├── redesign-assets/     # Logo, listings, OG, favicons
├── instagram/
├── robots.txt
└── sitemap.xml          # 12 migrated URLs
```

## Agent documentation

| File | Purpose |
|---|---|
| `DOCUMENTATION.md` | Source of truth |
| `BRANCHES.md` | Clone `main` only; do not push `reference/` |
| `AGENTS.md` | Short agent contract |
| `AGENT-ONBOARDING.md` | Onboarding |
| `PROJECT-CONTEXT.md` | Session notes |
| `GHL-PASTE-TO-STUDIO.md` | Current GHL fetch URLs |
| `GHL-TRANSFER-TRACKING.md` | Sent vs fetched |
| `HANDOFF.md` | Platform launch blockers |
| `TRANSFER-GUIDE.md` | Copy path tables |

## Routes

12 migrated pages + `NotMigrated` catch-all. Canonical list: `src/App.tsx` and `public/sitemap.xml`.

## Constraints

- SEO constants in `src/seo/pages/*.ts` are frozen
- Desktop ≥1440px pixel-identical
- Copy lives in content TSX; branding in `public/redesign-assets/`
- Do not serve HTTrack/scraped HTML — `d:\montfortre\reference\` is outside this repo

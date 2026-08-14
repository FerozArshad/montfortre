# Agent onboarding — Montfort Real Estate (`montfortre`)

**Read `DOCUMENTATION.md` first** — current file tree, page triad, live vs SPA sitemap, robots, IDX verdict, GHL, branding. Per-page SEO vs live: `seo-audit/`. Open tasks: `TODO.md`.

Then this file, `PROJECT-CONTEXT.md`, and `HANDOFF.md` (platform launch blockers). Short contract: `AGENTS.md`. Cursor rule: `.cursor/rules/montfortre.mdc`.

## Repository ↔ local workspace

| Location | Role |
|---|---|
| **Git remote** | https://github.com/FerozArshad/montfortre |
| **Git repo root (local)** | `d:\montfortre\ghl-react` |
| **Parent workspace** | `d:\montfortre` — `reference/` is HTTrack / design exports. **Not** in git |
| **Page content** | `src/components/<area>/*Content.tsx` (not `src/pages/`) |
| **Branding / images** | `public/redesign-assets/` — no AgentFire CDN |
| **SEO per page** | `src/seo/pages/*.ts` — see `DOCUMENTATION.md` §1 and §3 |

## What this project is

Approved redesign of https://montfortre.com/. **React 18 + Vite 5 + TypeScript SPA** for GHL AI Studio. Desktop ≥1440px pixel-faithful; mobile/tablet in the same CSS files under `@media (max-width: …)`.

**Preview:** https://montfortre-live.vibepreview.com/ · **Production:** https://montfortre.com/

## Quick start

```bash
cd d:\montfortre\ghl-react
npm install
npm run dev           # Vite; port may be 5173+
npm run typecheck
npm run test
npm run build
```

Internal `<a href>` uses trailing slashes (`/services/`). React Router `path` omits the trailing slash.

## Architecture (summary)

Each migrated page:

1. `src/pages/<Page>.tsx` — thin `PageShell` wrapper
2. `src/components/<folder>/<Content>.tsx` — markup and copy
3. `src/styles/<file>.css` — desktop + mobile
4. `src/seo/pages/<seo>.ts` — frozen `TITLE` / `METAS` / `LINKS` / `JSON_LD`

`PageShell` = `Seo` + `DesktopHeader` + children + `SiteFooter`. IDX uses `showFooter={false}` and `showDesktopHeader={false}`; `IdxSearchLayout` owns the chrome + iframe.

`App.tsx`: `<MobileHeader />` **once** above `<Routes>`. **12 migrated routes + `*` NotMigrated** (13 `Route` entries). Do not invent neighborhood/service/blog-article routes.

`src/layouts/SiteLayout.tsx` is unused leftover — do not wire it (MobileHeader would duplicate).

Full directory, CSS list, and done-vs-left table: **`DOCUMENTATION.md`**.

## Hard constraints

1. **SEO frozen** — do not edit values in `src/seo/pages/*.ts`. Origin rewrite at inject time is `src/lib/siteOrigin.ts` + `Seo.tsx`.
2. **Content frozen** — copy, phone `(646) 970-1078`, link targets. Do not rewrite email, Calendly, IDX, or social `sameAs`.
3. **H1 count** — most pages 1; Two Family has **2** (keep both).
4. Hover: CSS `:hover`. Do not require `style-hover` attributes.
5. Desktop ≥1440px pixel-identical. Do not put `overflow-x: hidden` on `.site-page`.
6. Google review badges overlap the photo (bottom-right), not a bar under it.
7. Neighborhood nav labels: `{Neighborhood} Realtor`.

## How to check SEO for one page

Open the matching `src/seo/pages/*.ts` (table in `DOCUMENTATION.md` §3), confirm `src/pages/<Page>.tsx` passes that `*_SEO` into `PageShell`, then inspect `<title>`, description, canonical, JSON-LD in the browser. Non-production hosts get `noindex,nofollow`. Compare copy/H1 to live https://montfortre.com/, not to old CDN image URLs.

Sitemap of migrated URLs: `public/sitemap.xml`.

## GHL

Studio cannot clone. Paste `GHL-PASTE-TO-STUDIO.md` (current fetch URLs). Images: `GHL-URLS.md`. Track: `GHL-TRANSFER-TRACKING.md`. Platform blockers: `GHL-LAUNCH-CHECKLIST.md`.

## Docs

See `DOCUMENTATION.md` §6 for the remaining markdown files. How to write pages/CSS: `DOCUMENTATION.md` §2b.

## Verification after edits

- [ ] Routes load; MobileHeader + neighborhood submenus work
- [ ] No horizontal overflow at 375px; desktop unchanged at 1440px
- [ ] SEO head tags unchanged vs `src/seo/pages/*.ts`
- [ ] Images resolve from `/redesign-assets/` and `/instagram/` (no AgentFire)

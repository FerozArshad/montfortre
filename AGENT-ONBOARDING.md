# Agent onboarding — Montfort Real Estate (`montfortre`)

This document is the entry point for AI agents and developers working on the site.
Read this first, then `PROJECT-CONTEXT.md` and `HANDOFF.md`.

Also read `AGENTS.md` (short) and `.cursor/rules/montfortre.mdc` (always-on Cursor rule).

## Repository ↔ local workspace

| Location | Role |
|---|---|
| **Git remote** | https://github.com/FerozArshad/montfortre |
| **Git repo root (local)** | `d:\montfortre\ghl-react` — everything in this folder ships to GitHub |
| **Parent workspace** | `d:\montfortre` — `reference/` holds HTTrack mirrors, GHL exports, CDN captures, design exports. **Not** in this git repo |
| **Session continuity** | `PROJECT-CONTEXT.md` in this folder |

The GitHub repo root matches `montfortre/` (not the parent `Montfortr` folder). Deployable app files live at repo root: `package.json`, `src/`, `public/`, etc.

## What this project is

Approved redesign of https://montfortre.com/ (NYC realtor Stanley Montfort). Built as a **React 18 + Vite + TypeScript SPA** for GHL AI Studio deployment. Desktop layout is pixel-faithful to design exports; mobile responsiveness is added via shared CSS and per-page media queries.

**Preview target:** https://montfortre-live.vibepreview.com/

## Quick start

```bash
cd montfortre          # or repo root after clone
npm install           # only if node_modules missing
npm run dev           # http://localhost:5173
npm run build         # outputs dist/ (production bundle)
```

Routes use trailing-slash-style paths in markup (`/services/`) but React Router paths omit the trailing slash (`/services`).

## Architecture (read before editing)

### Page components (`src/pages/*.tsx`)

**Converted pages** (Phase 3 — real TSX, no `dangerouslySetInnerHTML`):

```tsx
import PageContent from "../components/example/ExampleContent";
import PageShell from "../layouts/PageShell";
import { EXAMPLE_SEO } from "../seo/pages/example";

export default function Example() {
  return (
    <PageShell seo={EXAMPLE_SEO} pageClassName="example-page">
      <PageContent />
    </PageShell>
  );
}
```

- SEO lives in `src/seo/pages/<route>.ts` (frozen constants)
- `PageShell` renders `Seo` + `DesktopHeader` + children + `SiteFooter`
- Shared sections: `ResourcesSection`, `ContactSection` in `src/components/shared/`
- See `GHL-STUDIO-STRUCTURE.md` for the full directory map

**IDX pages** (`IdxSales`, `IdxRentals`) use `PageShell` with `showFooter={false}` and `showDesktopHeader={false}`; `IdxSearchLayout` renders the desktop header and MLS iframe.

**Catch-all** `NotMigrated.tsx` is already TSX (noindex fallback for URLs not in this build).

There are **no remaining HTML-string pages**. Frozen SEO lives in `src/seo/pages/*.ts`. Harlem injects `<HarlemSchools />` from `HarlemContent`.

### Shared runtime (`src/App.tsx` + `src/main.tsx`)

- `main.tsx` bootstraps Vite and imports global CSS (`index.css`, `App.css`, `responsive.css`).
- `App.tsx` owns `BrowserRouter`, `<MobileHeader />`, and all `<Route>` definitions (GHL AI Studio standard).
- **14 routes** — see route table below.

### Shared components & hooks

| Path | Purpose |
|---|---|
| `src/components/Seo.tsx` | Injects exact per-page `<head>` SEO; strips platform defaults |
| `src/components/MobileHeader.tsx` | Mobile nav + neighborhood submenu labels (`{Name} Realtor`) |
| `src/components/layout/DesktopHeader.tsx` | Desktop nav (converted pages) |
| `src/components/layout/SiteFooter.tsx` | Site footer (converted pages) |
| `src/layouts/PageShell.tsx` | Seo + header + footer wrapper for converted pages |
| `src/components/HarlemSchools.tsx` | Filterable Harlem schools list (data from JSON) |
| `src/hooks/useStyleHover.ts` | Applies hover styles from `style-hover` attributes |
| `src/hooks/useTouchDropdowns.ts` | Touch-friendly desktop nav dropdowns |
| `src/hooks/useCarousels.ts` | Carousel behavior where used |
| `src/responsive.css` | Global mobile fixes (overflow, wrapper min-width overrides) |

### Static assets (`public/`)

| Path | Contents |
|---|---|
| `public/redesign-assets/**` | Design images (heroes, icons, Stanley bio headshot, etc.) |
| `public/instagram/**` | Instagram grid photos |
| `public/robots.txt`, `sitemap.xml` | SEO crawl files |

Brand, listing, OG, and favicon files live in `public/redesign-assets/` (no AgentFire CDN).

### Data & scripts

| Path | Purpose |
|---|---|
| `src/data/harlemSchools.json` | 104 Harlem schools (extracted from live site) |
| `scripts/extract-harlem-schools.mjs` | Regenerate schools JSON from source markup |
| `scripts/extract-page-seo.mjs` | Pull TITLE/METAS/LINKS/JSON_LD from a page into `src/seo/pages/` |
| `scripts/convert-html-pages.mjs` | One-off HTML-string → TSX converter (already run for Two Family + Brownstone) |
| `scripts/update-neighborhood-nav-labels.mjs` | Bulk-update `{Neighborhood} Realtor` nav labels |

## Routes (`src/App.tsx`)

| Route | Page file | Notes |
|---|---|---|
| `/` | `Home.tsx` | ✅ TSX via PageShell |
| `/services` | `Services.tsx` | ✅ TSX via PageShell |
| `/about-us` | `AboutUs.tsx` | ✅ TSX via PageShell |
| `/blog` | `Blog.tsx` | ✅ TSX via PageShell |
| `/harlem` | `Harlem.tsx` | ✅ TSX + HarlemSchools |
| `/stanley-montfort` | `StanleyMontfort.tsx` | ✅ TSX via PageShell |
| `/success-stories` | `SuccessStories.tsx` | ✅ TSX via PageShell |
| `/2-family-house-for-sale-nyc` | `TwoFamilyHouseForSaleNyc.tsx` | ✅ TSX via PageShell |
| `/advice-for-buyers-looking-to-purchase-brownstones` | `BrownstoneBuyingGuide.tsx` | ✅ TSX via PageShell |
| `/neighborhoods` | `Neighborhoods.tsx` | ✅ TSX via PageShell |
| `/idx-sales` | `IdxSales.tsx` | ✅ TSX via PageShell + IdxSearchLayout |
| `/idx-rentals` | `IdxRentals.tsx` | ✅ TSX via PageShell + IdxSearchLayout |
| `*` | `NotMigrated.tsx` | Fallback for unmigrated URLs |

Internal links in HTML use root-relative paths with trailing slashes (`/harlem/`).

## Hard constraints — do not break

1. **SEO is frozen** — never edit `TITLE`, `METAS`, `LINKS`, `JSON_LD` or canonical/og logic in `Seo.tsx`.
2. **Content is frozen** — copy, phone `(646) 970-1078`, link targets, image semantics.
3. **H1 count** per page must not change.
4. Keep `style-hover` attributes and `useStyleHover()`.
5. Do not rename routes/files without updating all internal links.
6. **Desktop layout at ≥1440px** must stay pixel-identical; responsive work only inside `max-width` media queries.
7. **Google review badge** on hero images: absolute overlap bottom-right of image (not full-width below).

## Responsive work pattern

1. Change outer wrapper `min-width:1440px` → fluid (`max-width:100%` + container).
2. Add `@media (max-width: 1024px | 768px | 480px)` in page `<style>` blocks.
3. Use `!important` when inline styles win over selectors.
4. Hide desktop header nav under 1024px; `MobileHeader` handles mobile.
5. Verify: 375px / 768px / 1440px — no horizontal scroll, nav works, images load.

Breakpoints used consistently: **1024**, **768**, **480**.

## Neighborhood nav labels

Header dropdowns, footer neighborhood column, and `MobileHeader` use **"{Neighborhood} Realtor"** (e.g. `Bedford Stuyvesant Realtor`, not `Bedford-Stuyvesant`). Park Slope is included in mobile menu.

## Documentation index

| File | When to read |
|---|---|
| `AGENTS.md` | One-page agent contract |
| `HANDOFF.md` | Master context, launch blockers, SEO audit items |
| `PROJECT-CONTEXT.md` | Session continuity (paths, conversion status, GHL transfer) |
| `GHL-TRANSFER-TRACKING.md` | What was sent to GHL vs fetched vs verified |
| `GHL-PASTE-TO-STUDIO.md` | Raw URLs: shared runtime + first six pages |
| `GHL-FULL-FETCH.md` | Raw URLs: remaining pages, styles, branding, all `public/` images |
| `HANDOFF-SECTION-neighborhoods-harlem-stanley.md` | Historical neighborhoods / Harlem schools / Stanley hero work |
| `HANDOFF-SECTION-seo-launch-readiness.md` | SEO validation and cutover checklist |
| `GHL-STUDIO-STRUCTURE.md` | GHL AI Studio directory standard + converted page pattern |
| `GHL-LAUNCH-CHECKLIST.md` | Platform blockers checklist for GHL deploy (Part A) |
| `RESPONSIVE-PROMPTS.md` | Prompt templates for responsive tasks |
| `TRANSFER-GUIDE.md` | Copying files into GHL AI Studio |
| `GHL-URLS.md` | Flat raw-URL manifest |
| `ROUTES.tsx.snippet` | Route lines for GHL `App.tsx` wiring |

## GHL deployment notes

GHL AI Studio **cannot git clone, unzip, or browse the repo**. Ingest is public raw URLs only.

1. Paste lists in `GHL-PASTE-TO-STUDIO.md` then `GHL-FULL-FETCH.md`.
2. Track Studio writes in `GHL-TRANSFER-TRACKING.md` (SENT vs FETCHED vs VERIFIED).
3. Platform must **not** inject its own canonical/meta — `Seo.tsx` owns the head.
4. `index.html` shell: charset + viewport + favicon only.
5. Verification prompt for later is at the bottom of `GHL-TRANSFER-TRACKING.md`.

## Git workflow

- Repo root is `ghl-react/` with `.gitignore` excluding `node_modules/`, `dist/`, `*.tsbuildinfo`, `reference/`.
- Branch: `main`
- Commit only when the owner asks. Push when they want GitHub updated.
- After GHL confirms fetches, update `GHL-TRANSFER-TRACKING.md` and commit.

## Verification checklist (after edits)

- [ ] All routes load without console errors
- [ ] Mobile header opens; neighborhood submenus expand
- [ ] No horizontal overflow at 375px
- [ ] Desktop unchanged at 1440px
- [ ] SEO head tags unchanged (compare to original montfortre.com)
- [ ] Images resolve (local `public/` + CDN URLs)

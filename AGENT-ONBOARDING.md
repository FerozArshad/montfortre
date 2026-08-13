# Agent onboarding — Montfort Real Estate (`montfortre`)

This document is the entry point for AI agents and developers working on the site.
Read this first, then `HANDOFF.md` for constraints and launch blockers.

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

**Legacy pages** (pending conversion) still use this pattern:

```tsx
const TITLE = "...";
const HTML = `<style>...</style><div>...</div>`;

export default function Home() {
  useStyleHover();
  return (
    <>
      <Seo title={TITLE} metas={METAS} links={LINKS} jsonLd={JSON_LD} />
      <div dangerouslySetInnerHTML={{ __html: HTML }} />
    </>
  );
}
```

- **SEO constants** at top of each page — frozen (see constraints below).
- **Layout** is inline styles inside the HTML string, not Tailwind/component CSS.
- **Per-page `<style>` blocks** inside `HTML` hold desktop rules and `@media` overrides.
- **`Harlem.tsx`** splits HTML at `<!--HARLEM_SCHOOLS-->` and injects `<HarlemSchools />` for the live school list.

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

Listing photos on many pages load from live CDN (`https://assets.agentfire3.com`).

### Data & scripts

| Path | Purpose |
|---|---|
| `src/data/harlemSchools.json` | 104 Harlem schools (extracted from live site) |
| `scripts/extract-harlem-schools.mjs` | Regenerate schools JSON from source markup |
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
| `/2-family-house-for-sale-nyc` | `TwoFamilyHouseForSaleNyc.tsx` | |
| `/advice-for-buyers-looking-to-purchase-brownstones` | `BrownstoneBuyingGuide.tsx` | |
| `/neighborhoods` | `Neighborhoods.tsx` | ✅ TSX via PageShell |
| `/idx-sales` | `IdxSales.tsx` | ✅ TSX via IdxSearchLayout |
| `/idx-rentals` | `IdxRentals.tsx` | ✅ TSX via IdxSearchLayout |
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
| `HANDOFF.md` | Master context, launch blockers, SEO audit items |
| `HANDOFF-SECTION-neighborhoods-harlem-stanley.md` | Recent neighborhoods / Harlem schools / Stanley hero work |
| `HANDOFF-SECTION-seo-launch-readiness.md` | SEO validation and cutover checklist |
| `GHL-STUDIO-STRUCTURE.md` | GHL AI Studio directory standard + converted page pattern |
| `GHL-LAUNCH-CHECKLIST.md` | Platform blockers checklist for GHL deploy (Part A) |
| `RESPONSIVE-PROMPTS.md` | Prompt templates for responsive tasks |
| `TRANSFER-GUIDE.md` | Copying files into GHL AI Studio |
| `GHL-URLS.md` | Raw URL manifest |
| `ROUTES.tsx.snippet` | Route lines for GHL `App.tsx` wiring |

## GHL deployment notes

- Copy page files + shared components/hooks/CSS into the GHL AI Studio project per `TRANSFER-GUIDE.md`.
- Platform must **not** inject its own canonical/meta — `Seo.tsx` owns the head.
- `index.html` shell should only have charset + viewport (or match homepage SEO).

## Git workflow

- Repo tracks **all project files** including `node_modules/` (no `.gitignore` exclusions).
- Branch: `main`
- After local changes: `git add -A`, commit, `git push origin main`

## Verification checklist (after edits)

- [ ] All routes load without console errors
- [ ] Mobile header opens; neighborhood submenus expand
- [ ] No horizontal overflow at 375px
- [ ] Desktop unchanged at 1440px
- [ ] SEO head tags unchanged (compare to original montfortre.com)
- [ ] Images resolve (local `public/` + CDN URLs)

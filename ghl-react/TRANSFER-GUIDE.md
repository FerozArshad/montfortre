# GHL AI Studio transfer guide

**Current architecture and complete CSS/SEO map:** `DOCUMENTATION.md`.  
**Current fetch URLs:** `GHL-PASTE-TO-STUDIO.md`.

Copy these files from this repo into the GHL AI Studio project. Paths are identical (`src/...` → `src/...`).

## 1. Entry + router (required)

| Local path | GHL path |
|---|---|
| `src/main.tsx` | `src/main.tsx` |
| `src/App.tsx` | `src/App.tsx` |
| `src/index.css` | `src/index.css` |
| `src/App.css` | `src/App.css` |
| `src/responsive.css` | `src/responsive.css` |
| `index.html` | `index.html` (minimal shell — charset, viewport, favicon only) |

`App.tsx` must render `<MobileHeader />` once above `<Routes>`. Canonical routes: `src/App.tsx`.

## 2. Shared runtime (required on every deploy)

| Path | Purpose |
|---|---|
| `src/components/Seo.tsx` | Per-page `<head>` SEO |
| `src/components/MobileHeader.tsx` | Mobile nav + touch dropdowns |
| `src/components/NavLink.tsx` | GHL nav helper |
| `src/components/HarlemSchools.tsx` | Harlem schools list |
| `src/components/layout/DesktopHeader.tsx` | Desktop nav (converted pages) |
| `src/components/layout/SiteFooter.tsx` | Site footer (converted pages) |
| `src/components/shared/ResourcesSection.tsx` | Blog teaser block |
| `src/components/shared/ContactSection.tsx` | Contact form + map |
| `src/components/idx/IdxSearchLayout.tsx` | IDX page template |
| `src/hooks/useStyleHover.ts` | Safety net (hover is CSS `:hover`) |
| `src/hooks/useTouchDropdowns.ts` | Touch nav dropdowns |
| `src/hooks/useCarousels.ts` | Carousel behavior |
| `src/hooks/useStickyHeader.ts` | Sticky header |
| `src/layouts/PageShell.tsx` | Converted-page wrapper |
| `src/lib/utils.ts` | `cn()` helper |
| `src/lib/siteOrigin.ts` | Production origin rewrite |
| `src/styles/*.css` | All 31 files — list in `DOCUMENTATION.md` §1 / `GHL-PASTE-TO-STUDIO.md` §0 |
| `src/seo/types.ts` | SEO TypeScript types |
| `src/data/harlemSchools.json` | Schools data |

## 3. SEO modules (frozen — do not edit values)

| Path | Route |
|---|---|
| `src/seo/pages/aboutUs.ts` | `/about-us/` |
| `src/seo/pages/stanleyMontfort.ts` | `/stanley-montfort/` |
| `src/seo/pages/successStories.ts` | `/success-stories/` |
| `src/seo/pages/idxSales.ts` | `/idx-sales/` |
| `src/seo/pages/idxRentals.ts` | `/idx-rentals/` |
| `src/seo/pages/home.ts` | `/` |
| `src/seo/pages/services.ts` | `/services/` |
| `src/seo/pages/blog.ts` | `/blog/` |
| `src/seo/pages/harlem.ts` | `/harlem/` |
| `src/seo/pages/neighborhoods.ts` | `/neighborhoods/` |
| `src/seo/pages/twoFamily.ts` | `/2-family-house-for-sale-nyc/` |
| `src/seo/pages/brownstoneGuide.ts` | `/advice-for-buyers-looking-to-purchase-brownstones/` |

## 4. Page components (all routes)

| Path | Route |
|---|---|
| `src/pages/Home.tsx` | `/` |
| `src/pages/Services.tsx` | `/services` |
| `src/pages/AboutUs.tsx` | `/about-us` |
| `src/pages/Blog.tsx` | `/blog` |
| `src/pages/Harlem.tsx` | `/harlem` |
| `src/pages/StanleyMontfort.tsx` | `/stanley-montfort` |
| `src/pages/SuccessStories.tsx` | `/success-stories` |
| `src/pages/TwoFamilyHouseForSaleNyc.tsx` | `/2-family-house-for-sale-nyc` |
| `src/pages/BrownstoneBuyingGuide.tsx` | `/advice-for-buyers-looking-to-purchase-brownstones` |
| `src/pages/Neighborhoods.tsx` | `/neighborhoods` |
| `src/pages/IdxSales.tsx` | `/idx-sales` |
| `src/pages/IdxRentals.tsx` | `/idx-rentals` |
| `src/pages/NotMigrated.tsx` | `*` catch-all |

## 5. Converted page content components

| Path | Used by |
|---|---|
| `src/components/about/AboutUsContent.tsx` | `AboutUs.tsx` |
| `src/components/stanley/StanleyMontfortContent.tsx` | `StanleyMontfort.tsx` |
| `src/components/success/SuccessStoriesContent.tsx` | `SuccessStories.tsx` |
| `src/components/services/ServicesContent.tsx` | `Services.tsx` |
| `src/components/blog/BlogContent.tsx` | `Blog.tsx` |
| `src/components/harlem/HarlemContent.tsx` | `Harlem.tsx` |
| `src/components/neighborhoods/NeighborhoodsContent.tsx` | `Neighborhoods.tsx` |
| `src/components/home/HomeContent.tsx` | `Home.tsx` |
| `src/components/two-family/TwoFamilyContent.tsx` | `TwoFamilyHouseForSaleNyc.tsx` |
| `src/components/brownstone/BrownstoneGuideContent.tsx` | `BrownstoneBuyingGuide.tsx` |

## 6. Public assets

| Path | Notes |
|---|---|
| `public/redesign-assets/**` | Design images |
| `public/instagram/**` | Instagram grid |
| `public/robots.txt` | Serve at web root |
| `public/sitemap.xml` | Serve at web root |
| `public/favicon.svg` | Favicon |

## 7. Platform rules

- **Do not** let GHL inject its own title, description, or canonical — `Seo.tsx` owns the head.
- **Do** enable prerendering/SSR so crawlers see per-route SEO (see `GHL-LAUNCH-CHECKLIST.md`).
- Internal links use trailing slashes (`/harlem/`).
- Listing photos, logo, and favicons load from `/redesign-assets/` in this repo.

## Quick sync

1. Paste `GHL-PASTE-TO-STUDIO.md` into GHL. Images: `GHL-URLS.md`.
2. Mark FETCHED/VERIFIED in `GHL-TRANSFER-TRACKING.md` after Studio confirms.
3. Flat URL dump: `GHL-URLS.md`  
4. Directory reference: `GHL-STUDIO-STRUCTURE.md`

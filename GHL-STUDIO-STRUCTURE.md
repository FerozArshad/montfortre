# GHL AI Studio — project structure

**Canonical map:** `DOCUMENTATION.md`. This file is the Studio directory checklist. Keep it aligned with the repo.

## Target `src/` tree

```
src/
├── App.tsx                 # MobileHeader once, then 12 routes + NotMigrated
├── main.tsx
├── App.css
├── index.css
├── responsive.css
├── vite-env.d.ts
│
├── pages/                  # Thin PageShell wrappers
│   ├── Home.tsx
│   ├── Services.tsx
│   ├── AboutUs.tsx
│   ├── Blog.tsx
│   ├── Harlem.tsx
│   ├── StanleyMontfort.tsx
│   ├── SuccessStories.tsx
│   ├── TwoFamilyHouseForSaleNyc.tsx
│   ├── BrownstoneBuyingGuide.tsx
│   ├── Neighborhoods.tsx
│   ├── IdxSales.tsx
│   ├── IdxRentals.tsx
│   └── NotMigrated.tsx
│
├── layouts/
│   ├── PageShell.tsx       # Seo + DesktopHeader + children + footer
│   └── SiteLayout.tsx      # unused leftover — do not wire
│
├── components/
│   ├── Seo.tsx
│   ├── MobileHeader.tsx
│   ├── NavLink.tsx
│   ├── HarlemSchools.tsx
│   ├── layout/DesktopHeader.tsx
│   ├── layout/SiteFooter.tsx
│   ├── idx/IdxSearchLayout.tsx
│   ├── home/HomeContent.tsx
│   ├── services/ServicesContent.tsx
│   ├── about/AboutUsContent.tsx
│   ├── blog/BlogContent.tsx
│   ├── harlem/HarlemContent.tsx
│   ├── stanley/StanleyMontfortContent.tsx
│   ├── success/SuccessStoriesContent.tsx
│   ├── two-family/TwoFamilyContent.tsx
│   ├── brownstone/BrownstoneGuideContent.tsx
│   ├── neighborhoods/NeighborhoodsContent.tsx
│   └── shared/ResourcesSection.tsx + ContactSection.tsx
│
├── seo/
│   ├── types.ts
│   └── pages/              # Frozen TITLE / METAS / LINKS / JSON_LD
│       ├── home.ts
│       ├── services.ts
│       ├── aboutUs.ts
│       ├── blog.ts
│       ├── harlem.ts
│       ├── stanleyMontfort.ts
│       ├── successStories.ts
│       ├── twoFamily.ts
│       ├── brownstoneGuide.ts
│       ├── neighborhoods.ts
│       ├── idxSales.ts
│       └── idxRentals.ts
│
├── styles/                 # 31 CSS files — see DOCUMENTATION.md §1
│   ├── page-shell.css, mobile-layout.css, desktop-nav.css,
│   ├── mobile-header.css, site-footer.css,
│   ├── resources-section.css, contact-section.css,
│   ├── home-*.css (13 section files),
│   ├── services-page.css, blog-page.css, stanley-page.css,
│   ├── success-page.css, brownstone-guide.css,
│   ├── neighborhoods-page.css, about-page.css, harlem-page.css,
│   ├── two-family-page.css, idx-page.css, not-migrated.css
│
├── hooks/
│   ├── useStyleHover.ts    # safety net; hover is CSS :hover
│   ├── useTouchDropdowns.ts
│   ├── useCarousels.ts
│   └── useStickyHeader.ts
│
├── lib/
│   ├── utils.ts
│   └── siteOrigin.ts
│
├── data/
│   └── harlemSchools.json
│
└── test/
    ├── setup.ts
    └── App.test.tsx
```

## Converted page pattern

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

**IDX:** `PageShell` with `showFooter={false}` and `showDesktopHeader={false}` plus `IdxSearchLayout`.

`NotMigrated.tsx` is the noindex fallback. Do not invent extra routes.

## GHL wiring checklist

1. `main.tsx` → `index.css`, `App.css`, `responsive.css`, `<App />`
2. `App.tsx` → `<MobileHeader />` once above `<Routes>`
3. Each route → `src/pages/<Name>.tsx` + content TSX + CSS + SEO module
4. `public/robots.txt` + `public/sitemap.xml` at web root
5. `index.html` → charset + viewport + favicon only
6. Platform must **not** inject canonical/meta — `Seo.tsx` owns the head

Fetch URLs: `GHL-PASTE-TO-STUDIO.md`. Tracking: `GHL-TRANSFER-TRACKING.md`. Launch: `GHL-LAUNCH-CHECKLIST.md`.

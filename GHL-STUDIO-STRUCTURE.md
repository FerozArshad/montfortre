# GHL AI Studio — project structure

This repo follows the **GHL AI Studio / Vibe** scaffold. Use this as the canonical directory map when syncing to the platform or onboarding agents.

## Target `src/` tree

```
src/
├── App.tsx                 # BrowserRouter + MobileHeader + Routes (GHL standard)
├── main.tsx                # createRoot + global CSS imports only
├── App.css
├── index.css
├── responsive.css          # Global mobile overflow fixes
├── vite-env.d.ts
│
├── pages/                  # One default export per route (13 files)
│   ├── Home.tsx            # ✅ converted TSX
│   ├── AboutUs.tsx         # ✅ converted TSX
│   ├── StanleyMontfort.tsx # ✅ converted TSX
│   ├── SuccessStories.tsx  # ✅ converted TSX
│   ├── Services.tsx        # ✅ converted TSX
│   ├── Blog.tsx            # ✅ converted TSX
│   ├── Harlem.tsx          # ✅ converted TSX + HarlemSchools
│   ├── Neighborhoods.tsx   # ✅ converted TSX
│   ├── IdxSales.tsx        # ✅ converted TSX
│   ├── IdxRentals.tsx      # ✅ converted TSX
│   └── TwoFamily + Brownstone still HTML-string pending
│
├── layouts/
│   ├── SiteLayout.tsx      # Optional Outlet shell (MobileHeader only)
│   └── PageShell.tsx       # Converted-page shell: Seo + DesktopHeader + footer
│
├── components/
│   ├── Seo.tsx             # Per-page <head> injection (required)
│   ├── MobileHeader.tsx    # Mobile nav (<1024px), rendered once in App.tsx
│   ├── NavLink.tsx         # GHL nav helper
│   ├── HarlemSchools.tsx
│   ├── layout/
│   │   ├── DesktopHeader.tsx
│   │   └── SiteFooter.tsx
│   ├── idx/
│   │   └── IdxSearchLayout.tsx
│   ├── about/
│   │   └── AboutUsContent.tsx
│   ├── stanley/
│   │   └── StanleyMontfortContent.tsx
│   ├── success/
│   │   └── SuccessStoriesContent.tsx
│   ├── shared/
│   │   ├── ResourcesSection.tsx
│   │   └── ContactSection.tsx
│   └── ui/                 # shadcn placeholder
│
├── seo/
│   ├── types.ts
│   └── pages/              # Frozen TITLE / METAS / LINKS / JSON_LD per route
│       ├── aboutUs.ts
│       ├── stanleyMontfort.ts
│       ├── successStories.ts
│       ├── idxSales.ts
│       └── idxRentals.ts
│
├── styles/
│   ├── page-shell.css      # Shared responsive rules for converted pages
│   ├── desktop-nav.css
│   └── idx-page.css
│
├── hooks/
│   ├── useStyleHover.ts
│   ├── useTouchDropdowns.ts
│   └── useCarousels.ts
│
├── lib/
│   └── utils.ts            # cn() helper
│
├── data/
│   └── harlemSchools.json
│
└── test/
    ├── setup.ts
    └── App.test.tsx
```

## Converted page pattern (Phase 3)

```tsx
// src/pages/Example.tsx
import ExampleContent from "../components/example/ExampleContent";
import PageShell from "../layouts/PageShell";
import { EXAMPLE_SEO } from "../seo/pages/example";

export default function Example() {
  return (
    <PageShell seo={EXAMPLE_SEO} pageClassName="example-page">
      <ExampleContent />
    </PageShell>
  );
}
```

**IDX pages** use `IdxSearchLayout` directly (no `SiteFooter`; own hero + iframe).

**Legacy pages** still use `dangerouslySetInnerHTML` until converted — they embed their own header/footer HTML.

## GHL wiring checklist

1. `main.tsx` → imports `index.css`, `App.css`, `responsive.css`, renders `<App />`
2. `App.tsx` → `<MobileHeader />` once above `<Routes>`
3. Each route → `src/pages/<Name>.tsx`
4. `public/robots.txt` + `public/sitemap.xml` at web root on deploy
5. `index.html` shell → charset + viewport + favicon only (no title/description)
6. Platform must **not** inject canonical/meta — `Seo.tsx` owns the head

## Scripts (package.json)

| Script | Purpose |
|---|---|
| `npm run dev` | Local dev server |
| `npm run build` | Production bundle → `dist/` |
| `npm run typecheck` | `tsc -b --noEmit` |
| `npm run lint` | ESLint |
| `npm run test` | Vitest |

See `TRANSFER-GUIDE.md` for the full file copy list and `GHL-LAUNCH-CHECKLIST.md` for platform blockers.

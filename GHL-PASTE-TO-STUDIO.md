# Paste this message to GHL AI Studio

Fetch each URL and **write the file to the same path after `/main/`**. Do not invent pages. Do not edit SEO values. Do not wrap content in `dangerouslySetInnerHTML`.

Each migrated page is three files: `src/pages/<Page>.tsx` (thin shell) + `src/components/<folder>/<Content>.tsx` (real TSX) + `src/seo/pages/<seo>.ts` (frozen head tags).

`App.tsx` must render `<MobileHeader />` once above `<Routes>`.

---

## 0. Shared runtime (fetch these first)

https://raw.githubusercontent.com/FerozArshad/montfortre/main/index.html
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/main.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/App.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/index.css
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/App.css
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/responsive.css
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/layouts/PageShell.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/seo/types.ts
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/components/Seo.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/components/MobileHeader.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/components/NavLink.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/components/layout/DesktopHeader.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/components/layout/SiteFooter.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/components/shared/ResourcesSection.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/components/shared/ContactSection.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/hooks/useStyleHover.ts
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/hooks/useTouchDropdowns.ts
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/hooks/useCarousels.ts
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/lib/utils.ts
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/styles/page-shell.css
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/styles/desktop-nav.css
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/styles/idx-page.css
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/favicon.svg

---

## 1. Services

https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/pages/Services.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/components/services/ServicesContent.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/seo/pages/services.ts

## 2. Blog

https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/pages/Blog.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/components/blog/BlogContent.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/seo/pages/blog.ts

## 3. StanleyMontfort

https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/pages/StanleyMontfort.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/components/stanley/StanleyMontfortContent.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/seo/pages/stanleyMontfort.ts

## 4. SuccessStories

https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/pages/SuccessStories.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/components/success/SuccessStoriesContent.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/seo/pages/successStories.ts

## 5. BrownstoneBuyingGuide

https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/pages/BrownstoneBuyingGuide.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/components/brownstone/BrownstoneGuideContent.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/seo/pages/brownstoneGuide.ts

## 6. Neighborhoods

https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/pages/Neighborhoods.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/components/neighborhoods/NeighborhoodsContent.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/seo/pages/neighborhoods.ts

---

## 7. Remaining migrated pages (full site)

https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/pages/Home.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/components/home/HomeContent.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/seo/pages/home.ts

https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/pages/AboutUs.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/components/about/AboutUsContent.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/seo/pages/aboutUs.ts

https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/pages/Harlem.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/components/harlem/HarlemContent.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/seo/pages/harlem.ts
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/components/HarlemSchools.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/data/harlemSchools.json

https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/pages/TwoFamilyHouseForSaleNyc.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/components/two-family/TwoFamilyContent.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/seo/pages/twoFamily.ts

https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/pages/IdxSales.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/pages/IdxRentals.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/components/idx/IdxSearchLayout.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/seo/pages/idxSales.ts
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/seo/pages/idxRentals.ts

https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/pages/NotMigrated.tsx

---

## Images

Public images are listed in:

https://raw.githubusercontent.com/FerozArshad/montfortre/main/GHL-URLS.md

Fetch every `public/` URL in that file to the same path. Logo/branding also uses CDN URLs already inside the TSX (AgentFire). REBNY badge: `/redesign-assets/rebny.webp`.

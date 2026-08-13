# Full GHL fetch — directories, routes, branding, styles, remaining pages

Paste this to GHL AI Studio after the first six pages (or in one go if paste limit allows).

**Rule:** Fetch each URL. Write to the **same path after `/main/`**. Do not invent files. Do not edit SEO. Logo/nav branding is already inside `DesktopHeader.tsx` / `SiteFooter.tsx` (CDN + `/redesign-assets/rebny.webp`).

`src/App.tsx` is the router. After fetch it must contain exactly these routes (no extra, no missing):

```
/                                              Home
/services                                      Services
/about-us                                      AboutUs
/blog                                          Blog
/harlem                                        Harlem
/stanley-montfort                              StanleyMontfort
/success-stories                               SuccessStories
/2-family-house-for-sale-nyc                   TwoFamilyHouseForSaleNyc
/advice-for-buyers-looking-to-purchase-brownstones   BrownstoneBuyingGuide
/neighborhoods                                 Neighborhoods
/idx-sales                                     IdxSales
/idx-rentals                                   IdxRentals
*                                              NotMigrated
```

`<MobileHeader />` once above `<Routes>`. Internal links in TSX use trailing slashes (`/harlem/`); React Router paths omit the trailing slash.

## Directories to create (then write files into them)

```
src/pages/
src/layouts/
src/seo/pages/
src/components/layout/
src/components/shared/
src/components/idx/
src/components/home/
src/components/about/
src/components/services/
src/components/blog/
src/components/harlem/
src/components/stanley/
src/components/success/
src/components/neighborhoods/
src/components/two-family/
src/components/brownstone/
src/hooks/
src/styles/
src/lib/
src/data/
public/redesign-assets/hoods/
public/redesign-assets/services/
public/redesign-assets/slots/
public/redesign-assets/blog/
public/redesign-assets/expect/
public/redesign-assets/plan/
public/redesign-assets/nbhd/
public/instagram/
```

## Branding (do not recreate)

- Header/footer **logo** is a CSS mask from CDN (already in DesktopHeader / SiteFooter):
  `https://assets.agentfire3.com/uploads/sites/312/2026/07/Logo-Transparency-black.png`
- Colors: navy `#113B5F`, gold `#C98A2C`, cream `#F9F6E6`, ink `#0F1729`
- Fonts: Space Grotesk + DM Sans (loaded via frozen SEO `LINKS` in each `src/seo/pages/*.ts`)
- Favicon: `public/favicon.svg` and `public/redesign-assets/favicon.png`
- REBNY badge: `public/redesign-assets/rebny.webp`

## Styles (required)

https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/index.css
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/App.css
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/responsive.css
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/styles/page-shell.css
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/styles/desktop-nav.css
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/styles/idx-page.css
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/styles/about-page.css

`main.tsx` must import `index.css`, `App.css`, `responsive.css`. `PageShell.tsx` imports `page-shell.css`. `DesktopHeader.tsx` imports `desktop-nav.css`.

## Remaining pages (Home, About, Harlem, Two Family, IDX, catch-all)

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
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/layouts/SiteLayout.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/vite-env.d.ts

## Site chrome already fetched in batch 0 (do not skip if missing)

https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/App.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/main.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/index.html
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/layouts/PageShell.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/components/layout/DesktopHeader.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/components/layout/SiteFooter.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/components/MobileHeader.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/components/Seo.tsx

## Branding + public assets (fetch every URL)

https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/favicon.svg
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/placeholder.svg
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/og-home.jpg
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/og-home.webp
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/robots.txt
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/sitemap.xml
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/redesign-assets/favicon.png
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/redesign-assets/rebny.png
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/redesign-assets/rebny.webp
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/redesign-assets/stanley-montfort-bio.jpg
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/redesign-assets/stanley-montfort-bio.webp
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/redesign-assets/stanley-portrait.png
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/redesign-assets/stanley-portrait.webp
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/redesign-assets/hidden-cost.png
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/redesign-assets/hidden-cost.webp

https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/instagram/ig-1.jpg
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/instagram/ig-1.webp
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/instagram/ig-2.jpg
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/instagram/ig-2.webp
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/instagram/ig-3.jpg
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/instagram/ig-3.webp
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/instagram/ig-4.jpg
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/instagram/ig-4.webp
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/instagram/ig-5.jpg
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/instagram/ig-5.webp
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/instagram/ig-6.jpg
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/instagram/ig-6.webp
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/instagram/ig-7.jpg
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/instagram/ig-7.webp
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/instagram/ig-8.jpg
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/instagram/ig-8.webp

https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/redesign-assets/blog/brownstone-buying-guide.png
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/redesign-assets/blog/brownstone-buying-guide.webp
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/redesign-assets/expect/offmarket.png
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/redesign-assets/expect/offmarket.webp
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/redesign-assets/expect/team.png
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/redesign-assets/expect/team.webp
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/redesign-assets/expect/troublesome.png
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/redesign-assets/expect/troublesome.webp
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/redesign-assets/plan/step1.png
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/redesign-assets/plan/step1.webp
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/redesign-assets/plan/step2.png
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/redesign-assets/plan/step2.webp
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/redesign-assets/plan/step3.png
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/redesign-assets/plan/step3.webp

https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/redesign-assets/hoods/bedford-stuyvesant.jpg
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/redesign-assets/hoods/bedford-stuyvesant.webp
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/redesign-assets/hoods/brooklyn-heights.jpg
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/redesign-assets/hoods/brooklyn-heights.webp
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/redesign-assets/hoods/chelsea.jpg
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/redesign-assets/hoods/chelsea.webp
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/redesign-assets/hoods/crown-heights.jpg
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/redesign-assets/hoods/crown-heights.webp
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/redesign-assets/hoods/downtown-brooklyn.jpg
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/redesign-assets/hoods/downtown-brooklyn.webp
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/redesign-assets/hoods/dumbo.jpg
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/redesign-assets/hoods/dumbo.webp
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/redesign-assets/hoods/harlem-brownstones.png
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/redesign-assets/hoods/harlem-brownstones.webp
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/redesign-assets/hoods/harlem-condos.png
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/redesign-assets/hoods/harlem-condos.webp
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/redesign-assets/hoods/harlem-coownership.png
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/redesign-assets/hoods/harlem-coownership.webp
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/redesign-assets/hoods/harlem-sros.png
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/redesign-assets/hoods/harlem-sros.webp
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/redesign-assets/hoods/harlem.png
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/redesign-assets/hoods/harlem.webp
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/redesign-assets/hoods/park-slope.jpg
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/redesign-assets/hoods/park-slope.webp
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/redesign-assets/hoods/upper-east-side.png
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/redesign-assets/hoods/upper-east-side.webp
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/redesign-assets/hoods/upper-west-side.png
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/redesign-assets/hoods/upper-west-side.webp
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/redesign-assets/hoods/williamsburg.jpg
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/redesign-assets/hoods/williamsburg.webp

https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/redesign-assets/nbhd/0dd93ed5.jpg
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/redesign-assets/nbhd/0dd93ed5.webp
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/redesign-assets/nbhd/65438018.png
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/redesign-assets/nbhd/65438018.webp
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/redesign-assets/nbhd/66fdf193.jpg
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/redesign-assets/nbhd/66fdf193.webp
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/redesign-assets/nbhd/69cc59cd.jpg
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/redesign-assets/nbhd/69cc59cd.webp
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/redesign-assets/nbhd/745851cc.jpg
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/redesign-assets/nbhd/745851cc.webp
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/redesign-assets/nbhd/7ed3b807.png
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/redesign-assets/nbhd/7ed3b807.webp
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/redesign-assets/nbhd/90c53c45.jpg
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/redesign-assets/nbhd/90c53c45.webp
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/redesign-assets/nbhd/943207db.png
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/redesign-assets/nbhd/943207db.webp
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/redesign-assets/nbhd/96e47300.png
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/redesign-assets/nbhd/96e47300.webp
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/redesign-assets/nbhd/b6c26a69.jpg
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/redesign-assets/nbhd/b6c26a69.webp
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/redesign-assets/nbhd/d86879d1.jpg
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/redesign-assets/nbhd/d86879d1.webp
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/redesign-assets/nbhd/eadc74f3.png
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/redesign-assets/nbhd/eadc74f3.webp
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/redesign-assets/nbhd/f55c71f9.jpg
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/redesign-assets/nbhd/f55c71f9.webp

https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/redesign-assets/services/2-family-house-for-sale-nyc.png
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/redesign-assets/services/2-family-house-for-sale-nyc.webp
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/redesign-assets/services/2-family-investment.png
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/redesign-assets/services/2-family-investment.webp
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/redesign-assets/services/3-family-house-for-sale-nyc.png
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/redesign-assets/services/3-family-house-for-sale-nyc.webp
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/redesign-assets/services/4-family-house-for-sale-nyc.png
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/redesign-assets/services/4-family-house-for-sale-nyc.webp
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/redesign-assets/services/buyers-agent.png
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/redesign-assets/services/buyers-agent.webp
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/redesign-assets/services/buying-sro-in-nyc.png
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/redesign-assets/services/buying-sro-in-nyc.webp
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/redesign-assets/services/home-valuation.png
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/redesign-assets/services/home-valuation.webp
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/redesign-assets/services/listing-agent.png
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/redesign-assets/services/listing-agent.webp
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/redesign-assets/services/mortgage.png
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/redesign-assets/services/mortgage.webp
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/redesign-assets/services/multifamily.png
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/redesign-assets/services/multifamily.webp
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/redesign-assets/services/nyc-brownstone-free-home-valuation.png
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/redesign-assets/services/nyc-brownstone-free-home-valuation.webp
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/redesign-assets/services/nyc-condo-free-home-valuation.png
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/redesign-assets/services/nyc-condo-free-home-valuation.webp
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/redesign-assets/services/nyc-first-time-home-buyer-mortages.png
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/redesign-assets/services/nyc-first-time-home-buyer-mortages.webp
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/redesign-assets/services/nyc-sro-free-home-valuation.png
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/redesign-assets/services/nyc-sro-free-home-valuation.webp
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/redesign-assets/services/nyc-sro-mortgages.png
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/redesign-assets/services/nyc-sro-mortgages.webp
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/redesign-assets/services/selling-sros-in-nyc.png
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/redesign-assets/services/selling-sros-in-nyc.webp

https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/redesign-assets/slots/svc-buying-a-brownstone-in-nyc.webp
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/redesign-assets/slots/svc-buying-a-condo-in-nyc.webp
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/redesign-assets/slots/svc-co-ownership-buying-in-nyc.webp
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/redesign-assets/slots/svc-nyc-brownstone-mortgages.webp
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/redesign-assets/slots/svc-nyc-co-op-free-home-valuation.webp
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/redesign-assets/slots/svc-selling-brownstones-in-nyc.webp
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/redesign-assets/slots/svc-selling-co-ops-in-nyc.webp
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/redesign-assets/slots/svc-selling-condos-in-nyc.webp
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/redesign-assets/slots/svc-selling-probate-properties-in-nyc.webp

## Do not fetch / do not invent

- `node_modules/`, `dist/`, `reference/`
- Do not add extra routes for neighborhood pages (`/upper-west-side/` etc.) — those stay `NotMigrated`
- Do not let GHL inject its own title/description/canonical — `Seo.tsx` owns `<head>`
- Serve `public/robots.txt` and `public/sitemap.xml` at the **web root** on deploy

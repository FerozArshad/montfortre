# Paste this message to GHL AI Studio

> Current architecture: **`DOCUMENTATION.md`**. After GHL writes files, update `GHL-TRANSFER-TRACKING.md` (FETCHED column). Images / remaining public files: `GHL-URLS.md`.

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
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/hooks/useStickyHeader.ts
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/lib/utils.ts
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/lib/siteOrigin.ts
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/styles/page-shell.css
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/styles/mobile-layout.css
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/styles/desktop-nav.css
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/styles/mobile-header.css
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/styles/site-footer.css
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/styles/resources-section.css
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/styles/contact-section.css
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/styles/home-hero.css
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/styles/home-promises.css
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/styles/home-hidden-cost.css
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/styles/home-founder.css
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/styles/home-areas.css
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/styles/home-expect.css
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/styles/home-plan.css
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/styles/home-services.css
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/styles/home-reviews.css
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/styles/home-instagram.css
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/styles/home-included.css
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/styles/home-listings.css
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/styles/home-download.css
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/styles/services-page.css
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/styles/blog-page.css
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/styles/stanley-page.css
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/styles/success-page.css
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/styles/brownstone-guide.css
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/styles/neighborhoods-page.css
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/styles/about-page.css
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/styles/harlem-page.css
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/styles/two-family-page.css
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/styles/idx-page.css
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/styles/not-migrated.css
https://raw.githubusercontent.com/FerozArshad/montfortre/main/public/favicon.svg

---

## 1. Services

https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/pages/Services.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/components/services/ServicesContent.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/styles/services-page.css
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/seo/pages/services.ts

## 2. Blog

https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/pages/Blog.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/components/blog/BlogContent.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/styles/blog-page.css
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/seo/pages/blog.ts

## 3. StanleyMontfort

https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/pages/StanleyMontfort.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/components/stanley/StanleyMontfortContent.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/styles/stanley-page.css
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/seo/pages/stanleyMontfort.ts

## 4. SuccessStories

https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/pages/SuccessStories.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/components/success/SuccessStoriesContent.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/styles/success-page.css
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/seo/pages/successStories.ts

## 5. BrownstoneBuyingGuide

https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/pages/BrownstoneBuyingGuide.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/components/brownstone/BrownstoneGuideContent.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/styles/brownstone-guide.css
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/seo/pages/brownstoneGuide.ts

## 6. Neighborhoods

https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/pages/Neighborhoods.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/components/neighborhoods/NeighborhoodsContent.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/styles/neighborhoods-page.css
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/seo/pages/neighborhoods.ts

## 7. AboutUs

https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/pages/AboutUs.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/components/about/AboutUsContent.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/styles/about-page.css
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/seo/pages/aboutUs.ts

## 8. Harlem

https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/pages/Harlem.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/components/harlem/HarlemContent.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/styles/harlem-page.css
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/seo/pages/harlem.ts
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/components/HarlemSchools.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/data/harlemSchools.json

## 8b. Upper West Side

https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/pages/UpperWestSide.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/components/upper-west-side/UpperWestSideContent.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/components/upper-west-side/UpperWestSidePoiMap.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/components/upper-west-side/UpperWestSideAreaNav.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/components/upper-west-side/UpperWestSideRealtorArticle.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/styles/uws-page.css
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/seo/pages/upperWestSide.ts
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/data/upperWestSideGuide.ts
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/data/upperWestSideYelp.json
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/data/upperWestSideSchools.json

## 8c. Upper East Side

https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/pages/UpperEastSide.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/components/upper-east-side/UpperEastSideContent.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/components/upper-east-side/UpperEastSidePoiMap.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/components/upper-east-side/UpperEastSideAreaNav.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/components/upper-east-side/UpperEastSideRealtorArticle.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/styles/ues-page.css
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/seo/pages/upperEastSide.ts
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/data/upperEastSideGuide.ts
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/data/upperEastSideYelp.json
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/data/upperEastSideSchools.json

## 8d. Chelsea

https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/pages/Chelsea.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/components/chelsea/ChelseaContent.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/components/chelsea/ChelseaPoiMap.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/components/chelsea/ChelseaAreaNav.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/components/chelsea/ChelseaRealtorArticle.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/styles/chelsea-page.css
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/seo/pages/chelsea.ts
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/data/chelseaGuide.ts
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/data/chelseaYelp.json
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/data/chelseaSchools.json

## 8e. Downtown Brooklyn

https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/pages/DowntownBrooklyn.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/components/downtown-brooklyn/DowntownBrooklynContent.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/components/downtown-brooklyn/DowntownBrooklynPoiMap.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/components/downtown-brooklyn/DowntownBrooklynAreaNav.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/components/downtown-brooklyn/DowntownBrooklynRealtorArticle.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/styles/downtown-brooklyn-page.css
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/seo/pages/downtownBrooklyn.ts
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/data/downtownBrooklynGuide.ts
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/data/downtownBrooklynYelp.json
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/data/downtownBrooklynSchools.json

## 8f. Dumbo

https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/pages/Dumbo.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/components/dumbo/DumboContent.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/components/dumbo/DumboPoiMap.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/components/dumbo/DumboAreaNav.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/components/dumbo/DumboRealtorArticle.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/styles/dumbo-page.css
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/seo/pages/dumbo.ts
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/data/dumboGuide.ts
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/data/dumboYelp.json
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/data/dumboSchools.json

## 8g. Brooklyn Heights

https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/pages/BrooklynHeights.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/components/brooklyn-heights/BrooklynHeightsContent.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/components/brooklyn-heights/BrooklynHeightsPoiMap.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/components/brooklyn-heights/BrooklynHeightsAreaNav.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/components/brooklyn-heights/BrooklynHeightsRealtorArticle.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/styles/brooklyn-heights-page.css
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/seo/pages/brooklynHeights.ts
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/data/brooklynHeightsGuide.ts
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/data/brooklynHeightsYelp.json
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/data/brooklynHeightsSchools.json

## 8h. Bedford-Stuyvesant

https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/pages/BedfordStuyvesant.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/components/bedford-stuyvesant/BedfordStuyvesantContent.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/components/bedford-stuyvesant/BedfordStuyvesantPoiMap.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/components/bedford-stuyvesant/BedfordStuyvesantAreaNav.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/components/bedford-stuyvesant/BedfordStuyvesantRealtorArticle.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/styles/bedford-stuyvesant-page.css
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/seo/pages/bedfordStuyvesant.ts
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/data/bedfordStuyvesantGuide.ts
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/data/bedfordStuyvesantYelp.json
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/data/bedfordStuyvesantSchools.json

## 8i. Williamsburg

https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/pages/Williamsburg.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/components/williamsburg/WilliamsburgContent.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/components/williamsburg/WilliamsburgPoiMap.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/components/williamsburg/WilliamsburgAreaNav.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/components/williamsburg/WilliamsburgRealtorArticle.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/styles/williamsburg-page.css
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/seo/pages/williamsburg.ts
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/data/williamsburgGuide.ts
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/data/williamsburgYelp.json
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/data/williamsburgSchools.json

## 8j. Crown Heights

https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/pages/CrownHeights.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/components/crown-heights/CrownHeightsContent.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/components/crown-heights/CrownHeightsPoiMap.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/components/crown-heights/CrownHeightsAreaNav.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/components/crown-heights/CrownHeightsRealtorArticle.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/styles/crown-heights-page.css
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/seo/pages/crownHeights.ts
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/data/crownHeightsGuide.ts
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/data/crownHeightsYelp.json
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/data/crownHeightsSchools.json

## 8k. Park Slope

https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/pages/ParkSlope.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/components/park-slope/ParkSlopeContent.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/components/park-slope/ParkSlopePoiMap.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/components/park-slope/ParkSlopeAreaNav.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/components/park-slope/ParkSlopeRealtorArticle.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/styles/park-slope-page.css
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/seo/pages/parkSlope.ts
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/data/parkSlopeGuide.ts
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/data/parkSlopeYelp.json
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/data/parkSlopeSchools.json

## 9. TwoFamilyHouseForSaleNyc

https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/pages/TwoFamilyHouseForSaleNyc.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/components/two-family/TwoFamilyContent.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/styles/two-family-page.css
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/seo/pages/twoFamily.ts

## 9b. NycBuyersAgentService

https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/pages/NycBuyersAgentService.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/components/nyc-buyers-agent/NycBuyersAgentContent.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/styles/nyc-buyers-agent-page.css
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/seo/pages/nycBuyersAgent.ts

## 9c. NycListingAgentService

https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/pages/NycListingAgentService.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/components/nyc-listing-agent/NycListingAgentContent.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/styles/nyc-listing-agent-page.css
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/seo/pages/nycListingAgent.ts

## 9d. NycMultifamilyRealEstateAgentService

https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/pages/NycMultifamilyRealEstateAgentService.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/components/nyc-multifamily-agent/NycMultifamilyContent.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/styles/nyc-multifamily-agent-page.css
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/seo/pages/nycMultifamily.ts

## 9e. HomeValuation

https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/pages/HomeValuation.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/components/home-valuation/HomeValuationContent.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/components/home-valuation/HomeValuationTool.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/styles/home-valuation-page.css
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/seo/pages/homeValuation.ts

## 9f. MortgageCalculator

https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/pages/MortgageCalculator.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/components/mortgage-calculator/MortgageCalculatorContent.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/components/mortgage-calculator/MortgageCalculator.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/lib/mortgageMath.ts
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/styles/mortgage-calculator-page.css
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/seo/pages/mortgageCalculator.ts

## 9g. HarlemBrownstones

https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/pages/HarlemBrownstones.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/components/harlem-brownstones/HarlemBrownstonesContent.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/styles/harlem-brownstones-page.css
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/seo/pages/harlemBrownstones.ts

## 9h. HarlemCondos

https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/pages/HarlemCondos.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/components/harlem-condos/HarlemCondosContent.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/styles/harlem-condos-page.css
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/seo/pages/harlemCondos.ts

## 9i. HarlemSros

https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/pages/HarlemSros.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/components/harlem-sros/HarlemSrosContent.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/styles/harlem-sros-page.css
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/seo/pages/harlemSros.ts

## 9j. HarlemCoOwnership

https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/pages/HarlemCoOwnership.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/components/harlem-co-ownership/HarlemCoOwnershipContent.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/styles/harlem-co-ownership-page.css
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/seo/pages/harlemCoOwnership.ts

## 9k. UpperWestSideCoOps

https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/pages/UpperWestSideCoOps.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/components/upper-west-side-co-ops-2/UpperWestSideCoOpsContent.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/styles/upper-west-side-co-ops-page.css
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/seo/pages/upperWestSideCoOps.ts

## 9l. UpperWestSideCondos

https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/pages/UpperWestSideCondos.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/components/upper-west-side-condos/UpperWestSideCondosContent.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/styles/upper-west-side-condos-page.css
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/seo/pages/upperWestSideCondos.ts

## 9m. UpperWestSideTownhouses

https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/pages/UpperWestSideTownhouses.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/components/upper-west-side-townhouses/UpperWestSideTownhousesContent.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/styles/upper-west-side-townhouses-page.css
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/seo/pages/upperWestSideTownhouses.ts

## 9n. UpperEastSideCoOps

https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/pages/UpperEastSideCoOps.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/components/upper-east-side-co-ops/UpperEastSideCoOpsContent.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/styles/upper-east-side-co-ops-page.css
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/seo/pages/upperEastSideCoOps.ts

## 9o. UpperEastSideCondos

https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/pages/UpperEastSideCondos.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/components/upper-east-side-condos/UpperEastSideCondosContent.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/styles/upper-east-side-condos-page.css
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/seo/pages/upperEastSideCondos.ts

## 9p. UpperEastSideTownhouses

https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/pages/UpperEastSideTownhouses.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/components/upper-east-side-townhouses/UpperEastSideTownhousesContent.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/styles/upper-east-side-townhouses-page.css
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/seo/pages/upperEastSideTownhouses.ts

## 9q. ChelseaCoOps

https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/pages/ChelseaCoOps.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/components/chelsea-co-ops-2/ChelseaCoOpsContent.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/styles/chelsea-co-ops-page.css
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/seo/pages/chelseaCoOps.ts

## 9r. ChelseaTownhouses

https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/pages/ChelseaTownhouses.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/components/chelsea-townhouses/ChelseaTownhousesContent.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/styles/chelsea-townhouses-page.css
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/seo/pages/chelseaTownhouses.ts

## 9s. DumboCoOps

https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/pages/DumboCoOps.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/components/dumbo-co-ops-2/DumboCoOpsContent.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/styles/dumbo-co-ops-page.css
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/seo/pages/dumboCoOps.ts

## 9t. DumboCondos

https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/pages/DumboCondos.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/components/dumbo-condos/DumboCondosContent.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/styles/dumbo-condos-page.css
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/seo/pages/dumboCondos.ts

## 9u. DownstoneBrooklynCoOps

https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/pages/DownstoneBrooklynCoOps.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/components/downstone-brooklyn-co-ops/DownstoneBrooklynCoOpsContent.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/styles/downstone-brooklyn-co-ops-page.css
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/seo/pages/downstoneBrooklynCoOps.ts

## 9v. DowntownBrooklynCondos

https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/pages/DowntownBrooklynCondos.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/components/downtown-brooklyn-condos-2/DowntownBrooklynCondosContent.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/styles/downtown-brooklyn-condos-page.css
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/seo/pages/downtownBrooklynCondos.ts

---

## 9w. BedfordStuyvesantCoOwnership

https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/pages/BedfordStuyvesantCoOwnership.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/components/bedford-stuyvesant-co-ownership/BedfordStuyvesantCoOwnershipContent.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/styles/bedford-stuyvesant-co-ownership-page.css
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/seo/pages/bedfordStuyvesantCoOwnership.ts

---

## 9x. BedfordStuyvesantSros

https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/pages/BedfordStuyvesantSros.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/components/bedford-stuyvesant-sros-2/BedfordStuyvesantSrosContent.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/styles/bedford-stuyvesant-sros-page.css
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/seo/pages/bedfordStuyvesantSros.ts

---

## 9y. BedfordStuyvesantCoOps

https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/pages/BedfordStuyvesantCoOps.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/components/bedford-stuyvesant-co-ops-2/BedfordStuyvesantCoOpsContent.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/styles/bedford-stuyvesant-co-ops-page.css
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/seo/pages/bedfordStuyvesantCoOps.ts

---

## 9z. BedfordStuyvesantCondos

https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/pages/BedfordStuyvesantCondos.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/components/bedford-stuyvesant-condos-2/BedfordStuyvesantCondosContent.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/styles/bedford-stuyvesant-condos-page.css
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/seo/pages/bedfordStuyvesantCondos.ts

---

## 9aa. BedfordStuyvesantBrownstones

https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/pages/BedfordStuyvesantBrownstones.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/components/bedford-stuyvesant-brownstones-2/BedfordStuyvesantBrownstonesContent.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/styles/bedford-stuyvesant-brownstones-page.css
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/seo/pages/bedfordStuyvesantBrownstones.ts

---

## 9ab. BrooklynHeightsCoOps

https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/pages/BrooklynHeightsCoOps.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/components/brooklyn-heights-co-ops-3/BrooklynHeightsCoOpsContent.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/styles/brooklyn-heights-co-ops-page.css
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/seo/pages/brooklynHeightsCoOps.ts

---

## 9ac. BrooklynHeightsCondos

https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/pages/BrooklynHeightsCondos.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/components/brooklyn-heights-condos-3/BrooklynHeightsCondosContent.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/styles/brooklyn-heights-condos-page.css
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/seo/pages/brooklynHeightsCondos.ts

---

## 9ad. BrooklynHeightsTownhouses

https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/pages/BrooklynHeightsTownhouses.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/components/brooklyn-heights-townhouses-2/BrooklynHeightsTownhousesContent.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/styles/brooklyn-heights-townhouses-page.css
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/seo/pages/brooklynHeightsTownhouses.ts

---

## 9ae. WilliamsburgCoOwnership

https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/pages/WilliamsburgCoOwnership.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/components/williamsburg-co-ownership/WilliamsburgCoOwnershipContent.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/styles/williamsburg-co-ownership-page.css
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/seo/pages/williamsburgCoOwnership.ts

---

## 9af. WilliamsburgCondos

https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/pages/WilliamsburgCondos.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/components/williamsburg-condos/WilliamsburgCondosContent.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/styles/williamsburg-condos-page.css
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/seo/pages/williamsburgCondos.ts

---

## 9ag. WilliamsburgBrownstones

https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/pages/WilliamsburgBrownstones.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/components/williamsburg-brownstones-2/WilliamsburgBrownstonesContent.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/styles/williamsburg-brownstones-page.css
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/seo/pages/williamsburgBrownstones.ts

---

## 9ah. CrownHeightsCoOwnership

https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/pages/CrownHeightsCoOwnership.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/components/crown-heights-co-ownership-2/CrownHeightsCoOwnershipContent.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/styles/crown-heights-co-ownership-page.css
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/seo/pages/crownHeightsCoOwnership.ts

---

## 9ai. CrownHeightsSros

https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/pages/CrownHeightsSros.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/components/crown-heights-sros-3/CrownHeightsSrosContent.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/styles/crown-heights-sros-page.css
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/seo/pages/crownHeightsSros.ts

---

## 9aj. CrownHeightsCoOps

https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/pages/CrownHeightsCoOps.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/components/crown-heights-co-ops-2/CrownHeightsCoOpsContent.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/styles/crown-heights-co-ops-page.css
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/seo/pages/crownHeightsCoOps.ts

---

## 9ak. CrownHeightsBrownstones

https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/pages/CrownHeightsBrownstones.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/components/crown-heights-brownstones-2/CrownHeightsBrownstonesContent.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/styles/crown-heights-brownstones-page.css
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/seo/pages/crownHeightsBrownstones.ts

---

## 9al. CrownHeightsCondos

https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/pages/CrownHeightsCondos.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/components/crown-heights-condos-2/CrownHeightsCondosContent.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/styles/crown-heights-condos-page.css
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/seo/pages/crownHeightsCondos.ts

---

## 10. Remaining migrated pages (full site)

https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/pages/Home.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/components/home/HomeContent.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/seo/pages/home.ts

https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/pages/IdxSales.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/pages/IdxRentals.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/components/idx/IdxSearchLayout.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/seo/pages/idxSales.ts
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/seo/pages/idxRentals.ts

https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/pages/NotMigrated.tsx
https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/styles/not-migrated.css

---

## Images

Public images are listed in:

https://raw.githubusercontent.com/FerozArshad/montfortre/main/GHL-URLS.md

Fetch every `public/` URL in that file to the same path, including `public/redesign-assets/**` (logo, favicons, listings, OG). REBNY badge: `/redesign-assets/rebny.webp`. Do not use AgentFire CDN URLs.

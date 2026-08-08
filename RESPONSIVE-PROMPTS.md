# Prompts for the responsiveness pass (run in order)

First, read the context file:
https://raw.githubusercontent.com/FerozArshad/montfortre/main/HANDOFF.md

---

## Prompt 1 — Foundation + mobile header (do this first)

Read HANDOFF.md for context and constraints. Task: make the site responsive without touching SEO or content.

1. Create `src/components/MobileHeader.tsx`: a header shown only below 1024px with the Montfort logo (same logo asset as the desktop header), a phone link `tel:+1-646-970-1078` and a hamburger button. The hamburger opens a full-screen slide-in menu with tap-to-expand sections mirroring the desktop nav exactly: Services (NYC Buyer's Agent, NYC Listing Agent, NYC Multifamily Agent, Free Home Valuation, Mortgage Calculator), Neighborhoods (Harlem, Upper West Side, Upper East Side, Chelsea, Downtown Brooklyn, Dumbo, Brooklyn Heights, Bedford-Stuyvesant, Williamsburg, Crown Heights, View all), Listings (Homes For Sale /idx-sales/, Rentals /idx-rentals/, Customer Login https://stanley.olridx.com/#), Success Stories, About, Resources (About Us, Stanley Montfort, Contact). Use the same hrefs as the desktop nav in each page's HTML. Style: background #F9F6E6, text #0F1729, accent #C98A2C, font stack 'Space Grotesk'/'DM Sans' — match the existing design tokens.
2. Add a global stylesheet `src/responsive.css`, imported once in App.tsx (or main.tsx), containing shared breakpoint rules; below 1024px hide any element matching `header` inside the page HTML (the desktop header) and show MobileHeader instead; at 1024px+ hide MobileHeader.
3. Render MobileHeader once in the shared layout so it appears on every page/route.
Do not modify any TITLE/METAS/LINKS/JSON_LD constants or Seo.tsx. Do not change any text or hrefs.

## Prompt 2 — Homepage responsive

Read HANDOFF.md. In `src/pages/Home.tsx`, inside the HTML template literal only:
1. In the outer wrapper div, change `min-width:1440px` to `width:100%; max-width:100%`.
2. In the `<style>` block at the top of the HTML string, append media queries at 1024px / 768px / 480px that (use `!important` since layout styles are inline): reduce section padding from 64px to 32px (tablet) and 20px (phone); collapse every multi-column grid (hero `grid-template-columns:620px 1fr`, neighborhoods, services, listings, plan steps, testimonials, instagram) to one column on phones and max two on tablets; scale the hero H1 from 38px to 30px (tablet) / 24px (phone); make all imgs `max-width:100%; height:auto`; let the hero card sit above the background image full-width on phones; make the marquee rows and any horizontal lists wrap or scroll within their own container.
3. Nothing may overflow horizontally at 375px: `html, body { overflow-x:hidden }` is a last resort, prefer fixing the offending element.
Do not change text, links, image sources, H1 count, or the SEO constants. Desktop at 1440px must remain visually identical.

## Prompt 3 — Content pages responsive (repeat per file)

Same treatment as Prompt 2, applied to: Services.tsx, AboutUs.tsx, Blog.tsx, Harlem.tsx, StanleyMontfort.tsx, SuccessStories.tsx, TwoFamilyHouseForSaleNyc.tsx, BrownstoneBuyingGuide.tsx.
For each file: outer wrapper `min-width:1440px` -> fluid; append breakpoint rules to that page's `<style>` block; collapse its grids; scale its headings; fluid images; verify no horizontal overflow at 375px. Keep every SEO constant, heading text, link and image untouched. Desktop >=1440px pixel-identical.

## Prompt 4 — Touch dropdowns on desktop-width tablets

The desktop nav dropdowns open on `:hover` (`.mnav-item:hover > .mnav-drop`). Add a small enhancement in the shared layout: on devices without hover (`window.matchMedia('(hover: none)')`), a first tap on a `.mnav-top` link opens its dropdown (prevent navigation), a second tap follows the link; tapping outside closes it. Implement as a React effect in the shared layout (similar pattern to src/hooks/useStyleHover.ts). Do not alter the markup inside the page HTML strings.

## Prompt 5 — Self-check before finishing

For every route (/, /services/, /about-us/, /blog/, /harlem/, /stanley-montfort/, /success-stories/, /2-family-house-for-sale-nyc/, /advice-for-buyers-looking-to-purchase-brownstones/) at widths 375, 768, 1440:
- no horizontal scrollbar (document.scrollWidth == viewport width)
- mobile menu opens, every link tappable, submenus expand
- images load, no overlapping/cut-off text
- document.title still exactly matches the value in that page's TITLE constant
- JSON-LD script count unchanged (5,4,4,4,3,3,4,8,3 respectively)
Report anything you could not fix rather than changing content to work around it.

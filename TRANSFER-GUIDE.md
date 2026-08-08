# GHL Transfer - Home Page

Files to copy into the GHL AI Studio project:

| File here | Goes to |
|---|---|
| src/pages/Home.tsx | src/pages/Home.tsx (route "/") |
| src/components/Seo.tsx | src/components/Seo.tsx |
| src/components/MobileHeader.tsx | src/components/MobileHeader.tsx |
| src/hooks/useStyleHover.ts | src/hooks/useStyleHover.ts |
| src/hooks/useTouchDropdowns.ts | src/hooks/useTouchDropdowns.ts |
| src/hooks/useCarousels.ts | src/hooks/useCarousels.ts |
| src/responsive.css | src/responsive.css |
| public/redesign-assets/** | public/redesign-assets/ |
| public/instagram/** | public/instagram/ |

Wire the route in App.tsx: `<Route path="/" element={<Home />} />`.
Responsive wiring in App.tsx: `import "./responsive.css";` once, and render
`<MobileHeader />` once above `<Routes>` (see ROUTES.tsx.snippet). MobileHeader
is the below-1024px header/menu for all routes and installs the touch
enhancement for the desktop nav dropdowns on hover-less devices.

Notes
- SEO (title, meta description, og/twitter tags, canonical, favicon, 5x JSON-LD schema) is byte-exact
  from the original https://montfortre.com/ homepage, injected by the Seo component.
- The page markup is the approved redesign, embedded verbatim for pixel fidelity.
- Listing/CDN photos load from https://assets.agentfire3.com (live CDN). Redesign artwork and the
  Instagram grid are local files under public/.
- Internal links are root-relative (/services/, /harlem/, ...) so they resolve as routes/pages
  when those pages are added later.

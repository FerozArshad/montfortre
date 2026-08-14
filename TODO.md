# Open tasks (do not implement until the owner asks)

Architecture: `DOCUMENTATION.md`. SEO files: `seo-audit/`.

## IDX (vendor instructions — not in repo)

- [ ] **iframe-resizer** (`http://davidjbradshaw.github.io/iframe-resizer`) — not installed. Current iframe is `width: 100%` and `height: 1200px` (`src/styles/idx-page.css`). Mobile uses `height: 70vh`. Add the library only if the owner wants auto-growing iframe height.
- [ ] **Pre-populated search URLs** (example `https://stanley.olridx.com/Search/Sales#93234`) — no SPA routes or iframe `src` hashes. Permanent OLR links can be used as `iframeSrc` later if the owner supplies real IDs.
- [ ] **Building Quick search URLs** (example `https://stanley.olridx.com/Search/Quick?idr=False#93247`) — not wired. Same as above.

Already in the system (no task): Sales + Rentals iframes, Customer Login `https://stanley.olridx.com/#` in nav and IDX footnote. See `DOCUMENTATION.md` § IDX.

## SEO / sitemap / robots

- [ ] Recrawl live `/2-family-house-for-sale-nyc/`, `/idx-sales/`, `/idx-rentals/` into Screaming Frog (missing from `seo-audit/screaming-frog-montfortre.xlsx`).
- [ ] Live `page-sitemap.xml` has ~197 page URLs vs **12** SPA routes. Migrate `[LEFT]` URLs only when the owner picks them — do not invent routes.
- [ ] At DNS cutover, host must serve **this repo’s** `public/robots.txt` and `public/sitemap.xml`. Live WP currently advertises `sitemap_index.xml`. Do not copy the full WP sitemap into the SPA until those pages exist.

## Mobile

- [ ] Verify 375 / 768 / 1440 on all 12 routes, including IDX iframe (no horizontal scroll). Desktop ≥1440px stays pixel-identical.

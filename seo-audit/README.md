# SEO audit baseline (live WordPress)

Use this folder when checking **per-page SEO** against the current live site, and when picking **new pages to migrate**. Do not invent routes until the owner asks.

## Live URLs (WordPress — still production until cutover)

| What | URL |
|---|---|
| Site | https://montfortre.com/ |
| Robots | https://montfortre.com/robots.txt |
| Sitemap index | https://montfortre.com/sitemap_index.xml |
| **Page sitemap** (page inventory) | https://montfortre.com/page-sitemap.xml |
| Post sitemap | https://montfortre.com/post-sitemap.xml |

## Files here

| File | Use |
|---|---|
| `screaming-frog-montfortre.xlsx` | Crawl of live montfortre.com (105 HTML rows). Columns: Address, Status, Indexability, Title 1, Meta Description 1, H1-1, H1-2, Canonical, Word Count, etc. |
| `live-page-sitemap-urls.txt` | Unique `<loc>` URLs from `page-sitemap.xml` tagged `[MIGRATED]` vs `[LEFT]` |

Copy of the owner workbook: `c:\Users\feroz\Downloads\Screaming frog montfortre (1).xlsx`.

## How to check SEO for one SPA page

1. Open `src/seo/pages/<file>.ts` (table in `DOCUMENTATION.md` §3).
2. Open the same URL on **live** https://montfortre.com/<path>/.
3. Open the matching row in `screaming-frog-montfortre.xlsx` (Address column).
4. Match **Title 1**, **Meta Description 1**, **H1-1** (and **H1-2** if present), **Canonical Link Element 1**.
5. Confirm `src/pages/<Page>.tsx` passes that `*_SEO` into `PageShell`.
6. On preview hosts, expect `noindex,nofollow` — that is intentional until production hostname.

Frozen SEO in the repo was copied from live. If Screaming Frog and `src/seo/pages/*.ts` disagree, **do not “fix” the TS file** without owner approval (copy is frozen).

### Migrated routes vs this crawl

| Live / SPA URL | In SF xlsx | In page-sitemap.xml | SPA SEO file |
|---|---|---|---|
| `/` | Yes | Yes | `home.ts` |
| `/services/` | Yes | Yes | `services.ts` |
| `/about-us/` | Yes | Yes | `aboutUs.ts` |
| `/blog/` | Yes | Yes | `blog.ts` |
| `/harlem/` | Yes | Yes | `harlem.ts` |
| `/stanley-montfort/` | Yes | Yes | `stanleyMontfort.ts` |
| `/success-stories/` | Yes | Yes | `successStories.ts` |
| `/neighborhoods/` | Yes | Yes | `neighborhoods.ts` |
| `/advice-for-buyers-looking-to-purchase-brownstones/` | Yes | Not in this XML dump | `brownstoneGuide.ts` |
| `/2-family-house-for-sale-nyc/` | **No** | Yes | `twoFamily.ts` |
| `/idx-sales/` | **No** | **No** (SPA-only route) | `idxSales.ts` |
| `/idx-rentals/` | **No** | **No** (SPA-only route) | `idxRentals.ts` |

Recrawl the three “No” rows before treating SF as complete. Two Family must keep **two H1s**.

## New-page references (not in the SPA)

`live-page-sitemap-urls.txt` lines marked `[LEFT]` are live WP pages. Nav may still link to them; the SPA shows `NotMigrated`. **Do not add those routes** until the owner picks a slice. Live HTML / HTTrack: `d:\montfortre\reference\`.

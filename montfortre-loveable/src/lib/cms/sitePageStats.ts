import { BLOG_ARTICLE_REGISTRY } from "../../blog/registry";

export type SitePageKind = "builtin" | "blog-article";

export type SitePageInventoryItem = {
  /** Public path with trailing slash, or `/` for home */
  path: string;
  /** Admin key: `home` or slug without slashes */
  key: string;
  title: string;
  kind: SitePageKind;
};

function titleFromSlug(slug: string): string {
  if (!slug || slug === "home") return "Home";
  return slug
    .split("-")
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

function pathToKey(path: string): string {
  const clean = path.replace(/^\/+|\/+$/g, "");
  return clean || "home";
}

/** Human titles for important routes (fallback is title-cased slug). */
const TITLE_OVERRIDES: Record<string, string> = {
  home: "Home",
  "about-us": "About Us",
  "stanley-montfort": "Stanley Montfort",
  services: "Services",
  "success-stories": "Success Stories",
  "privacy-policy": "Privacy Policy",
  sitemap: "Sitemap",
  "current-listings": "Current Listings",
  contact: "Contact",
  blog: "Blog / Resources",
  neighborhoods: "Neighborhoods",
  "home-valuation": "Free Home Valuation",
  "mortgage-calculator": "Mortgage Calculator",
  "idx-sales": "Search Homes for Sale",
  "idx-rentals": "Search Rentals",
};

/**
 * Built-in public site paths (mirrors SiteMapContent sections).
 * Used for Dashboard counts and Admin → Pages inventory.
 */
const STATIC_HREFS: readonly string[] = [
  "/",
  "/about-us/",
  "/stanley-montfort/",
  "/services/",
  "/success-stories/",
  "/privacy-policy/",
  "/sitemap/",
  "/current-listings/",
  "/contact/",
  "/nyc-buyers-agent-service/",
  "/nyc-listing-agent-service/",
  "/nyc-multifamily-real-estate-agent-service/",
  "/2-family-house-for-sale-nyc/",
  "/3-family-house-for-sale-nyc/",
  "/4-family-house-for-sale-nyc/",
  "/nyc-brownstone-free-home-valuation/",
  "/nyc-sro-free-home-valuation/",
  "/nyc-co-op-free-home-valuation/",
  "/nyc-condo-free-home-valuation/",
  "/buying-a-condo-in-nyc/",
  "/buying-a-brownstone-in-nyc/",
  "/buying-sro-in-nyc/",
  "/co-ownership-buying-in-nyc/",
  "/selling-probate-properties-in-nyc/",
  "/selling-sros-in-nyc/",
  "/selling-co-ops-in-nyc/",
  "/selling-condos-in-nyc/",
  "/selling-brownstones-in-nyc/",
  "/home-valuation/",
  "/mortgage-calculator/",
  "/nyc-first-time-home-buyer-mortages/",
  "/nyc-brownstone-mortgages/",
  "/nyc-sro-mortgages/",
  "/idx-sales/",
  "/idx-rentals/",
  "/neighborhoods/",
  "/harlem/",
  "/upper-west-side/",
  "/upper-east-side/",
  "/chelsea/",
  "/downtown-brooklyn/",
  "/dumbo/",
  "/brooklyn-heights/",
  "/bedford-stuyvesant/",
  "/williamsburg/",
  "/crown-heights/",
  "/park-slope/",
  "/harlem-brownstones/",
  "/harlem-condos/",
  "/harlem-co-ops/",
  "/harlem-sros/",
  "/harlem-co-ownership/",
  "/upper-west-side-townhouses/",
  "/upper-west-side-condos/",
  "/upper-west-side-co-ops-2/",
  "/upper-east-side-townhouses/",
  "/upper-east-side-condos/",
  "/upper-east-side-co-ops/",
  "/chelsea-townhouses/",
  "/chelsea-co-ops-2/",
  "/downtown-brooklyn-condos-2/",
  "/downstone-brooklyn-co-ops/",
  "/dumbo-condos/",
  "/dumbo-co-ops-2/",
  "/brooklyn-heights-townhouses-2/",
  "/brooklyn-heights-condos-3/",
  "/brooklyn-heights-co-ops-3/",
  "/bedford-stuyvesant-brownstones-2/",
  "/bedford-stuyvesant-condos-2/",
  "/bedford-stuyvesant-co-ops-2/",
  "/bedford-stuyvesant-sros-2/",
  "/bedford-stuyvesant-co-ownership/",
  "/williamsburg-brownstones-2/",
  "/williamsburg-condos/",
  "/williamsburg-co-ownership/",
  "/crown-heights-brownstones-2/",
  "/crown-heights-condos-2/",
  "/crown-heights-co-ops-2/",
  "/crown-heights-sros-3/",
  "/crown-heights-co-ownership-2/",
  "/park-slope-brownstone-2/",
  "/park-slope-condo-2/",
  "/park-slope-coops/",
  "/park-slope-sro-2/",
  "/park-slope-coownership-2/",
  "/blog/",
  "/advice-for-buyers-looking-to-purchase-brownstones/",
];

function buildInventory(): SitePageInventoryItem[] {
  const items: SitePageInventoryItem[] = [];
  const seen = new Set<string>();

  for (const href of STATIC_HREFS) {
    const key = pathToKey(href);
    if (seen.has(key)) continue;
    seen.add(key);
    items.push({
      path: href === "/" ? "/" : `/${key}/`,
      key,
      title: TITLE_OVERRIDES[key] || titleFromSlug(key),
      kind: "builtin",
    });
  }

  for (const [slug, article] of Object.entries(BLOG_ARTICLE_REGISTRY)) {
    if (seen.has(slug)) continue;
    seen.add(slug);
    items.push({
      path: `/${slug}/`,
      key: slug,
      title: article.meta?.h1 || titleFromSlug(slug),
      kind: "blog-article",
    });
  }

  return items.sort((a, b) => a.title.localeCompare(b.title));
}

let cachedInventory: SitePageInventoryItem[] | null = null;

export function listBuiltInSitePages(): SitePageInventoryItem[] {
  if (!cachedInventory) cachedInventory = buildInventory();
  return cachedInventory;
}

export function findBuiltInSitePage(key: string): SitePageInventoryItem | undefined {
  return listBuiltInSitePages().find((p) => p.key === key);
}

export function pathnameToPageKey(pathname: string): string {
  return pathToKey(pathname);
}

export function countBuiltInPublicPages(): number {
  return listBuiltInSitePages().length;
}

export type WebsitePageStats = {
  totalOnSite: number;
  builtIn: number;
  listingsLive: number;
  blogLive: number;
  cmsPagesLive: number;
  cmsPagesDraft: number;
};

export function buildWebsitePageStats(input: {
  listingsLive: number;
  blogLive: number;
  cmsPagesLive: number;
  cmsPagesDraft: number;
}): WebsitePageStats {
  const builtIn = countBuiltInPublicPages();
  const blogInBuiltIn = Object.keys(BLOG_ARTICLE_REGISTRY).length;
  const extraBlog = Math.max(0, input.blogLive - blogInBuiltIn);
  return {
    builtIn,
    listingsLive: input.listingsLive,
    blogLive: input.blogLive,
    cmsPagesLive: input.cmsPagesLive,
    cmsPagesDraft: input.cmsPagesDraft,
    totalOnSite: builtIn + input.listingsLive + extraBlog + input.cmsPagesLive,
  };
}

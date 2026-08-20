/** SEO for /current-listings/ */

import type { PageSeo } from "../types";

export const CURRENT_LISTINGS_TITLE = "Current Listings | Montfort Real Estate";

export const CURRENT_LISTINGS_METAS = [
  {
    name: "description",
    content:
      "Browse Montfort Real Estate’s current Harlem and Manhattan listings — townhouses, condos, and co-ops selected by Stanley Montfort.",
  },
  { name: "twitter:card", content: "summary_large_image" },
  { name: "twitter:title", content: "Current Listings | Montfort Real Estate" },
  {
    name: "twitter:description",
    content:
      "Browse Montfort Real Estate’s current Harlem and Manhattan listings — townhouses, condos, and co-ops selected by Stanley Montfort.",
  },
  { property: "og:locale", content: "en_US" },
  { property: "og:type", content: "website" },
  { property: "og:title", content: "Current Listings | Montfort Real Estate" },
  {
    property: "og:description",
    content:
      "Browse Montfort Real Estate’s current Harlem and Manhattan listings — townhouses, condos, and co-ops selected by Stanley Montfort.",
  },
  { property: "og:url", content: "https://montfortre.com/current-listings/" },
  { property: "og:site_name", content: "Montfort Real Estate" },
] as const;

export const CURRENT_LISTINGS_LINKS = [
  { rel: "canonical", href: "https://montfortre.com/current-listings/" },
  {
    rel: "icon",
    href: "https://montfortre.com/redesign-assets/favicon-32.png",
    sizes: "32x32",
  },
  {
    rel: "icon",
    href: "https://montfortre.com/redesign-assets/favicon-192.png",
    sizes: "192x192",
  },
] as const;

export const CURRENT_LISTINGS_SEO: PageSeo = {
  title: CURRENT_LISTINGS_TITLE,
  metas: [...CURRENT_LISTINGS_METAS],
  links: [...CURRENT_LISTINGS_LINKS],
  jsonLd: [],
};

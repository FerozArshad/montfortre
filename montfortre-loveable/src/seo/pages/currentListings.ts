/** SEO for /current-listings/ */

import type { PageSeo } from "../types";

export const CURRENT_LISTINGS_TITLE = "Current Listings | Montfort Real Estate";

const DESCRIPTION =
  "Browse Montfort Real Estate’s current Harlem and Manhattan listings — townhouses, condos, and co-ops selected by Stanley Montfort.";
const URL = "https://montfortre.com/current-listings/";
const OG_IMAGE = "https://montfortre.com/og-home.jpg";

export const CURRENT_LISTINGS_METAS = [
  { name: "description", content: DESCRIPTION },
  { name: "twitter:card", content: "summary_large_image" },
  { name: "twitter:title", content: CURRENT_LISTINGS_TITLE },
  { name: "twitter:description", content: DESCRIPTION },
  { name: "twitter:image", content: OG_IMAGE },
  { property: "og:locale", content: "en_US" },
  { property: "og:type", content: "website" },
  { property: "og:title", content: CURRENT_LISTINGS_TITLE },
  { property: "og:description", content: DESCRIPTION },
  { property: "og:url", content: URL },
  { property: "og:site_name", content: "Montfort Real Estate" },
  { property: "og:image", content: OG_IMAGE },
] as const;

export const CURRENT_LISTINGS_LINKS = [
  { rel: "canonical", href: URL },
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

export const CURRENT_LISTINGS_JSON_LD = [
  JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, item: { "@id": "https://montfortre.com/", name: "Home" } },
      { "@type": "ListItem", position: 2, item: { "@id": URL, name: "Current Listings" } },
    ],
  }),
  JSON.stringify({
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${URL}#webpage`,
    url: URL,
    name: CURRENT_LISTINGS_TITLE,
    description: DESCRIPTION,
    isPartOf: { "@id": "https://montfortre.com/#website" },
    inLanguage: "en-US",
  }),
  JSON.stringify({
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Current Listings",
    url: URL,
    description: DESCRIPTION,
    about: {
      "@type": "RealEstateAgent",
      name: "Montfort Real Estate",
      telephone: "1-646-970-1078",
      url: "https://montfortre.com/",
    },
  }),
] as const;

export const CURRENT_LISTINGS_SEO: PageSeo = {
  title: CURRENT_LISTINGS_TITLE,
  metas: [...CURRENT_LISTINGS_METAS],
  links: [...CURRENT_LISTINGS_LINKS],
  jsonLd: [...CURRENT_LISTINGS_JSON_LD],
};

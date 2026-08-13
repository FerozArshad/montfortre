/** Frozen SEO for /idx-rentals/ — do not edit values. */

import type { PageSeo } from "../types";

export const IDX_RENTALS_TITLE = "NYC Rentals | Montfort Real Estate";

export const IDX_RENTALS_METAS = [
  {
    name: "description",
    content:
      "Search live MLS rental listings across Manhattan and Brooklyn with Montfort Real Estate.",
  },
  { property: "og:locale", content: "en_US" },
  { property: "og:type", content: "website" },
  { property: "og:title", content: "NYC Rentals | Montfort Real Estate" },
  {
    property: "og:description",
    content:
      "Search live MLS rental listings across Manhattan and Brooklyn with Montfort Real Estate.",
  },
  { property: "og:url", content: "https://montfortre.com/idx-rentals/" },
  { property: "og:site_name", content: "Montfort Real Estate" },
  { name: "twitter:card", content: "summary_large_image" },
] as const;

export const IDX_RENTALS_LINKS = [
  { rel: "canonical", href: "https://montfortre.com/idx-rentals/" },
] as const;

export const IDX_RENTALS_JSON_LD: string[] = [];

export const IDX_RENTALS_SEO: PageSeo = {
  title: IDX_RENTALS_TITLE,
  metas: IDX_RENTALS_METAS,
  links: IDX_RENTALS_LINKS,
  jsonLd: IDX_RENTALS_JSON_LD,
};

/** Frozen SEO for /idx-sales/ — do not edit values. */

import type { PageSeo } from "../types";

export const IDX_SALES_TITLE = "NYC Homes For Sale | Montfort Real Estate";

export const IDX_SALES_METAS = [
  {
    name: "description",
    content:
      "Search live MLS sale listings across Manhattan and Brooklyn with Montfort Real Estate.",
  },
  { property: "og:locale", content: "en_US" },
  { property: "og:type", content: "website" },
  { property: "og:title", content: "NYC Homes For Sale | Montfort Real Estate" },
  {
    property: "og:description",
    content:
      "Search live MLS sale listings across Manhattan and Brooklyn with Montfort Real Estate.",
  },
  { property: "og:url", content: "https://montfortre.com/idx-sales/" },
  { property: "og:site_name", content: "Montfort Real Estate" },
  { name: "twitter:card", content: "summary_large_image" },
] as const;

export const IDX_SALES_LINKS = [
  { rel: "canonical", href: "https://montfortre.com/idx-sales/" },
] as const;

export const IDX_SALES_JSON_LD: string[] = [];

export const IDX_SALES_SEO: PageSeo = {
  title: IDX_SALES_TITLE,
  metas: IDX_SALES_METAS,
  links: IDX_SALES_LINKS,
  jsonLd: IDX_SALES_JSON_LD,
};

/** Frozen SEO for /harlem-brownstones-for-sale/ — do not edit values. */

import type { PageSeo } from "../types";

export const HARLEM_BROWNSTONES_FOR_SALE_TITLE =
  "Harlem Brownstones For Sale - Dream New York Homes Without Overpaying";

const DESCRIPTION =
  "Interested in Harlem Brownstones? Click the link above for the most recent Harlem Brownstones for sale, and reach out to us for our off-market brownstones.";

export const HARLEM_BROWNSTONES_FOR_SALE_METAS = [
  { name: "description", content: DESCRIPTION },
  { name: "twitter:card", content: "summary_large_image" },
  { name: "twitter:description", content: DESCRIPTION },
  { name: "twitter:title", content: HARLEM_BROWNSTONES_FOR_SALE_TITLE },
  { property: "og:locale", content: "en_US" },
  { property: "og:type", content: "article" },
  { property: "og:title", content: HARLEM_BROWNSTONES_FOR_SALE_TITLE },
  { property: "og:description", content: DESCRIPTION },
  { property: "og:url", content: "https://montfortre.com/harlem-brownstones-for-sale/" },
  { property: "og:site_name", content: "Montfort Real Estate" },
  { property: "article:publisher", content: "https://www.facebook.com/montfortrealestate" },
  { property: "article:tag", content: "harlem brownstones" },
] as const;

export const HARLEM_BROWNSTONES_FOR_SALE_LINKS = [
  { rel: "canonical", href: "https://montfortre.com/harlem-brownstones-for-sale/" },
  { rel: "icon", href: "https://montfortre.com/redesign-assets/favicon-32.png", sizes: "32x32" },
  { rel: "icon", href: "https://montfortre.com/redesign-assets/favicon-192.png", sizes: "192x192" },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
  {
    href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,700&display=swap",
    rel: "stylesheet",
  },
] as const;

export const HARLEM_BROWNSTONES_FOR_SALE_JSON_LD = [
  '{"@context":"https://schema.org","@type":"Organization","url":"https://montfortre.com/","sameAs":["https://www.facebook.com/montfortrealestate","https://www.instagram.com/stanleymontfort/","https://www.linkedin.com/in/stanley-p-montfort-b3675548/","https://www.youtube.com/@montfortrealestate6984"],"@id":"https://montfortre.com/#organization","name":"Montfort Real Estate","logo":"https://montfortre.com/redesign-assets/logo-transparency-black-2022.png"}',
  '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"https://montfortre.com/","name":"Home"}},{"@type":"ListItem","position":2,"item":{"@id":"https://montfortre.com/harlem/","name":"Harlem"}},{"@type":"ListItem","position":3,"item":{"@id":"https://montfortre.com/harlem-brownstones-for-sale/","name":"Harlem Brownstones For Sale"}}]}',
  '{"@context":"https://schema.org","@type":"WebPage","name":"Harlem Brownstones For Sale - Dream New York Homes Without Overpaying","description":"Interested in Harlem Brownstones? Click the link above for the most recent Harlem Brownstones for sale, and reach out to us for our off-market brownstones.","url":"https://montfortre.com/harlem-brownstones-for-sale/","inLanguage":"en-US","isPartOf":{"@type":"WebSite","name":"Montfort Real Estate","url":"https://montfortre.com/"}}',
] as const;

export const HARLEM_BROWNSTONES_FOR_SALE_SEO: PageSeo = {
  title: HARLEM_BROWNSTONES_FOR_SALE_TITLE,
  metas: HARLEM_BROWNSTONES_FOR_SALE_METAS,
  links: HARLEM_BROWNSTONES_FOR_SALE_LINKS,
  jsonLd: HARLEM_BROWNSTONES_FOR_SALE_JSON_LD,
};

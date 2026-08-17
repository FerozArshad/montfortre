/** Frozen SEO for /upper-east-side-co-ops/ — do not edit values. */

import type { PageSeo } from "../types";

export const UPPER_EAST_SIDE_CO_OPS_TITLE = "Upper East Side Co-Ops | Montfort Real Estate";

const DESCRIPTION =
  "Explore Upper East Side co-ops with Montfort Real Estate. Discover luxury co-op apartments, historic residences, and investment opportunities in one of Manhattan’s most prestigious neighborhoods.";

export const UPPER_EAST_SIDE_CO_OPS_METAS = [
  { name: "description", content: DESCRIPTION },
  { name: "twitter:card", content: "summary_large_image" },
  { name: "twitter:description", content: DESCRIPTION },
  { name: "twitter:title", content: UPPER_EAST_SIDE_CO_OPS_TITLE },
  { property: "og:locale", content: "en_US" },
  { property: "og:type", content: "article" },
  { property: "og:title", content: UPPER_EAST_SIDE_CO_OPS_TITLE },
  { property: "og:description", content: DESCRIPTION },
  { property: "og:url", content: "https://montfortre.com/upper-east-side-co-ops/" },
  { property: "og:site_name", content: "Montfort Real Estate" },
  { property: "article:publisher", content: "https://www.facebook.com/montfortrealestate" },
] as const;

export const UPPER_EAST_SIDE_CO_OPS_LINKS = [
  { rel: "canonical", href: "https://montfortre.com/upper-east-side-co-ops/" },
  { rel: "icon", href: "https://montfortre.com/redesign-assets/favicon-32.png", sizes: "32x32" },
  { rel: "icon", href: "https://montfortre.com/redesign-assets/favicon-192.png", sizes: "192x192" },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
  {
    href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,700&display=swap",
    rel: "stylesheet",
  },
] as const;

export const UPPER_EAST_SIDE_CO_OPS_JSON_LD = [
  '{"@context":"https://schema.org","@type":"Organization","url":"https://montfortre.com/","sameAs":["https://www.facebook.com/montfortrealestate","https://www.instagram.com/stanleymontfort/","https://www.linkedin.com/in/stanley-p-montfort-b3675548/","https://www.youtube.com/@montfortrealestate6984"],"@id":"https://montfortre.com/#organization","name":"Montfort Real Estate","logo":"https://montfortre.com/redesign-assets/logo-transparency-black-2022.png"}',
  '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"https://montfortre.com/","name":"Home"}},{"@type":"ListItem","position":2,"item":{"@id":"https://montfortre.com/upper-east-side-co-ops/","name":"Upper East Side Co-Ops"}}]}',
  '{"@context":"https://schema.org","@type":"RealEstateAgent","@id":"https://montfortre.com/#real-estate-agent","name":"Montfort Real Estate","description":"NYC\'s brownstone and townhouse specialists with nearly a decade of experience serving Harlem, the Upper West Side and Brooklyn. We represent buyers and sellers with equal dedication — from first-time brownstone purchases to multifamily investment acquisitions, with condos and co-ops as part of our full-service offering. Our edge: block-by-block neighborhood expertise, exclusive off-market property access and a vetted network of trusted inspectors, attorneys and contractors. Buying a brownstone in Harlem, Crown Heights or Bed-Stuy? Selling a townhouse on the Upper West Side or in Brooklyn Heights? Our white-glove concierge approach delivers a seamless experience from first conversation to closing day. Call (646) 970-1078.","url":"https://montfortre.com","email":"sm@montfortre.com","telephone":"1-646-970-1078","faxNumber":"","priceRange":"","image":"https://montfortre.com/redesign-assets/favicon-icon.png","logo":"https://montfortre.com/redesign-assets/favicon-icon.png","address":{"@type":"PostalAddress","addressLocality":"New York","addressRegion":"NY","postalCode":"10027","streetAddress":"8 West 126th Street"},"sameAs":["https://www.facebook.com/montfortrealestate","https://www.linkedin.com/in/stanley-p-montfort-b3675548/","https://www.youtube.com/@montfortrealestate6984","https://www.instagram.com/stanleymontfort/"],"contactPoint":{"@type":"ContactPoint","contactType":"Customer Service","email":"sm@montfortre.com","telephone":"646-970-1078"}}',
  '{"@context":"https://schema.org","@type":"WebPage","name":"Upper East Side Co-Ops","description":"Upper East Side Co-Ops \u2014 Expert Guidance for Buyers, Sellers &amp; Investors We\u2019ll guide you through the Upper East Side co-op buying process by evaluating building policies, financial health, and board requirements to help you secure the right home with fewer risks Call 1-(646)-970-1078 Schedule A Consultation \u2713SMOOTH TRANSACTIONWith limited risk throughout the buying process.\u2713NO PRESSURENo pressure to overpay or","inLanguage":"en-US","datePublished":"2026-05-19T06:19:08+00:00","dateModified":"2026-07-29T11:55:42+00:00","isPartOf":{"@type":"WebSite","name":"Montfort Real Estate","url":"https://montfortre.com/"}}',
] as const;

export const UPPER_EAST_SIDE_CO_OPS_SEO: PageSeo = {
  title: UPPER_EAST_SIDE_CO_OPS_TITLE,
  metas: UPPER_EAST_SIDE_CO_OPS_METAS,
  links: UPPER_EAST_SIDE_CO_OPS_LINKS,
  jsonLd: UPPER_EAST_SIDE_CO_OPS_JSON_LD,
};

/** Frozen SEO for /downstone-brooklyn-co-ops/ — do not edit values. */

import type { PageSeo } from "../types";

export const DOWNSTONE_BROOKLYN_CO_OPS_TITLE = "Downstone Brooklyn Co-Ops | Montfort Real Estate";

const DESCRIPTION =
  "Explore Downtown Brooklyn co-ops with Montfort Real Estate. Discover co-op apartments, modern residences, and investment opportunities in one of Brooklyn’s fastest-growing neighborhoods.";

export const DOWNSTONE_BROOKLYN_CO_OPS_METAS = [
  { name: "description", content: DESCRIPTION },
  { name: "twitter:card", content: "summary_large_image" },
  { name: "twitter:description", content: DESCRIPTION },
  { name: "twitter:title", content: DOWNSTONE_BROOKLYN_CO_OPS_TITLE },
  { property: "og:locale", content: "en_US" },
  { property: "og:type", content: "article" },
  { property: "og:title", content: DOWNSTONE_BROOKLYN_CO_OPS_TITLE },
  { property: "og:description", content: DESCRIPTION },
  { property: "og:url", content: "https://montfortre.com/downstone-brooklyn-co-ops/" },
  { property: "og:site_name", content: "Montfort Real Estate" },
  { property: "article:publisher", content: "https://www.facebook.com/montfortrealestate" },
] as const;

export const DOWNSTONE_BROOKLYN_CO_OPS_LINKS = [
  { rel: "canonical", href: "https://montfortre.com/downstone-brooklyn-co-ops/" },
  { rel: "icon", href: "https://montfortre.com/redesign-assets/favicon-32.png", sizes: "32x32" },
  { rel: "icon", href: "https://montfortre.com/redesign-assets/favicon-192.png", sizes: "192x192" },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
  {
    href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,700&display=swap",
    rel: "stylesheet",
  },
] as const;

export const DOWNSTONE_BROOKLYN_CO_OPS_JSON_LD = [
  '{"@context":"https://schema.org","@type":"Organization","url":"https://montfortre.com/","sameAs":["https://www.facebook.com/montfortrealestate","https://www.instagram.com/stanleymontfort/","https://www.linkedin.com/in/stanley-p-montfort-b3675548/","https://www.youtube.com/@montfortrealestate6984"],"@id":"https://montfortre.com/#organization","name":"Montfort Real Estate","logo":"https://montfortre.com/redesign-assets/logo-transparency-black-2022.png"}',
  '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"https://montfortre.com/","name":"Home"}},{"@type":"ListItem","position":2,"item":{"@id":"https://montfortre.com/downstone-brooklyn-co-ops/","name":"Downstone Brooklyn Co-Ops"}}]}',
  '{"@context":"https://schema.org","@type":"RealEstateAgent","@id":"https://montfortre.com/#real-estate-agent","name":"Montfort Real Estate","description":"NYC\'s brownstone and townhouse specialists with nearly a decade of experience serving Harlem, the Upper West Side and Brooklyn. We represent buyers and sellers with equal dedication — from first-time brownstone purchases to multifamily investment acquisitions, with condos and co-ops as part of our full-service offering. Our edge: block-by-block neighborhood expertise, exclusive off-market property access and a vetted network of trusted inspectors, attorneys and contractors. Buying a brownstone in Harlem, Crown Heights or Bed-Stuy? Selling a townhouse on the Upper West Side or in Brooklyn Heights? Our white-glove concierge approach delivers a seamless experience from first conversation to closing day. Call (646) 970-1078.","url":"https://montfortre.com","email":"sm@montfortre.com","telephone":"1-646-970-1078","faxNumber":"","priceRange":"","image":"https://montfortre.com/redesign-assets/favicon-icon.png","logo":"https://montfortre.com/redesign-assets/favicon-icon.png","address":{"@type":"PostalAddress","addressLocality":"New York","addressRegion":"NY","postalCode":"10027","streetAddress":"8 West 126th Street"},"sameAs":["https://www.facebook.com/montfortrealestate","https://www.linkedin.com/in/stanley-p-montfort-b3675548/","https://www.youtube.com/@montfortrealestate6984","https://www.instagram.com/stanleymontfort/"],"contactPoint":{"@type":"ContactPoint","contactType":"Customer Service","email":"sm@montfortre.com","telephone":"646-970-1078"}}',
  '{"@context":"https://schema.org","@type":"WebPage","name":"Downstone Brooklyn Co-Ops","description":"Downtown Brooklyn co-ops From off-market multifamily investments to precision mortgage planning, we provide the data, tools, and local expertise needed to master the world\u2019s most complex property market. Call 1-(646)-970-1078 Schedule Consultation Heading Looking for a specific real estate service? You\u2019re in the right place. We handle everything from precision home valuations to complex multifamily investment strategies. Browse our specialized","inLanguage":"en-US","datePublished":"2026-05-19T06:25:15+00:00","dateModified":"2026-07-29T12:00:17+00:00","isPartOf":{"@type":"WebSite","name":"Montfort Real Estate","url":"https://montfortre.com/"}}',
] as const;

export const DOWNSTONE_BROOKLYN_CO_OPS_SEO: PageSeo = {
  title: DOWNSTONE_BROOKLYN_CO_OPS_TITLE,
  metas: DOWNSTONE_BROOKLYN_CO_OPS_METAS,
  links: DOWNSTONE_BROOKLYN_CO_OPS_LINKS,
  jsonLd: DOWNSTONE_BROOKLYN_CO_OPS_JSON_LD,
};

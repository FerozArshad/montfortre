/** Frozen SEO for /crown-heights-co-ops-2/ — do not edit values. */

import type { PageSeo } from "../types";

export const CROWN_HEIGHTS_CO_OPS_TITLE = "Crown Heights Co-Ops | Montfort Real Estate";

const DESCRIPTION =
  "Explore Crown Heights co-ops with Montfort Real Estate. Discover co-op apartments, historic residences, and investment opportunities in the heart of Crown Heights Brooklyn";

export const CROWN_HEIGHTS_CO_OPS_METAS = [
  { name: "description", content: DESCRIPTION },
  { name: "twitter:card", content: "summary_large_image" },
  { name: "twitter:description", content: DESCRIPTION },
  { name: "twitter:title", content: CROWN_HEIGHTS_CO_OPS_TITLE },
  { property: "og:locale", content: "en_US" },
  { property: "og:type", content: "article" },
  { property: "og:title", content: CROWN_HEIGHTS_CO_OPS_TITLE },
  { property: "og:description", content: DESCRIPTION },
  { property: "og:url", content: "https://montfortre.com/crown-heights-co-ops-2/" },
  { property: "og:site_name", content: "Montfort Real Estate" },
  { property: "article:publisher", content: "https://www.facebook.com/montfortrealestate" },
] as const;

export const CROWN_HEIGHTS_CO_OPS_LINKS = [
  { rel: "canonical", href: "https://montfortre.com/crown-heights-co-ops-2/" },
  { rel: "icon", href: "https://montfortre.com/redesign-assets/favicon-32.png", sizes: "32x32" },
  { rel: "icon", href: "https://montfortre.com/redesign-assets/favicon-192.png", sizes: "192x192" },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
  {
    href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,700&display=swap",
    rel: "stylesheet",
  },
] as const;

export const CROWN_HEIGHTS_CO_OPS_JSON_LD = [
  '{"@context":"https://schema.org","@type":"Organization","url":"https://montfortre.com/","sameAs":["https://www.facebook.com/montfortrealestate","https://www.instagram.com/stanleymontfort/","https://www.linkedin.com/in/stanley-p-montfort-b3675548/","https://www.youtube.com/@montfortrealestate6984"],"@id":"https://montfortre.com/#organization","name":"Montfort Real Estate","logo":"https://montfortre.com/redesign-assets/logo-transparency-black-2022.png"}',
  "{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"item\":{\"@id\":\"https://montfortre.com/\",\"name\":\"Home\"}},{\"@type\":\"ListItem\",\"position\":2,\"item\":{\"@id\":\"https://montfortre.com/crown-heights-co-ops-2/\",\"name\":\"Crown Heights Co-Ops\"}}]}",
  '{"@context":"https://schema.org","@type":"RealEstateAgent","@id":"https://montfortre.com/#real-estate-agent","name":"Montfort Real Estate","description":"NYC\'s brownstone and townhouse specialists with nearly a decade of experience serving Harlem, the Upper West Side and Brooklyn. We represent buyers and sellers with equal dedication — from first-time brownstone purchases to multifamily investment acquisitions, with condos and co-ops as part of our full-service offering. Our edge: block-by-block neighborhood expertise, exclusive off-market property access and a vetted network of trusted inspectors, attorneys and contractors. Buying a brownstone in Harlem, Crown Heights or Bed-Stuy? Selling a townhouse on the Upper West Side or in Brooklyn Heights? Our white-glove concierge approach delivers a seamless experience from first conversation to closing day. Call (646) 970-1078.","url":"https://montfortre.com","email":"sm@montfortre.com","telephone":"1-646-970-1078","faxNumber":"","priceRange":"","image":"https://montfortre.com/redesign-assets/favicon-icon.png","logo":"https://montfortre.com/redesign-assets/favicon-icon.png","address":{"@type":"PostalAddress","addressLocality":"New York","addressRegion":"NY","postalCode":"10027","streetAddress":"8 West 126th Street"},"sameAs":["https://www.facebook.com/montfortrealestate","https://www.linkedin.com/in/stanley-p-montfort-b3675548/","https://www.youtube.com/@montfortrealestate6984","https://www.instagram.com/stanleymontfort/"],"contactPoint":{"@type":"ContactPoint","contactType":"Customer Service","email":"sm@montfortre.com","telephone":"646-970-1078"}}',
  "{\"@context\":\"https://schema.org\",\"@type\":\"WebPage\",\"name\":\"Crown Heights Co-Ops\",\"description\":\"Crown Heights Co-Ops \\u2014 Expert Guidance for Buyers, Sellers &amp; Investors We&#039;ll guide you through the Crown Heights co-op buying process, helping you navigate board requirements, financial reviews, and avoid costly mistakes Call 1-(646)-970-1078 Schedule A Consultation Complete Guide to Buying Crown Heights Co-ops: Expert Buyer&#039;s Agent InsightsExpert Crown Heights Co-op Buying ServicesBuying a co-op in Crown Heights is one\",\"inLanguage\":\"en-US\",\"datePublished\":\"2026-05-19T06:45:58+00:00\",\"dateModified\":\"2026-07-29T13:02:00+00:00\",\"isPartOf\":{\"@type\":\"WebSite\",\"name\":\"Montfort Real Estate\",\"url\":\"https://montfortre.com/\"}}",
] as const;

export const CROWN_HEIGHTS_CO_OPS_SEO: PageSeo = {
  title: CROWN_HEIGHTS_CO_OPS_TITLE,
  metas: CROWN_HEIGHTS_CO_OPS_METAS,
  links: CROWN_HEIGHTS_CO_OPS_LINKS,
  jsonLd: CROWN_HEIGHTS_CO_OPS_JSON_LD,
};

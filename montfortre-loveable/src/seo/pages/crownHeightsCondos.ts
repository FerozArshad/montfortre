/** Frozen SEO for /crown-heights-condos-2/ — do not edit values. */

import type { PageSeo } from "../types";

export const CROWN_HEIGHTS_CONDOS_TITLE = "Crown Heights Condos | Montfort Real Estate";

const DESCRIPTION =
  "Explore Crown Heights condos with Montfort Real Estate. Discover luxury condos, modern residences, and investment opportunities in one of Brooklyn’s fastest-growing neighborhoods";

export const CROWN_HEIGHTS_CONDOS_METAS = [
  { name: "description", content: DESCRIPTION },
  { name: "twitter:card", content: "summary_large_image" },
  { name: "twitter:description", content: DESCRIPTION },
  { name: "twitter:title", content: CROWN_HEIGHTS_CONDOS_TITLE },
  { property: "og:locale", content: "en_US" },
  { property: "og:type", content: "article" },
  { property: "og:title", content: CROWN_HEIGHTS_CONDOS_TITLE },
  { property: "og:description", content: DESCRIPTION },
  { property: "og:url", content: "https://montfortre.com/crown-heights-condos-2/" },
  { property: "og:site_name", content: "Montfort Real Estate" },
  { property: "article:publisher", content: "https://www.facebook.com/montfortrealestate" },
] as const;

export const CROWN_HEIGHTS_CONDOS_LINKS = [
  { rel: "canonical", href: "https://montfortre.com/crown-heights-condos-2/" },
  { rel: "icon", href: "https://montfortre.com/redesign-assets/favicon-32.png", sizes: "32x32" },
  { rel: "icon", href: "https://montfortre.com/redesign-assets/favicon-192.png", sizes: "192x192" },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
  {
    href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,700&display=swap",
    rel: "stylesheet",
  },
] as const;

export const CROWN_HEIGHTS_CONDOS_JSON_LD = [
  '{"@context":"https://schema.org","@type":"Organization","url":"https://montfortre.com/","sameAs":["https://www.facebook.com/montfortrealestate","https://www.instagram.com/stanleymontfort/","https://www.linkedin.com/in/stanley-p-montfort-b3675548/","https://www.youtube.com/@montfortrealestate6984"],"@id":"https://montfortre.com/#organization","name":"Montfort Real Estate","logo":"https://montfortre.com/redesign-assets/logo-transparency-black-2022.png"}',
  "{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"item\":{\"@id\":\"https://montfortre.com/\",\"name\":\"Home\"}},{\"@type\":\"ListItem\",\"position\":2,\"item\":{\"@id\":\"https://montfortre.com/crown-heights-condos-2/\",\"name\":\"Crown Heights Condos\"}}]}",
  '{"@context":"https://schema.org","@type":"RealEstateAgent","@id":"https://montfortre.com/#real-estate-agent","name":"Montfort Real Estate","description":"NYC\'s brownstone and townhouse specialists with nearly a decade of experience serving Harlem, the Upper West Side and Brooklyn. We represent buyers and sellers with equal dedication — from first-time brownstone purchases to multifamily investment acquisitions, with condos and co-ops as part of our full-service offering. Our edge: block-by-block neighborhood expertise, exclusive off-market property access and a vetted network of trusted inspectors, attorneys and contractors. Buying a brownstone in Harlem, Crown Heights or Bed-Stuy? Selling a townhouse on the Upper West Side or in Brooklyn Heights? Our white-glove concierge approach delivers a seamless experience from first conversation to closing day. Call (646) 970-1078.","url":"https://montfortre.com","email":"sm@montfortre.com","telephone":"1-646-970-1078","faxNumber":"","priceRange":"","image":"https://montfortre.com/redesign-assets/favicon-icon.png","logo":"https://montfortre.com/redesign-assets/favicon-icon.png","address":{"@type":"PostalAddress","addressLocality":"New York","addressRegion":"NY","postalCode":"10027","streetAddress":"8 West 126th Street"},"sameAs":["https://www.facebook.com/montfortrealestate","https://www.linkedin.com/in/stanley-p-montfort-b3675548/","https://www.youtube.com/@montfortrealestate6984","https://www.instagram.com/stanleymontfort/"],"contactPoint":{"@type":"ContactPoint","contactType":"Customer Service","email":"sm@montfortre.com","telephone":"646-970-1078"}}',
  "{\"@context\":\"https://schema.org\",\"@type\":\"WebPage\",\"name\":\"Crown Heights Condos\",\"description\":\"Crown Heights Condos \\u2014 Expert Guidance for Buyers, Sellers &amp; Investors We&#039;ll help you purchase the right Crown Heights condo by avoiding overpriced listings, unexpected HOA costs, and properties that don&#039;t fit your long-term goals. Call 1-(646)-970-1078 Schedule A Consultation \\u2713SMOOTH TRANSACTIONWith limited risk throughout the buying process.\\u2713NO PRESSURENo pressure to overpay or purchase within a specific timeframe.\\u2713ONGOING SUPPORTA dedicated\",\"inLanguage\":\"en-US\",\"datePublished\":\"2026-05-19T06:45:02+00:00\",\"dateModified\":\"2026-07-29T13:01:12+00:00\",\"isPartOf\":{\"@type\":\"WebSite\",\"name\":\"Montfort Real Estate\",\"url\":\"https://montfortre.com/\"}}",
] as const;

export const CROWN_HEIGHTS_CONDOS_SEO: PageSeo = {
  title: CROWN_HEIGHTS_CONDOS_TITLE,
  metas: CROWN_HEIGHTS_CONDOS_METAS,
  links: CROWN_HEIGHTS_CONDOS_LINKS,
  jsonLd: CROWN_HEIGHTS_CONDOS_JSON_LD,
};

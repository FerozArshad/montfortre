/** Frozen SEO for /neighborhoods/ — do not edit values. */

import type { PageSeo } from "../types";

export const NEIGHBORHOODS_TITLE = "Neighborhoods | Montfort Real Estate";

export const NEIGHBORHOODS_METAS = [
  {
    "name": "description",
    "content": "Explore NYC neighborhoods across Manhattan and Brooklyn. Compare lifestyle, pricing, architecture, and real estate opportunities with Montfort Real Estate."
  },
  {
    "property": "og:locale",
    "content": "en_US"
  },
  {
    "property": "og:type",
    "content": "article"
  },
  {
    "property": "og:title",
    "content": "Neighborhoods | Montfort Real Estate"
  },
  {
    "property": "og:description",
    "content": "Explore NYC neighborhoods across Manhattan and Brooklyn. Compare lifestyle, pricing, architecture, and real estate opportunities with Montfort Real Estate."
  },
  {
    "property": "og:url",
    "content": "https://montfortre.com/neighborhoods/"
  },
  {
    "property": "og:site_name",
    "content": "Montfort Real Estate"
  },
  {
    "name": "twitter:card",
    "content": "summary_large_image"
  },
  {
    "name": "twitter:description",
    "content": "Explore NYC neighborhoods across Manhattan and Brooklyn. Compare lifestyle, pricing, architecture, and real estate opportunities with Montfort Real Estate."
  },
  {
    "name": "twitter:title",
    "content": "Neighborhoods | Montfort Real Estate"
  }
] as const;

export const NEIGHBORHOODS_LINKS = [
  {
    "rel": "canonical",
    "href": "https://montfortre.com/neighborhoods/"
  }
] as const;

export const NEIGHBORHOODS_JSON_LD = [
  "{\"@context\":\"https://schema.org\",\"@type\":\"Organization\",\"url\":\"https://montfortre.com/\",\"sameAs\":[\"https://www.facebook.com/montfortrealestate\",\"https://www.instagram.com/stanleymontfort/\",\"https://www.linkedin.com/in/stanley-p-montfort-b3675548/\",\"https://www.youtube.com/@montfortrealestate6984\"],\"@id\":\"https://montfortre.com/#organization\",\"name\":\"Montfort Real Estate\",\"logo\":\"https://assets.agentfire3.com/uploads/sites/312/2022/10/Logo-Transparency-black.png\"}",
  "{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"item\":{\"@id\":\"https://montfortre.com/\",\"name\":\"Home\"}},{\"@type\":\"ListItem\",\"position\":2,\"item\":{\"@id\":\"https://montfortre.com/neighborhoods/\",\"name\":\"Neighborhoods\"}}]}",
  "{\"@context\":\"https://schema.org\",\"@type\":\"RealEstateAgent\",\"@id\":\"https://montfortre.com/#real-estate-agent\",\"name\":\"Montfort Real Estate\",\"description\":\"NYC's brownstone and townhouse specialists with nearly a decade of experience serving Harlem, the Upper West Side and Brooklyn. We represent buyers and sellers with equal dedication \\u2014 from first-time brownstone purchases to multifamily investment acquisitions, with condos and co-ops as part of our full-service offering. Our edge: block-by-block neighborhood expertise, exclusive off-market property access and a vetted network of trusted inspectors, attorneys and contractors. Buying a brownstone in Harlem, Crown Heights or Bed-Stuy? Selling a townhouse on the Upper West Side or in Brooklyn Heights? Our white-glove concierge approach delivers a seamless experience from first conversation to closing day. Call (646) 970-1078.\",\"url\":\"https://montfortre.com\",\"email\":\"sm@montfortre.com\",\"telephone\":\"1-646-970-1078\",\"faxNumber\":\"\",\"priceRange\":\"\",\"image\":\"https://assets.agentfire3.com/uploads/sites/312/2021/11/Icon-Favicon-black.png\",\"logo\":\"https://assets.agentfire3.com/uploads/sites/312/2021/11/Icon-Favicon-black.png\",\"address\":{\"@type\":\"PostalAddress\",\"addressLocality\":\"New York\",\"addressRegion\":\"NY\",\"postalCode\":\"10027\",\"streetAddress\":\"8 West 126th Street\"},\"sameAs\":[\"https://www.facebook.com/montfortrealestate\",\"https://www.linkedin.com/in/stanley-p-montfort-b3675548/\",\"https://www.youtube.com/@montfortrealestate6984\",\"https://www.instagram.com/stanleymontfort/\"],\"contactPoint\":{\"@type\":\"ContactPoint\",\"contactType\":\"Customer Service\",\"email\":\"sm@montfortre.com\",\"telephone\":\"646-970-1078\"}}",
  "{\"@context\":\"https://schema.org\",\"@type\":\"WebPage\",\"name\":\"Neighborhoods\",\"description\":\"NYC Neighborhoods \\u2014 Expert Local Insights for Buyers, Sellers &amp; Investors We&#039;ll help you find the right NYC neighborhood based on your lifestyle, budget, and long-term goals\\u2014so you can buy with confidence and avoid costly mistakes Call 1-(646)-970-1078 Schedule A Constulation \\u2713SMOOTH TRANSACTIONWith limited risk throughout the buying process.\\u2713NO PRESSURENo pressure to overpay or purchase within a specific timeframe.\\u2713ONGOING SUPPORTA\",\"inLanguage\":\"en-US\",\"datePublished\":\"2026-05-06T06:25:53+00:00\",\"dateModified\":\"2026-08-05T20:43:34+00:00\",\"isPartOf\":{\"@type\":\"WebSite\",\"name\":\"Montfort Real Estate\",\"url\":\"https://montfortre.com/\"}}"
] as const;

export const NEIGHBORHOODS_SEO: PageSeo = {
  title: NEIGHBORHOODS_TITLE,
  metas: NEIGHBORHOODS_METAS,
  links: NEIGHBORHOODS_LINKS,
  jsonLd: NEIGHBORHOODS_JSON_LD,
};

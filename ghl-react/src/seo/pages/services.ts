/** Frozen SEO for /services/ — do not edit values. */

import type { PageSeo } from "../types";

export const SERVICES_TITLE = "Services | Montfort Real Estate";

export const SERVICES_METAS = [
  {
    "name": "description",
    "content": "Explore Montfort Real Estate’s luxury real estate services in NYC, including buyer representation, home selling strategies, property investment guidance, multifamily real estate, co-ops, condos, and townhomes across Manhattan and Brooklyn."
  },
  {
    "name": "twitter:card",
    "content": "summary_large_image"
  },
  {
    "name": "twitter:title",
    "content": "Services | Montfort Real Estate"
  },
  {
    "name": "twitter:description",
    "content": "Explore Montfort Real Estate’s luxury real estate services in NYC, including buyer representation, home selling strategies, property investment guidance, multifamily real estate, co-ops, condos, and townhomes across Manhattan and Brooklyn."
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
    "content": "Services | Montfort Real Estate"
  },
  {
    "property": "og:description",
    "content": "Explore Montfort Real Estate’s luxury real estate services in NYC, including buyer representation, home selling strategies, property investment guidance, multifamily real estate, co-ops, condos, and townhomes across Manhattan and Brooklyn."
  },
  {
    "property": "og:url",
    "content": "https://montfortre.com/services/"
  },
  {
    "property": "og:site_name",
    "content": "Montfort Real Estate"
  },
  {
    "property": "article:publisher",
    "content": "https://www.facebook.com/montfortrealestate"
  }
] as const;

export const SERVICES_LINKS = [
  {
    "rel": "canonical",
    "href": "https://montfortre.com/services/"
  },
  {
    "rel": "icon",
    "href": "https://montfortre.com/redesign-assets/favicon-32.png",
    "sizes": "32x32"
  },
  {
    "rel": "icon",
    "href": "https://montfortre.com/redesign-assets/favicon-192.png",
    "sizes": "192x192"
  },
  {
    "rel": "preconnect",
    "href": "https://fonts.googleapis.com"
  },
  {
    "rel": "preconnect",
    "href": "https://fonts.gstatic.com",
    "crossorigin": ""
  },
  {
    "href": "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,700&display=swap",
    "rel": "stylesheet"
  }
] as const;

export const SERVICES_JSON_LD = [
  "{\"@context\":\"https://schema.org\",\"@type\":\"Organization\",\"url\":\"https://montfortre.com/\",\"sameAs\":[\"https://www.facebook.com/montfortrealestate\",\"https://www.instagram.com/stanleymontfort/\",\"https://www.linkedin.com/in/stanley-p-montfort-b3675548/\",\"https://www.youtube.com/@montfortrealestate6984\"],\"@id\":\"https://montfortre.com/#organization\",\"name\":\"Montfort Real Estate\",\"logo\":\"https://montfortre.com/redesign-assets/logo-transparency-black-2022.png\"}",
  "{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"item\":{\"@id\":\"https://montfortre.com/\",\"name\":\"Home\"}},{\"@type\":\"ListItem\",\"position\":2,\"item\":{\"@id\":\"https://montfortre.com/services/\",\"name\":\"Services\"}}]}",
  "{\"@context\":\"https://schema.org\",\"@type\":\"RealEstateAgent\",\"@id\":\"https://montfortre.com/#real-estate-agent\",\"name\":\"Montfort Real Estate\",\"description\":\"NYC's brownstone and townhouse specialists with nearly a decade of experience serving Harlem, the Upper West Side and Brooklyn. We represent buyers and sellers with equal dedication \\u2014 from first-time brownstone purchases to multifamily investment acquisitions, with condos and co-ops as part of our full-service offering. Our edge: block-by-block neighborhood expertise, exclusive off-market property access and a vetted network of trusted inspectors, attorneys and contractors. Buying a brownstone in Harlem, Crown Heights or Bed-Stuy? Selling a townhouse on the Upper West Side or in Brooklyn Heights? Our white-glove concierge approach delivers a seamless experience from first conversation to closing day. Call (646) 970-1078.\",\"url\":\"https://montfortre.com\",\"email\":\"sm@montfortre.com\",\"telephone\":\"1-646-970-1078\",\"faxNumber\":\"\",\"priceRange\":\"\",\"image\":\"https://montfortre.com/redesign-assets/favicon-icon.png\",\"logo\":\"https://montfortre.com/redesign-assets/favicon-icon.png\",\"address\":{\"@type\":\"PostalAddress\",\"addressLocality\":\"New York\",\"addressRegion\":\"NY\",\"postalCode\":\"10027\",\"streetAddress\":\"8 West 126th Street\"},\"sameAs\":[\"https://www.facebook.com/montfortrealestate\",\"https://www.linkedin.com/in/stanley-p-montfort-b3675548/\",\"https://www.youtube.com/@montfortrealestate6984\",\"https://www.instagram.com/stanleymontfort/\"],\"contactPoint\":{\"@type\":\"ContactPoint\",\"contactType\":\"Customer Service\",\"email\":\"sm@montfortre.com\",\"telephone\":\"646-970-1078\"}}",
  "{\"@context\":\"https://schema.org\",\"@type\":\"WebPage\",\"name\":\"Services\",\"description\":\"NYC Realtor Services \\u2014 Expert Representation for Buyers, Sellers &amp; Investors Whether you&#039;re buying or selling, our team helps you avoid costly mistakes, negotiate with confidence, and achieve the best possible outcome for your real estate goals. Call 1-(646)-970-1078 Schedule a Consultation \\u2713SMOOTH TRANSACTIONWith limited risk throughout the buying process.\\u2713NO PRESSURENo pressure to overpay or purchase within a specific timeframe.\\u2713ONGOING\",\"inLanguage\":\"en-US\",\"datePublished\":\"2026-04-27T11:08:42+00:00\",\"dateModified\":\"2026-08-01T13:30:23+00:00\",\"isPartOf\":{\"@type\":\"WebSite\",\"name\":\"Montfort Real Estate\",\"url\":\"https://montfortre.com/\"}}"
] as const;

export const SERVICES_SEO: PageSeo = {
  title: SERVICES_TITLE,
  metas: SERVICES_METAS,
  links: SERVICES_LINKS,
  jsonLd: SERVICES_JSON_LD,
};

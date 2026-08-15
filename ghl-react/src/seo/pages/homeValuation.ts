/** Frozen SEO for /home-valuation/ — do not edit values. */

import type { PageSeo } from "../types";

export const HOME_VALUATION_TITLE = "Home Valuation | Montfort Real Estate";

const DESCRIPTION =
  "Get a free home valuation for your NYC property. Receive instant estimates and expert insights for condos, co-ops, brownstones, and multifamily homes across Manhattan and Brooklyn.";

export const HOME_VALUATION_METAS = [
  { name: "description", content: DESCRIPTION },
  { name: "twitter:card", content: "summary_large_image" },
  { name: "twitter:description", content: DESCRIPTION },
  { name: "twitter:title", content: HOME_VALUATION_TITLE },
  { property: "og:locale", content: "en_US" },
  { property: "og:type", content: "article" },
  { property: "og:title", content: HOME_VALUATION_TITLE },
  { property: "og:description", content: DESCRIPTION },
  { property: "og:url", content: "https://montfortre.com/home-valuation/" },
  { property: "og:site_name", content: "Montfort Real Estate" },
  { property: "article:publisher", content: "https://www.facebook.com/montfortrealestate" },
] as const;

export const HOME_VALUATION_LINKS = [
  { rel: "canonical", href: "https://montfortre.com/home-valuation/" },
  { rel: "icon", href: "https://montfortre.com/redesign-assets/favicon-32.png", sizes: "32x32" },
  { rel: "icon", href: "https://montfortre.com/redesign-assets/favicon-192.png", sizes: "192x192" },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
  {
    href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,700&display=swap",
    rel: "stylesheet",
  },
] as const;

export const HOME_VALUATION_JSON_LD = [
  '{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How accurate are online home value estimators?","acceptedAnswer":{"@type":"Answer","text":"Online home value estimators use automated valuation models and public data, but they may not account for property condition, renovations, or hyper-local market trends, making them less accurate than a professional valuation."}},{"@type":"Question","name":"What is the difference between a home estimate and an appraisal?","acceptedAnswer":{"@type":"Answer","text":"A home estimate is generated using algorithms and public data, while a professional appraisal is conducted by a licensed appraiser who physically evaluates the property and local market conditions."}},{"@type":"Question","name":"How can I get the most accurate home value in NYC?","acceptedAnswer":{"@type":"Answer","text":"The most accurate home value comes from combining market data, comparable sales, and guidance from an experienced local real estate agent who understands NYC-specific pricing dynamics."}}]}',
  '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://montfortre.com/"},{"@type":"ListItem","position":2,"name":"Services","item":"https://montfortre.com/services/"},{"@type":"ListItem","position":3,"name":"Free Home Valuation Service","item":"https://montfortre.com/home-valuation/"}]}',
  '{"@context":"https://schema.org","@type":"Service","serviceType":"Free NYC Home Valuation Services","provider":{"@type":"RealEstateAgent","name":"Stanley Montfort Real Estate","url":"https://montfortre.com/"},"areaServed":{"@type":"City","name":"New York City"},"description":"Free home valuation services in New York City including property analysis, pricing strategy, comparable sales review, and local market guidance.","url":"https://montfortre.com/home-valuation/"}',
  '{"@context":"https://schema.org","@type":"Organization","url":"https://montfortre.com/","sameAs":["https://www.facebook.com/montfortrealestate","https://www.instagram.com/stanleymontfort/","https://www.linkedin.com/in/stanley-p-montfort-b3675548/","https://www.youtube.com/@montfortrealestate6984"],"@id":"https://montfortre.com/#organization","name":"Montfort Real Estate","logo":"https://montfortre.com/redesign-assets/logo-transparency-black-2022.png"}',
  '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"https://montfortre.com/","name":"Home"}},{"@type":"ListItem","position":2,"item":{"@id":"https://montfortre.com/home-valuation/","name":"Home Valuation"}}]}',
  '{"@context":"https://schema.org","@type":"RealEstateAgent","@id":"https://montfortre.com/#real-estate-agent","name":"Montfort Real Estate","description":"NYC\'s brownstone and townhouse specialists with nearly a decade of experience serving Harlem, the Upper West Side and Brooklyn. We represent buyers and sellers with equal dedication — from first-time brownstone purchases to multifamily investment acquisitions, with condos and co-ops as part of our full-service offering. Our edge: block-by-block neighborhood expertise, exclusive off-market property access and a vetted network of trusted inspectors, attorneys and contractors. Buying a brownstone in Harlem, Crown Heights or Bed-Stuy? Selling a townhouse on the Upper West Side or in Brooklyn Heights? Our white-glove concierge approach delivers a seamless experience from first conversation to closing day. Call (646) 970-1078.","url":"https://montfortre.com","email":"sm@montfortre.com","telephone":"1-646-970-1078","faxNumber":"","priceRange":"","image":"https://montfortre.com/redesign-assets/favicon-icon.png","logo":"https://montfortre.com/redesign-assets/favicon-icon.png","address":{"@type":"PostalAddress","addressLocality":"New York","addressRegion":"NY","postalCode":"10027","streetAddress":"8 West 126th Street"},"sameAs":["https://www.facebook.com/montfortrealestate","https://www.linkedin.com/in/stanley-p-montfort-b3675548/","https://www.youtube.com/@montfortrealestate6984","https://www.instagram.com/stanleymontfort/"],"contactPoint":{"@type":"ContactPoint","contactType":"Customer Service","email":"sm@montfortre.com","telephone":"646-970-1078"}}',
  '{"@context":"https://schema.org","@type":"WebPage","name":"Home Valuation","description":"Please wait while we generate your report FREE HOME VALUATION Generate a free home estimate in just three simple steps Search Property Type Property Type Single-Family Condo Multi-Family Townhouse Mobile/Manufactured Timeshare Land Commercial Other Beds Beds 1 Bedroom 2 Bedrooms 3 Bedrooms 4 Bedrooms 5 Bedrooms 6 Bedrooms 7 Bedrooms 8 Bedrooms 9 Bedrooms 10 Bedrooms More than 10 Beds","inLanguage":"en-US","datePublished":"2021-06-03T13:08:41+00:00","dateModified":"2026-07-04T11:37:37+00:00","isPartOf":{"@type":"WebSite","name":"Montfort Real Estate","url":"https://montfortre.com/"}}',
] as const;

export const HOME_VALUATION_SEO: PageSeo = {
  title: HOME_VALUATION_TITLE,
  metas: HOME_VALUATION_METAS,
  links: HOME_VALUATION_LINKS,
  jsonLd: HOME_VALUATION_JSON_LD,
};

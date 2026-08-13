/** Frozen SEO for /success-stories/ — do not edit values. */

import type { PageSeo } from "../types";

export const SUCCESS_STORIES_TITLE = "Success Stories | Montfort Real Estate";

export const SUCCESS_STORIES_METAS = [
  {
    name: "description",
    content: "Read reviews from real clients about what they think of Montfort Real Estate % %",
  },
  { name: "twitter:card", content: "summary_large_image" },
  { name: "twitter:title", content: "Success Stories | Montfort Real Estate" },
  {
    name: "twitter:description",
    content: "Read reviews from real clients about what they think of Montfort Real Estate % %",
  },
  { property: "og:locale", content: "en_US" },
  { property: "og:type", content: "article" },
  { property: "og:title", content: "Success Stories | Montfort Real Estate" },
  {
    property: "og:description",
    content: "Read reviews from real clients about what they think of Montfort Real Estate % %",
  },
  { property: "og:url", content: "https://montfortre.com/success-stories/" },
  { property: "og:site_name", content: "Montfort Real Estate" },
  { property: "article:publisher", content: "https://www.facebook.com/montfortrealestate" },
] as const;

export const SUCCESS_STORIES_LINKS = [
  { rel: "canonical", href: "https://montfortre.com/success-stories/" },
  {
    rel: "icon",
    href: "https://assets.agentfire3.com/uploads/sites/312/2021/11/Icon-Favicon-black-32x32.max.png",
    sizes: "32x32",
  },
  {
    rel: "icon",
    href: "https://assets.agentfire3.com/uploads/sites/312/2021/11/Icon-Favicon-black-192x192.max.png",
    sizes: "192x192",
  },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
  {
    href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,700&display=swap",
    rel: "stylesheet",
  },
] as const;

export const SUCCESS_STORIES_JSON_LD = [
  '{"@context":"https://schema.org","@type":"Organization","url":"https://montfortre.com/","sameAs":["https://www.facebook.com/montfortrealestate","https://www.instagram.com/stanleymontfort/","https://www.linkedin.com/in/stanley-p-montfort-b3675548/","https://www.youtube.com/@montfortrealestate6984"],"@id":"https://montfortre.com/#organization","name":"Montfort Real Estate","logo":"https://assets.agentfire3.com/uploads/sites/312/2022/10/Logo-Transparency-black.png"}',
  '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"https://montfortre.com/","name":"Home"}},{"@type":"ListItem","position":2,"item":{"@id":"https://montfortre.com/success-stories/","name":"Success Stories"}}]}',
  '{"@context":"https://schema.org","@type":"RealEstateAgent","@id":"https://montfortre.com/#real-estate-agent","name":"Montfort Real Estate","description":"NYC\'s brownstone and townhouse specialists with nearly a decade of experience serving Harlem, the Upper West Side and Brooklyn. We represent buyers and sellers with equal dedication \\u2014 from first-time brownstone purchases to multifamily investment acquisitions, with condos and co-ops as part of our full-service offering. Our edge: block-by-block neighborhood expertise, exclusive off-market property access and a vetted network of trusted inspectors, attorneys and contractors. Buying a brownstone in Harlem, Crown Heights or Bed-Stuy? Selling a townhouse on the Upper West Side or in Brooklyn Heights? Our white-glove concierge approach delivers a seamless experience from first conversation to closing day. Call (646) 970-1078.","url":"https://montfortre.com","email":"sm@montfortre.com","telephone":"1-646-970-1078","faxNumber":"","priceRange":"","image":"https://assets.agentfire3.com/uploads/sites/312/2021/11/Icon-Favicon-black.png","logo":"https://assets.agentfire3.com/uploads/sites/312/2021/11/Icon-Favicon-black.png","address":{"@type":"PostalAddress","addressLocality":"New York","addressRegion":"NY","postalCode":"10027","streetAddress":"8 West 126th Street"},"sameAs":["https://www.facebook.com/montfortrealestate","https://www.linkedin.com/in/stanley-p-montfort-b3675548/","https://www.youtube.com/@montfortrealestate6984","https://www.instagram.com/stanleymontfort/"],"contactPoint":{"@type":"ContactPoint","contactType":"Customer Service","email":"sm@montfortre.com","telephone":"646-970-1078"}}',
  '{"@context":"https://schema.org","@type":"WebPage","name":"Success Stories","description":"Amazing Success Stories We assisted all types of clients from sellers, to buyers to co-ownership purchases. submit your testimonial Highly likely to recommend &#8220;Stanley was my broker in my successful search for a brownstone rental. He was professional, knowledgeable, and personable. He came prepared to our first meeting with listings that illustrated what was possible. In no time at all,","inLanguage":"en-US","datePublished":"2021-05-27T00:20:18+00:00","dateModified":"2024-07-01T02:58:24+00:00","isPartOf":{"@type":"WebSite","name":"Montfort Real Estate","url":"https://montfortre.com/"}}',
] as const;

export const SUCCESS_STORIES_SEO: PageSeo = {
  title: SUCCESS_STORIES_TITLE,
  metas: SUCCESS_STORIES_METAS,
  links: SUCCESS_STORIES_LINKS,
  jsonLd: SUCCESS_STORIES_JSON_LD,
};

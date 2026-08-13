/** Frozen SEO for /about-us/ — do not edit values. */

import type { PageSeo } from "../types";

export const ABOUT_US_TITLE = "About Us | Montfort Real Estate";

export const ABOUT_US_METAS = [
  { name: "twitter:card", content: "summary_large_image" },
  { name: "twitter:title", content: "About Us | Montfort Real Estate" },
  { property: "og:locale", content: "en_US" },
  { property: "og:type", content: "article" },
  { property: "og:title", content: "About Us | Montfort Real Estate" },
  { property: "og:url", content: "https://montfortre.com/about-us/" },
  { property: "og:site_name", content: "Montfort Real Estate" },
  { property: "article:publisher", content: "https://www.facebook.com/montfortrealestate" },
] as const;

export const ABOUT_US_LINKS = [
  {
    rel: "canonical",
    href: "https://montfortre.com/about-us/",
  },
  {
    rel: "icon",
    href: "https://montfortre.com/redesign-assets/favicon-32.png",
    sizes: "32x32",
  },
  {
    rel: "icon",
    href: "https://montfortre.com/redesign-assets/favicon-192.png",
    sizes: "192x192",
  },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
  {
    href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,700&display=swap",
    rel: "stylesheet",
  },
] as const;

export const ABOUT_US_JSON_LD = [
  '{"@context":"https://schema.org","@type":"Organization","url":"https://montfortre.com/","sameAs":["https://www.facebook.com/montfortrealestate","https://www.instagram.com/stanleymontfort/","https://www.linkedin.com/in/stanley-p-montfort-b3675548/","https://www.youtube.com/@montfortrealestate6984"],"@id":"https://montfortre.com/#organization","name":"Montfort Real Estate","logo":"https://montfortre.com/redesign-assets/logo-transparency-black-2022.png"}',
  '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"https://montfortre.com/","name":"Home"}},{"@type":"ListItem","position":2,"item":{"@id":"https://montfortre.com/about-us/","name":"About Us"}}]}',
  '{"@context":"https://schema.org","@type":"RealEstateAgent","@id":"https://montfortre.com/#real-estate-agent","name":"Montfort Real Estate","description":"NYC\'s brownstone and townhouse specialists with nearly a decade of experience serving Harlem, the Upper West Side and Brooklyn. We represent buyers and sellers with equal dedication \\u2014 from first-time brownstone purchases to multifamily investment acquisitions, with condos and co-ops as part of our full-service offering. Our edge: block-by-block neighborhood expertise, exclusive off-market property access and a vetted network of trusted inspectors, attorneys and contractors. Buying a brownstone in Harlem, Crown Heights or Bed-Stuy? Selling a townhouse on the Upper West Side or in Brooklyn Heights? Our white-glove concierge approach delivers a seamless experience from first conversation to closing day. Call (646) 970-1078.","url":"https://montfortre.com","email":"sm@montfortre.com","telephone":"1-646-970-1078","faxNumber":"","priceRange":"","image":"https://montfortre.com/redesign-assets/favicon-icon.png","logo":"https://montfortre.com/redesign-assets/favicon-icon.png","address":{"@type":"PostalAddress","addressLocality":"New York","addressRegion":"NY","postalCode":"10027","streetAddress":"8 West 126th Street"},"sameAs":["https://www.facebook.com/montfortrealestate","https://www.linkedin.com/in/stanley-p-montfort-b3675548/","https://www.youtube.com/@montfortrealestate6984","https://www.instagram.com/stanleymontfort/"],"contactPoint":{"@type":"ContactPoint","contactType":"Customer Service","email":"sm@montfortre.com","telephone":"646-970-1078"}}',
  '{"@context":"https://schema.org","@type":"WebPage","name":"About Us","description":"Meet Stanley Montfort \\u2014 Trusted NYC Real Estate Advisor with Over 20 Years of Experience Whether you&#039;re buying your first home, investing in a brownstone, or selling a valuable property, Stanley Montfort provides the expertise, market insight, and personalized guidance needed to make informed decisions and achieve the best possible outcome Call 1-(646)-970-1078 Schedule A Consultation \\u2713SMOOTH TRANSACTIONWith limited risk","inLanguage":"en-US","datePublished":"2026-05-08T13:08:36+00:00","dateModified":"2026-07-08T10:31:26+00:00","isPartOf":{"@type":"WebSite","name":"Montfort Real Estate","url":"https://montfortre.com/"}}',
] as const;

export const ABOUT_US_SEO: PageSeo = {
  title: ABOUT_US_TITLE,
  metas: ABOUT_US_METAS,
  links: ABOUT_US_LINKS,
  jsonLd: ABOUT_US_JSON_LD,
};

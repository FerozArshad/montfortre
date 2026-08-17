/** Frozen SEO for /privacy-policy/ — copied from the live HTTrack capture. */

import type { PageSeo } from "../types";

export const PRIVACY_POLICY_TITLE = "Privacy Policy | Montfort Real Estate";

export const PRIVACY_POLICY_METAS = [
  { property: "og:locale", content: "en_US" },
  { property: "og:type", content: "article" },
  { property: "og:title", content: "Privacy Policy | Montfort Real Estate" },
  { property: "og:url", content: "https://montfortre.com/privacy-policy/" },
  { property: "og:site_name", content: "Montfort Real Estate" },
  { property: "article:publisher", content: "https://www.facebook.com/montfortrealestate" },
  { name: "twitter:card", content: "summary_large_image" },
  { name: "twitter:title", content: "Privacy Policy | Montfort Real Estate" },
] as const;

export const PRIVACY_POLICY_LINKS = [
  { rel: "canonical", href: "https://montfortre.com/privacy-policy/" },
  { rel: "icon", href: "https://montfortre.com/redesign-assets/favicon-32.png", sizes: "32x32" },
  { rel: "icon", href: "https://montfortre.com/redesign-assets/favicon-192.png", sizes: "192x192" },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,700&display=swap",
  },
] as const;

export const PRIVACY_POLICY_JSON_LD = [
  '{"@context":"https://schema.org","@type":"Organization","url":"https://montfortre.com/","sameAs":["https://www.facebook.com/montfortrealestate","https://www.instagram.com/stanleymontfort/","https://www.linkedin.com/in/stanley-p-montfort-b3675548/","https://www.youtube.com/@montfortrealestate6984"],"@id":"https://montfortre.com/#organization","name":"Montfort Real Estate","logo":"https://montfortre.com/redesign-assets/logo-transparency-black-2022.png"}',
  '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"https://montfortre.com/","name":"Home"}},{"@type":"ListItem","position":2,"item":{"@id":"https://montfortre.com/privacy-policy/","name":"Privacy Policy"}}]}',
  '{"@context":"https://schema.org","@type":"RealEstateAgent","@id":"https://montfortre.com/#real-estate-agent","name":"Montfort Real Estate","description":"NYC\'s brownstone and townhouse specialists with nearly a decade of experience serving Harlem, the Upper West Side and Brooklyn. We represent buyers and sellers with equal dedication \\u2014 from first-time brownstone purchases to multifamily investment acquisitions, with condos and co-ops as part of our full-service offering. Our edge: block-by-block neighborhood expertise, exclusive off-market property access and a vetted network of trusted inspectors, attorneys and contractors. Buying a brownstone in Harlem, Crown Heights or Bed-Stuy? Selling a townhouse on the Upper West Side or in Brooklyn Heights? Our white-glove concierge approach delivers a seamless experience from first conversation to closing day. Call (646) 970-1078.","url":"https://montfortre.com","email":"sm@montfortre.com","telephone":"1-646-970-1078","faxNumber":"","priceRange":"","image":"https://montfortre.com/redesign-assets/favicon-icon.png","logo":"https://montfortre.com/redesign-assets/favicon-icon.png","address":{"@type":"PostalAddress","addressLocality":"New York","addressRegion":"NY","postalCode":"10027","streetAddress":"8 West 126th Street"},"sameAs":["https://www.facebook.com/montfortrealestate","https://www.linkedin.com/in/stanley-p-montfort-b3675548/","https://www.youtube.com/@montfortrealestate6984","https://www.instagram.com/stanleymontfort/"],"contactPoint":{"@type":"ContactPoint","contactType":"Customer Service","email":"sm@montfortre.com","telephone":"646-970-1078"}}',
  '{"@context":"https://schema.org","@type":"WebPage","name":"Privacy Policy","description":"Privacy Policy This Privacy Policy governs the manner in which montfortre.com collects, uses, maintains and discloses information collected from users (each, a \\u201cUser\\u201d) of the montfortre.com / website (\\u201cSite\\u201d). This privacy policy applies to the Site and all products and services offered by the montfortre.com. PERSONAL IDENTIFICATION INFORMATION We may collect personal identification information from Users in a variety of","inLanguage":"en-US","datePublished":"2021-05-27T00:20:18+00:00","dateModified":"2021-05-27T00:20:18+00:00","isPartOf":{"@type":"WebSite","name":"Montfort Real Estate","url":"https://montfortre.com/"}}',
] as const;

export const PRIVACY_POLICY_SEO: PageSeo = {
  title: PRIVACY_POLICY_TITLE,
  metas: PRIVACY_POLICY_METAS,
  links: PRIVACY_POLICY_LINKS,
  jsonLd: PRIVACY_POLICY_JSON_LD,
};

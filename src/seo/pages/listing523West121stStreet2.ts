/** Frozen SEO for /523-west-121st-street-2/ — do not edit values. */

import type { PageSeo } from "../types";

export const LISTING_523_TITLE = "523 West 121st Street #2 | Montfort Real Estate";

export const LISTING_523_METAS = [
  {
    name: "description",
    content:
      "2-bedroom, 1-bath pre-war co-op at 523 West 121st Street #2 in Morningside Heights — listed at $799,000. Schedule a tour with Montfort Real Estate.",
  },
  { name: "twitter:card", content: "summary_large_image" },
  { name: "twitter:title", content: "523 West 121st Street #2 | Montfort Real Estate" },
  {
    name: "twitter:description",
    content:
      "2-bedroom, 1-bath pre-war co-op in Morningside Heights. Generous living space, classic details, and private storage. Schedule a tour.",
  },
  { property: "og:locale", content: "en_US" },
  { property: "og:type", content: "website" },
  { property: "og:title", content: "523 West 121st Street #2 | Montfort Real Estate" },
  {
    property: "og:description",
    content:
      "2-bedroom, 1-bath pre-war co-op at 523 West 121st Street #2 in Morningside Heights — listed at $799,000.",
  },
  { property: "og:url", content: "https://montfortre.com/523-west-121st-street-2/" },
  { property: "og:site_name", content: "Montfort Real Estate" },
  {
    property: "og:image",
    content: "https://assets.agentfire3.com/uploads/sites/312/2026/06/1a-Living-room-2.jpg",
  },
] as const;

export const LISTING_523_LINKS = [
  { rel: "canonical", href: "https://montfortre.com/523-west-121st-street-2/" },
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

export const LISTING_523_JSON_LD = [
  '{"@context":"https://schema.org","@type":"Organization","url":"https://montfortre.com/","sameAs":["https://www.facebook.com/montfortrealestate","https://www.instagram.com/stanleymontfort/","https://www.linkedin.com/in/stanley-p-montfort-b3675548/","https://www.youtube.com/@montfortrealestate6984"],"@id":"https://montfortre.com/#organization","name":"Montfort Real Estate","logo":"https://montfortre.com/redesign-assets/logo-transparency-black-2022.png"}',
  '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"https://montfortre.com/","name":"Home"}},{"@type":"ListItem","position":2,"item":{"@id":"https://montfortre.com/523-west-121st-street-2/","name":"523 West 121st Street #2"}}]}',
  '{"@context":"https://schema.org","@type":"RealEstateAgent","@id":"https://montfortre.com/#real-estate-agent","name":"Montfort Real Estate","url":"https://montfortre.com","email":"sm@montfortre.com","telephone":"1-646-970-1078","image":"https://montfortre.com/redesign-assets/favicon-icon.png","logo":"https://montfortre.com/redesign-assets/favicon-icon.png","address":{"@type":"PostalAddress","addressLocality":"New York","addressRegion":"NY","postalCode":"10027","streetAddress":"8 West 126th Street"}}',
  '{"@context":"https://schema.org","@type":"Apartment","name":"523 West 121st Street #2","url":"https://montfortre.com/523-west-121st-street-2/","description":"Beautifully detailed 2-bedroom, 1-bath pre-war co-op in Morningside Heights with expansive living and dining space and private storage.","numberOfRooms":2,"numberOfBathroomsTotal":1,"address":{"@type":"PostalAddress","streetAddress":"523 West 121st Street #2","addressLocality":"New York","addressRegion":"NY","postalCode":"10027"},"offers":{"@type":"Offer","price":799000,"priceCurrency":"USD","availability":"https://schema.org/InStock"},"image":"https://assets.agentfire3.com/uploads/sites/312/2026/06/1a-Living-room-2.jpg"}',
] as const;

export const LISTING_523_SEO: PageSeo = {
  title: LISTING_523_TITLE,
  metas: LISTING_523_METAS,
  links: LISTING_523_LINKS,
  jsonLd: LISTING_523_JSON_LD,
};

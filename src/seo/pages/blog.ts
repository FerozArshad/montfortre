/** Frozen SEO for /blog/ — do not edit values. */

import type { PageSeo } from "../types";

export const BLOG_TITLE = "Blog | Montfort Real Estate";

export const BLOG_METAS = [
  {
    "name": "description",
    "content": "Explore real estate insights, market trends and expert guides on buying, selling and investing in New York City property."
  },
  {
    "name": "twitter:card",
    "content": "summary_large_image"
  },
  {
    "name": "twitter:title",
    "content": "Blog | Montfort Real Estate"
  },
  {
    "name": "twitter:description",
    "content": "Explore real estate insights, market trends and expert guides on buying, selling and investing in New York City property."
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
    "content": "Blog | Montfort Real Estate"
  },
  {
    "property": "og:description",
    "content": "Explore real estate insights, market trends and expert guides on buying, selling and investing in New York City property."
  },
  {
    "property": "og:url",
    "content": "https://montfortre.com/blog/"
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

export const BLOG_LINKS = [
  {
    "rel": "canonical",
    "href": "https://montfortre.com/blog/"
  },
  {
    "rel": "icon",
    "href": "https://assets.agentfire3.com/uploads/sites/312/2021/11/Icon-Favicon-black-32x32.max.png",
    "sizes": "32x32"
  },
  {
    "rel": "icon",
    "href": "https://assets.agentfire3.com/uploads/sites/312/2021/11/Icon-Favicon-black-192x192.max.png",
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

export const BLOG_JSON_LD = [
  "{\"@context\":\"https://schema.org\",\"@type\":\"Organization\",\"url\":\"https://montfortre.com/\",\"sameAs\":[\"https://www.facebook.com/montfortrealestate\",\"https://www.instagram.com/stanleymontfort/\",\"https://www.linkedin.com/in/stanley-p-montfort-b3675548/\",\"https://www.youtube.com/@montfortrealestate6984\"],\"@id\":\"https://montfortre.com/#organization\",\"name\":\"Montfort Real Estate\",\"logo\":\"https://assets.agentfire3.com/uploads/sites/312/2022/10/Logo-Transparency-black.png\"}",
  "{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"item\":{\"@id\":\"https://montfortre.com/\",\"name\":\"Home\"}},{\"@type\":\"ListItem\",\"position\":2,\"item\":{\"@id\":\"https://montfortre.com/blog/\",\"name\":\"Blog\"}}]}",
  "{\"@context\":\"https://schema.org\",\"@type\":\"RealEstateAgent\",\"@id\":\"https://montfortre.com/#real-estate-agent\",\"name\":\"Montfort Real Estate\",\"description\":\"NYC's brownstone and townhouse specialists with nearly a decade of experience serving Harlem, the Upper West Side and Brooklyn. We represent buyers and sellers with equal dedication \\u2014 from first-time brownstone purchases to multifamily investment acquisitions, with condos and co-ops as part of our full-service offering. Our edge: block-by-block neighborhood expertise, exclusive off-market property access and a vetted network of trusted inspectors, attorneys and contractors. Buying a brownstone in Harlem, Crown Heights or Bed-Stuy? Selling a townhouse on the Upper West Side or in Brooklyn Heights? Our white-glove concierge approach delivers a seamless experience from first conversation to closing day. Call (646) 970-1078.\",\"url\":\"https://montfortre.com\",\"email\":\"sm@montfortre.com\",\"telephone\":\"1-646-970-1078\",\"faxNumber\":\"\",\"priceRange\":\"\",\"image\":\"https://assets.agentfire3.com/uploads/sites/312/2021/11/Icon-Favicon-black.png\",\"logo\":\"https://assets.agentfire3.com/uploads/sites/312/2021/11/Icon-Favicon-black.png\",\"address\":{\"@type\":\"PostalAddress\",\"addressLocality\":\"New York\",\"addressRegion\":\"NY\",\"postalCode\":\"10027\",\"streetAddress\":\"8 West 126th Street\"},\"sameAs\":[\"https://www.facebook.com/montfortrealestate\",\"https://www.linkedin.com/in/stanley-p-montfort-b3675548/\",\"https://www.youtube.com/@montfortrealestate6984\",\"https://www.instagram.com/stanleymontfort/\"],\"contactPoint\":{\"@type\":\"ContactPoint\",\"contactType\":\"Customer Service\",\"email\":\"sm@montfortre.com\",\"telephone\":\"646-970-1078\"}}",
  "{\"@context\":\"https://schema.org\",\"@type\":\"WebPage\",\"name\":\"Blog\",\"description\":\"Local News &amp; Advice What to Do With Inherited Property Depending on your circumstances, inheriting property in New York can either be the biggest blessing or the biggest \\u2026 Read More Rent Control v. Rent Stabilization New York City has a reputation of being an expensive place to live, with the average rent being \\u2026 Read More Everything You Need\",\"inLanguage\":\"en-US\",\"datePublished\":\"2021-05-27T00:20:18+00:00\",\"dateModified\":\"2026-03-17T21:47:35+00:00\",\"isPartOf\":{\"@type\":\"WebSite\",\"name\":\"Montfort Real Estate\",\"url\":\"https://montfortre.com/\"}}"
] as const;

export const BLOG_SEO: PageSeo = {
  title: BLOG_TITLE,
  metas: BLOG_METAS,
  links: BLOG_LINKS,
  jsonLd: BLOG_JSON_LD,
};

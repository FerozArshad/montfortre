/** SEO for /chelsea-condos/ */

import type { PageSeo } from "../types";

export const CHELSEA_CONDOS_TITLE = "Chelsea Condos | Montfort Real Estate";

const DESCRIPTION =
  "Explore Chelsea condos with Montfort Real Estate. Discover luxury condo apartments, modern residences, and investment opportunities in one of Manhattan’s most vibrant neighborhoods.";

export const CHELSEA_CONDOS_METAS = [
  { name: "description", content: DESCRIPTION },
  { name: "twitter:card", content: "summary_large_image" },
  { name: "twitter:description", content: DESCRIPTION },
  { name: "twitter:image", content: "https://montfortre.com/redesign-assets/og/chelsea.png" },
  { name: "twitter:title", content: CHELSEA_CONDOS_TITLE },
  { property: "og:locale", content: "en_US" },
  { property: "og:type", content: "article" },
  { property: "og:title", content: CHELSEA_CONDOS_TITLE },
  { property: "og:description", content: DESCRIPTION },
  { property: "og:url", content: "https://montfortre.com/chelsea-condos/" },
  { property: "og:site_name", content: "Montfort Real Estate" },
  { property: "og:image", content: "https://montfortre.com/redesign-assets/og/chelsea.png" },
  { property: "article:publisher", content: "https://www.facebook.com/montfortrealestate" },
] as const;

export const CHELSEA_CONDOS_LINKS = [
  { rel: "canonical", href: "https://montfortre.com/chelsea-condos/" },
  { rel: "icon", href: "https://montfortre.com/redesign-assets/favicon-32.png", sizes: "32x32" },
  { rel: "icon", href: "https://montfortre.com/redesign-assets/favicon-192.png", sizes: "192x192" },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
  {
    href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,700&display=swap",
    rel: "stylesheet",
  },
] as const;

export const CHELSEA_CONDOS_JSON_LD = [
  '{"@context":"https://schema.org","@type":"Organization","url":"https://montfortre.com/","sameAs":["https://www.facebook.com/montfortrealestate","https://www.instagram.com/stanleymontfort/","https://www.linkedin.com/in/stanley-p-montfort-b3675548/","https://www.youtube.com/@montfortrealestate6984"],"@id":"https://montfortre.com/#organization","name":"Montfort Real Estate","logo":"https://montfortre.com/redesign-assets/logo-transparency-black-2022.png"}',
  '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"https://montfortre.com/","name":"Home"}},{"@type":"ListItem","position":2,"item":{"@id":"https://montfortre.com/chelsea-condos/","name":"Chelsea Condos"}}]}',
] as const;

export const CHELSEA_CONDOS_SEO: PageSeo = {
  title: CHELSEA_CONDOS_TITLE,
  metas: CHELSEA_CONDOS_METAS,
  links: CHELSEA_CONDOS_LINKS,
  jsonLd: CHELSEA_CONDOS_JSON_LD,
};

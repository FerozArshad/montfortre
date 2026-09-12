/** SEO for /williamsburg-co-ops/ */

import type { PageSeo } from "../types";

export const WILLIAMSBURG_CO_OPS_TITLE = "Williamsburg Co-Ops | Montfort Real Estate";

const DESCRIPTION =
  "Explore Williamsburg co-ops with Montfort Real Estate. Discover established co-op residences, great value, and classic Brooklyn living in one of the borough’s most sought-after neighborhoods.";

export const WILLIAMSBURG_CO_OPS_METAS = [
  { name: "description", content: DESCRIPTION },
  { name: "twitter:card", content: "summary_large_image" },
  { name: "twitter:description", content: DESCRIPTION },
  { name: "twitter:image", content: "https://montfortre.com/redesign-assets/og/williamsburg.png" },
  { name: "twitter:title", content: WILLIAMSBURG_CO_OPS_TITLE },
  { property: "og:locale", content: "en_US" },
  { property: "og:type", content: "article" },
  { property: "og:title", content: WILLIAMSBURG_CO_OPS_TITLE },
  { property: "og:description", content: DESCRIPTION },
  { property: "og:url", content: "https://montfortre.com/williamsburg-co-ops/" },
  { property: "og:site_name", content: "Montfort Real Estate" },
  { property: "og:image", content: "https://montfortre.com/redesign-assets/og/williamsburg.png" },
  { property: "article:publisher", content: "https://www.facebook.com/montfortrealestate" },
] as const;

export const WILLIAMSBURG_CO_OPS_LINKS = [
  { rel: "canonical", href: "https://montfortre.com/williamsburg-co-ops/" },
  { rel: "icon", href: "https://montfortre.com/redesign-assets/favicon-32.png", sizes: "32x32" },
  { rel: "icon", href: "https://montfortre.com/redesign-assets/favicon-192.png", sizes: "192x192" },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
  {
    href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,700&display=swap",
    rel: "stylesheet",
  },
] as const;

export const WILLIAMSBURG_CO_OPS_JSON_LD = [
  '{"@context":"https://schema.org","@type":"Organization","url":"https://montfortre.com/","sameAs":["https://www.facebook.com/montfortrealestate","https://www.instagram.com/stanleymontfort/","https://www.linkedin.com/in/stanley-p-montfort-b3675548/","https://www.youtube.com/@montfortrealestate6984"],"@id":"https://montfortre.com/#organization","name":"Montfort Real Estate","logo":"https://montfortre.com/redesign-assets/logo-transparency-black-2022.png"}',
  '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"https://montfortre.com/","name":"Home"}},{"@type":"ListItem","position":2,"item":{"@id":"https://montfortre.com/williamsburg-co-ops/","name":"Williamsburg Co-Ops"}}]}',
] as const;

export const WILLIAMSBURG_CO_OPS_SEO: PageSeo = {
  title: WILLIAMSBURG_CO_OPS_TITLE,
  metas: WILLIAMSBURG_CO_OPS_METAS,
  links: WILLIAMSBURG_CO_OPS_LINKS,
  jsonLd: WILLIAMSBURG_CO_OPS_JSON_LD,
};

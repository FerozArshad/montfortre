/** Frozen SEO for /park-slope/ — do not edit values. */

import type { PageSeo } from "../types";

export const PARK_SLOPE_TITLE = "Park Slope | Montfort Real Estate";

const DESCRIPTION =
  "Find your trusted Park Slope realtor with Montfort Real Estate. Get expert guidance for buying, selling, and investing in Park Slope's competitive Brooklyn real estate market";

export const PARK_SLOPE_METAS = [
  { name: "description", content: DESCRIPTION },
  { name: "twitter:card", content: "summary_large_image" },
  { name: "twitter:title", content: "Park Slope | Montfort Real Estate" },
  { name: "twitter:description", content: DESCRIPTION },
  { name: "twitter:image", content: "https://montfortre.com/redesign-assets/og/park-slope.png" },
  { property: "og:locale", content: "en_US" },
  { property: "og:type", content: "article" },
  { property: "og:title", content: "Park Slope | Montfort Real Estate" },
  { property: "og:description", content: DESCRIPTION },
  { property: "og:url", content: "https://montfortre.com/park-slope/" },
  { property: "og:site_name", content: "Montfort Real Estate" },
  { property: "article:publisher", content: "https://www.facebook.com/montfortrealestate" },
  { property: "article:author", content: "https://m.facebook.com/montfortrealestate/?ref=page_internal&mt_nav=0" },
  { property: "og:image", content: "https://montfortre.com/redesign-assets/og/park-slope.png" },
  { property: "og:image:secure_url", content: "https://montfortre.com/redesign-assets/og/park-slope.png" },
  { property: "og:image:width", content: "800" },
  { property: "og:image:height", content: "558" },
  { property: "og:image:alt", content: "park slope.png" },
] as const;

export const PARK_SLOPE_LINKS = [
  { rel: "canonical", href: "https://montfortre.com/park-slope/" },
  { rel: "icon", href: "https://montfortre.com/redesign-assets/favicon-32.png", sizes: "32x32" },
  { rel: "icon", href: "https://montfortre.com/redesign-assets/favicon-192.png", sizes: "192x192" },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
  {
    href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,700&display=swap",
    rel: "stylesheet",
  },
] as const;

export const PARK_SLOPE_JSON_LD = [
  "{\"@context\":\"https://schema.org\",\"@graph\":[{\"@type\":\"Service\",\"@id\":\"https://montfortre.com/park-slope/#service\",\"name\":\"Park Slope Brownstone Realtor Services\",\"alternateName\":\"Park Slope Realtor\",\"serviceType\":\"Park Slope Brownstone Real Estate Services\",\"url\":\"https://montfortre.com/park-slope/\",\"description\":\"Specialized Park Slope real estate services for brownstone buyers, sellers, and investors, including property search, listing representation, legal configuration review, historic district guidance, pricing analysis, negotiation, due diligence, and closing support.\",\"provider\":{\"@id\":\"https://montfortre.com/#realestateagent\"},\"areaServed\":[{\"@type\":\"Place\",\"name\":\"Park Slope\",\"containedInPlace\":{\"@type\":\"AdministrativeArea\",\"name\":\"Brooklyn\"}},{\"@type\":\"AdministrativeArea\",\"name\":\"Brooklyn\"},{\"@type\":\"City\",\"name\":\"New York City\"}],\"audience\":[{\"@type\":\"Audience\",\"audienceType\":\"Park Slope brownstone buyers\"},{\"@type\":\"Audience\",\"audienceType\":\"Park Slope brownstone sellers\"},{\"@type\":\"Audience\",\"audienceType\":\"Park Slope real estate investors\"}],\"hasOfferCatalog\":{\"@type\":\"OfferCatalog\",\"name\":\"Park Slope Brownstone Real Estate Services\",\"itemListElement\":[{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Park Slope Brownstone Buyer Representation\",\"description\":\"Brownstone property search, structural inspection coordination, Certificate of Occupancy review, legal unit analysis, rental-income evaluation, comparable-sales analysis, negotiation, and closing support.\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Park Slope Brownstone Listing and Marketing\",\"description\":\"Brownstone valuation, block-level comparable-sales analysis, pre-sale preparation, property marketing, offer negotiation, and transaction management for Park Slope sellers.\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Park Slope Brownstone Investment Analysis\",\"description\":\"Multi-family income modeling, legal configuration analysis, owner's duplex evaluation, legalization-cost review, and analysis of appreciation trends across Park Slope submarkets.\"}}]},\"mainEntityOfPage\":{\"@id\":\"https://montfortre.com/park-slope/#webpage\"}},{\"@type\":\"BreadcrumbList\",\"@id\":\"https://montfortre.com/park-slope/#breadcrumb\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https://montfortre.com/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Neighborhoods\",\"item\":\"https://montfortre.com/neighborhoods/\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"Park Slope Realtor\",\"item\":\"https://montfortre.com/park-slope/\"}]},{\"@type\":\"FAQPage\",\"@id\":\"https://montfortre.com/park-slope/#faq\",\"url\":\"https://montfortre.com/park-slope/\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"How are Park Slope brownstones valued differently than other properties?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Park Slope brownstones are valued according to factors such as building width, depth, number of stories, lot coverage, legal configuration, architectural details, location, renovation quality, and block-level comparable sales. A legally documented multi-unit brownstone may also support verifiable rental income and different financing options. Ownership structure, historic status, and the quality of period-appropriate restoration can materially affect value.\"}},{\"@type\":\"Question\",\"name\":\"What should buyers know about brownstone inspections?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"A Park Slope brownstone inspection should evaluate facade condition, mortar joints, brownstone deterioration, parapets, cornices, water infiltration, basement and garden-level moisture, structural framing, foundations, plumbing, electrical systems, heating equipment, and roof condition. Depending on the property, buyers may also need structural engineers, waterproofing specialists, or facade restoration contractors during due diligence.\"}},{\"@type\":\"Question\",\"name\":\"How do historic district regulations affect brownstone ownership?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Properties within a Park Slope historic district may require approval from the New York City Landmarks Preservation Commission for exterior modifications involving windows, doors, facades, brownstone materials, stoops, and cornices. Historic district ownership can involve longer renovation timelines and specialized materials, but landmark protections may also preserve architectural character and long-term property desirability.\"}},{\"@type\":\"Question\",\"name\":\"What's the difference between one-family and multi-family brownstone configurations?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"A one-family brownstone is legally occupied by one household, while a multi-family brownstone contains multiple legally recognized dwelling units. The Certificate of Occupancy or other accepted documentation should reflect the actual unit count and use. Undocumented conversions can create financing, insurance, rental, compliance, and closing problems. A legal owner's duplex with rental apartments may offset carrying costs, but the configuration must be properly documented.\"}}]}]}",
  "{\"@context\":\"https://schema.org\",\"@type\":\"Organization\",\"url\":\"https://montfortre.com/\",\"sameAs\":[\"https://www.facebook.com/montfortrealestate\",\"https://www.instagram.com/stanleymontfort/\",\"https://www.linkedin.com/in/stanley-p-montfort-b3675548/\",\"https://www.youtube.com/@montfortrealestate6984\"],\"@id\":\"https://montfortre.com/#organization\",\"name\":\"Montfort Real Estate\",\"logo\":\"https://montfortre.com/redesign-assets/logo-transparency-black-2022.png\"}",
  "{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"item\":{\"@id\":\"https://montfortre.com/\",\"name\":\"Home\"}},{\"@type\":\"ListItem\",\"position\":2,\"item\":{\"@id\":\"https://montfortre.com/park-slope/\",\"name\":\"Park Slope\"}}]}",
  "{\"@context\":\"https://schema.org\",\"@type\":\"RealEstateAgent\",\"@id\":\"https://montfortre.com/#real-estate-agent\",\"name\":\"Montfort Real Estate\",\"description\":\"NYC's brownstone and townhouse specialists with nearly a decade of experience serving Harlem, the Upper West Side and Brooklyn. We represent buyers and sellers with equal dedication — from first-time brownstone purchases to multifamily investment acquisitions, with condos and co-ops as part of our full-service offering. Our edge: block-by-block neighborhood expertise, exclusive off-market property access and a vetted network of trusted inspectors, attorneys and contractors. Buying a brownstone in Harlem, Crown Heights or Bed-Stuy? Selling a townhouse on the Upper West Side or in Brooklyn Heights? Our white-glove concierge approach delivers a seamless experience from first conversation to closing day. Call (646) 970-1078.\",\"url\":\"https://montfortre.com\",\"email\":\"sm@montfortre.com\",\"telephone\":\"1-646-970-1078\",\"faxNumber\":\"\",\"priceRange\":\"\",\"image\":\"https://montfortre.com/redesign-assets/favicon-icon.png\",\"logo\":\"https://montfortre.com/redesign-assets/favicon-icon.png\",\"address\":{\"@type\":\"PostalAddress\",\"addressLocality\":\"New York\",\"addressRegion\":\"NY\",\"postalCode\":\"10027\",\"streetAddress\":\"8 West 126th Street\"},\"sameAs\":[\"https://www.facebook.com/montfortrealestate\",\"https://www.linkedin.com/in/stanley-p-montfort-b3675548/\",\"https://www.youtube.com/@montfortrealestate6984\",\"https://www.instagram.com/stanleymontfort/\"],\"contactPoint\":{\"@type\":\"ContactPoint\",\"contactType\":\"Customer Service\",\"email\":\"sm@montfortre.com\",\"telephone\":\"646-970-1078\"}}",
  "{\"@context\":\"https://schema.org\",\"@type\":\"WebPage\",\"@id\":\"https://montfortre.com/park-slope/#webpage\",\"url\":\"https://montfortre.com/park-slope/\",\"name\":\"Park Slope | Montfort Real Estate\",\"description\":\"Find your trusted Park Slope realtor with Montfort Real Estate. Get expert guidance for buying, selling, and investing in Park Slope's competitive Brooklyn real estate market\",\"isPartOf\":{\"@id\":\"https://montfortre.com/#website\"},\"about\":{\"@id\":\"https://montfortre.com/#realestateagent\"},\"inLanguage\":\"en-US\"}",
  "{\"@context\":\"https://schema.org\",\"@type\":\"WebSite\",\"@id\":\"https://montfortre.com/#website\",\"url\":\"https://montfortre.com/\",\"name\":\"Montfort Real Estate\",\"publisher\":{\"@id\":\"https://montfortre.com/#realestateagent\"},\"inLanguage\":\"en-US\"}"
] as const;

export const PARK_SLOPE_SEO: PageSeo = {
  title: PARK_SLOPE_TITLE,
  metas: PARK_SLOPE_METAS,
  links: PARK_SLOPE_LINKS,
  jsonLd: PARK_SLOPE_JSON_LD,
};

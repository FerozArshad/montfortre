/** Frozen SEO for /mortgage-calculator/ — do not edit values. */

import type { PageSeo } from "../types";

export const MORTGAGE_CALCULATOR_TITLE = "Mortgage Calculator | Montfort Real Estate";

const DESCRIPTION =
  "Use our mortgage calculator to estimate monthly payments, interest rates and affordability when buying real estate in New York City.";

export const MORTGAGE_CALCULATOR_METAS = [
  { name: "description", content: DESCRIPTION },
  { name: "twitter:card", content: "summary_large_image" },
  { name: "twitter:description", content: DESCRIPTION },
  { name: "twitter:title", content: MORTGAGE_CALCULATOR_TITLE },
  { property: "og:locale", content: "en_US" },
  { property: "og:type", content: "article" },
  { property: "og:title", content: MORTGAGE_CALCULATOR_TITLE },
  { property: "og:description", content: DESCRIPTION },
  { property: "og:url", content: "https://montfortre.com/mortgage-calculator/" },
  { property: "og:site_name", content: "Montfort Real Estate" },
  { property: "article:publisher", content: "https://www.facebook.com/montfortrealestate" },
] as const;

export const MORTGAGE_CALCULATOR_LINKS = [
  { rel: "canonical", href: "https://montfortre.com/mortgage-calculator/" },
  { rel: "icon", href: "https://montfortre.com/redesign-assets/favicon-32.png", sizes: "32x32" },
  { rel: "icon", href: "https://montfortre.com/redesign-assets/favicon-192.png", sizes: "192x192" },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
  {
    href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,700&display=swap",
    rel: "stylesheet",
  },
] as const;

export const MORTGAGE_CALCULATOR_JSON_LD = [
  '{"@context":"https://schema.org","@type":"Service","serviceType":"NYC Mortgage Calculator Services","provider":{"@type":"RealEstateAgent","name":"Stanley Montfort Real Estate","url":"https://montfortre.com/"},"areaServed":{"@type":"City","name":"New York City"},"description":"Specialized NYC mortgage calculator services for condos, co-ops, and townhouses, including estimates for mortgage payments, property taxes, maintenance fees, common charges, PMI, closing costs, and reserve planning.","url":"https://montfortre.com/mortgage-calculator/"}',
  '{"@context":"https://schema.org","@type":"WebApplication","name":"NYC Mortgage Calculator","url":"https://montfortre.com/mortgage-calculator/","applicationCategory":"FinanceApplication","operatingSystem":"All","description":"An NYC mortgage calculator designed to estimate monthly housing costs for condos, co-ops, and townhouses, including principal, interest, property taxes, insurance, maintenance fees, common charges, and reserves.","provider":{"@type":"RealEstateAgent","name":"Stanley Montfort Real Estate","url":"https://montfortre.com/"}}',
  '{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What\'s the difference between co-op maintenance and condo common charges?","acceptedAnswer":{"@type":"Answer","text":"Co-op maintenance typically includes property taxes within the monthly fee, while condo common charges are separate from the property\'s tax bill. Condo owners usually pay common charges for building operations and receive a separate property tax bill from New York City."}},{"@type":"Question","name":"How much should I put down to avoid PMI in NYC?","acceptedAnswer":{"@type":"Answer","text":"A 20% down payment generally eliminates private mortgage insurance on most conventional loans. However, NYC co-op boards may require larger down payments, often 20-30% or more, depending on the building."}},{"@type":"Question","name":"Are interest-only loans a good option for NYC buyers?","acceptedAnswer":{"@type":"Answer","text":"Interest-only loans can work for buyers who plan to sell or refinance before the interest-only period ends, investors with short-term holding strategies, or buyers with irregular income. However, they carry risk because payments can rise significantly after the interest-only period ends."}},{"@type":"Question","name":"How much should townhouse owners save for maintenance?","acceptedAnswer":{"@type":"Answer","text":"Townhouse owners are often advised to save 1-3% of the property\'s value annually for repairs and maintenance because there are no shared building reserves to cover roof, HVAC, plumbing, structural, or emergency repair costs."}}]}',
  '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://montfortre.com/"},{"@type":"ListItem","position":2,"name":"Services","item":"https://montfortre.com/services/"},{"@type":"ListItem","position":3,"name":"NYC Mortgage Calculator","item":"https://montfortre.com/mortgage-calculator/"}]}',
  '{"@context":"https://schema.org","@type":"Organization","url":"https://montfortre.com/","sameAs":["https://www.facebook.com/montfortrealestate","https://www.instagram.com/stanleymontfort/","https://www.linkedin.com/in/stanley-p-montfort-b3675548/","https://www.youtube.com/@montfortrealestate6984"],"@id":"https://montfortre.com/#organization","name":"Montfort Real Estate","logo":"https://montfortre.com/redesign-assets/logo-transparency-black-2022.png"}',
  '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"https://montfortre.com/","name":"Home"}},{"@type":"ListItem","position":2,"item":{"@id":"https://montfortre.com/mortgage-calculator/","name":"Mortgage Calculator"}}]}',
  '{"@context":"https://schema.org","@type":"RealEstateAgent","@id":"https://montfortre.com/#real-estate-agent","name":"Montfort Real Estate","description":"NYC\'s brownstone and townhouse specialists with nearly a decade of experience serving Harlem, the Upper West Side and Brooklyn. We represent buyers and sellers with equal dedication — from first-time brownstone purchases to multifamily investment acquisitions, with condos and co-ops as part of our full-service offering. Our edge: block-by-block neighborhood expertise, exclusive off-market property access and a vetted network of trusted inspectors, attorneys and contractors. Buying a brownstone in Harlem, Crown Heights or Bed-Stuy? Selling a townhouse on the Upper West Side or in Brooklyn Heights? Our white-glove concierge approach delivers a seamless experience from first conversation to closing day. Call (646) 970-1078.","url":"https://montfortre.com","email":"sm@montfortre.com","telephone":"1-646-970-1078","faxNumber":"","priceRange":"","image":"https://montfortre.com/redesign-assets/favicon-icon.png","logo":"https://montfortre.com/redesign-assets/favicon-icon.png","address":{"@type":"PostalAddress","addressLocality":"New York","addressRegion":"NY","postalCode":"10027","streetAddress":"8 West 126th Street"},"sameAs":["https://www.facebook.com/montfortrealestate","https://www.linkedin.com/in/stanley-p-montfort-b3675548/","https://www.youtube.com/@montfortrealestate6984","https://www.instagram.com/stanleymontfort/"],"contactPoint":{"@type":"ContactPoint","contactType":"Customer Service","email":"sm@montfortre.com","telephone":"646-970-1078"}}',
  '{"@context":"https://schema.org","@type":"WebPage","name":"Mortgage Calculator","description":"Mortgage Calculator — Plan Your Home Purchase with Confidence Use our mortgage calculator to understand your financing costs, plan ahead, and avoid surprises throughout the home-buying process. Call 1-(646)-970-1078 Schedule A Consultation ✓SMOOTH TRANSACTIONWith limited risk throughout the buying process.✓NO PRESSURENo pressure to overpay or purchase within a specific timeframe.✓ONGOING SUPPORTA dedicated team that remains available even after the transaction","inLanguage":"en-US","datePublished":"2021-05-27T00:20:18+00:00","dateModified":"2026-07-15T18:17:13+00:00","isPartOf":{"@type":"WebSite","name":"Montfort Real Estate","url":"https://montfortre.com/"}}',
] as const;

export const MORTGAGE_CALCULATOR_SEO: PageSeo = {
  title: MORTGAGE_CALCULATOR_TITLE,
  metas: MORTGAGE_CALCULATOR_METAS,
  links: MORTGAGE_CALCULATOR_LINKS,
  jsonLd: MORTGAGE_CALCULATOR_JSON_LD,
};

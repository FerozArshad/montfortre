import type { PageSeo } from "../types";

const PATH = "/brownstone-violation-assessment/";
const URL = `https://montfortre.com${PATH}`;
const TITLE = "Grade That Brownstone | Free NYC Violation Assessment";
const DESCRIPTION =
  "Before you make an offer, screen NYC public records for DOB and HPD violations, tax issues, and zoning signals. Free brownstone property intelligence from Stanley Montfort.";
const OG_IMAGE = "https://montfortre.com/redesign-assets/og/brownstone-guide.png";

export const BROWNSTONE_VIOLATION_ASSESSMENT_SEO: PageSeo = {
  title: TITLE,
  metas: [
    { name: "description", content: DESCRIPTION },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: TITLE },
    { name: "twitter:description", content: DESCRIPTION },
    { name: "twitter:image", content: OG_IMAGE },
    { property: "og:locale", content: "en_US" },
    { property: "og:type", content: "website" },
    { property: "og:title", content: TITLE },
    { property: "og:description", content: DESCRIPTION },
    { property: "og:url", content: URL },
    { property: "og:site_name", content: "Montfort Real Estate" },
    { property: "og:image", content: OG_IMAGE },
  ],
  links: [
    { rel: "canonical", href: URL },
    { rel: "icon", href: "https://montfortre.com/redesign-assets/favicon-32.png", sizes: "32x32" },
    { rel: "icon", href: "https://montfortre.com/redesign-assets/favicon-192.png", sizes: "192x192" },
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
    {
      href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,700&display=swap",
      rel: "stylesheet",
    },
  ],
  jsonLd: [
    JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, item: { "@id": "https://montfortre.com/", name: "Home" } },
        { "@type": "ListItem", position: 2, item: { "@id": "https://montfortre.com/services/", name: "Services" } },
        { "@type": "ListItem", position: 3, item: { "@id": URL, name: "Brownstone Violation Assessment" } },
      ],
    }),
    JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${URL}#webpage`,
      url: URL,
      name: TITLE,
      description: DESCRIPTION,
      inLanguage: "en-US",
    }),
    JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Grade That Brownstone — NYC Violation Assessment",
      serviceType: "NYC Brownstone Public-Record Screening",
      url: URL,
      description: DESCRIPTION,
      provider: {
        "@type": "RealEstateAgent",
        name: "Montfort Real Estate",
        url: "https://montfortre.com/",
        telephone: "1-646-970-1078",
        email: "sm@montfortre.com",
      },
      areaServed: { "@type": "City", name: "New York City" },
    }),
  ],
};

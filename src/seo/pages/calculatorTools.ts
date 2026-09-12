import type { PageSeo } from "../types";

function buildCalculatorSeo(title: string, description: string, path: string): PageSeo {
  const url = `https://montfortre.com${path}`;
  return {
    title,
    metas: [
      { name: "description", content: description },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
  { name: "twitter:image", content: "https://montfortre.com/og-home.jpg" },
      { property: "og:locale", content: "en_US" },
      { property: "og:type", content: "article" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:site_name", content: "Montfort Real Estate" },
  { property: "og:image", content: "https://montfortre.com/og-home.jpg" },
    ],
    links: [{ rel: "canonical", href: url }],
    jsonLd: [
      JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebApplication",
        name: title.replace(" | Montfort Real Estate", ""),
        url,
        applicationCategory: "FinanceApplication",
        operatingSystem: "All",
        description,
        provider: {
          "@type": "RealEstateAgent",
          name: "Montfort Real Estate",
          url: "https://montfortre.com/",
        },
      }),
    ],
  };
}

export const NYC_BROWNSTONE_BUYER_CLOSING_COST_CALCULATOR_SEO = buildCalculatorSeo(
  "NYC Brownstone Buyer Closing Cost Calculator | Montfort Real Estate",
  "Estimate NYC buyer closing costs for condos, co-ops, and townhouses — mansion tax, title insurance, mortgage recording tax, and financing fees.",
  "/nyc-brownstone-buyer-closing-cost-calculator/",
);

export const NYC_BROWNSTONE_SELLER_CLOSING_COST_CALCULATOR_SEO = buildCalculatorSeo(
  "NYC Brownstone Seller Closing Cost Calculator | Montfort Real Estate",
  "Estimate NYC seller closing costs including broker commission, transfer taxes, flip tax, attorney fees, and net sale proceeds.",
  "/nyc-brownstone-seller-closing-cost-calculator/",
);

export const NYC_RENT_VS_BUY_BROWNSTONE_CALCULATOR_SEO = buildCalculatorSeo(
  "NYC Rent vs Buy Brownstone Calculator | Montfort Real Estate",
  "Compare renting vs owning a 2–4 unit NYC brownstone after rental income and illustrative tax benefits.",
  "/nyc-rent-vs-buy-brownstone-calculator/",
);

export const NYC_CONDO_VS_BROWNSTONE_CALCULATOR_SEO = buildCalculatorSeo(
  "NYC Condo vs Brownstone Calculator | Montfort Real Estate",
  "Compare true monthly housing cost and long-term equity between an NYC condo and an owner-occupied 2–4 unit brownstone.",
  "/nyc-condo-vs-brownstone-calculator/",
);

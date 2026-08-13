import ContactSection from "../shared/ContactSection";

const ARTICLES = [
  {
    href: "/upper-west-side-townhouse-q2-2024-market-report/",
    image: "/redesign-assets/hoods/harlem.webp",
    alt: "Upper West Side Townhouse Q2 2024 Market Report",
    category: "Market Report",
    title: "Upper West Side Townhouse Q2 2024 Market Report",
    excerpt: "On the Upper West Side, we observed a distinct trend that diverges from the citywide patterns.",
  },
  {
    href: "/harlem-brownstone-q2-2024-market-report/",
    image: "/redesign-assets/hoods/upper-west-side.webp",
    alt: "Harlem Brownstone Q2 2024 Market Report",
    category: "Market Report",
    title: "Harlem Brownstone Q2 2024 Market Report",
    excerpt: "The Harlem brownstone market has seen an increase in sales activity since this time last year.",
  },
  {
    href: "/discover-your-dream-home-explore-apartments-for-sale-on-the-upper-west-side/",
    image: "/redesign-assets/hoods/upper-east-side.webp",
    alt: "Discover Your Dream Home: Apartments for Sale on the Upper West Side",
    category: "Buyer Guide",
    title: "Discover Your Dream Home: Apartments for Sale on the Upper West Side",
    excerpt: "Are you searching for your dream home in one of New York City’s most sought-after neighborhoods? Look no further.",
  },
  {
    href: "/the-ultimate-guide-to-finding-the-perfect-upper-west-side-real-estate-agent/",
    image: "/redesign-assets/hoods/chelsea.webp",
    alt: "The Ultimate Guide to Finding the Perfect Upper West Side Real Estate Agent",
    category: "Buyer Guide",
    title: "The Ultimate Guide to Finding the Perfect Upper West Side Real Estate Agent",
    excerpt: "Welcome to the ultimate guide on finding the perfect Upper West Side real estate agent, whether you’re buying or selling.",
  },
  {
    href: "/sell-my-house-fast-expert-tips-to-attract-buyers-and-get-the-best-deal/",
    image: "/redesign-assets/hoods/downtown-brooklyn.webp",
    alt: "Sell My House Fast: Expert Tips to Attract Buyers and Get the Best Deal",
    category: "Seller Guide",
    title: "Sell My House Fast: Expert Tips to Attract Buyers and Get the Best Deal",
    excerpt: "Selling your house can be a daunting task, especially if you’re aiming to get the best deal in a tricky market.",
  },
  {
    href: "/what-is-my-house-worth/",
    image: "/redesign-assets/hoods/dumbo.webp",
    alt: "What Is My House Worth? A Simple Guide",
    category: "Seller Guide",
    title: "What Is My House Worth? A Simple Guide",
    excerpt: "Are you wondering what your house is worth? Whether you’re selling, refinancing, or just curious about your equity.",
  },
  {
    href: "/harlem-realtor/",
    image: "/redesign-assets/hoods/brooklyn-heights.webp",
    alt: "The Ultimate Guide to Finding the Best Harlem Realtor",
    category: "Buyer Guide",
    title: "The Ultimate Guide to Finding the Best Harlem Realtor",
    excerpt: "Searching for your dream home in Harlem can be a thrilling yet overwhelming experience with countless realtors to choose from.",
  },
  {
    href: "/manhattan-brownstone-q1-2024-market-report/",
    image: "/redesign-assets/hoods/williamsburg.webp",
    alt: "Manhattan Brownstone Q1 2024 Market Report",
    category: "Market Report",
    title: "Manhattan Brownstone Q1 2024 Market Report",
    excerpt: "Amidst the backdrop of familiar challenges echoing those of the preceding year, the Manhattan landscape shifted.",
  },
  {
    href: "/harlem-brownstone-q1-2024-market-report/",
    image: "/redesign-assets/hoods/bedford-stuyvesant.webp",
    alt: "Harlem Brownstone Q1 2024 Market Report",
    category: "Market Report",
    title: "Harlem Brownstone Q1 2024 Market Report",
    excerpt: "The Harlem brownstone market has seen an increase in the last quarter. In Q1 2024, sales volume increased.",
  },
  {
    href: "/top-harlem-new-york-townhouses-with-elevators/",
    image: "/redesign-assets/hoods/crown-heights.webp",
    alt: "Top Harlem New York Townhouses With Elevators",
    category: "Neighborhoods",
    title: "Top Harlem New York Townhouses With Elevators",
    excerpt: "Discover the rare gems of Harlem: renovated brownstones with private elevators that truly stand out.",
  },
  {
    href: "/manhattan-q3-2023-market-report/",
    image: "/redesign-assets/hoods/park-slope.webp",
    alt: "Manhattan Brownstone Q3 2023 Market Report",
    category: "Market Report",
    title: "Manhattan Brownstone Q3 2023 Market Report",
    excerpt: "Year-over-year, sales and dollar volume of Manhattan townhouses are down, but pricing remains impressively flat.",
  },
  {
    href: "/top-10-most-expensive-sold-brownstones-in-harlem/",
    image: "/redesign-assets/hoods/harlem.webp",
    alt: "Top 10 Most Expensive Sold Brownstones in Harlem",
    category: "Neighborhoods",
    title: "Top 10 Most Expensive Sold Brownstones in Harlem",
    excerpt: "Discover the standout brownstones in Harlem that not only boast unique styles, but also command top prices.",
  },
  {
    href: "/harlem-q3-2023-brownstone-market-report/",
    image: "/redesign-assets/hoods/upper-west-side.webp",
    alt: "Harlem Brownstone Q3 2023 Market Report",
    category: "Market Report",
    title: "Harlem Brownstone Q3 2023 Market Report",
    excerpt: "The Harlem brownstone market has seen a significant downturn over the last three years.",
  },
  {
    href: "/brownstones-in-new-york-city-for-sale/",
    image: "/redesign-assets/hoods/upper-east-side.webp",
    alt: "How to Find Brownstones in New York City for Sale",
    category: "Buyer Guide",
    title: "How to Find Brownstones in New York City for Sale",
    excerpt: "Are you wondering how to find brownstones in New York City for sale? Brownstones and townhouses have long been prized.",
  },
  {
    href: "/brownstones-in-new-york-city/",
    image: "/redesign-assets/hoods/chelsea.webp",
    alt: "Brownstones in New York City: Complete Guide",
    category: "Buyer Guide",
    title: "Brownstones in New York City: Complete Guide",
    excerpt: "If you’re considering a move to New York City, you may have heard the term “brownstone” thrown around.",
  },
  {
    href: "/house-hacking-your-nyc-brownstone/",
    image: "/redesign-assets/hoods/downtown-brooklyn.webp",
    alt: "House Hacking Your NYC Brownstone",
    category: "Investing",
    title: "House Hacking Your NYC Brownstone",
    excerpt: "You may want to get involved with real estate investing, but the thought of borrowing hundreds of thousands feels daunting.",
  },
  {
    href: "/how-are-high-interest-rates-affecting-the-value-of-your-brownstone/",
    image: "/redesign-assets/hoods/dumbo.webp",
    alt: "How High Interest Rates Are Affecting the Value of Your Brownstone",
    category: "Market Insight",
    title: "How High Interest Rates Are Affecting the Value of Your Brownstone",
    excerpt: "Interest rates have a powerful effect on real estate values, here’s what rising rates mean for your brownstone.",
  },
  {
    href: "/how-to-find-townhouse-with-garage/",
    image: "/redesign-assets/hoods/brooklyn-heights.webp",
    alt: "How to Find a Townhouse With Garage or Parking",
    category: "Buyer Guide",
    title: "How to Find a Townhouse With Garage or Parking",
    excerpt: "Discover your dream townhouse in New York City without breaking the bank on parking.",
  },
  {
    href: "/selling-your-brownstone-with-tenants-still-there/",
    image: "/redesign-assets/hoods/williamsburg.webp",
    alt: "Selling Your Brownstone with Tenants Still There",
    category: "Seller Guide",
    title: "Selling Your Brownstone with Tenants Still There",
    excerpt: "If you are a real estate investor, there will likely be times when you want to sell with tenants in place.",
  },
  {
    href: "/making-your-brownstone-energy-efficient/",
    image: "/redesign-assets/hoods/bedford-stuyvesant.webp",
    alt: "Making Your Brownstone Energy Efficient",
    category: "Ownership",
    title: "Making Your Brownstone Energy Efficient",
    excerpt: "One increasingly popular way to boost energy efficiency and improve air quality in your home.",
  },
  {
    href: "/a-timeline-for-renovating-your-brownstone/",
    image: "/redesign-assets/hoods/crown-heights.webp",
    alt: "A Timeline for Renovating Your Brownstone",
    category: "Ownership",
    title: "A Timeline for Renovating Your Brownstone",
    excerpt: "If you are lucky enough to own a New York City brownstone, you know you have a truly special property.",
  },
  {
    href: "/why-you-should-buy-a-brownstone-instead-of-renting-in-nyc/",
    image: "/redesign-assets/hoods/park-slope.webp",
    alt: "Why You Should Buy a Brownstone Instead of Renting in NYC",
    category: "Buyer Guide",
    title: "Why You Should Buy a Brownstone Instead of Renting in NYC",
    excerpt: "With rising interest rates and a looming recession, conventional wisdom may tell you to wait, but consider this.",
  },
  {
    href: "/are-nfts-about-to-go-mainstream-in-real-estate/",
    image: "/redesign-assets/hoods/harlem.webp",
    alt: "Are NFTs About to Go Mainstream in Real Estate?",
    category: "Market Insight",
    title: "Are NFTs About to Go Mainstream in Real Estate?",
    excerpt: "Recently a New York City real estate firm listed its first property as a Non-Fungible Token.",
  },
  {
    href: "/why-brownstone-co-ownership-makes-sense-in-a-rising-interest-rate-environment/",
    image: "/redesign-assets/hoods/upper-west-side.webp",
    alt: "Why Brownstone Co-Ownership Makes Sense in a Rising Interest Rate Environment",
    category: "Co-Ownership",
    title: "Why Brownstone Co-Ownership Makes Sense in a Rising Interest Rate Environment",
    excerpt: "If you have been thinking of buying real estate, either as your residence or as an investment, consider co-ownership.",
  },
  {
    href: "/owner-financing-for-your-brownstone/",
    image: "/redesign-assets/hoods/upper-east-side.webp",
    alt: "Owner Financing for Your Brownstone",
    category: "Financing",
    title: "Owner Financing for Your Brownstone",
    excerpt: "Rising interest rates are going to drastically slow down the real estate market for the next couple of years.",
  },
  {
    href: "/inflation-and-multi-unit-brownstone-investments/",
    image: "/redesign-assets/hoods/chelsea.webp",
    alt: "Inflation and Multi-Unit Brownstone Investments",
    category: "Investing",
    title: "Inflation and Multi-Unit Brownstone Investments",
    excerpt: "After an extended period of historically low interest rates, the Federal Reserve has started raising rates.",
  },
  {
    href: "/what-to-do-with-inherited-property/",
    image: "/redesign-assets/hoods/downtown-brooklyn.webp",
    alt: "What to Do With Inherited Property",
    category: "Seller Guide",
    title: "What to Do With Inherited Property",
    excerpt: "Inheriting property in New York can be either the biggest blessing or the biggest burden, here’s how to decide.",
  },
  {
    href: "/rent-control-v-rent-stabilization/",
    image: "/redesign-assets/hoods/dumbo.webp",
    alt: "Rent Control v. Rent Stabilization",
    category: "Ownership",
    title: "Rent Control v. Rent Stabilization",
    excerpt: "New York City has a reputation of being an expensive place to live, here’s how the rent laws actually work.",
  },
  {
    href: "/everything-you-need-to-know-about-buying-and-selling-probate-property-in-new-york-city/",
    image: "/redesign-assets/hoods/brooklyn-heights.webp",
    alt: "Everything You Need to Know About Buying and Selling Probate Property in NYC",
    category: "Seller Guide",
    title: "Everything You Need to Know About Buying and Selling Probate Property in NYC",
    excerpt: "A “probate sale” is a commonly used term in real estate, but most people don’t fully understand it.",
  },
  {
    href: "/all-about-taxes-when-you-sell-your-new-york-home/",
    image: "/redesign-assets/hoods/williamsburg.webp",
    alt: "Taxes When Selling a Home in New York: A Guide",
    category: "Seller Guide",
    title: "Taxes When Selling a Home in New York: A Guide",
    excerpt: "Putting your New York home on the market is a big decision with many tax implications to understand.",
  },
  {
    href: "/why-foreign-buyers-should-consider-buying-a-brownstone/",
    image: "/redesign-assets/hoods/bedford-stuyvesant.webp",
    alt: "Why Foreign Buyers Should Consider Buying a Brownstone",
    category: "Buyer Guide",
    title: "Why Foreign Buyers Should Consider Buying a Brownstone",
    excerpt: "Over the last couple of years, foreign buyers have been purchasing an increased number of historic townhouses.",
  },
  {
    href: "/top-ways-to-purchase-a-brownstone-with-crypto-in-new-york-city/",
    image: "/redesign-assets/hoods/crown-heights.webp",
    alt: "Top Ways to Purchase a Brownstone with Crypto in NYC",
    category: "Financing",
    title: "Top Ways to Purchase a Brownstone with Crypto in NYC",
    excerpt: "Owning a beautiful brownstone in New York City is a dream come true, and crypto opens new ways to buy.",
  },
  {
    href: "/the-benefit-of-townhouse-co-living-in-new-york-city/",
    image: "/redesign-assets/hoods/park-slope.webp",
    alt: "The Benefit of Townhouse Co-Living In New York City",
    category: "Co-Ownership",
    title: "The Benefit of Townhouse Co-Living In New York City",
    excerpt: "Purchasing any type of real estate in New York City is a major life and financial decision.",
  },
  {
    href: "/co-ownership-and-resolving-property-disputes-in-new-york-city/",
    image: "/redesign-assets/hoods/harlem.webp",
    alt: "Co-Ownership and Resolving Property Disputes in NYC",
    category: "Co-Ownership",
    title: "Co-Ownership and Resolving Property Disputes in NYC",
    excerpt: "In New York City, where the cost of living is high, co-ownership is increasingly common, here’s how to handle disputes.",
  },
  {
    href: "/co-ownership-advantages-and-disadvantages-in-nyc/",
    image: "/redesign-assets/hoods/upper-west-side.webp",
    alt: "Co-Ownership in NYC: Pros and Cons",
    category: "Co-Ownership",
    title: "Co-Ownership in NYC: Pros and Cons",
    excerpt: "New York City real estate can be expensive for average city dwellers, which is why many turn to co-ownership.",
  },
  {
    href: "/nycs-hot-real-estate-market-after-covid-19/",
    image: "/redesign-assets/hoods/upper-east-side.webp",
    alt: "NYC’s Hot Real Estate Market After Covid-19",
    category: "Market Insight",
    title: "NYC’s Hot Real Estate Market After Covid-19",
    excerpt: "As a major epicenter for outbreaks, New York experienced some of the worst effects of the Covid-19 pandemic.",
  },
  {
    href: "/new-york-says-goodbye-to-rental-discounts/",
    image: "/redesign-assets/hoods/chelsea.webp",
    alt: "New York Says Goodbye to Rental Discounts",
    category: "Market Insight",
    title: "New York Says Goodbye to Rental Discounts",
    excerpt: "When hoards of tenants fled to the suburbs amid the pandemic, landlords slashed rents, that era is ending.",
  },
  {
    href: "/the-case-for-buying-a-townhouse-over-a-condo-or-co-op-in-nyc/",
    image: "/redesign-assets/hoods/downtown-brooklyn.webp",
    alt: "The Case for Buying a Townhouse Over a Condo or Co-op in NYC",
    category: "Buyer Guide",
    title: "The Case for Buying a Townhouse Over a Condo or Co-op in NYC",
    excerpt: "The overwhelming majority of property sales in Manhattan and Brooklyn are for co-op and condo apartments.",
  },
  {
    href: "/top-7-things-to-check-before-making-a-brownstone-purchase/",
    image: "/redesign-assets/hoods/dumbo.webp",
    alt: "Top 7 Things to Check Before Making a Brownstone Purchase",
    category: "Buyer Guide",
    title: "Top 7 Things to Check Before Making a Brownstone Purchase",
    excerpt: "Are you considering relocating to a brownstone in NYC? They’re a fantastic investment, if you check these first.",
  },
  {
    href: "/advice-for-buyers-looking-to-purchase-brownstones/",
    image: "/redesign-assets/hoods/brooklyn-heights.webp",
    alt: "Brownstone Buying Guide for Buyers",
    category: "Buyer Guide",
    title: "Brownstone Buying Guide for Buyers",
    excerpt: "For a lot of New Yorkers, owning a brownstone is a dream come true, here’s how to make it happen.",
  },
  {
    href: "/the-ins-and-out-of-using-co-ownership-to-purchase-a-new-york-city-brownstone/",
    image: "/redesign-assets/hoods/williamsburg.webp",
    alt: "The Ins and Outs of Using Co-Ownership to Purchase a NYC Brownstone",
    category: "Co-Ownership",
    title: "The Ins and Outs of Using Co-Ownership to Purchase a NYC Brownstone",
    excerpt: "Many people dream of living in a NYC brownstone but find it out of reach, co-ownership can change that.",
  },
  {
    href: "/guide-everything-you-need-to-know-about-purchasing-a-multi-family-townhouse-and-renting-it-out/",
    image: "/redesign-assets/hoods/bedford-stuyvesant.webp",
    alt: "Guide: Purchasing a Multi-Family Townhouse and Renting It Out",
    category: "Investing",
    title: "Guide: Purchasing a Multi-Family Townhouse and Renting It Out",
    excerpt: "Are you an investor considering a townhouse and becoming a landlord in New York City? Start here.",
  },
  {
    href: "/5-reasons-people-are-purchasing-real-estate-in-this-current-market/",
    image: "/redesign-assets/hoods/crown-heights.webp",
    alt: "5 Reasons to Buy Real Estate in Today’s Market",
    category: "Market Insight",
    title: "5 Reasons to Buy Real Estate in Today’s Market",
    excerpt: "To say that this has been a challenging year would be an understatement, yet buyers are still moving.",
  },
  {
    href: "/you-still-have-time-to-invest-in-qualified-opportunity-zones-in-nyc/",
    image: "/redesign-assets/hoods/park-slope.webp",
    alt: "You Still Have Time To Invest In Qualified Opportunity Zones in NYC",
    category: "Investing",
    title: "You Still Have Time To Invest In Qualified Opportunity Zones in NYC",
    excerpt: "The IRS has extended the deadline for investors to invest in Qualified Opportunity Zones, here’s what to know.",
  },
  {
    href: "/what-awaits-the-nyc-real-estate-market-post-pandemic/",
    image: "/redesign-assets/hoods/harlem.webp",
    alt: "What Awaits the NYC Real Estate Market Post-Pandemic?",
    category: "Market Insight",
    title: "What Awaits the NYC Real Estate Market Post-Pandemic?",
    excerpt: "NYC realtors, agents, and brokers are all watching closely to see what the post-pandemic market holds.",
  },
  {
    href: "/5-signals-that-the-housing-market-is-on-the-road-to-recovery-post-covid-19/",
    image: "/redesign-assets/hoods/upper-west-side.webp",
    alt: "5 Signs the Housing Market Is Recovering After COVID-19",
    category: "Market Insight",
    title: "5 Signs the Housing Market Is Recovering After COVID-19",
    excerpt: "When the WHO declared COVID-19 a global pandemic, the housing market froze, here are the signs it’s thawing.",
  },
  {
    href: "/demystifying-the-reopening-of-nyc-and-what-it-means-for-real-estate/",
    image: "/redesign-assets/hoods/upper-east-side.webp",
    alt: "Demystifying the Reopening of NYC and What it Means for Real Estate",
    category: "Market Insight",
    title: "Demystifying the Reopening of NYC and What it Means for Real Estate",
    excerpt: "On June 8, 2020, New York City entered Phase 1 of a four-part reopening plan, here’s the real estate impact.",
  },
  {
    href: "/mortgage-rate-drops-to-historic-lows/",
    image: "/redesign-assets/hoods/chelsea.webp",
    alt: "Mortgage Rate Drops to Historic Lows",
    category: "Financing",
    title: "Mortgage Rate Drops to Historic Lows",
    excerpt: "In the last week, mortgage rates have gotten even more affordable and reached an all-time low.",
  },
  {
    href: "/top-4-reasons-to-invest-in-multi-family-properties-amid-the-coronavirus-pandemic/",
    image: "/redesign-assets/hoods/downtown-brooklyn.webp",
    alt: "Top 4 Reasons to Invest in Multi-family Properties Amid the Pandemic",
    category: "Investing",
    title: "Top 4 Reasons to Invest in Multi-family Properties Amid the Pandemic",
    excerpt: "Spearheaded by the pandemic, there is a great deal of uncertainty, yet multi-family remains resilient.",
  },
  {
    href: "/why-townhouses-make-sense-during-and-post-covid-19/",
    image: "/redesign-assets/hoods/dumbo.webp",
    alt: "Why Townhouses Make Sense During and Post COVID-19",
    category: "Buyer Guide",
    title: "Why Townhouses Make Sense During and Post COVID-19",
    excerpt: "Space and personal privacy are two commodities in rarer supply for New York apartment residents.",
  },
  {
    href: "/understanding-nyc-sro-laws-how-to-convert-an-sro-townhouse-to-a-class-a-property/",
    image: "/redesign-assets/hoods/brooklyn-heights.webp",
    alt: "Understanding NYC SRO Laws: How to Convert an SRO Townhouse to Class A",
    category: "Investing",
    title: "Understanding NYC SRO Laws: How to Convert an SRO Townhouse to Class A",
    excerpt: "New York’s emerging neighborhoods hold a wealth of deals, SRO conversions among the most lucrative.",
  },
  {
    href: "/the-upside-of-a-down-market-why-now-is-the-time-to-upsize-to-a-harlem-townhouse/",
    image: "/redesign-assets/hoods/williamsburg.webp",
    alt: "The Upside of a Down Market: Why Now Is the Time to Upsize to a Harlem Townhouse",
    category: "Market Insight",
    title: "The Upside of a Down Market: Why Now Is the Time to Upsize to a Harlem Townhouse",
    excerpt: "If you’re a homeowner in NYC, the tepid market might have you cringing, but it’s an opportunity to upsize.",
  },
  {
    href: "/is-co-living-the-new-sro-how-to-leverage-this-trend-for-a-greater-roi/",
    image: "/redesign-assets/hoods/bedford-stuyvesant.webp",
    alt: "Is Co-Living the New SRO? How to Leverage This Trend for a Greater ROI",
    category: "Investing",
    title: "Is Co-Living the New SRO? How to Leverage This Trend for a Greater ROI",
    excerpt: "For many New Yorkers, the biggest challenge of city living is affordability, co-living is reshaping the math.",
  },
  {
    href: "/harlems-multi-family-townhouses-are-opportunity-zone-hidden-gem/",
    image: "/redesign-assets/hoods/crown-heights.webp",
    alt: "Harlem’s Multi-Family Townhouses Are an Opportunity Zone Hidden Gem",
    category: "Investing",
    title: "Harlem’s Multi-Family Townhouses Are an Opportunity Zone Hidden Gem",
    excerpt: "More than a year after the IRS introduced Opportunity Zones, Harlem’s multi-family townhouses remain undervalued.",
  },
  {
    href: "/how-to-price-a-harlem-townhouse/",
    image: "/redesign-assets/hoods/park-slope.webp",
    alt: "How to Price a Harlem Townhouse",
    category: "Seller Guide",
    title: "How to Price a Harlem Townhouse",
    excerpt: "What Harlem homeowners can take from the record-setting $27 million townhouse listing.",
  },
] as const;

const CARD_LINK = {
  display: "flex",
  flexDirection: "column",
  background: "#F9F6E6",
  border: "1px solid #E0D9B8",
  borderRadius: 16,
  overflow: "hidden",
  transition: "transform .4s ease, box-shadow .4s ease, border-color .4s ease",
} as const;

const CARD_IMAGE = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
  transition: "transform 1s cubic-bezier(0.22,0.61,0.36,1)",
} as const;

export default function BlogContent() {
  return (
    <>
      <section data-screen-label="Blog hero" style={{ position: "relative", background: "#0F1729", overflow: "hidden", padding: "92px 64px 84px" }}>
        <img src="/redesign-assets/hoods/harlem.webp" alt="Harlem" aria-hidden="true" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.14, display: "block" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(15,23,41,0.7) 0%, rgba(15,23,41,0.94) 62%)" }} />
        <div style={{ position: "absolute", top: -140, right: -160, width: 600, height: 600, borderRadius: "50%", border: "1px solid rgba(201,138,44,0.16)" }} />
        <div style={{ position: "relative", zIndex: 2, maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14 }}>
            <span style={{ width: 34, height: 1, background: "#C98A2C", display: "block" }} />
            <span style={{ fontSize: 11.5, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "#F0D9A8" }}>Resources</span>
            <span style={{ width: 34, height: 1, background: "#C98A2C", display: "block" }} />
          </div>
          <h1 style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontWeight: 700, fontSize: 56, lineHeight: 1.08, letterSpacing: "-0.018em", color: "#F9F6E6", margin: "22px 0 0", textWrap: "pretty" }}>News & realtor advice</h1>
          <p style={{ fontSize: 19, lineHeight: 1.7, color: "rgba(249,246,230,0.85)", margin: "20px auto 0", maxWidth: 620, textWrap: "pretty" }}>Market reports, buyer and seller guides, and neighborhood insight from Stanley Montfort, stay in the loop on everything NYC real estate.</p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, marginTop: 36, flexWrap: "wrap" }}>
            <a
              href="https://calendly.com/montfort"
              target="_blank"
              rel="noopener"
              style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 9, background: "#C98A2C", color: "#0F1729", fontSize: 14, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", borderRadius: 100, padding: "16px 30px", minHeight: 52 }}
              {...{ "style-hover": "background:#F9F6E6; color:#113B5F" }}
            >
              Book a consultation{" "}
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h9M8 3.5L12.5 8 8 12.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="tel:+1-646-970-1078"
              style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 9, background: "transparent", color: "#F9F6E6", fontSize: 14, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", border: "1px solid rgba(201,138,44,0.6)", borderRadius: 100, padding: "16px 30px", minHeight: 52 }}
              {...{ "style-hover": "background:rgba(249,246,230,0.08); border-color:#C98A2C" }}
            >
              Call (646) 970-1078
            </a>
          </div>
        </div>
      </section>
      <section data-screen-label="Articles" style={{ background: "#F5EECB", padding: "90px 64px", borderBottom: "1px solid #E0D9B8" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <div data-reveal="" style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 24, flexWrap: "wrap", marginBottom: 44 }}>
            <div style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontWeight: 700, fontSize: 22, color: "#0F1729" }}>55 articles</div>
            <div style={{ fontSize: 14, color: "#3B4C5E" }}>Market Reports · Buyer & Seller Guides · Co-Ownership · Investing</div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: 26 }}>
            {ARTICLES.map((article) => (
              <a
                key={article.href}
                data-reveal=""
                href={article.href}
                style={CARD_LINK}
                {...{ "style-hover": "transform:translateY(-6px); box-shadow:0 26px 54px rgba(17,59,95,0.14); border-color:#C98A2C" }}
              >
                <div style={{ aspectRatio: "5/3", overflow: "hidden", background: "#E0D9B8" }}>
                  <img
                    src={article.image}
                    alt={article.alt}
                    loading="lazy"
                    style={CARD_IMAGE}
                    {...{ "style-hover": "transform:scale(1.05)" }}
                  />
                </div>
                <div style={{ display: "flex", flexDirection: "column", flex: "1 1 auto", padding: "24px 26px 26px" }}>
                  <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "#C98A2C" }}>{article.category}</div>
                  <div style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontWeight: 700, fontSize: 19, lineHeight: 1.32, color: "#0F1729", marginTop: 12, textWrap: "pretty" }}>{article.title}</div>
                  <p style={{ fontSize: 15, lineHeight: 1.7, color: "#3B4C5E", margin: "12px 0 0", flex: "1 1 auto", textWrap: "pretty" }}>{article.excerpt}</p>
                  <div style={{ display: "flex", alignItems: "center", gap: 9, marginTop: 20, fontSize: 11.5, fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase", color: "#113B5F" }}>
                    Read article <span style={{ color: "#C98A2C" }}>→</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
      <ContactSection />
    </>
  );
}

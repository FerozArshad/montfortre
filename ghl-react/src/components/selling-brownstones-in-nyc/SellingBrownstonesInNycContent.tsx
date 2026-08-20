import ContactSection from "../shared/ContactSection";
import PromisesBar from "../shared/PromisesBar";
import ResourcesSection from "../shared/ResourcesSection";
import "../../styles/two-family-page.css";
import "../../styles/buying-guides-page.css";


const NEWS_ARTICLES = [
  {
    href: "/upper-west-side-townhouse-q2-2024-market-report/",
    image: "/redesign-assets/hoods/upper-west-side.webp",
    alt: "Upper West Side Townhouse Q2 2024 Market Report",
    title: "Upper West Side Townhouse Q2 2024 Market Report",
    excerpt:
      "On the Upper West Side, we observed a distinct trend that diverges from the citywide patterns. Speci…",
  },
  {
    href: "/harlem-brownstone-q2-2024-market-report/",
    image: "/redesign-assets/hoods/harlem.webp",
    alt: "Harlem Brownstone Q2 2024 Market Report",
    title: "Harlem Brownstone Q2 2024 Market Report",
    excerpt: "The Harlem brownstone market has seen an increase in sales activity since this time last year. In Q2…",
  },
  {
    href: "/discover-your-dream-home-explore-apartments-for-sale-on-the-upper-west-side/",
    image: "/redesign-assets/hoods/chelsea.webp",
    alt: "Discover Your Dream Home: Explore Apartments for Sale on the Upper West Side",
    title: "Discover Your Dream Home: Explore Apartments for Sale on the Upper West Side",
    excerpt:
      "Are you searching for your dream home in one of New York City’s most sought-after neighborhoods? Loo…",
  },
] as const;

export default function SellingBrownstonesInNycContent() {
  return (
    <>
      <section className="tf-hero" data-screen-label="Service hero">
        <div className="tf-hero-ring" />
        <div className="tf-hero-inner">
          <div data-reveal="">
            <h1>Selling Brownstones in NYC — Expert Guidance for Maximum Value &amp; Seamless Transactions</h1>
            <p className="tf-hero-lead">
              We’ll help you <strong>sell your NYC brownstone</strong> for the <strong>highest possible value </strong>
              while minimizing stress, delays, and costly mistakes throughout the process.
            </p>
            <div className="tf-hero-ctas">
              <a href="tel:+1-646-970-1078" className="tf-hero-tel">
                Call 1-(646)-970-1078
              </a>
              <a href="https://calendly.com/montfort" className="tf-hero-book">
                Schedule A Consultation
              </a>
            </div>
          </div>
          <div className="tf-hero-media" data-reveal="">
            <div className="tf-hero-frame">
              <img src="/redesign-assets/services/selling-brownstones-nyc.png" alt="" />
            </div>
          </div>
        </div>
      </section>

      <PromisesBar variant="light" screenLabel="Client promises" />

      <section className="tf-guide" data-screen-label="Guide">
        <div className="tf-guide-inner">
          <div data-reveal="">
            <h1>Selling Brownstones in NYC: Your Complete Guide to Maximizing Value</h1>
            <div className="tf-guide-rule" />
            <h2>Expert Brownstone Selling Services in Manhattan and Brooklyn</h2>
            <p>
              Selling a brownstone in New York City is one of the most significant financial decisions you&apos;ll
              make-and one that demands far more than a standard listing approach. I&apos;m Stanley Montfort, and since
              2010 I&apos;ve specialized exclusively in helping NYC homeowners sell their brownstones for maximum value
              across Manhattan and Brooklyn.
            </p>
            <p>
              Every brownstone I list receives a comprehensive marketing strategy targeting local, national, and
              international buyers. My approach begins with strategic pricing grounded in current comparable brownstone
              sales-not guesswork or aspirational numbers-and extends through professional staging, photography,
              targeted outreach, and hands-on negotiation through closing day.Every successful sale starts with an
              accurate{" "}
              <a href="/mortgage-calculator/" className="tf-guide-link">
                NYC Brownstone Free Home Valuation
              </a>{" "}
              based on current market conditions.
            </p>
            <p>
              The NYC brownstone market rewards sellers who understand what makes these properties irreplaceable. With
              demand for townhouses in NYC remaining high due to chronic supply shortages, properly positioned
              properties attract serious, qualified buyers. But &quot;properly positioned&quot; is where most sellers
              either succeed dramatically or leave significant money on the table.
            </p>
            <p>
              Whether you own a fully restored single family brownstone on a tree-lined block in Park Slope or a
              multi-family income property in Harlem, I provide end-to-end support from the moment we discuss your goals
              through the successful closing of your sale.
            </p>
            <hr />
            <h2>Why Selling a Brownstone Requires a Specialized Strategy</h2>
            <p>
              One of the first things I tell every homeowner I meet: selling a brownstone is nothing like selling a condo
              or co-op. These are among NYC&apos;s most unique architectural assets, and they require a selling strategy
              built specifically for their character, history, and buyer expectations.
            </p>
            <p>
              <strong>Brownstones represent irreplaceable architectural heritage.</strong> Brownstones were primarily
              built in the late 19th century, and most NYC brownstones feature original woodwork and decorative
              fireplaces that are extraordinarily difficult to replicate today. The brownstone facades themselves are
              often made from a veneer of brownstone material, much of which was supplied by the{" "}
              <a href="https://en.wikipedia.org/wiki/Portland_Brownstone_Quarries" className="tf-guide-link">
                Portland Brownstone Quarry
              </a>
              . Buyers of brownstones value unique architectural details and historical integrity-ornate details like
              carved staircases, marble mantels, and stained glass windows aren&apos;t just aesthetic; they&apos;re
              central to how buyers perceive value.
            </p>
            <p>
              <strong>Historic character directly impacts your pricing and marketing approach.</strong> Brownstones often
              have features that are difficult to replicate, which means your marketing must showcase what makes your
              property singular. Buyers are searching for a sense of history, community, and architectural authenticity
              that simply doesn&apos;t exist in new construction.
            </p>
            <p>
              <strong>Landmark considerations shape what buyers can do after purchase.</strong> Many brownstones are in
              landmark districts requiring renovation approval. Roughly{" "}
              <a
                href="https://www.nyc.gov/assets/planning/download/pdf/about/publications/zoning-handbook/zoning-handbook-06.pdf"
                className="tf-guide-link"
              >
                35,000 properties in NYC fall under landmarks or historic district protections
              </a>
              , and exterior alterations to brownstones may need approval from the Landmarks Preservation Commission.
              This affects buyer perception, timeline, and ultimately your negotiation strategy.
            </p>
            <p>
              <strong>Limited inventory creates premium pricing opportunities.</strong> When properly positioned with
              compelling staging, accurate pricing, and targeted marketing, the scarcity of quality brownstone listings
              works powerfully in your favor.
            </p>
            <p>
              <strong>The buyer pool is unusually diverse.</strong> Your potential buyers include local families seeking
              multi-generational homes, investors evaluating income potential, and international purchasers seeking
              iconic NYC properties. In 2025,{" "}
              <a
                href="https://www.lirealtor.com/news/member-news/view/2025/08/05/new-york-foreign-buyer-activity-insights-from-nar-s-2025-report"
                className="tf-guide-link"
              >
                foreign buyers accounted for approximately 7% of residential purchases
              </a>{" "}
              in New York State, with a meaningful proportion targeting premium brownstone neighborhoods.
            </p>
            <hr />
            <h2>Our Comprehensive Brownstone Selling Services</h2>
            <div className="tf-fig">
              <img
                src="/redesign-assets/services/selling-brownstones-article-1.png"
                alt="Brownstone selling service featuring Manhattan brownstone listing, for sale sign, and real estate marketing documents for maximizing property value in NYC"
                loading="lazy"
              />
            </div>
            <h3>Manhattan Brownstone Sales</h3>
            <p>
              Manhattan&apos;s brownstone and townhouse market commands the city&apos;s highest valuations. I work
              extensively with owners across the Upper West Side, Upper East Side, Greenwich Village, and Harlem-each
              neighborhood with its own pricing dynamics and buyer expectations.
            </p>
            <p>
              In the first half of 2025, Manhattan townhouse transactions on the{" "}
              <a
                href="https://danielblatman.com/blog/pricing-an-upper-west-side-brownstone-or-townhouse"
                className="tf-guide-link"
              >
                Upper West Side averaged approximately $6.3 million
              </a>
              , with price per square foot around $1,245. By Q2 2026, Manhattan brownstone medians showed a modest
              rebound, with figures closer to $7.1 million. These numbers reflect a market where single family
              brownstones and restored architectural masterpieces attract premium buyers-but only when priced and
              marketed with precision.
            </p>
            <p>
              Harlem brownstones have shown strong long-term appreciation, making them increasingly desirable for both
              end-users and investors. Many{" "}
              <a href="/buying-a-brownstone-in-nyc/" className="tf-guide-link">
                Harlem brownstones
              </a>{" "}
              have been divided into rental units over the decades, creating distinct selling strategies depending on
              configuration.
            </p>
            <p>
              My Manhattan focus includes premium marketing for properties exceeding $5 million, leveraging relationships
              with high-net-worth local buyers and international brokers.
            </p>
            <h3>Brooklyn Brownstone Sales</h3>
            <p>
              Brooklyn&apos;s brownstone market spans a wide range of neighborhoods, price points, and buyer profiles. I
              represent sellers in Park Slope, Carroll Gardens, Cobble Hill, Fort Greene, Brooklyn Heights, and emerging
              markets in Bed-Stuy and Crown Heights.
            </p>
            <p>
              In Q1 2026,{" "}
              <a
                href="https://shop.bottegadelsarto.com/opinion/brooklyn-brownstone-market-2026-sales-data-2026-report-186784"
                className="tf-guide-link"
              >
                Brooklyn brownstones carried a median sales price of approximately $2.68 million
              </a>
              , with average days on market rising from 52 days in 2025 to 74 days. That shift means preparation, pricing
              accuracy, and marketing quality matter more than ever.
            </p>
            <p>
              Brooklyn&apos;s appeal lies in its blend of historic districts, walkable neighborhoods, and strong
              community identity. Multi-family income-producing properties attract a different buyer segment than family
              conversions, and I tailor every marketing campaign accordingly.
            </p>
            <hr />
            <h2>Top 10 Factors That Maximize Your Brownstone&apos;s Sale Value</h2>
            <p>
              When I walk through a brownstone for the first time, I&apos;m evaluating a very specific set of value
              drivers. Here are the ten factors I focus on to help sellers understand what moves the needle:
            </p>
            <ol className="tf-olist">
              <li>
                <strong>Original architectural details:</strong> Restored mantels, original woodwork, hardwood floors,
                fireplaces, and stained glass create emotional impact that directly translates to pricing power.
                Restoring original features can be significantly costly, but the perceived value among buyers is
                substantial.
              </li>
              <li>
                <strong>Property depth and garden access:</strong> Private outdoor space-gardens, yards, rooftop
                potential-is exceptionally rare and desirable in NYC. Townhouse buyers often seek specific lifestyle
                benefits such as private outdoor space, and this feature consistently drives premium offers.
              </li>
              <li>
                <strong>Current configuration:</strong> Single-family brownstones function as one residence across all
                floors, providing more privacy and cohesive living.{" "}
                <a href="/nyc-multifamily-real-estate-agent-service/" className="tf-guide-link">
                  Multi-family brownstones
                </a>{" "}
                are divided into rental units for income. Many brownstones include separate rental apartments for income,
                and that income potential significantly influences buyer interest and financing approach.
              </li>
              <li>
                <strong>Recent renovations:</strong> Updated kitchens, bathrooms, and mechanical systems reduce buyer
                anxiety. Buyers prioritize avoiding renovations due to high construction costs in NYC. The NYC market
                strongly favors move-in-ready homes over neglected ones.
              </li>
              <li>
                <strong>Landmark status and historic district protections:</strong> While constraints exist, landmark
                designation enhances prestige-and price. But sellers must disclose restrictions and help buyers
                understand permitting requirements.
              </li>
              <li>
                <strong>Block character and neighborhood amenities:</strong> Many homeowners underestimate how much
                buyers pay for the block itself-tree-lined streets, cohesive stoops, proximity to parks and transit. The
                appeal of the street matters as much as the property.
              </li>
              <li>
                <strong>Stoop condition and curb appeal:</strong> Brownstones often have distinctive stoops-originally
                constructed to keep residents above street debris. The stoop is the first thing buyers see, and facade
                condition sets the tone for every showing.
              </li>
              <li>
                <strong>Ceiling heights and natural light:</strong> High ceilings on parlor floors, large windows, and
                open sight lines throughout floors create the sense of space that defines the brownstone allure. These
                features are architectural and cannot be added later.
              </li>
              <li>
                <strong>Parking availability and garage potential:</strong> In a city where parking is perpetually
                scarce, garage access or buildable parking space adds measurable value.
              </li>
              <li>
                <strong>Comparable sales timing and market positioning strategy:</strong> Because brownstone-type
                properties are rare, comps may be months or even years old. I use the most recent townhouse and rowhouse
                closings-specifically matched by block, configuration, and condition-to build a defensible pricing
                strategy.
              </li>
            </ol>
            <hr />
            <h2>Our Proven Brownstone Selling Process</h2>
            <div className="tf-fig">
              <img
                src="/redesign-assets/services/selling-brownstones-article-2.png"
                alt="Real estate agent reviewing property valuation checklist with home photos and market comparables for accurate home appraisal"
                loading="lazy"
              />
            </div>
            <h3>Step 1: Property Evaluation and Pricing Strategy</h3>
            <p>
              Before listing a brownstone, I conduct a comprehensive market analysis of recent brownstone sales in your
              neighborhood-not just borough-wide averages, but block-specific data. I assess your architectural features,
              condition, configuration, and improvement opportunities.
            </p>
            <p>
              Realistic pricing based on comparable sales is crucial for selling brownstones. Well-priced brownstones
              sell quickly compared to overvalued listings, while overpricing leads to extended time on market and
              eventual price reductions. In Brooklyn, approximately 37% of brownstone listings had price reductions in
              early 2026, compared to just 22% in 2024-a clear signal that pricing discipline matters more than ever.
            </p>
            <p>
              One of the biggest mistakes I see sellers make is using generalized pricing metrics rather than block- or
              neighborhood-specific comps. In Manhattan especially, where blocks differ dramatically, this approach is
              dangerous. I provide a strategic pricing recommendation based on current buyer demand, inventory levels,
              and the unique characteristics of your property.
            </p>
            <h3>Step 2: Pre-Market Preparation</h3>
            <p>
              When preparing a brownstone for market, I walk through every floor with the owner and discuss what to
              address-and what to leave alone. Many homeowners assume that any renovation will increase value equally; in
              fact, sometimes moderate cosmetic improvements yield better return on investment than expensive custom
              works that buyers don&apos;t appreciate.
            </p>
            <p>
              <strong>
                High-return improvements for brownstones include fresh paint, minor bathroom upgrades, and refinished
                floors.
              </strong>{" "}
              Cosmetic updates may start around $100K–$250K, while renovation costs can exceed $500K–$1M for full
              structural work. Before listing, I always insist on a cost-benefit model for major repairs versus selling
              as-is, especially for brownstones with deferred maintenance.
            </p>
            <p>
              Professional staging can increase offers by 1% to 10%. I coordinate staging recommendations that highlight
              your brownstone&apos;s historic character-showcasing the interiors, parlor floors, and original details
              that differentiate your property from everything else on the market.
            </p>
            <p>
              Professional photography enhances the marketing of brownstones by showcasing their character. I commission
              architectural-quality photos, video walkthroughs, and virtual tours that capture the space, light, and
              details that make buyers fall in love before they ever step through the door.
            </p>
            <p>
              Pre-market preparation in December facilitates January and February listings, positioning your property
              ahead of the spring surge. Spring listings yield 36.5% more inquiries in the NYC market-timing your
              preparation accordingly can meaningfully impact your outcome.
            </p>
            <h3>Step 3: Strategic Marketing Campaign</h3>
            <p>
              Marketing a brownstone effectively means reaching the right buyers through specialized channels. I deploy
              targeted campaigns to brownstone-seeking buyers-local families familiar with specific neighborhoods,
              investors evaluating income scenarios, and international purchasers drawn to NYC real estate.
            </p>
            <p>
              International outreach is essential for premium properties. Global capital has been returning to Manhattan
              and Brooklyn, with{" "}
              <a
                href="https://www.nestseekers.com/Guides/global-capital-returns-to-manhattan-international"
                className="tf-guide-link"
              >
                increased activity from buyers in Japan, South Korea, Germany, and Canada
              </a>{" "}
              seeking prestige residential assets.
            </p>
            <p>
              For every listing, I coordinate private showings for qualified prospects and broker events that generate
              buzz among agents specifically active in the brownstone market. High-quality digital presence-drone
              footage, site maps, neighborhood context-ensures your property stands out in every search.
            </p>
            <h3>Step 4: Offer Management and Negotiation</h3>
            <p>
              Not every offer is created equal. I evaluate each{" "}
              <a href="/mortgage-calculator/" className="tf-guide-link">
                buyer&apos;s financing strength
              </a>
              , contingencies, and timeline capabilities. All-cash offers may arrive less frequently, but they&apos;re
              typically more reliable-especially in Manhattan where most people expect a streamlined closing.
            </p>
            <p>
              Single-family brownstones use residential loans for financing, while multi-family brownstones require
              commercial financing options. Commercial financing typically requires a 40% down payment, which narrows the
              buyer pool but often produces more serious offers. Lenders familiar with brownstones can help buyers
              understand their options, and I work closely with buyer agents to ensure financing doesn&apos;t become an
              obstacle.
            </p>
            <p>
              Current buyers are more payment-sensitive due to recent interest rate changes, which makes accurate pricing
              and strong marketing even more critical. I guide sellers through every aspect of the inspection, appraisal,
              and closing process-including preparing documentation that supports your asking price and eliminates
              surprises.
            </p>
            <hr />
            <h2>What Our Brownstone Sellers Say</h2>
            <blockquote className="tf-quote">
              <p>
                <strong>
                  <em>
                    &quot;Stanley understood exactly what made our Park Slope brownstone special. He staged the parlor
                    floor to highlight the original woodwork and fireplaces, priced it based on recent block-specific
                    comps, and we had multiple offers within three weeks. We closed above our adjusted asking
                    price.&quot;
                  </em>
                </strong>
                <strong>
                  <em>– David and Karen L., Park Slope</em>
                </strong>
              </p>
            </blockquote>
            <blockquote className="tf-quote">
              <p>
                <strong>
                  <em>
                    &quot;We were nervous about selling our Upper East Side townhouse because of the landmark
                    restrictions. Stanley walked us through every LPC consideration, helped us prepare documentation of
                    past renovations and permits, and attracted international buyers who understood the value. The entire
                    process was smoother than we expected.&quot;
                  </em>
                </strong>
                <strong>
                  <em>– Margaret T., Upper East Side</em>
                </strong>
              </p>
            </blockquote>
            <blockquote className="tf-quote">
              <p>
                <strong>
                  <em>
                    &quot;As an investor selling a multi-family brownstone in Harlem, I needed an agent who understood the
                    income potential and could market to the right buyers. Stanley modeled the rental income scenarios,
                    highlighted the separate units, and connected us with qualified buyers who appreciated the
                    building&apos;s wealth-generating capacity.&quot;
                  </em>
                </strong>
                <strong>
                  <em>– James R., Harlem</em>
                </strong>
              </p>
            </blockquote>
            <hr />
            <h2>Frequently Asked Questions About Selling Brownstones</h2>
            <div className="tf-fig">
              <img
                src="/redesign-assets/services/selling-brownstones-article-3.png"
                alt="Today's market comparison"
                loading="lazy"
              />
            </div>
            <h3>How long does it typically take to sell a brownstone in today&apos;s market?</h3>
            <p>
              Timeline varies significantly by borough, price point, and condition. In Brooklyn, average days on market
              for brownstones have risen to approximately 74 days in early 2026, up from 52 days in 2025. Manhattan
              brownstones in the right price range can move faster, particularly when fully restored and accurately
              priced. Overpriced listings, regardless of location, consistently sit longer.
            </p>
            <h3>Should I renovate before listing or sell as-is to investors?</h3>
            <p>
              This is one question I always discuss with sellers early. The answer depends on your brownstone&apos;s
              current condition, your budget, and your timeline. High-return improvements for brownstones include fresh
              paint and minor bathroom upgrades-relatively modest investments that improve buyer perception. Entry-level
              renovation projects start in the low millions, while fully restored brownstones can exceed $4M–$6M or more
              in sale price. I build a cost-benefit analysis for every seller so you can make an informed decision.
            </p>
            <h3>How do landmark restrictions affect my property&apos;s marketability?</h3>
            <p>
              Landmark status adds prestige but also imposes constraints. Exterior alterations to brownstones may need
              approval from the Landmarks Preservation Commission through a Certificate of Appropriateness, Permit for
              Minor Work, or Certificate of No Effect. Buyers appreciate knowing exactly what&apos;s permitted and what
              documentation exists. Transparency about these restrictions-rather than downplaying them-builds buyer
              confidence and actually strengthens your negotiating position.
            </p>
            <h3>What&apos;s the difference in selling strategy for single-family vs. multi-family brownstones?</h3>
            <p>
              Single-family brownstones appeal primarily to families seeking privacy, cohesive living across all floors,
              and residential financing. Multi-family setups can help offset expenses with rental income, attracting
              investors who evaluate the building based on income potential and cap rates. The marketing approach, buyer
              outreach, and pricing methodology differ substantially between the two.
            </p>
            <h3>How do you market to international buyers interested in NYC brownstones?</h3>
            <p>
              International buyers are drawn to NYC brownstones as trophy investments due to their scarcity and
              architectural significance. I leverage relationships with international brokerages, digital marketing
              campaigns targeting global markets, and private showings coordinated across time zones. For premium
              properties, this international outreach has been instrumental in generating competitive, all-cash offers.
            </p>
            <h3>What are the most common mistakes sellers make when listing their brownstone?</h3>
            <p>
              The biggest mistakes I see include overpricing based on aspirational rather than comparable values,
              neglecting pre-market preparation, ignoring the cost and timeline of LPC compliance, and poor marketing
              presentation. Many brownstones require specialized care for aged plumbing systems and mechanical
              infrastructure-sellers who fail to address or disclose these issues face problems during inspection that
              can delay or derail transactions.
            </p>
            <h3>How do you determine the right listing price for a unique historic property?</h3>
            <p>
              I analyze recent townhouse and rowhouse closings on the same or adjacent blocks, matching by configuration,
              condition, and landmark status. Market changes can create unique opportunities depending on neighborhood
              inventory levels. Because comps for brownstones can be scarce, I supplement with broader townhouse data
              while making adjustments for specific property features. The goal is a price that generates strong showing
              activity and competitive offers within the first few weeks.
            </p>
            <h3>Should I consider selling to developers or focus on end-user buyers?</h3>
            <p>
              This depends on your property&apos;s zoning, lot size, and location. Recent{" "}
              <a
                href="https://www.nyc.gov/mayors-office/news/2026/06/mamdani-administration-unveils-new-tools-to-build-more-housing-w"
                className="tf-guide-link"
              >
                zoning tools introduced by the Mamdani administration
              </a>{" "}
              in mid-2026-including expanded ADU provisions and simplified Landmark Transferable Development Rights-have
              created new possibilities that may attract developer interest. I evaluate whether developer or end-user
              marketing will yield the stronger result for your specific situation.
            </p>
            <h3>What documentation do I need for landmark or historic district properties?</h3>
            <p>
              Brownstones require documentation such as renovation permits and Certificates of Occupancy during sales.
              Documentation of maintenance and renovations builds buyer confidence and supports your asking price during
              appraisal. I help sellers compile records of past LPC approvals, structural work, mechanical upgrades, and
              facade restorations before going to market. Transparency about property ownership costs avoids future buyer
              surprises and keeps transactions moving forward.
            </p>
            <h3>How do brownstone sales differ from condo or co-op transactions?</h3>
            <p>
              Brownstone sales involve no board approval, no monthly maintenance fees (though owners bear all maintenance
              costs directly), and no restrictions on renovations beyond landmark and zoning rules. The appraisal process
              is more complex due to limited comps, and financing differs-particularly for multi-family configurations
              where commercial financing may apply. The lack of modern amenities often concerns brownstone buyers, so
              presenting your property&apos;s systems and condition transparently is essential.
            </p>
            <hr />
            <h2>Ready to Sell Your Brownstone?</h2>
            <p>
              Every brownstone has a story, and every sale deserves a strategy built around what makes your property
              irreplaceable. If you&apos;re considering selling your brownstone in Manhattan or Brooklyn, I&apos;d
              welcome the opportunity to walk through your home, discuss your goals, and provide a customized pricing
              analysis and marketing plan.
            </p>
            <p>
              Schedule your complimentary property consultation to receive a personalized evaluation of your
              brownstone&apos;s market position, preparation recommendations, and a clear roadmap to achieving the
              strongest possible sale.
            </p>
            <p className="tf-guide-center">
              <strong>Phone:</strong>{" "}
              <a href="tel:+1-646-970-1078" className="tf-guide-link">
                1-646-970-1078
              </a>
              {"  "}
              <strong>Email:</strong>{" "}
              <a href="mailto:sm@montfortre.com" className="tf-guide-link">
                sm@montfortre.com
              </a>
              {"  "}
              <strong>Address:</strong> 8 West 126th Street, New York NY 10027
            </p>
            <p>
              Brownstones are among NYC&apos;s most prized assets. Let&apos;s make sure yours is positioned to attract
              the buyers-and the offers-it deserves.
            </p>
          </div>
        </div>
      </section>

<ResourcesSection
        title="Recent News & Realtor Advice"
        subtitle="Stay in the loop on the latest events, news, & happenings in and around our community!"
        showCategory={false}
        showCta={false}
        articles={NEWS_ARTICLES}
      />
      <ContactSection />
    </>
  );
}

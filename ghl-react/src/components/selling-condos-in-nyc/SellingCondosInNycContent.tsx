import ContactSection from "../shared/ContactSection";
import PromisesBar from "../shared/PromisesBar";
import ResourcesSection from "../shared/ResourcesSection";
import "../../styles/two-family-page.css";
import "../../styles/buying-guides-page.css";
import { FaqAccordion, FaqItem } from "../shared/FaqAccordion";
import HeroGoogleRating from "../shared/HeroGoogleRating";


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

export default function SellingCondosInNycContent() {
  return (
    <>
      <section className="tf-hero" data-screen-label="Service hero">
        <div className="tf-hero-ring" />
        <div className="tf-hero-inner">
          <div data-reveal="">
            <h1>Selling Condos in NYC — Expert Guidance to Maximize Your Sale</h1>
            <p className="tf-hero-lead">
              We’ll help you maximize your condo’s value, attract qualified buyers, and navigate the sale process
              smoothly from listing to closing.
            </p>
            <div className="tf-hero-ctas">
              <a href="tel:+16469701078" className="tf-hero-tel">
                Call 1-(646)-970-1078
              </a>
              <a href="https://calendly.com/montfort" className="tf-hero-book">
                Schedule A Consultation
              </a>
            </div>
          </div>
          <div className="tf-hero-media" data-reveal="">
            <div className="tf-hero-frame">
              <img src="/redesign-assets/services/selling-condos-nyc.png" alt="" />
            </div>
            <HeroGoogleRating prefix="tf" />
          </div>
        </div>
      </section>

      <PromisesBar variant="light" screenLabel="Client promises" />

      <section className="tf-guide" data-screen-label="Guide">
        <div className="tf-guide-inner">
          <div data-reveal="">
            <h1>Selling Condos in NYC: Complete Guide and Expert Services</h1>
            <div className="tf-guide-rule" />
            <h2>Expert NYC Condo Listing and Marketing Services</h2>
            <p>
              Selling an NYC condo starts with one question: what will a qualified buyer pay for your unit today? Not
              what you paid, not what your neighbor listed for-but what the current market, your building&apos;s
              financials, and your unit&apos;s specific strengths actually support.
            </p>
            <p>
              I&apos;m Stanley Montfort, and I&apos;ve spent years helping condo owners throughout Manhattan and Brooklyn
              answer that question with precision, then build a marketing strategy around it that attracts serious
              offers. Whether you own a luxury high-rise unit overlooking Central Park or a boutique Brooklyn
              conversion, my approach is the same: analyze the data, prepare the property strategically, and position
              your listing to reach local, national, and international buyers seeking NYC condominiums.
            </p>
            <hr />
            <h2>Why Selling a Condo Requires a Specialized NYC Strategy</h2>
            <p>
              Condominiums present unique selling opportunities that differ significantly from co-ops and single-family
              homes. Understanding these differences isn&apos;t optional-it&apos;s the foundation of every successful
              sale I manage.
            </p>
            <p>Here&apos;s why selling a condo demands a specialized approach:</p>
            <ul className="tf-list">
              <li>
                <span className="tf-dot" />
                <strong>Broader buyer pool through financing flexibility.</strong> Condo owners fully own their units,
                which means buyers have more flexibility when it comes to{" "}
                <a href="/mortgage-calculator/" className="tf-guide-link">
                  financing
                </a>
                . Some condo buildings accept down payments as low as 10%, though 20% is standard. Compare that to a co
                op, where buyers own shares in a corporation that owns the building-and where boards typically require at
                least 20% down with substantial post-closing liquidity. This financing flexibility means your condo
                attracts more qualified purchasers from day one.
              </li>
              <li>
                <span className="tf-dot" />
                <strong>No board approval means faster closings.</strong> One of the biggest advantages of selling a condo
                versus a co op is speed. Condo sales do not require board approval, unlike co-ops, which demand full board
                interviews, extensive purchase application packages, and weeks of review. Condos typically have only a{" "}
                <a
                  href="https://www.benjamestaylor.com/resources-and-insights/the-timeline-to-close-nyc-condos-vs-co-ops"
                  className="tf-guide-link"
                >
                  right of first refusal
                </a>
                , which boards rarely exercise. Condo sales typically move faster than co-op sales-and fewer deals fall
                apart because of board complications.
              </li>
              <li>
                <span className="tf-dot" />
                <strong>International and investment buyers prefer condos.</strong> Highlighting fewer restrictions on
                subletting makes condos more desirable to investors. International buyers seeking pied-à-terre
                properties overwhelmingly choose condos because of simplified approvals and flexibility around usage.
                This expands your buyer pool well beyond local homeowners.
              </li>
              <li>
                <span className="tf-dot" />
                <strong>Common charges and amenities directly impact pricing.</strong> Buyers evaluate monthly common
                charges carefully against building amenities and services. A unit in a full-service building with a
                doorman, fitness center, and roof deck commands a premium-but only if the condo association maintains
                strong financials and the carrying costs feel reasonable relative to what the building offers.
              </li>
              <li>
                <span className="tf-dot" />
                <strong>Professional marketing ensures competitive exposure.</strong> With the right strategy, your
                listing reaches qualified buyers across every channel-from{" "}
                <a href="https://streeteasy.com/" className="tf-guide-link">
                  StreetEasy
                </a>{" "}
                and major platforms to international broker networks and targeted digital campaigns.
              </li>
            </ul>
            <p>
              When I sit down with a condo seller, one of the first things I evaluate is how these factors interact for
              their specific unit and building. Every condominium is different, and the selling process needs to reflect
              that.
            </p>
            <hr />
            <h2>Our Condo Selling Services</h2>
            <div className="tf-fig">
              <img
                src="/redesign-assets/services/selling-condos-nyc.png"
                alt="Selling condos NYC"
                loading="lazy"
              />
            </div>
            <h3>Manhattan Condo Sales</h3>
            <p>
              Manhattan remains the most dynamic condo market in the country. I provide specialized marketing for luxury
              high-rises, pre-war conversions, and boutique buildings throughout Manhattan neighborhoods-from the Upper
              East Side and Upper West Side to Midtown, Chelsea, Tribeca, and the Financial District.
            </p>
            <p>
              My Manhattan condo marketing targets buyers seeking primary residences, investment properties, and
              international pied-à-terre purchases. In Q1 2026, resale condos represented approximately 30% of
              Manhattan&apos;s market share, with{" "}
              <a
                href="https://www.olr.com/Pictures/CompanyNews/RUTE_Manhattan_Q1_2026_Summary.pdf"
                className="tf-guide-link"
              >
                new development condos around 15%
              </a>
              . Active inventory is slightly down compared to the prior year, indicating a tightening market where
              strategic pricing and preparation matter more than ever.
            </p>
            <h3>Brooklyn Condo Marketing</h3>
            <p>
              Brooklyn&apos;s condo market has matured dramatically. I handle strategic positioning for new
              developments, converted buildings, and established condo communities across neighborhoods like{" "}
              <a href="/brooklyn-heights/" className="tf-guide-link">
                Brooklyn Heights
              </a>
              , DUMBO, Williamsburg, and Park Slope.
            </p>
            <p>
              Brooklyn attracts buyers relocating from Manhattan who want more space, as well as first-time purchasers
              seeking value without sacrificing transit accessibility. Common charges tend to be lower than
              Manhattan-roughly $1–$2 per square foot versus Manhattan&apos;s average around $3.20 per square foot-which
              gives Brooklyn condos a distinct selling advantage when buyers account for total monthly carrying costs.
            </p>
            <hr />
            <h2>Top 10 Critical Factors That Determine Your Condo&apos;s Sale Price</h2>
            <p>
              One question I always discuss with sellers early on is what actually drives their unit&apos;s value. Many
              homeowners assume it&apos;s primarily about square footage, but NYC condo prices depend on location and
              inventory levels along with a constellation of other factors. Here&apos;s what matters most:
            </p>
            <ol className="tf-olist">
              <li>
                <strong>Location and neighborhood desirability within NYC.</strong> Transit access, school districts,
                walkability, and commercial development all weigh heavily on buyer decisions.
              </li>
              <li>
                <strong>Floor level and natural light exposure.</strong> Higher floors with multiple exposures and
                abundant natural light consistently command higher price per square foot. Buyers prioritize updated
                interiors and luxury amenities, but light and floor level are factors you can&apos;t renovate.
              </li>
              <li>
                <strong>Monthly common charges and building financial health.</strong> Buyers evaluate whether the
                building has strong reserve funds, a history of stable assessments, and recent capital improvements.
                Buildings without these can penalize a unit&apos;s value significantly.
              </li>
              <li>
                <strong>Building amenities and doorman services.</strong> Full-service staffing, concierge, gym, pool,
                roof deck, package room, and parking all add value-but must be justified by the common charges they
                support.
              </li>
              <li>
                <strong>Unit layout, size, and renovation quality.</strong> Efficient layouts with minimal wasted space
                outperform larger but awkwardly configured units. Condos built after 2015 sell at approximately{" "}
                <a
                  href="https://www.propertyshark.com/Real-Estate-Reports/2025/08/26/nyc-home-prices-newer-renovated-older/"
                  className="tf-guide-link"
                >
                  58% higher prices than older comparables
                </a>
                , and well-renovated units in older buildings can close that gap.
              </li>
              <li>
                <strong>Views of city skyline, parks, or water.</strong> View corridors and landmark sightlines create
                substantial premiums that are immediately reflected in comparable sales data.
              </li>
              <li>
                <strong>Storage space and in-unit laundry availability.</strong> These practical amenities are
                increasingly important to buyers, especially in a city where space is limited.
              </li>
              <li>
                <strong>Building reputation and recent comparable sales.</strong> I always analyze 3–6 most recent sold
                comparables in the same building and neighborhood, adjusting for exposure, floor, condition, and
                amenities. Using price per square foot is the most accepted valuation metric for condos.
              </li>
              <li>
                <strong>Property taxes and any active tax abatements.</strong> Whether the unit benefits from a J-51 or
                421a abatement-or faces high assessed value-affects monthly burden and buyer affordability calculations.
              </li>
              <li>
                <strong>Market timing and current inventory levels.</strong> Spring and fall see the highest buyer
                activity in NYC. Listing during peak demand with the right pricing strategy can be the difference between
                multiple offers and months of market time.
              </li>
            </ol>
            <hr />
            <h2>Our Proven Condo Selling Process</h2>
            <div className="tf-fig">
              <img
                src="/redesign-assets/services/selling-condos-article-1.png"
                alt="Property search and market analysis workspace featuring NYC neighborhood maps, Crown Heights real estate listings, and investment reports for informed home buying decisions"
                loading="lazy"
              />
            </div>
            <h3>Step 1: Comprehensive Market Analysis</h3>
            <p>
              Before listing a condo, I conduct a thorough market analysis. This means evaluating recent comparable{" "}
              <a href="/neighborhoods/" className="tf-guide-link">
                sales in your building and neighborhood
              </a>{" "}
              to determine the optimal asking price-not a hopeful number, but a strategic one.
            </p>
            <p>
              Pricing within 5% of comparable sales increases showing requests by 40%. Overpricing a condo leads to
              extended time on the market, and listings that find a contract within the first 30 days are more likely to
              sell at or above the asking price. If market interest is low, early price adjustments are better than
              letting a listing become stale.
            </p>
            <p>
              I also analyze current market conditions, buyer trends, and competitive inventory. In today&apos;s market,
              condos priced below $3 million can struggle to find buyers in certain Manhattan corridors-understanding
              where demand exists and where it&apos;s softening is critical.
            </p>
            <h3>Step 2: Property Preparation and Staging</h3>
            <p>
              One of the biggest mistakes I see condo sellers make is underestimating how much preparation matters. When
              preparing a condo for market, I assess necessary repairs, cosmetic improvements, and staging
              recommendations to maximize buyer appeal.
            </p>
            <p>Here&apos;s what I recommend:</p>
            <ul className="tf-list">
              <li>
                <span className="tf-dot" />
                <strong>A fresh coat of paint can enhance appeal</strong> more than almost any other single improvement.
                Neutral, contemporary colors photograph well and feel welcoming.
              </li>
              <li>
                <span className="tf-dot" />
                <strong>Deep cleaning includes professional carpet cleaning and grout restoration.</strong> Buyers notice
                details, and a spotless unit signals careful ownership.
              </li>
              <li>
                <span className="tf-dot" />
                <strong>Addressing minor repairs helps avoid negotiation issues.</strong> Leaky faucets, cracked tiles, or
                sticky doors give buyers ammunition to negotiate price cuts.
              </li>
              <li>
                <span className="tf-dot" />
                <strong>Organizing closets can showcase the condo&apos;s storage functionality.</strong> In NYC, storage
                space is a premium feature-don&apos;t hide it behind clutter.
              </li>
              <li>
                <span className="tf-dot" />
                <strong>Professional staging increases sale prices by 6%.</strong> Staging should highlight the
                condo&apos;s strengths with curated decor that lets buyers envision their life in the space, not your
                personal belongings.
              </li>
            </ul>
            <p>
              I also coordinate professional photography, virtual tours, and marketing materials. Professional marketing
              should include HDR photography and virtual tours-high-quality photography causes listings with 3D tours to
              receive 16% more saves on platforms like StreetEasy. These aren&apos;t optional extras; they&apos;re
              essential for any condo seller who expects competitive offers.
            </p>
            <h3>Step 3: Strategic Marketing Launch</h3>
            <p>
              Marketing a condo isn&apos;t about listing it and hoping someone calls. It&apos;s about creating exposure
              across every relevant channel:
            </p>
            <ul className="tf-list">
              <li>
                <span className="tf-dot" />
                <strong>Major platforms:</strong> I list on StreetEasy, Zillow, and luxury marketing networks to maximize
                digital visibility.
              </li>
              <li>
                <span className="tf-dot" />
                <strong>Targeted outreach:</strong> I implement direct outreach to qualified buyers and broker networks,
                including buyer&apos;s broker relationships I&apos;ve built over years of NYC transactions.
              </li>
              <li>
                <span className="tf-dot" />
                <strong>International reach:</strong> For luxury listings, I leverage foreign agent networks and digital
                marketing to reach global buyers-virtual tours, floor plans, and professional video walkthroughs are
                essential for international purchasers who may not attend open houses in person.
              </li>
              <li>
                <span className="tf-dot" />
                <strong>Open houses and private showings:</strong> Strategically timed events designed to generate urgency
                and competitive interest.
              </li>
            </ul>
            <h3>Step 4: Offer Management and Closing</h3>
            <p>
              When offers come in, I evaluate far more than just the price. I assess buyer financing strength (cash
              versus financed), contingencies, proposed closing timeline, lender pre-approval versus pre-qualification,
              and whether the buyer has requested seller concessions on closing costs or transfer fees.
            </p>
            <p>
              Transparent documentation increases buyer confidence during negotiations. I coordinate with attorneys,
              manage building documentation requirements, and ensure a smooth closing process. For condo sales, the
              typical timeline from contract to closing runs 45–60 days for financed deals; all-cash transactions can
              close in 30–45 days.
            </p>
            <p>
              The entire selling process in NYC takes two to four months from listing to closing, depending on pricing
              accuracy, preparation quality, and market conditions.
            </p>
            <hr />
            <h2>Client Success Stories</h2>
            <blockquote className="tf-quote">
              <p>
                <strong>
                  <em>
                    &quot;Stanley&apos;s pricing analysis was spot-on. We listed our Upper East Side two-bedroom at his
                    recommended price and received a strong offer within three weeks. His staging advice and photography
                    made our unit stand out against newer competition in the building.&quot;
                  </em>
                </strong>
              </p>
              <p>
                <strong>
                  <em>– David &amp; Rachel P., Upper East Side Condo Sellers</em>
                </strong>
              </p>
            </blockquote>
            <blockquote className="tf-quote">
              <p>
                <strong>
                  <em>
                    &quot;We were nervous about selling our Brooklyn Heights condo while relocating out of state. Stanley
                    handled everything-preparation, open houses, negotiations, and closing coordination. The entire
                    transaction was smoother than we expected.&quot;
                  </em>
                </strong>
              </p>
              <p>
                <strong>
                  <em>– Amanda K., Brooklyn Heights</em>
                </strong>
              </p>
            </blockquote>
            <blockquote className="tf-quote">
              <p>
                <strong>
                  <em>
                    &quot;Our DUMBO loft attracted an international buyer through Stanley&apos;s marketing network. He
                    managed the entire deal, including navigating the building&apos;s right of first refusal process, and
                    we closed in under 50 days.&quot;
                  </em>
                </strong>
              </p>
              <p>
                <strong>
                  <em>– Marcus T., DUMBO Condo Owner</em>
                </strong>
              </p>
            </blockquote>
            <hr />
            <h2>Frequently Asked Questions</h2>
            <div className="tf-fig">
              <img
                src="/redesign-assets/services/selling-condos-article-2.png"
                alt="property sold in NYC"
                loading="lazy"
              />
            </div>
            <FaqAccordion>
              <FaqItem question={<>How long does it typically take to sell a condo in NYC?</>}>
              <p>
                The selling process in NYC takes two to four months from listing to closing. From listing to contract
                acceptance, expect approximately 2–3 months depending on pricing accuracy, property condition, and market
                demand. Once under contract, financed deals generally close in 60–90 days; all-cash transactions sometimes
                in 30–45 days.
              </p>
              <p>
                Compare that to co op sales, which often take 90–120 days from contract to closing due to board approval
                requirements, interviews, and extensive board package review. This is one of the key reasons condo sales
                typically move faster than co-op sales.
              </p>
              <p>
                Spring is generally the best time to list condos in NYC, though fall also produces strong buyer activity. I
                always advise sellers to be aware of seasonal patterns and plan their listing timeline accordingly.
              </p>
              </FaqItem>
              <FaqItem question={<>What documents do I need to prepare before listing my condo?</>}>
              <p>
                Sellers must prepare building documents before listing their condo. One of the first things I tell every
                seller is to gather the necessary paperwork in advance:
              </p>
              <ul className="tf-list">
                <li>
                  <span className="tf-dot" />
                  <strong>Offering plan</strong> (especially for condo conversions or sponsor units)
                </li>
                <li>
                  <span className="tf-dot" />
                  <strong>Building financial statements</strong> and recent board meeting minutes
                </li>
                <li>
                  <span className="tf-dot" />
                  <strong>Reserve fund status</strong> and history of assessments
                </li>
                <li>
                  <span className="tf-dot" />
                  <strong>Monthly common charge statement</strong> and current budget
                </li>
                <li>
                  <span className="tf-dot" />
                  <strong>Property tax bills</strong> and proof of any active tax abatements
                </li>
                <li>
                  <span className="tf-dot" />
                  <strong>Certificate of occupancy</strong> (if relevant)
                </li>
                <li>
                  <span className="tf-dot" />
                  <strong>Alteration agreement history</strong> for any renovations performed
                </li>
                <li>
                  <span className="tf-dot" />
                  <strong>Title deed</strong> and proof of ownership
                </li>
              </ul>
              <p>
                Be transparent about building information to speed up transactions. Having this paperwork organized before
                your first showing eliminates delays that can kill deals and demonstrates to every buyer and their real
                estate agent that you&apos;re a serious, prepared seller.
              </p>
              </FaqItem>
              <FaqItem question={<>Should I make renovations before selling my condo?</>}>
              <p>
                This is one of the most common questions I discuss with sellers, and the answer depends entirely on your
                unit&apos;s condition relative to comparable sales in your building and neighborhood.
              </p>
              <p>
                <strong>Cosmetic improvements typically deliver the best return.</strong> Paint, updated light fixtures,
                modern hardware, and minor kitchen or bathroom refreshes often yield outsized results. Professional staging
                increases sale prices by 6%-far more cost-effective than a $150,000 kitchen renovation.
              </p>
              <p>
                <strong>Major renovations are risky unless your unit is significantly below neighborhood standards.</strong>{" "}
                A full kitchen and bathroom renovation in a Manhattan luxury condo can cost $80,000–$200,000+, and the
                return isn&apos;t guaranteed. Over-upgrading relative to comparables risks overcapitalizing-spending money
                you won&apos;t recover at closing.
              </p>
              <p>
                My advice: decide based on data, not hope. I walk through every unit and recommend specific improvements
                calibrated to what buyers in that building and neighborhood expect to pay for.
              </p>
              </FaqItem>
              <FaqItem question={<>What are the typical seller fees and closing costs?</>}>
              <p>
                Closing costs can range from hundreds to thousands of dollars depending on your sale price and transaction
                structure. Here&apos;s what sellers should expect to pay:
              </p>
              <div className="tf-table-wrap">
                <table className="tf-table">
                  <thead>
                    <tr>
                      <th>Cost Category</th>
                      <th>Typical Range</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <strong>Broker Commission</strong>
                      </td>
                      <td>5–6% of the sale price</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>NYC Transfer Tax (Sale Price Up to $500,000)</strong>
                      </td>
                      <td>1.00%</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>NYC Transfer Tax (Sale Price Above $500,000)</strong>
                      </td>
                      <td>1.425%</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Attorney / Legal Fees</strong>
                      </td>
                      <td>$2,000–$5,000+</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Move-Out or Transfer Fees</strong>
                      </td>
                      <td>Varies by building</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Building Application Fees</strong>
                      </td>
                      <td>Varies</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                Sellers may incur move-out or transfer fees from condo buildings, and broker commissions in NYC typically
                range from 5% to 6% of the sale price. Condos usually have higher closing costs than co-ops due to transfer
                taxes and recording fees. I always walk sellers through a detailed cost estimate before we sign the listing
                agreement so there are no surprises at closing.
              </p>
              </FaqItem>
              <FaqItem question={<>How do common charges affect my condo&apos;s sale price?</>}>
              <p>
                Every buyer and their buyer&apos;s broker will scrutinize your building&apos;s common charges. In Manhattan,
                the average is approximately $3.20 per square foot-for a typical 700-square-foot one-bedroom, that&apos;s
                roughly $2,200+ per month before property taxes.
              </p>
              <p>
                High common charges aren&apos;t necessarily a deal-killer if they&apos;re justified by strong amenities,
                services, and building financial health. But unexplained high charges-or a building with a history of
                frequent assessments and deferred maintenance-will drive buyers away or lead to aggressive price
                negotiations.
              </p>
              <p>
                Managing building-specific processes is critical for successfully selling condos in NYC. I always review
                the condo association&apos;s financials, reserve fund, and assessment history before we set pricing,
                because these factors directly influence what a buyer is willing to pay.
              </p>
              </FaqItem>
            </FaqAccordion>
            <hr />
            <h2>Ready to Sell Your NYC Condo?</h2>
            <h3>Get Your Free Condo Valuation</h3>
            <p>
              Every condo sale starts with understanding exactly where your property stands in today&apos;s market. I
              provide a personalized pricing strategy based on recent comparable sales, your building&apos;s financial
              profile, current inventory levels, and your unit&apos;s specific strengths.
            </p>
            <p>
              My goal isn&apos;t to simply list your apartment-it&apos;s to build a plan that maximizes your sale price
              and attracts the right buyer for your property. Whether you&apos;re selling a Manhattan luxury unit or a
              Brooklyn conversion, I bring the same data-driven approach, hands-on preparation guidance, and negotiating
              expertise to every transaction.
            </p>
            <p className="tf-guide-center">
              <strong>Phone:</strong>{" "}
              <a href="tel:+16469701078" className="tf-guide-link">
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

import ResourcesSection from "../shared/ResourcesSection";
import "../../styles/neighborhoods-page.css";
import "../../styles/park-slope-co-ops-page.css";
import "../../styles/contact-section.css";

const CHECK_ICON = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C98A2C" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

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

export default function ParkSlopeCoOpsContent() {
  return (
    <>
      <section className="nbhd-hero" data-screen-label="Service hero">
        <div className="nbhd-hero-ring" />
        <div className="nbhd-hero-inner">
          <div data-reveal="">
            <h1>{"Park Slope Co-ops — Experts realtor for Buying, Selling & Investing"}</h1>
            <p className="nbhd-hero-lead">{"We'll help you buy the right Park Slope Condo by avoiding costly structural issues, hidden repair expenses, and overpaying in a competitive market"}</p>
            <div className="nbhd-hero-ctas">
              <a href="tel:+1-(646)-970-1078" className="nbhd-hero-tel">Call 1-(646)-970-1078</a>
              <a href="https://calendly.com/montfort" className="nbhd-hero-book">Schedule A Consultation</a>
            </div>
          </div>
        </div>
      </section>

      <section className="nbhd-promises-sec" data-screen-label="Promises">
        <div className="nbhd-promises-ring" />
        <div className="nbhd-promises-inner">
          <div className="nbhd-promises">
            <div className="nbhd-promise" data-reveal="">
              <div className="nbhd-promise-head"><span className="nbhd-promise-icon">{CHECK_ICON}</span><h3 className="nbhd-promise-title">SMOOTH TRANSACTION</h3></div>
              <p>With limited risk throughout the buying process.</p>
            </div>
            <div className="nbhd-promise" data-reveal="">
              <div className="nbhd-promise-head"><span className="nbhd-promise-icon">{CHECK_ICON}</span><h3 className="nbhd-promise-title">NO PRESSURE</h3></div>
              <p>No pressure to overpay or purchase within a specific timeframe.</p>
            </div>
            <div className="nbhd-promise" data-reveal="">
              <div className="nbhd-promise-head"><span className="nbhd-promise-icon">{CHECK_ICON}</span><h3 className="nbhd-promise-title">ONGOING SUPPORT</h3></div>
              <p>A dedicated team that remains available even after the transaction is complete.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="nbhd-intro" data-screen-label="Guide">
        <div className="nbhd-intro-inner">
          <div className="nbhd-intro-copy" data-reveal="">
            <h2>{"Park Slope Co-ops Realtor"}</h2>
            <p>{"If you're searching for a Park Slope co ops realtor, what you likely need is an expert who can also guide Park Slope condo buyers and sellers through the very different issues that come with condo ownership. If you're buying or selling a condo in Park Slope, the apartment itself is only half the decision: the building's financial health, reserve fund balance, common charges, pending capital work, and management quality will shape your monthly costs and long-term equity just as much as square footage or finishes."}</p>
            <p>{"Stanley Montfort represents Park Slope condo buyers and sellers with a focus on evaluating both individual units and the building behind them, from financial and legal due diligence to pricing, market analysis, and negotiation strategy. Park Slope is recognized as one of Brooklyn's hottest luxury markets, and condo inventory here moves quickly - with properties averaging around 47 days on market when priced well, and overall supply hovering near just 1.8 months."}</p>
            <p>{"Whether you're comparing condos versus co-ops, reviewing "}<a href={"/park-slope/"} className="nbhd-guide-link">{"Park Slope neighborhoods"}</a>{" and building types, evaluating condos for sale, or preparing to list, you need a realtor who understands how to assess both the unit and the building before advising you on price, timing, or negotiation. If that's the decision in front of you, connect with Stanley Montfort for Park Slope condo representation tailored to this market."}</p>
            <h2>{"Why Park Slope Condo Buyers and Sellers Trust Stanley Montfort"}</h2>
            <p>{"Stanley Montfort brings focused experience in Park Slope real estate, with deep specialization in the condo segment of this competitive Brooklyn market. His practice is built on verified transaction history, building-level financial analysis, and hands-on knowledge of the neighborhood's diverse condo inventory."}</p>
            <ul className="nbhd-guide-list"><li><p>{"Licensed and active across Park Slope condo transactions including brownstone conversions, boutique walk-ups, and modern full-service developments"}</p></li><li><p>{"Rapid response for market evaluations and consultations - typically within 24 hours"}</p></li><li><p>{"Track record spanning buyer representation, listing services, and building due diligence for properties ranging from studio units to multi-bedroom condos along Prospect Park West and the Fifth Avenue corridor"}</p></li><li><p>{"Member of the "}<a href={"https://www.rebny.com/"} className="nbhd-guide-link">{"Real Estate Board of New York"}</a>{", ensuring adherence to professional standards and ethical practice"}</p></li></ul>
            <h2>{"Why Park Slope Chooses Stanley Montfort for Condo Real Estate"}</h2>
            <p>{"What separates an effective Park Slope condo realtor from a generalist agent is the ability to evaluate the full ownership picture - not just the apartment, but the building, its finances, its management, and its future capital needs. Stanley Montfort approaches every condo transaction with this dual lens."}</p>
            <ul className="nbhd-guide-list"><li><p><strong>{"Building-type expertise across Park Slope's full inventory:"}</strong>{" From 4-unit brownstone conversions near Prospect Park to elevator buildings along the avenues, Stanley understands how each building type creates different ownership costs, risks, and resale trajectories. Boutique conversions may carry lower monthly common charges but expose owners to underfunded reserves and unpredictable special assessments. Full-service developments offer amenities and financial stability but at higher monthly carrying costs. Stanley helps clients weigh these trade-offs against their budget and timeline."}</p></li><li><p><strong>{"Condo financial analysis that goes beyond the listing sheet:"}</strong>{" One of the first things Stanley reviews when evaluating a Park Slope condo is the building's audited financials, reserve fund balance, and history of special assessments. Many buyers focus on finishes - the kitchen, the bath, the flooring - while overlooking the fact that a well-finished apartment in a poorly maintained building can become expensive quickly. Stanley's due diligence process surfaces these risks before you commit."}</p></li><li><p><strong>{"Pricing grounded in real Park Slope data:"}</strong>{" The median sale price for homes in Park Slope is around $1.9M, but condo values vary dramatically by building type, floor, exposure, amenities, and monthly costs. Stanley builds pricing strategies from recent comparable sales within the same building and competing inventory across the neighborhood - not from generic borough-wide averages."}</p></li><li><p><strong>{"Both new development and resale transaction experience:"}</strong>{" Whether you're purchasing a sponsor unit in a newly constructed building or a resale in a converted townhouse, Stanley understands the distinct documentation, warranties, offering plan requirements, and negotiation dynamics each category presents."}</p></li></ul>
            <img src="/redesign-assets/hoods/park-slope-coops-1.png" alt={"Coops"} className="nbhd-guide-img" loading="lazy" />
            <h2>{"Park Slope Condo Real Estate Services | Park Slope Real Estate"}</h2>
            <p>{"Park Slope condo buyers and sellers face decisions that differ significantly from those involving co-ops, townhouses, or single-"}<a href={"/nyc-multifamily-real-estate-agent-service/"} className="nbhd-guide-link">{"family properties"}</a>{". The services below are structured around the specific needs of condo clients in this market."}</p>
            <h3>{"Park Slope Condo Buyer Representation"}</h3>
            <p>{"Buying a condo in Park Slope requires evaluating not just the unit but the entire building. As your Park Slope condo buyer's agent, Stanley identifies properties that match your criteria, conducts building-level due diligence, and negotiates on your behalf with full knowledge of the building's financial position and the seller's circumstances."}</p>
            <p>{"Buyer representation covers:"}</p>
            <ul className="nbhd-guide-list"><li><p>{"Targeted property search across active listing inventory, including "}<a href={"https://streeteasy.com/sale/park-slope"} className="nbhd-guide-link">{"newest active listings"}</a>{" from agencies such as Douglas Elliman Real Estate, Corcoran Group, Compass, Brown Harris Stevens Residential Sales LLC, Comfort Homes Realty Group Inc., Weichert, and others"}</p></li><li><p>{"Building document review: audited financials, reserve fund balance, collections history, pending assessments, insurance, and management quality"}</p></li><li><p>{"Unit evaluation: layout efficiency, exposure, natural light, floor level, ceiling heights, private outdoor space, storage, noise, and condition"}</p></li><li><p>{"Negotiation strategy informed by recent closings, competing inventory, and building-specific factors"}</p></li><li><p>{"Coordination with attorneys, mortgage professionals, and inspectors through closing"}</p></li></ul>
            <p>{"Inventory in Park Slope remains tight with rising demand for quality listings. Stanley uses search filters to narrow suitable condo options, helps buyers navigate fast-moving inventory, and also tracks homes for sale near Park Slope when nearby options make sense. Multiple listings are available from various real estate agencies, and Stanley monitors new inventory daily to ensure buyers see viable options as soon as they hit the market."}</p>
            <h3>{"Park Slope "}<a href={"/selling-condos-in-nyc/"} className="nbhd-guide-link">{"Condo Listing Services"}</a></h3>
            <p>{"Selling a condo in Park Slope means positioning your property against competing inventory while addressing the questions serious buyers and their agents will ask about building finances, monthly costs, and future capital work. One mistake I frequently see condo sellers make is pricing based purely on asking price per square foot comparables without adjusting for building charges, amenities, and the state of building finances - which often leads to longer market time or offers well below expectations."}</p>
            <p>{"Listing services include:"}</p>
            <ul className="nbhd-guide-list"><li><p>{"Comparative market analysis using recent sales in the building and comparable Park Slope condo buildings"}</p></li><li><p>{"Strategic pricing that accounts for common charges, property taxes, reserve fund strength, amenities, and buyer financing considerations"}</p></li><li><p>{"Professional photography, floor plans, and marketing materials distributed across major platforms and brokerage networks"}</p></li><li><p>{"Pre-listing preparation of building documents so buyer agents can conduct due diligence efficiently"}</p></li><li><p>{"Open house coordination - open sun and weekday showings scheduled to maximize qualified buyer traffic"}</p></li><li><p>{"Negotiation and contract management through closing"}</p></li></ul>
            <h3>{"Park Slope Condo Valuations and Market Analysis"}</h3>
            <p>{"Whether you're considering a purchase, preparing to sell, or simply need to understand your condo's current market position, Stanley provides comprehensive valuations that go deeper than automated estimates. A Park Slope condo valuation from Stanley includes:"}</p>
            <ul className="nbhd-guide-list"><li><p>{"Recent comparable sales analysis by building, block, and building type"}</p></li><li><p>{"Price per square foot benchmarking: active condo inventory in strong Park Slope buildings currently ranges from approximately $1,400 to $1,600 per square foot"}</p></li><li><p>{"Monthly carrying cost assessment: common charges, property taxes, and any known or pending special assessments"}</p></li><li><p>{"Building financial review: reserve fund adequacy, capital improvement history, and management quality"}</p></li><li><p>{"Resale and rental analysis: subletting rules, investor policies, and financing eligibility"}</p></li></ul>
            <h2>{"How Stanley Evaluates Park Slope Condos"}</h2>
            <p>{"The evaluation process matters because two condos with identical square footage and bedroom counts can have dramatically different true costs and long-term value depending on their building context. Here's how Stanley approaches every Park Slope condo evaluation."}</p>
            <h3>{"Property and Building Assessment"}</h3>
            <p><strong>{"Unit characteristics:"}</strong>{" Layout efficiency, ceiling heights, natural light, exposure (park view, garden, street-facing), floor level, noise, private outdoor space (terrace, balcony, garden), storage, and overall condition. Upper-floor corner units with park views command measurable premiums. Open floor plans with minimal wasted hallway space consistently outperform choppy layouts of the same square footage."}</p>
            <p><strong>{"Building type evaluation:"}</strong>{" Park Slope's condo inventory includes several distinct categories:"}</p>
            <div className="nbhd-guide-table-wrap"><table className="nbhd-guide-table"><thead><tr><th>{"Feature"}</th><th>{"Boutique Brownstone Conversion"}</th><th>{"Modern Full-Service Building"}</th></tr></thead><tbody><tr><td><strong>{"Number of Units"}</strong></td><td>{"3–8 residences"}</td><td>{"Dozens to hundreds of residences"}</td></tr><tr><td><strong>{"Common Charges"}</strong></td><td>{"Lower monthly fees, but a greater likelihood of special assessments"}</td><td>{"Higher monthly fees, but generally more predictable expenses"}</td></tr><tr><td><strong>{"Reserve Fund Strength"}</strong></td><td>{"Often smaller or underfunded reserve funds"}</td><td>{"Typically stronger reserves with professional financial management"}</td></tr><tr><td><strong>{"Amenities"}</strong></td><td>{"Limited amenities; may include a private garden, terrace, or outdoor space"}</td><td>{"Fitness center, roof deck, concierge, parking, elevator, and additional resident services"}</td></tr><tr><td><strong>{"Capital Maintenance Risk"}</strong></td><td>{"Higher due to aging roofs, plumbing systems, façades, and building infrastructure"}</td><td>{"Lower because of newer building systems and scheduled preventive maintenance"}</td></tr><tr><td><strong>{"Typical Buyer Profile"}</strong></td><td>{"Buyers seeking historic character, privacy, and lower monthly carrying costs"}</td><td>{"Buyers prioritizing convenience, amenities, and predictable ownership costs"}</td></tr></tbody></table></div>
            <p>{"Small condo buildings of 3–8 units are particularly vulnerable to financial strain: each owner carries a larger share of any capital project, and reserves are often insufficient to cover even a single major system replacement without a special assessment."}</p>
            <p><strong>{"Building documents:"}</strong>{" Stanley reviews the offering plan, amendments, audited financial statements, reserve fund balance (in dollars), capital improvement schedule, managing agent track record, outstanding violations, litigation history, and collections delinquency rates. Buildings with documented recent facade work or updated major systems present materially lower risk."}</p>
            <h3>{"Market Position and Pricing Analysis"}</h3>
            <p>{"Before recommending an asking price or advising on an offer, Stanley examines:"}</p>
            <ul className="nbhd-guide-list"><li><p>{"Recent closed sales in the same building and on the same floor or exposure where possible"}</p></li><li><p>{"Active competing inventory across Park Slope - current conditions show approximately 44% of homes for sale are condos"}</p></li><li><p>{"Median price per square foot for the specific building type and location: recent data shows Park Slope-wide median price per square foot near $1,479"}</p></li><li><p>{"Days on market trends: well-priced properties in Park Slope average around 47 days on market, while overpriced listings may sit and eventually take price reductions"}</p></li></ul>
            <p>{"In a recent 30-day period, Park Slope recorded 49 closed sales with a median sale price of approximately $1.98M and a median asking price of $1.77M - indicating that well-positioned properties are selling at or above ask."}</p>
            <h3>{"Financial and Legal Due Diligence"}</h3>
            <p>{"One question I always encourage buyers to ask: "}<em>{"What is the building's current reserve fund balance, and what capital work is planned in the next five to ten years?"}</em></p>
            <p>{"NYC does not require condos to maintain a minimum reserve fund or conduct professional reserve studies. Some Park Slope buildings have reserves covering less than 10% of projected capital needs over the next decade. This means special assessments - sometimes tens of thousands of dollars per unit - can appear with little warning."}</p>
            <p>{"Key financial due diligence items:"}</p>
            <ul className="nbhd-guide-list"><li><p>{"Common charges: what they cover (staff, insurance, utilities, amenities) and what portion is allocated to reserves"}</p></li><li><p>{"Property tax obligations (paid directly by condo owners, unlike co-ops where taxes are bundled into maintenance)"}</p></li><li><p>{"History and size of special assessments over the past five years"}</p></li><li><p>{"Building insurance adequacy and any pending claims"}</p></li><li><p>{"Local Law 11 / FISP facade inspection status for buildings over six stories - a recurring cost that can significantly affect buyer demand and monthly charges"}</p></li></ul>
            <p>{"Strong financial reserves and low maintenance increases are desirable traits in condo buildings. Buyers should also evaluate the managing agent's track record and whether there are unresolved code violations or ongoing litigation."}</p>
            <img src="/redesign-assets/hoods/park-slope-coops-2.png" alt={"Rent evaluation analysis"} className="nbhd-guide-img" loading="lazy" />
            <h2>{"Park Slope Condo Market Expertise"}</h2>
            <p>{"Stanley's condo market expertise is reflected in practical outcomes for Park Slope buyers and sellers:"}</p>
            <ul className="nbhd-guide-list"><li><p>{"Identified a 2-bedroom brownstone conversion condo in Park Slope South where the asking price reflected recent renovations but failed to account for a $45,000 pending special assessment for roof replacement. Stanley's due diligence enabled the buyer to negotiate a price reduction that offset the assessment cost entirely."}</p></li><li><p>{"Advised a Park Slope condo seller to proactively assemble building financials, reserve fund documentation, and recent capital improvement records before listing. The property received multiple offers within two weeks and closed above asking price - a direct result of buyer confidence in the building's financial health."}</p></li><li><p>{"Helped a first-time buyer compare a sponsor unit in a new development near Fourth Avenue against a resale unit in an established elevator building on Prospect Park West. The analysis revealed that although the new development had lower common charges initially, the sponsor's offering plan allocated minimal reserves - projecting significant cost increases within three years. The buyer chose the established building with stronger financial footing."}</p></li></ul>
            <p>{"Park Slope condo market conditions vary by micro-location: renovated pre-war co-ops often exceed $1M to $2M on Prospect Park West, while condos in the same corridor command an additional 10–15% premium for ownership flexibility and fewer purchasing restrictions. Co-op prices start around $400,000 to $450,000 for one-bedrooms, giving buyers a meaningful comparison point. Co-ops often offer better long-term value than comparable condos for buyers staying over seven years, but condos provide greater resale and subletting flexibility."}</p>
            <h2>{"What Park Slope Condo Clients Say"}</h2>
            <p><em>{"Client testimonials will be added here from verified Park Slope condo buyers and sellers. Reviews will include the client's first name, the type of transaction, and the building type or Park Slope sub-neighborhood where relevant."}</em></p>
            <h2>{"Park Slope Areas We Serve in Brooklyn NY"}</h2>
            <p>{"Stanley serves condo buyers and sellers across the full Park Slope footprint and adjacent neighborhoods in Brooklyn, NY:"}</p>
            <ul className="nbhd-guide-list"><li><p><strong>{"North Slope:"}</strong>{" Flatbush Avenue to Union Street, including properties near Barclays Center and the transit hub at Atlantic Avenue–Barclays Center"}</p></li><li><p><strong>{"Central Park Slope:"}</strong>{" The core residential blocks between Union Street and 9th Street, including the Prospect Park West corridor and Fifth Avenue commercial strip"}</p></li><li><p><strong>{"South Slope:"}</strong>{" 9th Street to Prospect Expressway, including growing condo inventory along Fourth Avenue and newer developments near Greenwood Heights"}</p></li><li><p><strong>{"Adjacent areas near Park Slope:"}</strong>{" Prospect Heights, Gowanus, Windsor Terrace, and Greenwood Heights - neighborhoods where condo buyers frequently cross-shop with Park Slope inventory"}</p></li></ul>
            <p>{"Building types served include brownstone and townhouse conversions, boutique walk-up condos, mid-rise elevator buildings, modern full-service developments, and sponsor sales in new construction."}</p>
            <p>{"Recent Brooklyn market reports indicate improved co-op inventory compared to previous years, and there are currently 20 co-ops for sale in Park Slope - giving buyers evaluating both property types a broader selection. Co-ops in Park Slope are listed by multiple active agents, and open houses are scheduled for several co-ops this weekend. Buyer competition for pre-war co-ops near Prospect Park remains high, and negotiability for co-ops hovers slightly above asking due to bidding wars in high-demand areas."}</p>
            <h2>{"Frequently Asked Questions About Park Slope Condos"}</h2>
            <h3>{"How are Park Slope condos priced compared to co-ops?"}</h3>
            <p>{"Condos in Park Slope typically carry a 10–15% price premium over comparable co-ops. This premium reflects greater ownership flexibility - condos allow easier resale, subletting, and financing - along with modern amenities in newer buildings. In 2026, Park Slope condo studios range from approximately $375,000–$550,000, one-bedrooms from $550,000–$900,000, two-bedrooms from $900,000–$2M, and three-bedrooms from $1.5M–$4M+. Co-op pricing runs lower: studios ~$275,000–$425,000, one-bedrooms ~$425,000–$700,000, two-bedrooms ~$700,000–$1.5M. Co-op price performance in Park Slope has remained robust amid competitive bidding, and well-run pre-war co-ops command strong prices in desirable Park Slope locations. When comparing the two, factor in not just purchase price but monthly carrying costs, board requirements, and long-term appreciation. Buyers should evaluate co-op financial statements before making an offer."}</p>
            <h3>{"What should I know about common charges in Park Slope condo buildings?"}</h3>
            <p>{"Common charges vary widely depending on building size, amenities, staffing, and reserve contributions. In small brownstone conversions, monthly charges may appear low but often reflect minimal reserve contributions - meaning large special assessments can arrive without much warning. Full-service elevator buildings charge more monthly but typically offer greater cost predictability and stronger reserves. Always ask what common charges cover specifically: insurance, utilities, staff salaries, amenities, and the reserve fund allocation. A building where common charges include a meaningful reserve contribution is usually in better long-term financial shape than one where nearly all charges go to operating expenses."}</p>
            <h3>{"How long does it take to buy or sell a Park Slope condo?"}</h3>
            <p>{"From accepted offer to closing, a Park Slope condo transaction typically takes 45–60 days. Delays can occur due to financing contingencies, title issues, building document review, or attorney negotiations. Brownstone conversion condos occasionally require additional time for inspection findings or legal document preparation. Park Slope has a mix of pre-war walk-ups and elevator buildings with strict board approval processes - though condo boards generally have less authority to reject buyers than co-op boards, condo boards may still exercise rights of first refusal, which can add time. Selling timelines depend heavily on pricing: well-priced condos in Park Slope average around 47 days on market, while overpriced listings may sit considerably longer before receiving offers."}</p>
            <h3>{"What building documents should I review before buying a Park Slope condo?"}</h3>
            <p>{"Essential documents include: the offering plan and all amendments, audited financial statements for the past two to three years, the current reserve fund balance in dollars, minutes from recent board meetings, the building's insurance certificate, any pending or recently completed special assessments, Local Law 11/FISP facade inspection reports (for buildings over six stories), and the managing agent's contact information and track record. Red flags include: reserve funds under $50,000 in small buildings, a pattern of frequent special assessments, high owner delinquency rates, unresolved DOB violations, and ongoing litigation. Stanley reviews all of these documents as part of buyer representation."}</p>
            <img src="/redesign-assets/hoods/park-slope-coops-3.png" alt={"Park Slope available properties"} className="nbhd-guide-img" loading="lazy" />
            <h3>{"Are new development condos better than resale in Park Slope?"}</h3>
            <p>{"Neither category is inherently superior - each presents distinct advantages and risks. New development condos often feature modern layouts, energy-efficient systems, and building amenities, but sponsor units may carry higher closing costs (including sponsor's transfer tax obligations in some cases), initially underfunded reserve accounts, and offering plan terms that haven't been tested by years of actual operations. Resale condos in established buildings offer the advantage of verifiable financial history, known maintenance trajectories, and potentially lower price per square foot in buildings that have already completed major capital work. The strongest approach is to evaluate each property individually based on unit characteristics, building financials, monthly carrying costs, and current competition - which is exactly what a qualified Park Slope condo real estate agent should do for you."}</p>
            <h2>{"Get Expert Park Slope Condo Guidance"}</h2>
            <p>{"Whether you're buying, selling, or need an honest valuation of a Park Slope condo, the next step is a conversation about your specific property or goals. Stanley Montfort provides personalized evaluations grounded in building-level financial analysis, recent comparable sales, and practical knowledge of this neighborhood's condo inventory."}</p>
            <p><strong>{"Phone:"}</strong>{" 1-646-970-1078  "}<strong>{"Email:"}</strong><a href={"mailto:sm@montfortre.com"} className="nbhd-guide-link"><span>{"[email protected]"}</span></a><strong>{"Address:"}</strong>{" 8 West 126th Street, New York NY 10027"}</p>
            <div className="nbhd-guide-ctas">
              <a href="https://calendly.com/montfort" className="nbhd-guide-link">Schedule Free Consultation</a>
              <a href="tel:+1-646-970-1078" className="nbhd-guide-link">Call For Information</a>
            </div>
            <iframe className="nbhd-reviews-frame" title="Montfort Real Estate reviews" src="https://reputationhub.site/reputation/widgets/review_widget/J3cYmGK3p1ja7wTS63Dn" loading="lazy" />
          </div>
        </div>
      </section>

      <ResourcesSection
        title="Recent News & Realtor Advice"
        subtitle="Stay in the loop on the latest events, news, & happenings in and around our community!"
        showCategory={false}
        showCta={false}
        articleTitlesAsHeadings
        articles={NEWS_ARTICLES}
      />

      <section className="contact-section" data-screen-label="Contact">
        <div className="contact-inner">
          <div data-reveal="" className="contact-copy">
            <div className="contact-form">
              <div className="contact-names">
                <input type="text" name="first_name" placeholder="First Name *" className="contact-field" required />
                <input type="text" name="last_name" placeholder="Last Name *" className="contact-field" required />
              </div>
              <input type="email" name="email_address" placeholder="Email *" className="contact-field" required />
              <textarea name="other[Comments]" placeholder="Comments, Questions? *" rows={4} className="contact-field contact-field--area" required />
              <a href="https://calendly.com/montfort" className="contact-submit">Submit</a>
            </div>
          </div>
          <div data-reveal="" className="contact-map">
            <iframe title="Montfort Real Estate on Google Maps" src="https://www.google.com/maps?q=8+West+126th+Street,+New+York,+NY+10027&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            <div className="contact-map-veil" />
          </div>
        </div>
      </section>
    </>
  );
}

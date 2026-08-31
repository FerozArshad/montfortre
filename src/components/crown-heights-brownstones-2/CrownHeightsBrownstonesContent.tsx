import PromisesBar from "../shared/PromisesBar";
import ResourcesSection from "../shared/ResourcesSection";
import "../../styles/neighborhoods-page.css";
import "../../styles/crown-heights-brownstones-page.css";
import "../../styles/contact-section.css";
import { FaqAccordion, FaqItem } from "../shared/FaqAccordion";
import HeroGoogleRating from "../shared/HeroGoogleRating";
import PageListingsSection from "../shared/PageListingsSection";


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

export default function CrownHeightsBrownstonesContent() {
  return (
    <>
      <section className="nbhd-hero" data-screen-label="Service hero">
        <div className="nbhd-hero-ring" />
        <div className="nbhd-hero-inner">
          <div data-reveal="">
            <h1>Crown Heights Brownstones — Experts for Buying, Selling & Investing</h1>
            <p className="nbhd-hero-lead">
              We'll help you buy the right Crown Heights brownstone by avoiding costly structural issues, hidden repair expenses, and overpaying in a competitive market
            </p>
            <div className="nbhd-hero-ctas">
              <a href="tel:+16469701078" className="nbhd-hero-tel">
                Call 1-(646)-970-1078
              </a>
              <a href="https://calendly.com/montfort" className="nbhd-hero-book">
                Schedule A Consultation
              </a>
            </div>
          </div>
          <div className="nbhd-hero-media" data-reveal="">
            <div className="nbhd-hero-frame">
              <img src="/redesign-assets/hoods/crown-heights-brownstones.png" alt="Crown Heights brownstones" width="640" height="512" loading="eager" />
            </div>
            <HeroGoogleRating prefix="nbhd" />
          </div>
        </div>
      </section>

      <PromisesBar variant="nbhd" />

      <PageListingsSection market="Crown Heights" propertyType="Brownstone" label="Crown Heights brownstones" />

      <section className="nbhd-intro" data-screen-label="Guide">
        <div className="nbhd-intro-inner">
          <div className="nbhd-intro-copy" data-reveal="">
            <h2>Crown Heights Brownstones: Complete Buyer's Guide by Expert Stanley Montfort</h2>
            <h2>Expert Crown Heights Brownstone Buying Services</h2>
            <p><a href="/crown-heights/" className="nbhd-guide-link">Crown Heights has become one of the most sought-after neighborhoods</a> for brownstone buyers in Brooklyn. Whether you're looking for a fully restored single-family home or a multi-family property with rental income potential, understanding the neighborhood block by block can make a significant difference in the property you ultimately purchase.</p>
            <p>Over the years, I've helped buyers purchase brownstones throughout Brooklyn, and Crown Heights continues to be one of the neighborhoods I recommend most often. Every block has its own character, pricing, and opportunities. This guide brings together the advice I regularly share with clients before they begin their search.</p>
            <img src="/redesign-assets/hoods/crown-heights-brownstones-1.png" alt="Crown Heights brownstone investment opportunity with historic Brooklyn brownstones and real estate investment sign in New York City" className="nbhd-guide-img" loading="lazy" />
            <h2>Why Crown Heights Brownstones Are Exceptional Investment Opportunities</h2>
            <p>If you're considering buying a brownstone in Brooklyn, Crown Heights is a neighborhood worth exploring. Beyond its beautiful architecture, it offers a unique combination of historic character, strong buyer demand, convenient transportation, and long-term investment potential. Understanding what makes this neighborhood different can help you make a much more informed purchase.</p>
            <h3>Historic Architecture That Commands Premium Value</h3>
            <p>Crown Heights brownstones were built in the early 1900s, during a period when the neighborhood transitioned from rural farmland to an affluent residential enclave in the late 19th century. The architectural styles you'll find here - Neo-Grec, Queen Anne, Romanesque Revival, Renaissance Revival, and even Dutch Renaissance Revival - reflect a range of architectural movements from Italianate to Arts and Crafts. Many brownstones feature ornate stoops and high-stoop entries, with brownstone facades that commonly include detailed carvings and floral motifs. Interior designs of brownstones often include high ceilings and large windows for natural light.</p>
            <p>Crown Heights peaked as a residential area in the 1920s, and has become known for its mix of affluent homes and later apartment buildings. Today, many of those original houses still stand, and many feature original woodwork and leaded glass cabinetry - the kind of craftsmanship that simply doesn't exist in new construction.</p>
            <h3>Proximity to Prospect Park and Cultural Institutions</h3>
            <p>The heart of the neighborhood's appeal is anchored by its proximity to <a href="https://www.prospectpark.org/" className="nbhd-guide-link">Prospect Park</a>, the Brooklyn Museum, and the Brooklyn Botanic Garden. Walking distance to Brooklyn's premier green space is a defining feature that draws families, professionals, and investors alike. Crown Heights has a Walk Score of 94, indicating walkability - an important data point for both livability and long-term property values.</p>
            <p>One thing many buyers don't expect is how much daily lifestyle changes depending on which side of Eastern Parkway they're considering. It's worth spending time exploring the surrounding blocks before making a decision.</p>
            <h3>Transportation Access</h3>
            <p>Multiple subway lines run through Crown Heights, including the 2/3/4/5 trains along Eastern Parkway, making commutes to Manhattan manageable. Additional bus routes and proximity to the Nostrand and Utica corridors add further connectivity. This level of transit access is a significant factor in the neighborhood's continued appreciation - it's one reason Crown Heights consistently outperforms more remote Brooklyn neighborhoods.</p>
            <h3>Neighborhood Character and Cultural Identity</h3>
            <p>Crown Heights has evolved into one of Brooklyn's most diverse neighborhoods, combining historic architecture, a vibrant cultural scene, and a growing restaurant and retail corridor that continues to attract buyers from across New York City. Crown Heights neighborhoods underwent significant demographic changes during the 20th century, and today the area is defined by this cultural richness - the West Indian Carnival attracts 3.5 million participants annually, and the restaurant scene along Franklin Avenue and Nostrand Avenue continues to grow.</p>
            <h3>Long-Term Investment Potential</h3>
            <p>Crown Heights has experienced steady buyer demand in recent years, particularly for <a href="https://www.zillow.com/home-values/403222/crown-heights-brooklyn-new-york-ny/" className="nbhd-guide-link">well-maintained brownstones</a> on desirable blocks. While market conditions change over time, the neighborhood's limited historic housing stock and continued popularity have helped support long-term property values.</p>
            <h3>Block-by-Block Value Differences</h3>
            <p>One thing I always emphasize to clients: Crown Heights is not a monolithic market. Streets like President, St. Marks Avenue, Dean, and Carroll have signature brownstone rows with distinct architectural character. Blocks east of Nostrand or toward Utica tend toward simpler brick facades with fewer ornamental details. I've seen the same style brownstone on two adjacent blocks differ in price by 30-50% based solely on lot depth, orientation, or landmark status. Making a smart purchase here requires evaluating the specific block, not just the neighborhood average.</p>
            <img src="/redesign-assets/hoods/crown-heights-brownstones-2.png" alt="Crown Heights Brownstones" className="nbhd-guide-img" loading="lazy" />
            <h2>Crown Heights Brownstone Buying Services</h2>
            <h3>First-Time Brownstone Buyers</h3>
            <p>If you're purchasing your first brownstone, Crown Heights can feel overwhelming. The intersection of historic architecture, landmark regulations, and renovation planning requires guidance from someone who has walked hundreds of these properties. I help first-time buyers understand what to expect from the Landmarks Preservation Commission (LPC) approval process, how to budget for restoration, and which blocks offer the best combination of value and livability. Brownstones in Crown Heights originally served as residences for middle- and upper-middle-class families - and with the right approach, they still can.</p>
            <h3>Investment Property Buyers</h3>
            <p>For investors, <a href="/nyc-multifamily-real-estate-agent-service/" className="nbhd-guide-link">multi-family</a> brownstones in Crown Heights offer some of the strongest returns in Brooklyn. I provide detailed rental income projections, help evaluate rent-stabilized units versus market-rate configurations, and identify owner-financing opportunities when they arise. Whether you're expanding a portfolio or making your first investment purchase, my project approach includes analyzing cap rates, expense ratios, and realistic renovation budgets before you make an offer.</p>
            <hr className="nbhd-guide-rule" />
            <h2>Top 8 Crown Heights Brownstone Types Stanley Recommends</h2>
            <p>Over the years, I've helped buyers purchase every type of brownstone configuration Crown Heights has to offer. Here are the eight categories I most frequently recommend, each suited to different buyer profiles:</p>
            <ol className="nbhd-guide-list"><li>
            <p><strong>Single-Family Restored Brownstones</strong> - Fully renovated homes with modern kitchens, updated systems, and preserved original details. A typical Crown Heights brownstone has four bedrooms and four bathrooms, with an average size around 3,800 sq ft. Ideal for families wanting move-in readiness. Many include a formal dining room, parlor floor living, and a powder room on the entry level.</p>
            </li><li>
            <p><strong>Multi-Family Income Properties</strong> - Configured as 3-7 legal units, these generate substantial rental income. A seven-unit brownstone at <a href="https://www.crexi.com/properties/2324476/new-york-crown-heights-7-unit-with-high-rents" className="nbhd-guide-link">1545 Pacific Street</a>, for example, generates approximately $168,540/year in gross rent with a quoted 7.5% cap rate.</p>
            </li><li>
            <p><strong>Gut Renovation Opportunities</strong> - Properties with "good bones" but requiring full systems overhaul. These appeal to buyers willing to invest $400-$800+ per sq ft in renovation to create their ideal home or maximize investment returns.</p>
            </li><li>
            <p><strong>Landmark-Designated Properties</strong> - Located within Crown Heights North I, II, or III Historic Districts, these brownstones carry restrictions but also prestige and protection. Crown Heights is home to a variety of historic housing stock, with over 1,600 protected buildings. The architectural integrity of Crown Heights brownstones is protected within these historic districts.</p>
            </li><li>
            <p><strong>Garden Apartment Configurations</strong> - Brownstones with garden-level or basement units, sometimes featuring a deck with a pergola in the rear yard. These configurations allow owner-occupants to offset <a href="/mortgage-calculator/" className="nbhd-guide-link">mortgage costs</a> with rental income from the garden apartment.</p>
            </li><li>
            <p><strong>Wide-Lot Brownstones</strong> - Properties on lots exceeding the standard 18-20 ft width, offering more interior space, larger rooms, and greater flexibility for renovation design. These are the exception rather than the rule, and they command premium pricing.</p>
            </li><li>
            <p><strong>Corner Properties</strong> - Corner brownstones benefit from additional windows and natural light on two or more sides. Note that while they're desirable for living, they also have more façade exposure - making maintenance and landmark compliance more costly.</p>
            </li><li>
            <p><strong>Mixed-Use Brownstones</strong> - Properties with ground-floor commercial space and residential units above. Less common in the majority of Crown Heights residential blocks but found along commercial corridors.</p>
            </li></ol>
            <hr className="nbhd-guide-rule" />
            <h2>Stanley's Proven Crown Heights Brownstone Buying Process</h2>
            <h3>Step 1: Neighborhood and Block Analysis</h3>
            <p>One of the first things I look at when a client identifies Crown Heights is the specific block. I evaluate whether it falls within a landmarked district, its proximity to Eastern Parkway, lot dimensions (width and depth), rear yard presence, and orientation for natural light. Even the difference between a mid-block and corner property matters significantly - corners offer more windows but more façade exposure and cost.</p>
            <p>I also assess school zoning, proximity to subway lines, grocery access, and what I call "fringe proximity" - whether the block sits closer to Prospect Heights on the western edge or toward Bedford Stuyvesant to the north. These micro-location factors dramatically affect both day-to-day livability and long-term appreciation. I encourage every client to walk the block at different times of day: observe neighboring brownstones, look for consistent maintenance, check for code violations on adjacent properties. Block character matters as much as the individual home.</p>
            <h3>Step 2: Property Evaluation and Due Diligence</h3>
            <p>Structural inspection is non-negotiable. For Crown Heights brownstones, this must include the foundation, cellar and vaults under the stoop, roof condition, waterproofing, drainage, and the condition of load-bearing walls. Many homes in Crown Heights were renovated during the historical preservation revival of the 1960s, so you may encounter layers of previous work - some excellent, some problematic.</p>
            <p>I coordinate inspections that specifically check whether the façade stone is original brownstone or replacement stucco, verify landmark status and any open violations with <a href="https://www.nyc.gov/site/lpc/index.page" className="nbhd-guide-link">LPC</a> and NYC DOB, and confirm the legality of rental units. Basement or garden-level apartments may lack a proper certificate of occupancy. For rent-stabilized buildings, I review existing leases, rent rolls, and tenant histories. A mistake I frequently see buyers make is assuming a property's rental income is guaranteed without verifying unit legality or stabilization status.</p>
            <img src="/redesign-assets/hoods/crown-heights-brownstones-3.png" alt="Crown Heights brownstone interior with mortgage financing documents, loan pre-approval paperwork and real estate investment planning in Brooklyn NYC" className="nbhd-guide-img" loading="lazy" />
            <h3>Step 3: Financing Strategy and Negotiation</h3>
            <p><a href="/buying-a-brownstone-in-nyc/" className="nbhd-guide-link">Financing a brownstone</a> differs from financing a condo or co-op. For single-family homes (typically <a href="https://www.nyc.gov/site/finance/property/property-tax-rates.page" className="nbhd-guide-link">NYC Tax Class 1</a> for 1-3 units), traditional mortgages with competitive rates are usually available. Multi-family brownstones fall into Tax Class 2, where lenders focus heavily on net operating income, occupancy history, and rent roll stability. Down payment requirements for investment properties are often 25-30% or more.</p>
            <p>Owner financing is occasionally available when sellers - typically long-term investors - prefer to structure a carry-back mortgage. These deals require strong contract detail and experienced legal counsel, but they can work well when conventional financing is tight.</p>
            <p>I always negotiate with inspection and landmark-approval contingencies built in. One question I always encourage clients to ask: what façade, stoop, or landmark compliance work will be required within the first two years of ownership? Neglecting this question until after purchase is one of the most expensive mistakes I see.</p>
            <h3>Step 4: Closing and Renovation Planning</h3>
            <p>Closing on a Crown Heights brownstone requires an attorney experienced with historic properties. NYC transfer taxes, recording costs, title searches, and potential landmark-related delays all factor in. I typically advise clients to budget months between accepted offer and full permit acquisition when landmark constraints exist.</p>
            <p>Post-closing, renovation planning should prioritize systems first - roof, plumbing, electrical, HVAC - followed by weatherproofing (basement, façade, stoop), and finally cosmetic work. A 2016 renovation, for reference, transformed a 1899 Dutch Renaissance Revival brownstone: Barker Associates renovated the brownstone for modern living, and the renovated brownstone features skylights and bold lighting choices. The brownstone was converted to a four-family home after renovation. That project illustrates how thoughtful design can bring a 19th-century property into contemporary livability while preserving its historic character.</p>
            <p>For landmarked facades, I connect clients with masons who specialize in brownstone restoration and have established working relationships with LPC. This alone can save months of delay.</p>
            <hr className="nbhd-guide-rule" />
            <h2>Client Success Stories</h2>
            <blockquote className="nbhd-guide-quote">
            <p><strong><em>"Stanley helped us find a four-bedroom brownstone on St. Marks Avenue that we'd walked past a dozen times without realizing it was available. His knowledge of the block - the schools nearby, the landmark status, what the façade work would actually cost - made us confident enough to move forward. Two years later, our home has appreciated significantly and our garden apartment rental covers a meaningful portion of our mortgage."</em></strong><strong><em>– The Okafor Family, First-Time Brownstone Buyers</em></strong></p>
            </blockquote>
            <blockquote className="nbhd-guide-quote">
            <p><strong><em>"We were looking at multi-family brownstones across several Brooklyn neighborhoods, but Stanley's analysis of Crown Heights rental yields convinced us to focus here. He identified a seven-unit property generating strong income with a cap rate above 7%. His renovation cost projections were realistic - no surprises. That's rare in this market."</em></strong><strong><em>– David R., Real Estate Investor</em></strong></p>
            </blockquote>
            <blockquote className="nbhd-guide-quote">
            <p><strong><em>"As someone relocating from the Upper West Side, I needed someone who understood both what I was leaving behind and what Crown Heights could offer. Stanley walked me through every stage - from understanding landmark regulations to negotiating a fair price on a property that needed significant stoop and façade restoration. His contractor recommendations saved us tens of thousands."</em></strong><strong><em>– Maria L., Manhattan-to-Brooklyn Relocator</em></strong></p>
            </blockquote>
            <hr className="nbhd-guide-rule" />
            <h2>Frequently Asked Questions About Crown Heights Brownstones</h2>
            <FaqAccordion>
              <FaqItem question={<>What's the current market for Crown Heights brownstones in 2026?</>}>
              <p>Seven townhouses are currently for sale in Crown Heights, with a median listing price for townhouses of $1.25 million. Townhouses in Crown Heights stay on the market for 58 days, and in the past month, 10 townhouses were sold. <a href="https://www.redfin.com/neighborhood/224180/NY/New-York/Crown-Heights/housing-market" className="nbhd-guide-link">Price per square foot</a> is approaching $956, up roughly 20% year-over-year. Homes are spending approximately 67 days on market on average across all property types - slightly longer than last year's 59 days, suggesting some cooling but still a competitive market for well-maintained, landmarked, or Parkway-adjacent brownstones. Buyer competition remains strong for properties in good condition on desirable blocks.</p>
              </FaqItem>
              <FaqItem question={<>How much should I budget for brownstone renovations?</>}>
              <p>Renovation costs vary dramatically based on scope. Here are realistic ranges for mid-2026:</p>
              Renovation ScopeCost RangeKey Variables<strong>Full Gut Renovation (3–4 Story)</strong>$400–$800+/sq ft ($650K–$1.4M+)Square footage, historic detail, extensions, landmark status<strong>Facade Restoration</strong>$85,000–$250,000+Deterioration level, ornament complexity, LPC approvals<strong>Stoop Rebuild</strong>$18,000–$60,000Material quality, wrought iron detailing, water damage<strong>Pointing / Mortar Repair</strong>$15–$35/sq ftMasonry type, accessibility, mortar matching<strong>Chimney & Parapet Repairs</strong>
              $8,000–$30,000 (parapet)<br />
              $2,500–$15,000+ (chimney)
              Height, material, code compliance
              <p>Many buyers assume renovation cost per square foot is linear - it's not. Adding a rear extension, relocating a kitchen, or achieving full code compliance for systems can sharply increase per-sq-ft costs. I always recommend budgeting a 15-25% contingency for hidden issues like lead paint, asbestos, structural wood rot, or moisture in basement vaults.</p>
              </FaqItem>
              <FaqItem question={<>What financing options work best for Crown Heights brownstones?</>}>
              <p>For owner-occupied single-family brownstones (1-3 units), traditional conforming or jumbo mortgages typically offer the best terms. Multi-family investment properties require lenders who underwrite based on net operating income - expect higher down payments (25-30%+) and slightly elevated interest rates.</p>
              Financing TypeBest ForKey Considerations<strong>Traditional Mortgage</strong>Owner-occupied, 1–3 unitsLower interest rates, standard LTV requirements<strong>Investment / Portfolio Loan</strong>Multi-family income propertiesDSCR-based underwriting, higher down payment requirements<strong>Construction / Renovation Loan</strong>Gut renovations and major rehab projectsFunds are disbursed in phases and require a detailed renovation plan<strong>Owner Financing</strong>Motivated seller situationsRequires experienced legal counsel and a clear property title
              <p>Renovation-loan options and historic-preservation incentives may also be available depending on landmark status and approved work scope.</p>
              </FaqItem>
              <FaqItem question={<>How do I evaluate rental income potential?</>}>
              <p>Start with current Crown Heights rental averages: studios at approximately $2,199/month, one-bedrooms at $2,688, two-bedrooms at $3,170, and three-bedrooms at $3,194. Then adjust based on unit condition, location within the building (parlor floor vs. basement), and whether units are rent-stabilized.</p>
              <p>For a real-world reference, consider <a href="https://www.cityrealty.com/nyc/crown-heights/680-saint-marks-avenue/66112" className="nbhd-guide-link">680 Saint Marks Avenue</a>: a seven-family brownstone in the Crown Heights North Historic District generating approximately $85,000 in annual income against $28,000 in expenses, yielding a cap rate of roughly 7%. When evaluating a Crown Heights brownstone for income, I use conservative rent estimates (lowest comparable), factor in 5-10% vacancy, and include reserves for façade maintenance, systems repair, and potential tax increases after renovation.</p>
              </FaqItem>
              <FaqItem question={<>What are common mistakes first-time brownstone buyers make?</>}>
              <p>After 15+ years in this market, these are the pitfalls I see most often:</p>
              <ul className="nbhd-guide-list"><li>
              <p><strong>Assuming "move-in ready" means no hidden costs.</strong> Many buyers assume brownstones will come ready if they look outwardly good. Utilities, structure, and facades are often the hidden skeletons with major deferred maintenance - original plumbing, knob-and-tube wiring, or deteriorating floors behind cosmetic finishes.</p>
              </li><li>
              <p><strong>Underestimating landmark compliance.</strong> Securing a Certificate of Appropriateness for even minor façade changes can take 3-6 months or more. Design constraints may limit features buyers assume can be added, such as certain window styles or balconies. Crown Heights is recognized for its historic districts that protect architectural integrity - and those protections have real cost implications.</p>
              </li><li>
              <p><strong>Overestimating rental income.</strong> Garden or basement units may have ceiling height or compliance issues that affect legality and marketability. Rent stabilization may cap increases regardless of renovation investment.</p>
              </li><li>
              <p><strong>Ignoring tax-class implications.</strong> NYC property tax rates for 2026 are approximately 19.843% for Class 1 (1-3 unit residential) and 12.439% for Class 2 (multi-unit income-producing). Assessments may lag market value initially but trigger reassessment after renovation - buyers must budget for potential increases.</p>
              </li><li>
              <p><strong>Skipping the block-level walkthrough.</strong> I always tell clients: look at the neighboring brownstones. Are facades in disrepair? Is there consistent maintenance? Block condition directly affects your property's value trajectory.</p>
              </li></ul>
              <hr className="nbhd-guide-rule" />
              </FaqItem>
            </FaqAccordion>
            <h2>Schedule Your Crown Heights Brownstone Consultation</h2>
            <h3>Ready to Find Your Perfect Crown Heights Brownstone?</h3>
            <p>Buying a brownstone in Crown Heights is one of the most rewarding real estate decisions you can make in New York - but only if you approach it with the right expertise and preparation. Every property, every block, and every deal has its own considerations, and generic advice won't protect your investment.</p>
            <p>I offer a complimentary initial consultation that includes a current market analysis tailored to your specific buying criteria - whether you're a family looking for your forever home on a tree-lined block or an investor building a multi-family portfolio.</p>
            <p><strong>Phone:</strong> 1-646-970-1078                 <strong>Email:</strong><a href="mailto:sm@montfortre.com" className="nbhd-guide-link">sm@montfortre.com</a></p>
            <a href="https://calendly.com/montfort" className="nbhd-guide-link">Schedule Free Consultation</a><a href="tel:+16469701078" className="nbhd-guide-link">Call For Information</a>
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

      <section className="contact-section" data-screen-label="Contact">
        <div className="contact-inner">
          <div data-reveal="" className="contact-copy">
            <div className="contact-form">
              <div className="contact-names">
                <input type="text" name="first_name" placeholder="First Name *" className="contact-field" required />
                <input type="text" name="last_name" placeholder="Last Name *" className="contact-field" required />
              </div>
              <input type="email" name="email_address" placeholder="Email *" className="contact-field" required />
              <textarea
                name="other[Comments]"
                placeholder="Comments, Questions? *"
                rows={4}
                className="contact-field contact-field--area"
                required
              />
              <a href="https://calendly.com/montfort" className="contact-submit">
                Submit
              </a>
            </div>
          </div>
          <div data-reveal="" className="contact-map">
            <iframe
              title="Montfort Real Estate on Google Maps"
              src="https://www.google.com/maps?q=8+West+126th+Street,+New+York,+NY+10027&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="contact-map-veil" />
          </div>
        </div>
      </section>
    </>
  );
}

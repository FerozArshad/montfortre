import ContactSection from "../shared/ContactSection";
import ResourcesSection from "../shared/ResourcesSection";
import "../../styles/two-family-page.css";
import "../../styles/buying-guides-page.css";

const CHECK_ICON = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path d="M6 12.5l3.5 3.5L18 7.5" stroke="#0F1729" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
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

export default function SellingSrosInNycContent() {
  return (
    <>
      <section className="tf-hero" data-screen-label="Service hero">
        <div className="tf-hero-ring" />
        <div className="tf-hero-inner">
          <div data-reveal="">
            <h2>Selling SROs in NYC — Expert Guidance for Property Owners Seeking Maximum Value</h2>
            <p className="tf-hero-lead">
              Selling an<strong> SRO in New York City</strong> requires specialized expertise. We’ll guide you through
              the process, help you secure the <strong>best possible price</strong>, and minimize legal and operational
              complications
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
              <img
                src="/redesign-assets/services/selling-sros-in-nyc.png"
                alt="Selling SROs in NYC"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="tf-promises" data-screen-label="Client promises">
        <div className="tf-promises-inner">
          <div className="tf-promise" data-reveal="">
            <span className="tf-promise-icon">{CHECK_ICON}</span>
            <div>
              <h3 className="tf-promise-title">SMOOTH TRANSACTION</h3>
              <p>With limited risk throughout the buying process.</p>
            </div>
          </div>
          <div className="tf-promise" data-reveal="">
            <span className="tf-promise-icon">{CHECK_ICON}</span>
            <div>
              <h3 className="tf-promise-title">NO PRESSURE</h3>
              <p>No pressure to overpay or purchase within a specific timeframe.</p>
            </div>
          </div>
          <div className="tf-promise" data-reveal="">
            <span className="tf-promise-icon">{CHECK_ICON}</span>
            <div>
              <h3 className="tf-promise-title">ONGOING SUPPORT</h3>
              <p>A dedicated team that remains available even after the transaction is complete.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="tf-guide" data-screen-label="Guide">
        <div className="tf-guide-inner">
          <div data-reveal="">
            <h1>Selling SRO Properties in NYC</h1>
            <div className="tf-guide-rule" />
            <p>
              If you own a single room occupancy building in New York City and you&apos;re considering a sale, the
              process ahead is fundamentally different from selling a conventional rental property or a one family
              townhouse. Selling Single Room Occupancy properties is complex due to strict regulations, layered tenant
              protections, and a buyer pool that evaluates legal compliance before they ever look at the lobby. With
              only about 30,000 to 40,000 SROs remaining in NYC today-down from over 100,000 at their peak-these are
              rare, specialized assets that demand specialized professional guidance to bring to market successfully.
            </p>
            <p>
              I&apos;m Stanley Montfort, and I&apos;ve spent my career helping property owners navigate the most
              complicated transactions in New York City real estate. If you&apos;re thinking about selling your SRO
              property, I&apos;d encourage you to schedule a free consultation so we can review your building&apos;s
              legal status, occupancy, and market position before you make any decisions.
            </p>
            <p>
              A professional{" "}
              <a href="/nyc-sro-free-home-valuation/" className="tf-guide-link">
                NYC SRO Free Home Valuation
              </a>{" "}
              provides the information needed to establish a realistic asking price before your property reaches the
              market.
            </p>
            <hr />
            <h2>Why NYC SRO Owners Trust Stanley Montfort</h2>
            <p>
              Selling SRO buildings in New York City requires an agent who understands not just the market, but the
              regulatory structure that governs every aspect of these properties. SROs are classified as
              &apos;Class B&apos; residences in NYC, and a legal SRO has a Certificate of Occupancy with a Class B
              designation-details that matter enormously when a buyer&apos;s attorney starts pulling records.
            </p>
            <ul className="tf-list">
              <li><span className="tf-dot" />Licensed NYC real estate broker with deep expertise in Class B multiple dwelling transactions</li>
              <li><span className="tf-dot" />Proven track record selling SRO properties across Manhattan, Brooklyn, and Queens</li>
              <li>
                <span className="tf-dot" />
                Specialized knowledge of{" "}
                <a href="https://www.nyc.gov/site/hpd/index.page" className="tf-guide-link">
                  HPD compliance
                </a>
                , tenant protections, certificate of no harassment requirements, and Certificate of Occupancy review
              </li>
              <li><span className="tf-dot" />Experience coordinating with real estate attorneys, title companies, and regulatory agencies to keep complex closings on track</li>
            </ul>
            <p>
              One of the first things I review with every SRO owner is whether their building&apos;s actual use matches
              what the Certificate of Occupancy says. That single question-legal use versus actual use-determines the
              trajectory of the entire sale.
            </p>
            <hr />
            <h2>Why NYC Property Owners Choose Stanley Montfort for SRO Sales</h2>
            <p>
              Many property owners assume that selling an SRO is similar to selling any other rental building, just
              with smaller units. In reality, the due diligence is pivotal when buying or selling SRO properties in
              NYC, and experienced investors will investigate your building&apos;s legal history, violation record,
              tenant status, and alteration history long before they discuss price. What sets my approach apart is that
              I help you see your building through the buyer&apos;s eyes before we ever go to market.
            </p>
            <ul className="tf-list">
              <li>
                <span className="tf-dot" />
                <strong>Deep regulatory knowledge:</strong> I understand Class B{" "}
                <a
                  href="https://www.nyc.gov/assets/buildings/pdf/MultipleDwellingLaw.pdf"
                  className="tf-guide-link"
                >
                  multiple dwelling law
                </a>
                , rent stabilization protections, and the difference between rooming houses, furnished room houses,
                and SRO designated properties under the NYC Administrative Code. That understanding prevents surprises
                that kill deals.
              </li>
              <li><span className="tf-dot" /><strong>Pre-listing due diligence:</strong> Before listing an SRO, I conduct a thorough review of your DOB records, HPD violations, CO status, tenant documentation, and alteration history. Resolving issues before buyers find them typically results in higher offers and faster closings.</li>
              <li><span className="tf-dot" /><strong>Investor-focused marketing:</strong> Many buyers of SRO properties are experienced investors or firms specializing in regulated housing. I know what these buyers look for, how they underwrite deals, and what documentation they expect from day one.</li>
              <li>
                <span className="tf-dot" />
                <strong>Strategic pricing based on reality:</strong> I build valuations from actual income, legal
                compliance status, and comparable Class B multiple dwelling sales-not wishful thinking about what the
                building could be worth after renovations that may require years of approvals. Understanding what
                experienced investors look for when{" "}
                <a href="/buying-sro-in-nyc/" className="tf-guide-link">
                  buying SROs in NYC
                </a>{" "}
                helps position your property more effectively.
              </li>
            </ul>

            <div className="tf-fig">
              <img
                src="/redesign-assets/services/selling-sros-article-1.png"
                alt="SRO property purchase agreement in NYC with real estate investors completing transaction and signing documents"
                loading="lazy"
              />
            </div>
            <h2>Our SRO Property Sales Services</h2>
            <p>
              Selling an SRO property requires coordinating legal compliance, tenant documentation, building history,
              market positioning, and investor outreach simultaneously. Below is an overview of the services I provide
              to SRO owners from pre-listing through closing.
            </p>
            <h3>Pre-Listing Due Diligence &amp; Property Preparation</h3>
            <p>
              One of the biggest mistakes I see SRO owners make is listing before they&apos;ve confirmed that their
              building&apos;s legal status is clean. Before we begin marketing, I work with you to:
            </p>
            <ul className="tf-list">
              <li><span className="tf-dot" />Verify your Certificate of Occupancy and confirm the Class B designation matches actual building use</li>
              <li><span className="tf-dot" />Analyze open HPD and DOB violations and develop a resolution strategy-open violations reduce buyer confidence and may block financing</li>
              <li><span className="tf-dot" />Document tenant occupancy status, including which tenants may be protected under rent stabilization laws (SRO tenants may be protected under rent stabilization laws if the building was built before 1969)</li>
              <li><span className="tf-dot" />Research building alteration history to identify any work that was done without permits or that changed kitchens, shared bathrooms, or unit configurations without proper approvals</li>
            </ul>
            <p>
              SRO buildings require frequent repairs due to shared facilities, and deferred maintenance shows up in
              inspection reports. I help you prioritize what to address before listing versus what to disclose and
              price accordingly.
            </p>
            <h3>Market Valuation &amp; Pricing Strategy</h3>
            <p>
              Determining the market value of an SRO property is more complex than for conventional apartments.
              Comparative market analysis is harder because there are few recent SRO building sales, and many have
              non-standard conditions.
            </p>
            <ul className="tf-list">
              <li>
                <span className="tf-dot" />
                <strong>Comparable sales analysis:</strong> I filter NYC DOF{" "}
                <a
                  href="https://www.nyc.gov/site/finance/taxes/property-rolling-sales-data.page"
                  className="tf-guide-link"
                >
                  rolling sales data
                </a>{" "}
                and public records to identify true SRO or rooming house precedents, examining building class,
                occupancy type, unit layout, and whether facilities are shared or private
              </li>
              <li><span className="tf-dot" /><strong>Income approach valuation:</strong> Projected net operating income must account for rent regulation compliance, tenant turnover (which can range from 40% to 60% in SRO properties), vacancy rates, and the maintenance costs associated with older buildings with shared facilities. Many SROs operate under rent regulation, limiting opportunities for rent increases-a factor that directly impacts rental income and capitalization rates</li>
              <li><span className="tf-dot" /><strong>Redevelopment potential assessment:</strong> Zoning may allow conversion or reclassification, but only with approvals. I evaluate whether your building sits in a zoning district that allows higher density or falls under emerging regulations like the Shared Housing Law (Int. 66 of 2026), which takes effect January 1, 2027, and may shift investor expectations for SRO conversions</li>
              <li><span className="tf-dot" /><strong>Strategic pricing:</strong> I set pricing to attract qualified investors while maximizing seller returns, based on the property&apos;s actual condition, legal status, and income-not on hypothetical upside</li>
            </ul>
            <h3>Legal Documentation &amp; Compliance</h3>
            <p>
              Legal compliance and tenant status are paramount for successfully closing in the SRO market. One question
              I always discuss with sellers early is whether they&apos;ll need a certificate of no harassment.
            </p>
            <ul className="tf-list">
              <li>
                <span className="tf-dot" />
                <strong>CONH guidance:</strong> A Certificate of No Harassment is required for SRO alterations and
                conversions. If a buyer plans work that alters the SRO-removing or adding a kitchen or bathroom,
                converting from SRO to Class A apartments, or demolition-
                <a
                  href="https://www.nyc.gov/site/buildings/property-or-business-owner/certification-of-no-harassment.page"
                  className="tf-guide-link"
                >
                  DOB requires a CONH
                </a>{" "}
                before approving construction documents. Obtaining a Certificate of No Harassment can take years, so
                understanding whether this applies to your sale is critical
              </li>
              <li><span className="tf-dot" /><strong>Tenant protection compliance:</strong> I help ensure required notices and documentation are in order, but I always recommend working with a qualified real estate attorney on tenant rights matters</li>
              <li><span className="tf-dot" /><strong>Building permit and alteration documentation:</strong> I assemble the full alteration history, including any past modifications that may have been done legally or illegally</li>
              <li><span className="tf-dot" /><strong>Attorney coordination:</strong> SRO sales almost always involve regulatory complexity that requires legal counsel. I coordinate with your attorney throughout the process</li>
            </ul>
            <h3>Marketing &amp; Buyer Qualification</h3>
            <p>
              SRO properties require a fundamentally different marketing approach than standard residential listings.
              Many investors focusing on co-living spaces are prioritizing density and amenities over space, and current
              trends indicate a rebranding of SROs as co-living spaces to meet housing demand. I position your property
              to attract the right buyers.
            </p>
            <ul className="tf-list">
              <li><span className="tf-dot" /><strong>Targeted investor outreach:</strong> I market directly to experienced SRO investors, developers evaluating conversion potential, and mission-driven organizations focused on affordable housing and supportive housing</li>
              <li><span className="tf-dot" /><strong>Comprehensive property information packages:</strong> I prepare thorough offering memoranda that address buyer due diligence concerns up front-CO status, violation history, rent roll, tenant documentation, zoning, and building condition. This saves time and builds buyer confidence</li>
              <li><span className="tf-dot" /><strong>Buyer qualification:</strong> I screen potential buyers for financial capability and SRO experience. Financing for SRO properties is often more complicated than for conventional apartment buildings, so confirming a buyer&apos;s ability to close is essential</li>
              <li><span className="tf-dot" /><strong>Negotiation support:</strong> I evaluate offers not just on price but on contingencies, timing, financing structure, and the buyer&apos;s track record with regulated properties</li>
            </ul>

            <div className="tf-fig">
              <img
                src="/redesign-assets/services/selling-sros-article-2.png"
                alt="Professional home appraisal with real estate appraiser completing property valuation report inside residential home"
                loading="lazy"
              />
            </div>
            <h2>How the SRO Sales Process Works</h2>
            <p>
              The SRO selling process is more time consuming than a standard residential sale. Because of regulatory,
              occupancy, and legal complexity, total time from consultation to closing can easily be three to four
              months-or more. Here&apos;s what to expect at each stage.
            </p>
            <h3>Step 1: Initial Consultation &amp; Property Assessment (1–2 Weeks)</h3>
            <p>
              We start with an on-site property inspection where I review the physical condition of the building,
              tenant occupancy, shared bathrooms and kitchens, fire safety equipment, and egress paths. I also pull your
              Certificate of Occupancy and cross-reference it with DOB records to confirm legal classification.
            </p>
            <p>
              During this initial assessment, I&apos;ll discuss your goals, timeline, and any concerns about the sale.
              Many property owners come to this conversation unsure whether their building qualifies as an SRO under the{" "}
              <a
                href="https://codelibrary.amlegal.com/codes/newyorkcity/latest/NYCadmin/0-0-0-156492"
                className="tf-guide-link"
              >
                NYC Administrative Code
              </a>{" "}
              definitions-we clarify that immediately.
            </p>
            <h3>Step 2: Due Diligence &amp; Documentation (2–6 Weeks)</h3>
            <p>This is the stage that separates a smooth transaction from one that falls apart. I gather and review:</p>
            <ul className="tf-list">
              <li><span className="tf-dot" />HPD and DOB violation records, with a plan to resolve critical open violations before listing</li>
              <li><span className="tf-dot" />Tenant leases, occupancy agreements, rent rolls, and payment histories</li>
              <li><span className="tf-dot" />Building plans, architectural drawings, and alteration history-especially any work affecting kitchens, bathrooms, or unit configurations</li>
              <li><span className="tf-dot" />Zoning documentation, including any special district designations or upcoming regulatory changes</li>
              <li><span className="tf-dot" />Proof of compliance with safety and fire codes</li>
            </ul>
            <p>
              SRO conversions require compliance with New York City Administrative Code, and converting SRO units
              without necessary approvals is illegal and can incur fines. If past alterations were done without
              permits, we need to understand the implications before a buyer discovers them.
            </p>
            <p>
              I also develop the market pricing strategy during this phase, based on the property&apos;s actual
              condition, compliance status, and income profile.
            </p>
            <h3>Step 3: Marketing &amp; Sale Execution (6–12 Weeks)</h3>
            <p>
              Once documentation is assembled and the property is properly prepared, I launch a targeted marketing
              campaign aimed at qualified SRO investors. Throughout this phase, I:
            </p>
            <ul className="tf-list">
              <li><span className="tf-dot" />Coordinate buyer site visits and due diligence requests</li>
              <li><span className="tf-dot" />Evaluate offers based on price, contingencies, financing, and timeline</li>
              <li><span className="tf-dot" />Negotiate contract terms with buyer representatives</li>
              <li><span className="tf-dot" />Coordinate closing with attorneys, title companies, and all parties</li>
            </ul>
            <p>
              The sale of SRO properties does not terminate tenant leases or occupancy rights-a point I make clear to
              both buyers and sellers from the outset. Transparency about tenant status protects everyone involved.
            </p>

            <div className="tf-fig">
              <img
                src="/redesign-assets/services/selling-sros-article-3.png"
                alt="SRO For Sale"
                loading="lazy"
              />
            </div>
            <h2>Recent SRO Sales Results</h2>
            <p>
              Every SRO sale presents unique challenges. Here are examples of the types of situations I help owners
              navigate:
            </p>
            <ul className="tf-list">
              <li><span className="tf-dot" /><strong>Manhattan SRO with shared bathrooms and open DOB violations:</strong> The building had unresolved fire alarm and elevator violations that had been open for over a year. By coordinating violation resolution before listing, we attracted competitive offers within three weeks. The seller who addressed violations prior to marketing received offers 5–10% higher than comparable buildings sold with open violations still outstanding.</li>
              <li><span className="tf-dot" /><strong>Brooklyn Class B multiple dwelling with stabilized tenants:</strong> A building with a small number of rooms, some occupied by rent-stabilized tenants, required careful documentation of tenant protections and occupancy history. Clean tenant documentation attracted a mission-driven buyer focused on housing preservation, resulting in a smooth closing.</li>
              <li><span className="tf-dot" /><strong>Upper West Side SRO conversion candidate:</strong> A building owner wanted to understand the development potential before deciding whether to sell as-is or pursue conversion to Class A apartments. After reviewing zoning, alteration history, and the timeline for obtaining a new certificate of no harassment-which can take years and the conversion process can take up to six months for permits alone-the owner decided to sell to an experienced investor who was prepared to manage the regulatory process.</li>
            </ul>
            <p>
              <em>
                Note: Every SRO property should be evaluated individually based on its legal status, condition,
                location, occupancy, regulatory history, and current market demand.
              </em>
            </p>
            <hr />
            <h2>What Our SRO Clients Say</h2>
            <p>
              I work with SRO property owners who appreciate straightforward advice about what their building is
              actually worth, what issues need to be addressed, and how to present the property to sophisticated buyers.
              Client feedback consistently highlights:
            </p>
            <ul className="tf-list">
              <li><span className="tf-dot" />Clear communication about regulatory complexity and realistic timelines</li>
              <li><span className="tf-dot" />Thorough pre-listing due diligence that prevented deal-killing surprises</li>
              <li><span className="tf-dot" />Effective coordination with attorneys and regulatory agencies</li>
              <li><span className="tf-dot" />Professional guidance through tenant-related concerns and occupancy documentation</li>
            </ul>
            <p><em>Contact me to request references from previous SRO clients.</em></p>
            <hr />
            <h2>NYC Areas We Serve</h2>
            <p>
              SRO properties are concentrated in specific neighborhoods across New York City. I work with building
              owners throughout:
            </p>
            <ul className="tf-list">
              <li><span className="tf-dot" /><strong>Manhattan:</strong> Upper West Side, Upper East Side, Midtown West, Lower East Side, Harlem, Washington Heights-areas with significant historic SRO inventory dating to the late 1800s and the great depression era</li>
              <li>
                <span className="tf-dot" />
                <strong>Brooklyn:</strong> Bed-Stuy,{" "}
                <a href="/crown-heights/" className="tf-guide-link">Crown Heights</a>, Bushwick, Sunset
                Park-neighborhoods where Class B multiple dwellings and rooming houses remain part of the housing stock
              </li>
              <li><span className="tf-dot" /><strong>Queens:</strong> Long Island City, Elmhurst, Jackson Heights-areas with SRO properties subject to evolving zoning and development pressure</li>
              <li><span className="tf-dot" /><strong>The Bronx:</strong> Neighborhoods where SRO buildings continue to operate, often serving lower income residents and offering shelter to individuals who might otherwise face homelessness</li>
            </ul>
            <p>
              SROs were originally designed for low-income individuals, and they&apos;ve played a critical role in New
              York City&apos;s housing landscape for over a century. SROs peaked in the late 1800s during
              industrialization, and their numbers began declining in the 1950s due to new laws that effectively banned
              construction of new SRO units in many areas. New York City once had over 100,000 SROs-today, only about
              30,000 to 40,000 remain, making them increasingly rare assets. Understanding the history and housing plan
              context of SRO housing in each neighborhood helps me position your property effectively for the right
              buyers.
            </p>
            <hr />
            <h2>Frequently Asked Questions About Selling SRO Properties</h2>
            <h3>What makes selling an SRO different from selling other rental properties?</h3>
            <p>
              SROs are classified as Class B multiple dwellings, subject to different regulations than standard Class A
              apartments. SROs typically feature shared kitchens and bathrooms, and SRO properties face strict
              regulations from HPD and DOB that don&apos;t apply to conventional rental buildings. Buyers evaluate legal
              occupancy classification, violation history, tenant protections, and compliance with multiple dwelling
              law before they evaluate the physical condition. Rent regulation compliance is critical in selling SRO
              properties-a subject that requires careful documentation and often legal counsel.
            </p>
            <p>
              College dormitories, luxury hotels, and certain institutional housing are specifically excluded from SRO
              definitions, even though they may share some physical characteristics with SRO units.
            </p>
            <h3>Do I need a Certificate of No Harassment to sell my SRO?</h3>
            <p>
              A Certificate of No Harassment is required for SRO conversion and certain alterations-not for the sale
              itself. However, if a buyer plans to convert the building to Class A apartments, add or remove kitchens or
              bathrooms, or demolish the structure, they will need a CONH before DOB will approve construction
              documents. Many SRO owners seek to convert to Class A apartments, but this requires obtaining a CONH first.
              Because obtaining a Certificate of No Harassment can take years, understanding whether this requirement
              applies significantly affects buyer interest, offer terms, and your sale timeline.
            </p>
            <h3>Can I sell with existing tenants in place?</h3>
            <p>
              Yes-and in most SRO sales, you will. The sale of SRO properties does not terminate tenant leases or
              occupancy rights. Transparency is key: provide complete lease documentation, occupancy history, and
              clarify each tenant&apos;s regulatory protection status. SRO tenants may be protected under rent
              stabilization laws if the building was built before 1969. Buyers will heavily discount uncertain or
              problematic tenant situations, so clean documentation typically produces better offers. Tenant turnover
              in SRO properties can be high, ranging from 40% to 60%, which is a factor buyers consider when projecting
              future rental income.
            </p>
            <h3>How do building violations affect the sale process?</h3>
            <p>
              Open HPD and DOB violations reduce buyer confidence, may block financing, and can delay or prevent
              closing. I&apos;ve seen sellers lose hundreds of thousands of dollars in negotiated value because open
              violations gave buyers leverage to demand price reductions. Resolving violations before listing often
              yields better net proceeds than pricing the property expecting the buyer to assume risk. SRO buildings
              require frequent repairs due to shared facilities, so staying ahead of maintenance issues is both an
              operational and a transactional priority.
            </p>
            <h3>What documentation do buyers expect during due diligence?</h3>
            <p>Experienced SRO investors expect a comprehensive package that includes:</p>
            <ul className="tf-list">
              <li><span className="tf-dot" />Certificate of Occupancy (current, showing SRO/Class B designation)</li>
              <li><span className="tf-dot" />DOB building records: occupancy classification, alteration permits, open and resolved violations</li>
              <li><span className="tf-dot" />HPD records: violation history, habitability complaints</li>
              <li><span className="tf-dot" />Tenant leases, occupancy agreements, rent rolls, payment histories</li>
              <li><span className="tf-dot" />Building plans, architectural drawings, alteration history</li>
              <li><span className="tf-dot" />Proof of compliance with safety and fire codes (sprinklers, smoke detectors, egress)</li>
              <li><span className="tf-dot" />Zoning documentation, including any special district designations</li>
              <li><span className="tf-dot" />Income and expense statements</li>
            </ul>
            <p>
              Assembling this documentation before going to market signals to buyers that you&apos;re a serious,
              organized seller-and it accelerates the transaction. Days on market for standard residential properties
              in Manhattan recently averaged approximately 80–90 days; SROs tend to take longer, especially when legal
              or occupancy issues are unresolved.
            </p>
            <h3>What is happening with shared housing laws that might affect my sale?</h3>
            <p>
              The Shared Housing Law (Int. 66 of 2026) takes effect January 1, 2027, allowing new shared housing rooming
              units within Class A multiple dwellings under certain rules. This may shift investor expectations for SRO
              conversions and create new development interest. Additionally, the{" "}
              <a
                href="https://www.nyc.gov/site/specialenforcement/reporting-law/class-b-mdl.page"
                className="tf-guide-link"
              >
                OSE&apos;s Class B Multiple Dwellings List
              </a>
              , updated June 4, 2026, identifies buildings legally recognized as Class B-sellers should verify whether
              their building is included, as this can affect certain exemptions and buyer perceptions.
            </p>
            <hr />
            <h2>Ready to Sell Your SRO Property?</h2>
            <p>
              If you&apos;re considering selling your SRO property in New York City, the most valuable step you can take
              right now is understanding exactly where your building stands-legally, operationally, and in the current
              market.{" "}
              <a href="/about-us/" className="tf-guide-link">
                I help owners navigate every stage of the process
              </a>
              , from initial compliance review through closing, so you can make informed decisions and maximize the
              value of your property.
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
          </div>
        </div>
      </section>

      <section className="tf-reviews" data-screen-label="Reviews">
        <div className="tf-reviews-inner">
          <iframe
            className="tf-reviews-frame"
            title="Montfort Real Estate reviews"
            src="https://reputationhub.site/reputation/widgets/review_widget/J3cYmGK3p1ja7wTS63Dn"
            loading="lazy"
          />
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

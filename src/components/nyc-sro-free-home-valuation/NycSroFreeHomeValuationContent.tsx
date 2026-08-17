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

export default function NycSroFreeHomeValuationContent() {
  return (
    <>
      <section className="tf-hero" data-screen-label="Service hero">
        <div className="tf-hero-ring" />
        <div className="tf-hero-inner">
          <div data-reveal="">
            <h1>NYC SRO Free Home Valuation — Professional Valuation for Single Room Occupancy Properties</h1>
            <p className="tf-hero-lead">
              Discover the current market value of <strong>your SRO property</strong> with an expert assessment that
              considers <strong>income potential</strong>, regulatory factors, and neighborhood demand
            </p>
            <div className="tf-hero-ctas">
              <a href="tel:+1-646-970-1078" className="tf-hero-tel">Call 1-(646)-970-1078</a>
              <a href="https://calendly.com/montfort" className="tf-hero-book">Schedule A Consultation</a>
            </div>
          </div>
          <div className="tf-hero-media" data-reveal="">
            <div className="tf-hero-frame">
              <img src="/redesign-assets/services/nyc-sro-free-home-valuation.png" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="tf-promises" data-screen-label="Client promises">
        <div className="tf-promises-inner">
          <div className="tf-promise" data-reveal="">
            <span className="tf-promise-icon">{CHECK_ICON}</span>
            <div><h3 className="tf-promise-title">SMOOTH TRANSACTION</h3><p>With limited risk throughout the buying process.</p></div>
          </div>
          <div className="tf-promise" data-reveal="">
            <span className="tf-promise-icon">{CHECK_ICON}</span>
            <div><h3 className="tf-promise-title">NO PRESSURE</h3><p>No pressure to overpay or purchase within a specific timeframe.</p></div>
          </div>
          <div className="tf-promise" data-reveal="">
            <span className="tf-promise-icon">{CHECK_ICON}</span>
            <div><h3 className="tf-promise-title">ONGOING SUPPORT</h3><p>A dedicated team that remains available even after the transaction is complete.</p></div>
          </div>
        </div>
      </section>

      <section className="tf-guide" data-screen-label="Guide">
        <div className="tf-guide-inner">
          <div data-reveal="">
            <h1>NYC SRO Free Home Valuation</h1>
            <div className="tf-guide-rule" />
            <p>If you own a Single Room Occupancy property in New York City and you&apos;re trying to determine your home&apos;s value, the standard tools won&apos;t give you an accurate answer. Online home valuations provide general estimates of property worth, but SRO buildings are a different category entirely. Automated Valuation Models analyze public data for quick estimates based on square footage, recent sale prices, and neighborhood averages-none of which capture the legal complexity, occupancy dynamics, or regulatory exposure that drive what a buyer will actually pay for an SRO in today&apos;s market. Home valuations help determine your property&apos;s current market value, but for SROs, that determination depends on factors most algorithms simply can&apos;t see.</p>
            <p>I&apos;m Stanley Montfort, and I specialize in evaluating and marketing SRO properties across New York City. I offer a free home valuation for SRO owners that goes well beyond what major real estate portals can deliver-a personalized, no-obligation consultation built on the same criteria professional buyers use when making acquisition decisions.</p>

            <h2>Why NYC SRO Owners Trust Stanley Montfort</h2>
            <ul className="tf-list">
              <li><span className="tf-dot" />Years of hands-on experience evaluating SRO properties and navigating NYC&apos;s regulatory environment</li>
              <li><span className="tf-dot" />Deep working knowledge of <a href="https://www.nyc.gov/site/hpd/services-and-information/register-your-property.page" className="tf-guide-link">HPD registration requirements</a>, Certificate of Occupancy compliance, and DOB violation histories</li>
              <li><span className="tf-dot" />Track record of accurate SRO valuations that account for legal configuration, tenant status, and buyer demand</li>
              <li><span className="tf-dot" />Responsive, personalized consultations-not automated reports or generic estimates</li>
            </ul>

            <h2>Why NYC Chooses Stanley Montfort for SRO Valuations</h2>
            <p>Most real estate agents value residential property using a straightforward comparative market analysis—many owners ask estate agents to value properties this way, using recent sales of similar properties, adjustments for condition and location, and then arriving at a number. That approach works well for condos and single-family homes. It falls apart for <a href="/buying-a-brownstone-in-nyc/" className="tf-guide-link">SRO buildings</a>. Consulting specialized brokers is recommended for accurate SRO valuations due to unique regulations, and that&apos;s exactly the role I fill for owners across the city.</p>
            <ul className="tf-list">
              <li><span className="tf-dot" /><strong>Legal configuration expertise:</strong> One of the first things I review is whether the building&apos;s legal configuration matches its actual use. Many SRO owners are surprised to learn their Certificate of Occupancy doesn&apos;t reflect the current unit count or layout—and that discrepancy can dramatically affect what buyers will offer.</li>
              <li><span className="tf-dot" /><strong>Tenant and rent stabilization knowledge:</strong> Single Room Occupancy properties are often rent-regulated and legally complex. I evaluate every unit&apos;s regulatory status, lease terms, and rent history so owners understand exactly how occupancy affects their property worth.</li>
              <li><span className="tf-dot" /><strong>Access to real comparable sales:</strong> SRO transactions rarely appear on public listing platforms. I maintain direct knowledge of recent sales and real estate transactions, where agents find comparable sales in ordinary asset classes far more easily than in SRO deals, involving SRO and mixed-use buildings across Manhattan and Brooklyn—data that automated tools and most real estate agents simply don&apos;t have.</li>
              <li><span className="tf-dot" /><strong>Buyer-side perspective:</strong> I understand what professional buyers evaluate, what documentation they require, and how they discount for risk. That means the valuation I deliver reflects the current market, not theoretical value.</li>
            </ul>
            <div className="tf-fig">
              <img src="/redesign-assets/services/nyc-sro-valuation-article-1.png" alt="SRO For Sale" loading="lazy" />
            </div>

            <h2>Our SRO Valuation Services</h2>
            <p>When I discuss a customized comparative analysis with SRO owners, I explain that the valuation must cover three distinct dimensions: legal status, occupancy, and physical condition. Each one independently influences the value of your property-and when any one of them has issues, buyers adjust their offers accordingly.</p>
            <h3>Legal Status and Compliance Review</h3>
            <p>Before recommending a market value, I conduct a thorough review of your building&apos;s legal standing. This includes:</p>
            <ul className="tf-list">
              <li><span className="tf-dot" /><strong>Certificate of Occupancy analysis:</strong> The <a href="https://home4.nyc.gov/site/buildings/property-or-business-owner/certificate-of-occupancy.page" className="tf-guide-link">CO defines the building&apos;s legal use and permitted unit count</a>. If there have been alterations-units combined, subdivided, or converted-without an amended CO, the building carries significant compliance risk. Buyers discount heavily for this.</li>
              <li><span className="tf-dot" /><strong>HPD registration and violation history:</strong> Residential multiple dwellings with three or more units must register annually with HPD. Missing or delinquent registrations can trigger civil penalties and block certain owner actions. I review your full violation history from both HPD and DOB, because unresolved findings signal deferred maintenance and enforcement risk to buyers.</li>
              <li><span className="tf-dot" /><strong>Certification of No Harassment (CONH):</strong> A Certificate of No Harassment increases the value of an SRO property. In certain zoning districts, HPD requires this certification before issuing work permits. I assess whether your building falls within a CONH-required area and what the implications are for repositioning or renovation.</li>
            </ul>
            <h3>Occupancy and Tenant Evaluation</h3>
            <p>Rental income and occupancy significantly influence the valuation of SRO properties. Unlike standard residential buildings, SRO valuations require understanding not just how many units are occupied, but the legal classification of every tenancy.</p>
            <ul className="tf-list">
              <li><span className="tf-dot" /><strong>Rent stabilization status:</strong> Buildings constructed before 1974 with six or more units often fall under rent stabilization. The <a href="https://theclose.com/news-nyc-rent-stabilized-buildings-investment-what-makes-deals-work-now/" className="tf-guide-link">2019 Housing Stability and Tenant Protection Act (HSTPA)</a> removed vacancy deregulation and constrained renovation rent increases, which fundamentally changed how buyers underwrite stabilized buildings. I evaluate each unit&apos;s regulatory status-legal rents, preferential rents, lease terms, succession rights-so the valuation reflects actual income, not assumptions.</li>
              <li><span className="tf-dot" /><strong>Vacancy analysis:</strong> Vacant units offer repositioning flexibility but increase carrying costs. Partially occupied buildings present a different risk profile than fully tenanted ones. I assess vacancy rates and what they mean for both current cash flow and buyer interest.</li>
              <li><span className="tf-dot" /><strong>Income and expense data:</strong> Income and expense data are crucial for assessing the market value of SRO properties. SROs are valued based on income rather than just size. I review actual rents collected, operating expenses (maintenance, utilities, insurance, property taxes, management fees), and stabilized net operating income. For context, NYC&apos;s FY2022 assessment guidelines show expense ratios for SRO-type properties ranging from 42% to 62% depending on building size and class.</li>
            </ul>
            <h3>Real Estate Property Condition Assessment</h3>
            <p>One mistake I frequently see is owners underestimating how much deferred maintenance affects their property&apos;s resale value. Professional appraisals involve a complete visual inspection of the property, but for SROs, I go further:</p>
            <ul className="tf-list">
              <li><span className="tf-dot" /><strong>Building envelope and systems:</strong> I evaluate the roof, facade, plumbing, electrical, fire safety systems, and means of egress. Older SRO structures frequently need costly upgrades. A building with a documented maintenance history holds significantly more value than one where buyers must budget for unknowns.</li>
              <li><span className="tf-dot" /><strong>Conversion and renovation potential:</strong> Some SRO buildings have the zoning and legal framework to support unit combinations, full apartment conversions, or other repositioning. When that potential exists, it can meaningfully <a href="/home-valuation/" className="tf-guide-link">increase value</a>. I assess what&apos;s feasible under current zoning and CO constraints.</li>
              <li><span className="tf-dot" /><strong>Comparable sales analysis:</strong> I conduct a sales comparison using recent SRO and mixed-use building transactions in your neighborhood. The home being valued is compared against homes that have recently sold or were recently sold in the same submarket, with adjustments for SRO-specific factors, and each comparable is analyzed to pinpoint differences that affect value. SRO properties&apos; market values may differ significantly from similar non-income producing properties, so I use comparable sales specific to the asset class-not generic residential comps. For example, in one documented court case (<em>Allen v. 219 24th St. LLC</em>), a <a href="https://www.nycourts.gov/Reporter/3dseries/2020/2020_50513.htm" className="tf-guide-link">48-unit SRO building was valued at approximately $52,083 per residential unit</a>-a figure that reflected the building&apos;s legal status, condition, and regulated rent structure.</li>
            </ul>
            <div className="tf-fig">
              <img src="/redesign-assets/services/nyc-sro-valuation-article-2.png" alt="SRO Building interior" loading="lazy" />
            </div>

            <h2>How Professional SRO Valuation Works</h2>
            <p>Understanding the process matters because SRO valuation isn&apos;t a quick calculation-it&apos;s a structured evaluation that mirrors how experienced buyers perform due diligence before making an offer.</p>
            <h3>Step 1: Initial Property Documentation Review</h3>
            <p>I start by gathering your building&apos;s legal and financial records. SRO valuations require gathering detailed property information including unit count and income. Here&apos;s what I review:</p>
            <div className="tf-table-wrap">
              <table className="tf-table">
                <thead><tr><th>Document</th><th>Why It Matters</th></tr></thead>
                <tbody>
                  <tr><td><strong>Certificate of Occupancy &amp; Amendments</strong></td><td>Confirms the property&apos;s legal use, unit count, and occupancy classification.</td></tr>
                  <tr><td><strong>HPD Registration History</strong></td><td>Verifies compliance with NYC regulations; missing registrations may create legal exposure.</td></tr>
                  <tr><td><strong>DOB / HPD Violation Records</strong></td><td>Identifies deferred maintenance, open violations, and potential enforcement risks.</td></tr>
                  <tr><td><strong>Rent Roll (Past 2–3 Years)</strong></td><td>Confirms actual versus legal rents, occupancy, and rent stabilization status.</td></tr>
                  <tr><td><strong>Operating Expense History</strong></td><td>Determines net operating income (NOI) for accurate income-based valuation.</td></tr>
                  <tr><td><strong>Floor Plans &amp; Alteration Records</strong></td><td>Reveals differences between the legal layout and the property&apos;s current configuration.</td></tr>
                  <tr><td><strong>Utility Bills &amp; Occupancy Data</strong></td><td>Helps verify operating expenses, occupancy trends, and vacancy patterns.</td></tr>
                </tbody>
              </table>
            </div>
            <p><strong>Timeline:</strong> Document gathering typically takes one to two weeks, depending on how quickly records can be assembled. If you&apos;re missing documentation-such as a current CO or complete rent roll-I can advise on how to obtain what&apos;s needed from city agencies.</p>
            <h3>Step 2: On-Site Property Evaluation</h3>
            <p>I conduct a complete visual inspection of the property, including common areas, individual SRO units, safety systems, building envelope, and means of egress. During the walk-through, I verify unit conditions, measure room sizes, confirm the number of bathrooms and kitchens, and assess overall building health. When needed, this works more like an in person appraisal than an automated estimate, especially with unusual SRO layouts and conditions. The inspection also captures home improvements, flags too many improvements for the submarket, and accounts for subjective market perception that online tools miss.</p>
            <p>One question I always discuss with owners during the inspection is whether there are any units or spaces being used differently than what the CO permits. That single finding can shift value by tens of thousands of dollars per unit.</p>
            <h3>Step 3: Comparative Market Analysis and Valuation Report</h3>
            <p>After the inspection, I research comparable SRO sales in your neighborhood with consideration recent sales, comparable properties and market trends, and local market trends alongside capitalization rates and local market conditions. SRO buildings are usually assessed using income-producing potential under Class 4 properties, though SROs can be classified as Tax Class 2 by the city, affecting their valuation approach. I account for both frameworks.</p>
            <p>The process compiles a detailed report that includes: A formal appraisal package may also include an exterior building sketch, sketch a street map, and an explanation of how the square footage was calculated when that level of documentation is required for a transaction or lender review.</p>
            <ul className="tf-list">
              <li><span className="tf-dot" />Estimated current market value (&quot;as-is&quot; and, where applicable, after compliance/repairs)</li>
              <li><span className="tf-dot" />Specific findings on legal compliance, occupancy, and property condition</li>
              <li><span className="tf-dot" />Recommendations for addressing issues that suppress value</li>
              <li><span className="tf-dot" />Actionable next steps-whether you&apos;re planning to sell, refinance, or plan for the future</li>
            </ul>
            <p>The most precise valuation is one based on a professional&apos;s opinion informed by every factor a buyer will scrutinize, which is how you get closest to the home&apos;s actual market value rather than relying on generic estimates. That&apos;s what this report delivers.</p>
            <div className="tf-fig">
              <img src="/redesign-assets/services/nyc-sro-valuation-article-3.png" alt="Ney York Air View" loading="lazy" />
            </div>

            <h2>What Buyers Actually Look At: Common Valuation Mistakes SRO Owners Make</h2>
            <p>Many SRO owners approach me after getting an instant home valuation or an online home valuation from a platform and wondering why buyer offers come in significantly lower. Here&apos;s why that gap exists:</p>
            <p><strong>Overreliance on automated estimates.</strong> Zillow&apos;s Zestimate has a median error rate of 1.83% for on-market homes-standard single-family houses and condos. Instant home valuation enter tools can be a useful starting point, but they do not provide the accurate estimate owners need for SRO decision-making. For SRO buildings, the error is far greater because automated tools can&apos;t assess legal compliance, rent regulation status, or violation histories. Online valuation tools provide a baseline value but may not be accurate for SROs. Online estimators may miss unique property features and conditions that are standard in SRO evaluation.</p>
            <p><strong>Ignoring regulatory risk.</strong> Since the HSTPA, values of rent-stabilized buildings have declined an estimated 35% to 60% from 2017–2018 peaks. Sale volume dropped from approximately $4.8 billion in 2015 to roughly $1.1 billion in 2023. Owners who price based on pre-2019 assumptions find very few interested buyers. Experienced investors now seek <a href="https://therealdeal.com/magazine/march-2026/whos-still-buying-rent-stabilized-buildings/" className="tf-guide-link">cap rates of 8% to 10%</a> for stabilized assets-significantly higher than the 6% range common just a few years ago.</p>
            <p><strong>Failing to prepare documentation.</strong> When I walk into a valuation and the owner can&apos;t produce a current rent roll, expense history, or CO, I know that every buyer will apply a steep discount. Missing documentation isn&apos;t just inconvenient-it signals risk.</p>
            <p><strong>Underestimating deferred maintenance.</strong> Home valuations guide home improvement decisions to avoid overpricing. For SROs, the stakes are higher. Masonry deterioration, plumbing failures, roof issues, and egress deficiencies can cost hundreds of thousands to address. If those costs aren&apos;t identified upfront, the gap between your expectation and the market&apos;s assessment will be significant.</p>

            <h2>What Our SRO Clients Say</h2>
            <p><em>[Testimonials from SRO property owners will be displayed here. If you&apos;ve worked with Stanley on an SRO valuation, your feedback helps future owners understand the process and outcomes.]</em></p>

            <h2><a href="/neighborhoods/" className="tf-guide-link">NYC Neighborhoods We Serve</a></h2>
            <p>I evaluate SRO properties across Manhattan and Brooklyn, with particular depth in neighborhoods where SRO buildings are concentrated and buyer demand varies meaningfully:</p>
            <p><strong>Manhattan:</strong> Lower East Side, East Village, Harlem, Upper West Side, Washington Heights, Morningside Heights, Hell&apos;s Kitchen, Chelsea</p>
            <p><strong>Brooklyn:</strong> Crown Heights, Bed-Stuy, Bushwick, Williamsburg, Park Slope, Prospect Heights, Sunset Park</p>
            <p>Local market conditions differ significantly by neighborhood. An SRO in the East Village commands a different premium than one in Bushwick-not just because of location, but because buyer pools, zoning overlays, CONH requirements, and redevelopment pressures vary. My familiarity with trends and local market dynamics across these areas means the valuation reflects neighborhood-level realities, not citywide averages.</p>
            <p>Home value is influenced by location, size, and condition. For SROs, I&apos;d add legal status, occupancy, and regulatory history to that list.</p>

            <h2>Frequently Asked Questions</h2>
            <h3>Why are automated home value estimates inaccurate for SRO properties?</h3>
            <p>Automated home value estimates are less reliable for SRO properties than standard homes because algorithms rely on public data points-square footage, recent sale prices of comparable homes, and neighborhood sales volume. They cannot evaluate your Certificate of Occupancy, detect illegal unit configurations, assess rent stabilization status, or factor in HPD violations. Comparative Market Analysis uses recent sales of similar homes, but for SROs, those comparable sales require specialized knowledge to identify and adjust properly. A free home value estimator simply isn&apos;t built for income-producing, regulated multifamily assets.</p>
            <h3>How long does a professional SRO valuation take?</h3>
            <p>The full process typically spans three to four weeks:</p>
            <ul className="tf-list">
              <li><span className="tf-dot" /><strong>Document review:</strong> 1–2 weeks (depending on document availability)</li>
              <li><span className="tf-dot" /><strong>On-site inspection:</strong> 1 day</li>
              <li><span className="tf-dot" /><strong>Market analysis and report delivery:</strong> 1–2 additional weeks</li>
            </ul>
            <p>If there are complex legal issues-such as a missing CO, active DOB violations, or CONH requirements-the timeline may extend. Obtaining an official valuation for SROs typically involves reviewing city records and consulting experts, and I coordinate that process for you.</p>
            <h3>What documents do I need to prepare for an SRO valuation?</h3>
            <p>Here&apos;s the essential checklist:</p>
            <ul className="tf-list">
              {["Certificate of Occupancy and any amendments", "HPD registration history", "Current rent roll showing legal and actual rents for all units", "Operating expense records (2–3 years)", "HPD and DOB violation records", "Floor plans and records of any building alterations", "Utility bills", "Occupancy and vacancy records"].map((item) => <li key={item}><span className="tf-dot" />{item}</li>)}
            </ul>
            <p>If you&apos;re missing any of these, don&apos;t let that delay you. I can advise on how to obtain records from HPD, DOB, and NYC Finance.</p>
            <h3>Do you provide valuations for occupied SRO properties?</h3>
            <p>Yes. Most SRO properties I evaluate have existing tenants. The approach changes based on tenant status: stabilized tenants with long-term leases and below-market rents produce predictable income but limit upside. Vacant or partially vacant buildings offer repositioning flexibility but carry higher risk and carrying costs. I evaluate the specific tenant mix, lease terms, and income stability to produce the most accurate assessment of what a buyer will pay.</p>
            <h3>How do SRO valuations differ from standard home valuations?</h3>
            <p>Standard home valuations are typically based on consideration of recent sales of similar properties, adjusted for size, condition, and location. Professional appraisals are more accurate than online estimates for any property type, but appraisers and agents compare similar properties differently here because SRO valuation calls for a customized comparative market analysis rather than the approach used for standard homes. That gives owners valuable knowledge when weighing a sale, refinancing, or repositioning. SRO valuations add layers that don&apos;t exist for conventional residential property: legal configuration review, rent regulation analysis, income capitalization, violation exposure, and CONH status. A home valuation determines the probable selling price for a standard home; an SRO valuation determines what informed, risk-aware buyers will pay given the full regulatory and operational picture.</p>
            <h3>Can knowing my SRO&apos;s property worth help with refinancing?</h3>
            <p>Absolutely. Home valuations help determine equity for refinancing options, and some owners seek one before they borrow cash through refinancing or a home equity line. Lenders require home valuations to assess collateral for mortgages, and mortgage companies and refinancing lenders base loan terms on the property’s value and equity position. Home equity lines of credit require at least 20% equity, and lenders allow borrowing up to 96.5% of your home&apos;s value depending on the loan product. That kind of home equity line can also depend on lender guidelines and the asset type, especially for SRO properties. Home valuations prevent excessive borrowing and financial losses-and for SRO owners, having a precise valuation performed by someone who understands the asset class gives necessary refinancing lenders the confidence to approve favorable terms, while serving as one of the home valuation safeguards lenders use when assessing collateral.</p>

            <h2>Get Your Free SRO Valuation</h2>
            <p>Knowing your home&apos;s value aids in financial planning and decision-making-whether you&apos;re considering a sale, evaluating refinancing options, or simply trying to plan for the future. For SRO owners, that knowledge has to be based on more than algorithms. It requires someone who understands the legal, regulatory, and operational realities that shape what your property is actually worth in the current market.</p>
            <p>I offer a free consultation that functions as an educational walk-through-not a sales pitch. We&apos;ll review your building&apos;s legal status, discuss occupancy and income, identify any issues that may suppress value, and outline what professional buyers will evaluate before making an offer. Every SRO property should be evaluated individually based on its legal status, occupancy, building condition, documentation, location, and current market demand.</p>
            <p className="tf-guide-center">
              <strong>Phone:</strong>{" "}<a href="tel:+1-646-970-1078" className="tf-guide-link">1-646-970-1078</a>{"  "}
              <strong>Email:</strong>{" "}<a href="mailto:sm@montfortre.com" className="tf-guide-link">sm@montfortre.com</a>{"  "}
              <strong>Address:</strong> 8 West 126th Street, New York NY 10027
            </p>
            <div className="tf-hero-ctas">
              <a href="tel:+1-646-970-1078" className="tf-hero-tel">Call For Information</a>
              <a href="https://calendly.com/montfort" className="tf-hero-book">Schedule A Consultation</a>
            </div>
          </div>
        </div>
      </section>

      <section className="tf-reviews" data-screen-label="Reviews">
        <div className="tf-reviews-inner">
          <iframe className="tf-reviews-frame" title="Montfort Real Estate reviews" src="https://reputationhub.site/reputation/widgets/review_widget/J3cYmGK3p1ja7wTS63Dn" loading="lazy" />
        </div>
      </section>
      <ResourcesSection title="Recent News & Realtor Advice" subtitle="Stay in the loop on the latest events, news, & happenings in and around our community!" showCategory={false} showCta={false} articles={NEWS_ARTICLES} />
      <ContactSection />
    </>
  );
}

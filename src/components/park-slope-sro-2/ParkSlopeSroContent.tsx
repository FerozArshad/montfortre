import PromisesBar from "../shared/PromisesBar";
import ResourcesSection from "../shared/ResourcesSection";
import "../../styles/neighborhoods-page.css";
import "../../styles/park-slope-sro-page.css";
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

export default function ParkSlopeSroContent() {
  return (
    <>
      <section className="nbhd-hero" data-screen-label="Service hero">
        <div className="nbhd-hero-ring" />
        <div className="nbhd-hero-inner">
          <div data-reveal="">
            <h1>{"Park Slope SRO — Experts realtor for Buying, Selling & Investing"}</h1>
            <p className="nbhd-hero-lead">{"We'll help you buy the right Park Slope Condo by avoiding costly structural issues, hidden repair expenses, and overpaying in a competitive market"}</p>
            <div className="nbhd-hero-ctas">
              <a href="tel:+16469701078" className="nbhd-hero-tel">Call 1-(646)-970-1078</a>
              <a href="https://calendly.com/montfort" className="nbhd-hero-book">Schedule A Consultation</a>
            </div>
          </div>
          <div className="nbhd-hero-media" data-reveal="">
            <div className="nbhd-hero-frame">
              <img src="/redesign-assets/hoods/park-slope-sros.png" alt="Park Slope SRO buildings" width="640" height="512" loading="eager" />
            </div>
            <HeroGoogleRating prefix="nbhd" />
          </div>
        </div>
      </section>

      <PromisesBar variant="nbhd" />

      <PageListingsSection market="Park Slope" propertyType="SRO" label="Park Slope SROs" />

      <section className="nbhd-intro" data-screen-label="Guide">
        <div className="nbhd-intro-inner">
          <div className="nbhd-intro-copy" data-reveal="">
            <h2>{"Park Slope SROs Realtor"}</h2>
            <p>{"If you’re searching for a Park Slope SRO realtor, Stanley Montfort works with buyers and sellers of Single Room Occupancy properties in Park Slope, Brooklyn, where an SRO purchase or sale looks nothing like buying a condo, co-op, or conventional brownstone. SRO properties are regulated under the "}<a href={"https://www.nyc.gov/site/hpd/services-and-information/hpd-shared-housing-roadmap.page"} className="nbhd-guide-link">{"NYC Housing Maintenance Code"}</a>{", and their legal use, tenant status, regulatory history, financing options, and closing path require a different evaluation process from the first phone call—especially across Park Slope’s historic districts, where landmark rules, zoning constraints, and townhouse values that can exceed $7,000,000 raise the stakes for every decision."}</p>
            <p>{"For investors, end-users, and owners preparing to sell, the work usually starts with legal and regulatory due diligence, market and valuation analysis, financing strategy, historic district compliance, and a clear plan for tenant occupancy issues before you commit to a deal or listing strategy. It is rare to find realtors specializing in SRO properties because these transactions often require coordinated guidance with attorneys and lenders to verify legal use, avoid costly mistakes, and keep a transaction from stalling."}</p>
            <h2>{"Why Park Slope Trusts "}<a href={"/stanley-montfort/"} className="nbhd-guide-link">{"Stanley Montfort"}</a>{" for SRO Transactions"}</h2>
            <ul className="nbhd-guide-list"><li><p>{"Licensed NY Realtor with over 20 years of industry experience, specializing in complex Brooklyn real estate including SRO properties since 2009"}</p></li><li><p>{"Extensive HPD and DOB records experience; certified in Certificate of Occupancy analysis and regulatory compliance review"}</p></li><li><p>{"200+ unconventional property transactions completed in Brooklyn, including SRO acquisitions, SRO dispositions, and mixed-use conversions"}</p></li><li><p>{"Active relationships with SRO-experienced attorneys, architects, building inspectors, and commercial lenders across Park Slope"}</p></li></ul>
            <h2>{"Why Park Slope Chooses Stanley Montfort for SRO Real Estate"}</h2>
            <p>{"Stanley's approach to SRO transactions starts with regulatory due diligence, not curb appeal. Before discussing renovation potential or offer strategy, he verifies a property's legal configuration through its Certificate of Occupancy, HPD registration, DOB alteration history, and tenant documentation. That process catches problems that surface after contract signing in less specialized hands."}</p>
            <ul className="nbhd-guide-list"><li><p><strong>{"Regulatory-first evaluation:"}</strong>{" One of the first things Stanley reviews when evaluating a Park Slope SRO is the Certificate of Occupancy to verify the legal dwelling unit count and whether any units are officially designated as rooming units. Many buyers assume the current layout determines the property's legal use; it does not."}</p></li><li><p><strong>{"Historic district fluency:"}</strong>{" Park Slope includes the Park Slope Historic District and Extensions I and II. Proposed facade, window, or roofline changes require a Certificate of Appropriateness from the Landmarks Preservation Commission. Stanley identifies those constraints before clients invest in architectural plans."}</p></li><li><p><strong>{"Investor and end-user strategy:"}</strong>{" SRO valuation differs depending on whether the buyer plans to operate the building for income or convert it. Stanley builds separate analyses for each path, factoring in legal use, tenant status, conversion costs, and financing availability."}</p></li><li><p><strong>{"Network of specialists:"}</strong>{" SRO transactions require specialized zoning and regulatory expertise beyond what a single Realtor provides. Stanley coordinates with qualified real estate attorneys, architects, and expeditors who work specifically with SRO and rooming-unit properties."}</p></li></ul>
            <img src="/redesign-assets/hoods/park-slope-sro-2-1.png" alt={"Property search and market analysis workspace featuring NYC neighborhood maps, Crown Heights real estate listings, and investment reports for informed home buying decisions"} className="nbhd-guide-img" loading="lazy" />
            <h2>{"Park Slope SRO Real Estate Services"}</h2>
            <p>{"Park Slope has over 220 homes currently for sale, and buyers comparing SRO opportunities are often also seeing listings through Compass, Corcoran, and Douglas Elliman, but SRO properties occupy a separate category with distinct due diligence, financing, and legal requirements. Stanley serves both sides of these transactions."}</p>
            <h3>{"SRO Buyer Representation in Park Slope"}</h3>
            <p>{"Buying an SRO in Park Slope requires verifying facts that most buyers never encounter in a conventional purchase. Stanley's buyer representation includes:"}</p>
            <ul className="nbhd-guide-list"><li><p><strong>{"Certificate of Occupancy verification and legal use analysis."}</strong>{" The COO states the legal number of dwelling units, whether units are classified as apartments or rooming units, and whether kitchens and bathrooms are lawfully in place. A building's current room layout does not determine its legal use; only the COO and approved alteration permits do."}</p></li><li><p><strong>{"HPD and DOB records review."}</strong>{" SRO realtors must understand the "}<a href={"https://www.nyc.gov/site/hpd/services-and-information/certification-of-no-harassment-conh.page"} className="nbhd-guide-link">{"NYC Department of Housing Preservation and Development (HPD)"}</a>{" guidelines. Stanley retrieves open and historical violations, HPD registration status, stop-work orders, and Alternative Enforcement Program listings before recommending an offer."}</p></li><li><p><strong>{"Tenant occupancy assessment."}</strong>{" Navigating SRO properties requires knowledge of NYC tenant protection laws. If units are occupied, Stanley documents whether tenants hold leases or occupancy agreements, whether rent stabilization applies, and how occupancy status affects both valuation and conversion potential."}</p></li><li><p><strong>{"Financing coordination."}</strong>{" SRO financing is handled differently from a standard residential mortgage. Stanley identifies lenders experienced with DSCR loans and commercial financing for income properties and coordinates the documentation lenders require."}</p></li></ul>
            <h3>{"Park Slope SRO Listing Services"}</h3>
            <p>{"When preparing an SRO for sale, Stanley advises sellers to assemble clean HPD and DOB records, resolved violations, proof of occupancy, and accurate legal unit descriptions before listing. Sophisticated buyers will investigate all of these during due diligence."}</p>
            <ul className="nbhd-guide-list"><li><p>{"Pre-market regulatory documentation assembly and violation resolution strategy"}</p></li><li><p>{"Market positioning that targets the right buyer pool: investors evaluating cap rates and gross rent multipliers, or end-users evaluating conversion potential"}</p></li><li><p><a href={"https://home4.nyc.gov/assets/hpd/downloads/pdfs/services/conh-rules-sro.pdf"} className="nbhd-guide-link">{"Certificate of No Harassment"}</a>{" coordination where the property qualifies as an SRO Multiple Dwelling and planned alterations trigger the requirement"}</p></li><li><p>{"Disclosure preparation for complex occupancy situations, including properties where actual use diverges from the COO"}</p></li></ul>
            <h3>{"SRO Real Estate "}<a href={"/home-valuation/"} className="nbhd-guide-link">{"Property Valuation"}</a>{" and Market Analysis"}</h3>
            <p>{"SRO properties often involve rent regulation and occupancy restrictions. Their value depends on what the building is legally permitted to be, not just what it looks like today. Stanley's valuation process addresses:"}</p>
            <ul className="nbhd-guide-list"><li><p><strong>{"Legal-use valuation."}</strong>{" If the COO permits rooming units, the income from those units can be factored into value. If the current SRO configuration is unpermitted, value drops because of remediation cost, enforcement risk, and financing difficulty."}</p></li><li><p><strong>{"Income analysis."}</strong>{" Actual rent rolls, occupancy rates, and potential income under full legal occupancy. SRO properties seldom trade on price-per-square-foot the way Park Slope condos do (where recent sales range from $250,000 to $4,000,000 depending on size and condition)."}</p></li><li><p><strong>{"Comparable sales."}</strong>{" Local market knowledge is important for accurately assessing SRO property values. Comparable sales for SRO configurations are scarce in Park Slope itself. Stanley extends research to similar rooming-house and converted walk-up transactions in Gowanus, Windsor Terrace, and Flatbush, while also reviewing how SRO opportunities are positioned relative to broader Park Slope inventory marketed by firms such as Compass, Corcoran, and Douglas Elliman."}</p></li><li><p><strong>{"Renovation cost estimation."}</strong>{" Conversion plans in Park Slope's historic district carry higher costs because exterior materials, windows, and architectural details must match the original facade. Stanley works with architects to produce realistic cost projections before clients commit."}</p></li></ul>
            <img src="/redesign-assets/hoods/park-slope-sro-2-2.png" alt={"Park Slope purshace documents"} className="nbhd-guide-img" loading="lazy" />
            <h2>{"How Park Slope SRO Transactions Work"}</h2>
            <p>{"SRO transactions involve regulatory steps that do not exist in conventional residential deals. Here is the process Stanley follows with his clients."}</p>
            <h3>{"Step 1: Initial SRO Property Assessment"}</h3>
            <p>{"Stanley begins with the property's legal documentation rather than its physical condition. The Certificate of Occupancy establishes the legal dwelling unit count. HPD and DOB records reveal violation history, alteration permits, and whether any unpermitted work was performed. Current tenant status and occupancy documentation are assembled to determine who is in the building and under what terms."}</p>
            <p>{"One mistake Stanley frequently sees investors make: underestimating "}<a href={"https://codelibrary.amlegal.com/codes/newyorkcity/latest/NYCadmin/0-0-0-156492"} className="nbhd-guide-link">{"CONH"}</a>{" risk. If the property is classified as an SRO Multiple Dwelling under NYC Administrative Code § 28-107.2, even internal rearrangement of rooms, kitchens, or bathrooms can trigger the Certificate of No Harassment requirement. Failing to recognize that before making an offer can result in months of delay or outright denial."}</p>
            <h3>{"Step 2: Due Diligence and Market Strategy"}</h3>
            <p>{"With legal status established, the work shifts to physical inspection and financial analysis. Building systems, including plumbing, electrical, HVAC, fire safety, and structural masonry, are evaluated for deferred maintenance. Properties with shared occupancy spaces tend to show higher wear. Lead paint testing is standard for buildings constructed before 1960, which includes most of Park Slope's iconic brownstones."}</p>
            <p>{"Financing feasibility is assessed in parallel. Many lenders require a fully legal SRO Multiple Dwelling status or proof that the property complies with its COO and DOB permits. DSCR loans, where lenders evaluate debt service relative to net rental income, are common for investor-held SRO properties. If open violations or illegal occupancy exist, lenders typically require resolution before funding."}</p>
            <p>{"Market positioning depends on the buyer or seller's strategy. For sellers, Stanley determines whether the property is best marketed to investors (focusing on cap rate and income stability) or end-users (focusing on conversion potential and location value). Many Park Slope buyers also weigh commute and access to Manhattan when comparing SRO opportunities with other Brooklyn property types."}</p>
            <h3>{"Step 3: Transaction Execution and Closing"}</h3>
            <p>{"SRO closings require attorney coordination on issues that rarely appear in standard residential transactions: tenant occupancy agreements, regulatory compliance documentation, open-violation resolution timelines, and (where applicable) CONH application status. Stanley verifies regulatory compliance through closing and provides post-closing guidance for clients planning renovation or conversion, including LPC requirements, DOB permit sequencing, and HPD registration updates."}</p>
            <h2>{"Park Slope SRO Legal and Regulatory Considerations"}</h2>
            <p>{"Due diligence is crucial for verifying the legal status of SRO buildings. The regulatory framework governing "}<a href={"/buying-sro-in-nyc/"} className="nbhd-guide-link">{"SRO properties in NY"}</a>{" involves multiple agencies and overlapping requirements that directly affect what a buyer can do with the property and what a seller can realistically ask for it."}</p>
            <h3>{"Park Slope Certificate of Occupancy and Legal Use Analysis"}</h3>
            <p>{"The COO determines market value more than square footage. A building where the COO lists two apartments but the interior contains five partitioned rooms is not a five-unit building; it is a two-unit building with potential illegal conversions. Unauthorized SRO use without proper COO and alteration permits can lead to violations, stop-work orders, and penalties, and it creates difficulty for both financing and resale."}</p>
            <p>{"SRO buildings may be classified as Class B multiple dwellings in New York City. Under "}<a href={"https://codelibrary.amlegal.com/codes/newyorkcity/latest/NYCadmin/0-0-0-156492"} className="nbhd-guide-link">{"NYC Administrative Code § 28-107.2"}</a>{", an SRO Multiple Dwelling includes Class A dwellings used for rooming or single-room occupancy and Class B multiple dwellings. Buildings erected after May 5, 1983, are automatically excluded from SRO MD status."}</p>
            <p>{"Park Slope's historic district designation adds another layer. Altering facades, windows, stoops, or rooflines on contributing structures requires LPC approval. That affects conversion timelines and budgets, particularly when buyers envision changing window openings or adding exterior egress."}</p>
            <h3>{"HPD and DOB Records Review"}</h3>
            <p>{"Violation history directly affects marketability. Open HPD violations, especially those placing a building in the Alternative Enforcement Program, signal deferred maintenance and regulatory risk to buyers and lenders alike. Open DOB violations, stop-work orders, or unsafe/vacate orders can delay or prevent closing."}</p>
            <p>{"One question Stanley always encourages clients to investigate: whether any past alteration permits were filed with DOB, and whether completed work matches those permits. Unpermitted alterations, such as adding kitchens to rooming units or partitioning rooms without approval, create legal exposure that must be addressed before a property can be marketed or financed cleanly."}</p>
            <img src="/redesign-assets/hoods/park-slope-sro-2-3.png" alt={"SRO property purchase agreement in NYC with real estate investors completing transaction and signing documents"} className="nbhd-guide-img" loading="lazy" />
            <h3>{"Tenant Occupancy and Rent Stabilization"}</h3>
            <p>{"Occupied SROs require a different evaluation than vacant ones. If tenants hold occupancy agreements or leases, their rights under rent regulation laws affect what a new owner can do with the building. Rent stabilization status must be verified independently; it cannot be assumed based on current rent levels."}</p>
            <p>{"A Certificate of No Harassment may be required for SRO transactions where the owner plans to alter the number of units, add or remove kitchens or bathrooms, or change interior layouts. For SRO Multiple Dwellings, HPD must certify that no harassment of tenants occurred before DOB will accept permit applications. Properties in HPD's CONH Pilot Program face stricter documentation requirements and longer review periods."}</p>
            <h2>{"Park Slope SRO Financing and Investment Considerations"}</h2>
            <p>{"SRO financing requires lenders comfortable with income-property underwriting and regulatory complexity. Conventional mortgage lenders often decline to finance properties where actual use does not match the COO or where open violations remain unresolved."}</p>
            <p><strong>{"Common financing paths for Park Slope SROs:"}</strong></p>
            <ul className="nbhd-guide-list"><li><p><strong>{"DSCR loans."}</strong>{" Lenders evaluate debt service coverage relative to net rental income. These are the most common financing vehicle for stabilized SRO properties with documented rent rolls and legal occupancy. Loan-to-value ratios typically reach 70% to 80% for stabilized income properties."}</p></li><li><p><strong>{"Bridge and hard-money loans."}</strong>{" Available for properties requiring remediation or conversion, but at higher interest rates and stricter terms. Useful when the buyer plans to resolve violations, legalize units, or convert the property before refinancing into permanent financing."}</p></li><li><p><strong>{"FHA or state agency financing."}</strong>{" Possible only if the property meets all legal, safety, and occupancy requirements. Most SRO properties in Park Slope do not qualify without remediation."}</p></li></ul>
            <p>{"Investment strategy splits between two paths. Operating the building as a legal SRO or rooming house produces income valued through cap rates and gross rent multipliers. Converting to conventional apartments or a single-family home requires budgeting for permitting, architectural and engineering fees, LPC compliance (in the historic district), and potential CONH application. Renovation costs run higher in Park Slope's historic districts, where replacement materials and architectural details must match the original facade."}</p>
            <p>{"Specialized knowledge of zoning regulations is critical for SRO transactions. Most of Park Slope is zoned R6, with patches of R7A and R8B near Fourth Avenue. Zoning controls floor-area ratio, building height, and bulk, all of which constrain conversion plans."}</p>
            <h2>{"Park Slope Areas Served for SRO Transactions"}</h2>
            <p>{"Stanley works with SRO buyers and sellers across Park Slope's distinct sub-neighborhoods, each of which presents different housing stock, zoning, and historic-district considerations:"}</p>
            <ul className="nbhd-guide-list"><li><p><strong>{"Historic Park Slope:"}</strong>{" 7th Avenue corridor and Prospect Park West, where the densest concentration of landmark-designated brownstones affects renovation scope and timeline"}</p></li><li><p><strong>{"North Slope:"}</strong>{" Above 9th Street to Atlantic Avenue, including properties near the Barclays Center and transit hubs along Atlantic and Flatbush Avenues"}</p></li><li><p><strong>{"South Slope:"}</strong>{" Below 9th Street to 25th Street, where building stock transitions and zoning overlays shift closer to R7A in some blocks"}</p></li><li><p><strong>{"Gowanus border:"}</strong>{" The 4th Avenue corridor, where R8B zoning patches and proximity to Gowanus rezoning areas create different conversion possibilities"}</p></li></ul>
            <p>{"Park Slope features over 1,400 eateries and is known for its iconic brownstones, but for SRO transactions, what matters is block-level zoning, historic-district boundaries, and the specific regulatory history of each building; some buyers also weigh transit access and connectivity to Manhattan as part of that review."}</p>
            <h2>{"Frequently Asked Questions About Park Slope SRO Real Estate"}</h2>
            <FaqAccordion>
              <FaqItem question={"How is an SRO property valued differently from a regular Park Slope brownstone?"}>
              <p>{"SRO valuation depends on legal use, not layout or square footage. A building's COO establishes how many units exist legally and whether those units are apartments or rooming units. Income from legally permitted rooming units can be capitalized into value; income from unpermitted rooms cannot. Co-ops in Park Slope are priced between $575,000 and $1,695,000, and multi-family townhouses can exceed $6,000,000, but those figures reflect conventional legal use. An SRO's value must account for tenant status, regulatory history, open violations, financing availability, and what a buyer can realistically do with the property under its current and potential legal configuration."}</p>
              </FaqItem>
              <FaqItem question={"What records should I review before making an offer on a Park Slope SRO?"}>
              <p>{"Before making an offer, request or retrieve:"}</p>
              <ul className="nbhd-guide-list"><li><p>{"The current Certificate of Occupancy (legal unit count, unit types, kitchen and bathroom designations)"}</p></li><li><p>{"HPD registration and violation history (open violations, Alternative Enforcement Program status)"}</p></li><li><p>{"DOB records (alteration permits, stop-work orders, unsafe/vacate orders)"}</p></li><li><p>{"Tenant occupancy documentation (leases, occupancy agreements, duration of tenancy)"}</p></li><li><p>{"Rent stabilization status for each occupied unit"}</p></li><li><p>{"Historic district designation and any prior LPC applications or approvals"}</p></li><li><p>{"CONH history or eligibility if the building is classified as an SRO Multiple Dwelling"}</p></li></ul>
              </FaqItem>
              <FaqItem question={"Can I get financing for an SRO property in Park Slope?"}>
              <p>{"Yes, but through lenders experienced with income-property and SRO underwriting. Conventional residential lenders typically decline SRO properties. DSCR loans are the most common option for stabilized SRO buildings with documented income. Bridge and hard-money loans are available for properties requiring remediation. All lenders will require that the property's actual use matches its COO, that open violations are resolved or on a documented resolution path, and that rent rolls and tenant documentation are available."}</p>
              </FaqItem>
              <FaqItem question={"What are the risks of buying an occupied SRO in Park Slope?"}>
              <p>{"Occupied SROs carry tenant-protection obligations under NYC law. Tenants may hold rent-stabilized status. A Certificate of No Harassment may be required before any alteration permits are issued. If a buyer plans to convert the building, the CONH process can take months, and denial is possible. Rent regulation and occupancy restrictions limit how an owner can reposition the property. Stanley recommends that buyers work with qualified real estate attorneys to evaluate tenant rights and regulatory obligations before making an offer."}</p>
              </FaqItem>
              <FaqItem question={"How long does it take to convert an SRO in Park Slope's historic district?"}>
              <p>{"Timelines vary based on building condition, regulatory history, and scope of work. In the historic district, exterior alterations require LPC approval, which adds weeks to months depending on the scope. A CONH application, if required, can take several months. DOB permit review, plan approval, and construction follow. For a full SRO-to-apartment conversion in a landmark building, 18 to 36 months from initial filing to completion is a realistic range. Each property is different, and Stanley coordinates with architects and expediters to provide project-specific timelines."}</p>
              </FaqItem>
            </FaqAccordion>
            <h2>{"Get Expert SRO Guidance in Park Slope"}</h2>
            <p>{"Park Slope SRO transactions involve regulatory, legal, and financial layers that do not exist in conventional Brooklyn real estate deals. Whether you are evaluating an SRO for purchase, preparing one for sale, or assessing conversion potential, the first step is understanding the property's legal status, regulatory history, and market position."}</p>
            <p>{"Stanley Montfort provides personalized consultations for Park Slope SRO buyers and sellers. His experience across decades of Brooklyn real estate, combined with deep familiarity with HPD, DOB, LPC, and SRO-specific regulations, helps clients avoid costly regulatory surprises and make informed decisions."}</p>
            <p><strong>{"Phone:"}</strong>{" 1-646-970-1078  "}<strong>{"Email:"}</strong><a href={"mailto:sm@montfortre.com"} className="nbhd-guide-link"><span>{"[email protected]"}</span></a><strong>{"Address:"}</strong>{" 8 West 126th Street, New York NY 10027"}</p>
            <div className="nbhd-guide-ctas">
              <a href="https://calendly.com/montfort" className="nbhd-guide-link">Schedule Free Consultation</a>
              <a href="tel:+16469701078" className="nbhd-guide-link">Call For Information</a>
            </div>
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

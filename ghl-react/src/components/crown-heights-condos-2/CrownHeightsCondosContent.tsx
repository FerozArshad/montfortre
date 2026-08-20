import PromisesBar from "../shared/PromisesBar";
import ResourcesSection from "../shared/ResourcesSection";
import "../../styles/neighborhoods-page.css";
import "../../styles/crown-heights-condos-page.css";
import "../../styles/contact-section.css";


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

export default function CrownHeightsCondosContent() {
  return (
    <>
      <section className="nbhd-hero" data-screen-label="Service hero">
        <div className="nbhd-hero-ring" />
        <div className="nbhd-hero-inner">
          <div data-reveal="">
            <h1>Crown Heights Condos — Expert Guidance for Buyers, Sellers & Investors</h1>
            <p className="nbhd-hero-lead">
              We'll help you purchase the right Crown Heights condo by avoiding overpriced listings, unexpected HOA costs, and properties that don't fit your long-term goals.
            </p>
            <div className="nbhd-hero-ctas">
              <a href="tel:646-970-1078" className="nbhd-hero-tel">
                Call 1-(646)-970-1078
              </a>
              <a href="https://calendly.com/montfort" className="nbhd-hero-book">
                Schedule A Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      <PromisesBar variant="nbhd" />

      <section className="nbhd-intro" data-screen-label="Guide">
        <div className="nbhd-intro-inner">
          <div className="nbhd-intro-copy" data-reveal="">
            <h2>The Complete Guide to Buying Crown Heights Condos in Brooklyn</h2>
            <h2>Expert Crown Heights Brooklyn NY Condos Advisory Services</h2>
            <p>Crown Heights has become a hotspot for condo buyers as of 2026, and for good reason-few neighborhoods in Brooklyn offer this combination of cultural richness, transit access, and real estate value. But buying a condo here requires more than browsing listings. It requires someone who understands building finances, reserve funds, board governance, and the specific dynamics that separate a smart purchase from a costly mistake.</p>
            <p>I'm Stanley Montfort, and I've spent years helping buyers navigate the Brooklyn condominium market through MuvMuv Consulting. One of the first things I review with clients isn't the kitchen or the finishes—it's the building itself. I look at reserve funds, financial statements, pending assessments, and management quality because those details often determine whether a condo is a smart purchase or an expensive surprise.</p>
            <p>Whether you're a first-time buyer searching for your entry into Brooklyn real estate or an experienced investor evaluating rental yield, I provide personalized consultation that addresses your specific Crown Heights condo buying goals-from initial market analysis through closing day and beyond.</p>
            <hr className="nbhd-guide-rule" />
            <h2>Why Crown Heights Condos in Brooklyn NY Are Exceptional Investment Opportunities</h2>
            <p><a href="/crown-heights/" className="nbhd-guide-link">Crown Heights</a> occupies one of the most strategic positions in Brooklyn, NY. Buying a condo here offers a blend of historic charm and modern convenience that few neighborhoods can match, and the fundamentals supporting long-term value are strong.</p>
            <p><strong>Transportation access is outstanding.</strong> Proximity to transit lines like the A, C, 3, or 4 is important for buyers in Crown Heights, and the neighborhood delivers. The IRT Eastern Parkway lines (2, 3, 4, 5) run along Eastern Parkway, the Franklin Avenue Shuttle connects to the G, and the A/C lines serve the northern corridors. Most condos sit within a 5–10 minute walk of at least one subway station, making Manhattan commutes straightforward.</p>
            <p><strong>Prospect Park and cultural attractions are at your doorstep.</strong> Residents in Crown Heights enjoy proximity to <a href="https://www.prospectpark.org/" className="nbhd-guide-link">Prospect Park</a> and the Brooklyn Botanic Garden-two of Brooklyn's most valued amenities. Crown Heights is known for its cultural and dining scene along Franklin Avenue, where restaurants, cafes, and independent shops have created one of Brooklyn's most vibrant corridors. The neighborhood's Caribbean heritage, the Weeksville Heritage Center, and a growing arts community add layers of character you won't find in more homogeneous neighborhoods.</p>
            <p><strong>The price advantage is real.</strong> Compared to several nearby Brooklyn neighborhoods, Crown Heights often offers buyers a better balance between price, location, and long-term value. While every building is different, many buyers find they can purchase a larger or newer condo here without sacrificing access to transportation, parks, or neighborhood amenities.</p>
            <p>Crown Heights is highly walkable with easy access to local markets and grocery stores, and that walkability translates into daily quality of life that buyers consistently cite as a top reason they chose this neighborhood. Crown Heights appears attractive to first-time homeowners and investors alike, and the data supports both use cases.</p>
            <img src="/redesign-assets/hoods/crown-heights-condos-1.png" alt="The image depicts a picturesque tree-lined street in Crown Heights, Brooklyn, featuring charming brownstone buildings alongside modern Brooklyn NY condos under a clear blue sky. This residential area showcases the blend of historic architecture and contemporary real estate developments, ideal for those searching for homes in the vibrant Brooklyn market." className="nbhd-guide-img" loading="lazy" />
            <h2>Our Crown Heights Condo Buying Services</h2>
            <h3>First-Time Crown Heights Condo Buyers</h3>
            <p>One of the biggest mistakes I see first-time buyers make is assuming that all condos work the same way. In Crown Heights, you'll encounter everything from converted brownstones to ground-up new construction, and the ownership experience varies dramatically between them.</p>
            <p>I provide complete education on <a href="/buying-a-condo-in-nyc/" className="nbhd-guide-link">condo ownership</a> versus co-ops and rental apartments-covering what fee title ownership means, how common charges differ from co-op maintenance, and why financing requirements vary by property type. Crown Heights has a limited inventory of condos compared to co-ops in Brooklyn, which means understanding the distinction early saves time and prevents frustration during your search.</p>
            <p>My first-time buyer services include neighborhood orientation covering schools (Crown Heights has 33 public schools serving approximately 13,500 students, including high-performing options like Pathways in Technology Early College High School and Success Academy Crown Heights), shopping corridors, and transportation options. I also provide financing guidance and pre-approval assistance, connecting you with lenders who understand the specific requirements of Brooklyn NY condos.</p>
            <h3>Crown Heights Investment Property Buyers</h3>
            <p>Crown Heights condos show strong rental growth of 19.53% year-over-year as of 2026, with median rents around $3,750 per month. That kind of rental market performance makes the neighborhood compelling for investors-but only if you choose the right building.</p>
            <p>One question I always encourage investor-buyers to ask: what are the building's rental policies? Some condo boards restrict subletting or impose waiting periods before you can rent your unit. If your entire investment thesis depends on rental income, discovering those restrictions after closing is a serious problem.</p>
            <p>I provide detailed rental market analysis and cash flow projections, evaluate building rental policies and investment potential, and identify <a href="https://home4.nyc.gov/site/finance/property/landlords-coop-condo.page" className="nbhd-guide-link">tax abatement opportunities</a> that can meaningfully reduce your annual carrying costs. For qualifying condos in Crown Heights, the NYC Co-operative and Condominium Property Tax Abatement can reduce property taxes by 17.5% to 28.1%, depending on the building's average assessed unit value. Before purchasing, I also recommend using our <a href="/mortgage-calculator/" className="nbhd-guide-link">NYC Mortgage Calculator</a> to estimate your true monthly ownership costs.</p>
            <img src="/redesign-assets/hoods/crown-heights-condos-2.png" alt="Top condos available in Crown Heights Brooklyn with modern condominium buildings and historic brownstones in New York City" className="nbhd-guide-img" loading="lazy" />
            <h2>Top Crown Heights Condos for Sale Buildings to Consider</h2>
            <p>Crown Heights condos feature a mix of new luxury developments and renovated historic buildings. Many condos in Crown Heights have characteristics of both historic buildings and modern amenities, which creates a diverse inventory worth exploring. Here are buildings I frequently recommend clients consider:</p>
            <ol className="nbhd-guide-list"><li>
            <p><strong>Classon Avenue</strong> - Modern luxury building with rooftop terrace and fitness center; strong amenity package for the price point</p>
            </li><li>
            <p><strong>Park Place</strong> - New construction in the Weeksville area with contemporary finishes and thoughtful layouts</p>
            </li><li>
            <p><strong>Sterling Place</strong> - Boutique building offering private outdoor space, a premium feature in Brooklyn NY</p>
            </li><li>
            <p><strong>Saint Marks Avenue</strong> - Affordable new development with modern amenities; particularly strong for first-time buyers</p>
            </li><li>
            <p><strong>Pacific Street</strong> - Full-service building with doorman and parking; higher common charges but excellent convenience</p>
            </li><li>
            <p><strong>Washington Avenue</strong> - Luxury condominium with high-end finishes near the Franklin Avenue corridor</p>
            </li><li>
            <p><strong>Park Place</strong> - Mid-rise building with elevator and storage options; solid financials and well-managed</p>
            </li><li>
            <p><strong>Rogers Avenue</strong> - Value-oriented condo with good transportation access to the 2/5 lines</p>
            </li><li>
            <p><strong>Prospect Place</strong> - Contemporary building near Prospect Park; strong resale potential given location</p>
            </li><li>
            <p><strong>Classon Avenue</strong> - Renovated building with modern condo conversions that blend prewar character with updated systems</p>
            </li></ol>
            <p>One thing I always tell buyers: this list is a starting point, not a guarantee. When evaluating a Crown Heights condo building, I review the actual financial statements, reserve fund balances, and board meeting minutes before recommending any specific property. A building can look beautiful and still have thin reserves or pending special assessments that make it a risky purchase.</p>
            <hr className="nbhd-guide-rule" />
            <h2>Our Crown Heights Condo Buying Process</h2>
            <h3>Step 1: Market Analysis and Budget Planning</h3>
            <p>We begin with a comprehensive review of current Crown Heights condo market conditions. There are currently <a href="https://www.realtor.com/local/market/new-york/brooklyn/crown-heights" className="nbhd-guide-link">171 homes for sale in Crown Heights</a>, with 66 condos listed for sale and 15 co-ops listed. In the past month, 18 condos were sold in Crown Heights, alongside 9 homes overall-giving us clear market velocity data to work with.</p>
            <p>Prices for 1-bedroom condos in Crown Heights typically range from $600,000 to $700,000, while 2-bedrooms command significantly higher prices, often exceeding $1.25 million. Median listing prices in Crown Heights are rising by roughly 1.01% year-over-year, though the market has softened slightly with homes taking longer to sell-median days on market have increased by approximately 22%.</p>
            <p>A common mistake I see buyers make is focusing only on the purchase price without fully understanding monthly carrying costs. I provide a detailed analysis that includes common charges, property taxes (with and without abatement), utilities, insurance, and the likelihood of future special assessments. Sometimes a condo listed at $50,000 less than a competing unit actually costs more per month once you account for higher common charges and weaker tax abatement status.</p>
            <h3>Step 2: Building Due Diligence and Financial Review</h3>
            <p>This is where my process differs significantly from most real estate professionals. One of the first things I review when clients ask about Crown Heights condos is how transparent the building's board and management are. If I can't easily obtain audited financials or reserve studies, I raise red flags immediately.</p>
            <p>New York currently imposes no statutory requirement that condo buildings maintain minimum reserve fund levels-there's no mandated reserve study and no minimum percentage of replacement cost that must be funded. That means the only protection buyers have is their own due diligence.</p>
            <p>I examine the last 2–3 years of audited financial statements, focusing on income versus expenses, reserve fund levels, how much of the reserve is in liquid assets, and whether any special assessments have been levied recently. Buildings with reserves less than approximately $1,000 per unit-especially those with aging mechanical systems-are a concern. Prioritize condos with healthy reserve funds and low common charges when buying; it's the single most important piece of information most buyers overlook.</p>
            <p>I also review building management quality: who manages operations, their responsiveness, any outstanding code violations, litigation history, and how proactively the board addresses maintenance issues. Delays or evasiveness in providing these documents often signals weak building financial health or poor governance.</p>
            <h3>Step 3: Property Evaluation and Negotiation</h3>
            <p>Competition for condos in Crown Heights remains healthy, but buyers have more negotiating room than they did a year ago. Active for-sale listings are relatively low in Crown Heights, creating a competitive market, yet the increase in days on market means well-informed buyers can negotiate effectively.</p>
            <p>I conduct individual unit inspections focusing on condition, layout, light, noise, and value relative to comparable recent sales. I prepare a competitive market analysis using <a href="https://www.propertyshark.com/mason/market-trends/residential/nyc/brooklyn/crown-heights" className="nbhd-guide-link">PropertyShark data</a> and recent closing information to determine fair offer price, and then negotiate strategically on your behalf-including closing cost credits and possession terms.</p>
            <p>Crown Heights condos can sell quickly when priced appropriately due to limited inventory, so buyers in Crown Heights are encouraged to act quickly on competitively priced listings. Having your financial review and pre-approval completed before making an offer is essential.</p>
            <h3>Step 4: Contract and Closing Support</h3>
            <p>I coordinate the complete purchase process: contract review with your attorney, condo board application preparation, lender coordination, and closing logistics. Unlike co-ops, condo purchases don't require board approval of the buyer, but the board does have a right of first refusal in most buildings-and managing that timeline matters.</p>
            <p>For condos, expect down payments of 20–25% as standard. Lenders scrutinize the building's financial metrics-reserve fund health, outstanding debt, and litigation-as part of their underwriting. I help ensure those building-level requirements don't derail your financing.</p>
            <img src="/redesign-assets/hoods/crown-heights-condos-3.png" alt="An aerial view captures the charming brownstone rooftops of Brooklyn, with lush green trees and a park visible in the background, showcasing the vibrant community of Crown Heights. This picturesque scene reflects the appeal of Brooklyn NY condos and the real estate market in this iconic neighborhood." className="nbhd-guide-img" loading="lazy" />
            <h2>Crown Heights Condo Success Stories</h2>
            <blockquote className="nbhd-guide-quote">
            <p><strong><em>"Stanley helped us find a two-bedroom in a boutique Crown Heights building that was under our budget by $40,000. More importantly, he identified that our second-choice building had a pending special assessment of $15,000 per unit that we would have walked right into. That kind of due diligence is guaranteed to save you money."</em></strong></p>
            <p><strong><em>- Marcus and Danielle T., First-Time Buyers</em></strong></p>
            </blockquote>
            <blockquote className="nbhd-guide-quote">
            <p><strong><em>"I purchased a one-bedroom as a rental investment, and Stanley's cash flow analysis was exactly right. He flagged buildings with subletting restrictions before I wasted time on them and found a property with strong rental demand near the Franklin Avenue corridor. The rental income has exceeded projections."</em></strong></p>
            <p><strong><em>- Priya S., Investment Buyer</em></strong></p>
            </blockquote>
            <blockquote className="nbhd-guide-quote">
            <p><strong><em>"We almost bought a condo in a building with impressive amenities-doorman, gym, rooftop-but Stanley showed us that the common charges were eating into our equity, and the reserve fund was dangerously low. He redirected us to a well-managed building with lower carrying costs and a board that actually budgets for the future. Best advice we ever received."</em></strong></p>
            <p><strong><em>- Jonathan K., Relocating from Manhattan</em></strong></p>
            </blockquote>
            <blockquote className="nbhd-guide-quote">
            <p><strong><em>"As a first-time buyer in a competitive Crown Heights market, I needed someone who could move fast and explain everything along the way. Stanley walked me through every document, every financial statement, and every negotiation point. I closed in under 60 days and felt confident the entire time."</em></strong></p>
            <p><strong><em>- Alexis R., First-Time Homeowner</em></strong></p>
            </blockquote>
            <hr className="nbhd-guide-rule" />
            <h2>Frequently Asked Questions About Crown Heights Condos</h2>
            <h3>What are typical monthly carrying costs for Crown Heights condos?</h3>
            <p>Monthly carrying costs for Crown Heights condos generally include three components: common charges, property taxes, and utilities. Common charges typically range from $350 to $800 per month depending on building size, amenity level, and age. Buildings with doormen, elevators, fitness centers, and rooftop terraces will sit at the higher end-sometimes exceeding $1,000 monthly for larger units.</p>
            <p>Property taxes vary significantly based on the unit's assessed value and whether the building participates in NYC's <a href="https://www.nyc.gov/site/finance/property/co-op-condo-abatement-faqs.page" className="nbhd-guide-link">Co-op/Condo Tax Abatement program</a>. For qualifying buildings with average assessed unit values above $60,001, the abatement is approximately 17.5%. For buildings with lower average assessed values (under $50,000), the abatement can reach 28.1%. One thing I always confirm is whether the building is actually applying for this abatement annually-some don't, and owners miss thousands in potential savings.</p>
            <p>Many buyers assume that newer buildings automatically have lower carrying costs, but the reverse is often true. A building with a doorman, gym, parking, and rooftop terrace may look luxurious, but if common charges are high, taxes are substantial, and reserves are thin, your monthly outlay can erode total return significantly.</p>
            <h3>How do Crown Heights condos compare to co-ops and brownstones?</h3>
            <p>Condominiums grant fee title ownership of your individual unit plus a proportional share of common elements. Co-ops involve purchasing shares in a corporation that owns the building-you don't technically own your apartment, you own stock. Brownstones are private townhouses with entirely different tax, maintenance, and financing structures.</p>
            FeatureCondoCo-opBrownstone<strong>Ownership Type</strong>Fee title (deed)Shares in a corporationFee title (entire building)<strong>Board Approval for Purchase</strong>Right of first refusal onlyFull board approval requiredNone<strong>Subletting</strong>Generally permittedOften restrictedFully flexible<strong>Down Payment</strong>20–25% typical20–50% depending on the building20–30% typical<strong>Monthly Costs</strong>Common charges + property taxesMaintenance (includes property taxes)Owner is responsible for all costs<strong>Financing</strong>Standard mortgageCo-op loan; building must be approvedStandard mortgage
            <p>Crown Heights has a limited inventory of condos compared to co-ops in Brooklyn, with only <a href="https://www.homes.com/brooklyn-ny/crown-heights-neighborhood/condos-for-sale/" className="nbhd-guide-link">66 condos currently listed for sale</a> versus a larger co-op inventory. That scarcity can support stronger price appreciation for condos over time, but it also means fewer options during your search.</p>
            <h3>What should I look for in Crown Heights condo building finances?</h3>
            <p>Crown Heights buyers should assess the financial health of the condo association before buying-this is non-negotiable in my practice. Here's what I review:</p>
            <ul className="nbhd-guide-list"><li>
            <p><strong>Reserve fund balance:</strong> How much cash does the building have set aside for major capital work (roof, facade, elevator, boiler)? Buildings with reserves below roughly $1,000 per unit and aging infrastructure are red flags.</p>
            </li><li>
            <p><strong>Special assessment history:</strong> Have assessments been levied in the past 3–5 years? How large were they? Were they communicated transparently?</p>
            </li><li>
            <p><strong>Income vs. expenses trend:</strong> Is the building running a surplus or deficit? Chronic deficits mean common charges will likely increase.</p>
            </li><li>
            <p><strong>Capital improvement plans:</strong> Does the board have an engineer's reserve study? Are major projects planned? What's the funding strategy?</p>
            </li><li>
            <p><strong>Management quality:</strong> Is the building professionally managed or self-managed? What's the litigation history? Any outstanding city code violations?</p>
            </li></ul>
            <p>Many buyers assume that older buildings mean more charm, but what they don't budget for is the deferred maintenance-roof work, facade repairs, elevator modernization, and compliance with regulations like <a href="https://www.nyc.gov/site/sustainablebuildings/ll97/local-law-97.page" className="nbhd-guide-link">Local Law 97</a> for carbon emissions. Those costs ultimately land on unit owners through assessments or common charge increases.</p>
            <h3>Are Crown Heights condos good rental investments?</h3>
            <p>The rental market data is compelling. Crown Heights condos show strong rental growth of 19.53% year-over-year as of 2026, with median monthly rents around $3,750. With prices for 1-bedroom condos in the $600,000–$700,000 range, the rent-to-price ratio can work for investors-especially in buildings with favorable tax abatement status and reasonable common charges.</p>
            <p>However, I always caution investor-buyers to verify three things before purchasing:</p>
            <ol className="nbhd-guide-list"><li>
            <p><strong>Building rental policies.</strong> Some condo associations restrict subletting or impose owner-occupancy requirements for a period after purchase. This information is in the offering plan and house rules-request them early.</p>
            </li><li>
            <p><strong>Tax implications.</strong> If you're renting the unit, you won't qualify for the owner-occupied co-op/condo tax abatement, which can add several thousand dollars annually to your carrying costs.</p>
            </li><li>
            <p><strong>Competitive supply.</strong> The <a href="https://www.nyc.gov/assets/planning/download/pdf/plans/crown-heights-west/crown_heights_west.pdf" className="nbhd-guide-link">Crown Heights West Rezoning</a> could bring significant new supply to certain corridors, including proposals like the 1550 Bedford Avenue development with approximately 250 units. More supply could moderate rent growth over time.</p>
            </li></ol>
            <p>When I help clients evaluate rental investments, I compare effective cost-purchase price plus carrying costs plus anticipated assessments-rather than just sticker price. Sometimes an older building with strong financials and stable common charges outperforms a flashy new development once you run the numbers over 5–10 years.</p>
            <p>Crown Heights has a variety of condos available for purchase, but the best investment properties combine strong locations (near transit and Franklin Avenue), well-managed buildings with healthy reserves, and units that attract the tenant profile this neighborhood draws-young professionals, families, and creative workers who value walkability and cultural access.</p>
            <hr className="nbhd-guide-rule" />
            <h2>Schedule Your Crown Heights Condo Consultation Today</h2>
            <p>The Crown Heights condo market rewards informed buyers. With 66 condos for sale and 18 condos sold just last month, inventory moves-and the difference between a strong purchase and a costly mistake often comes down to the quality of your due diligence.</p>
            <p><a href="/about-us/" className="nbhd-guide-link">I help buyers</a> evaluate Crown Heights condo opportunities with the depth and rigor this market demands. From building financial analysis to negotiation strategy, I provide expert guidance throughout the entire buying process.</p>
            <p><strong>Ready to start your search for condos for sale in Crown Heights?<br />Phone:</strong> 1-646-970-1078                 <strong>Email:</strong><a href="mailto:sm@montfortre.com" className="nbhd-guide-link"><u>sm@montfortre.com</u></a></p>
            <p>Every consultation begins with understanding your goals-whether that's finding your first home in Brooklyn, NY, building a real estate investment portfolio, or relocating to one of Brooklyn's most dynamic neighborhoods. Let's find the right Crown Heights condo for you.</p>
            <a href="https://calendly.com/montfort" className="nbhd-guide-link">Schedule Free Consultation</a><a href="tel:646-970-1078" className="nbhd-guide-link">Call For Information</a>
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

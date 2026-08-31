import HomeValuationTool from "./HomeValuationTool";
import PromisesBar from "../shared/PromisesBar";
import ResourcesSection from "../shared/ResourcesSection";
import "../../styles/two-family-page.css";
import "../../styles/home-valuation-page.css";
import "../../styles/contact-section.css";
import { FaqAccordion, FaqItem } from "../shared/FaqAccordion";
import HeroGoogleRating from "../shared/HeroGoogleRating";

const RELATED_SERVICES = [
  {
    imageHref: "/nyc-condo-free-home-valuation/",
    learnHref: "/nyc-co-op-free-home-valuation/",
    image: "/redesign-assets/services/nyc-condo-free-home-valuation.png",
    alt: "NYC condo free home valuation",
    title: "NYC condo free home valuation",
    copy: "Accurate pricing insights, market expertise, and condo valuation guidance.",
  },
  {
    imageHref: "/nyc-co-op-free-home-valuation/",
    learnHref: "/nyc-co-op-free-home-valuation/",
    image: "/redesign-assets/services/nyc-co-op-free-home-valuation.png",
    alt: "NYC co-op free home valuation",
    title: "NYC co-op free home valuation",
    copy: "Board-aware pricing, market insights, and co-op valuation expertise.",
  },
  {
    imageHref: "/nyc-brownstone-free-home-valuation/",
    learnHref: "/nyc-sro-free-home-valuation/",
    image: "/redesign-assets/services/nyc-brownstone-free-home-valuation.png",
    alt: "NYC brownstone free home valuation",
    title: "NYC brownstone free home valuation",
    copy: "Historic property expertise, market analysis, and accurate valuation.",
  },
  {
    imageHref: "/nyc-sro-free-home-valuation/",
    learnHref: "/nyc-brownstone-free-home-valuation/",
    image: "/redesign-assets/services/nyc-sro-free-home-valuation.png",
    alt: "NYC SRO free home valuation",
    title: "NYC SRO free home valuation",
    copy: "Regulatory expertise, investment analysis, and accurate property valuation.",
  },
] as const;

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

export default function HomeValuationContent() {
  return (
    <>
      <PromisesBar variant="light" />
      <section className="tf-hero" data-screen-label="Service hero">
        <div className="tf-hero-ring" />
        <div className="tf-hero-inner">
          <div data-reveal="">
            <h1>FREE HOME VALUATION</h1>
            <p className="tf-hero-lead">Generate a free home estimate in just three simple steps</p>
            <HomeValuationTool />
          </div>
          <div className="tf-hero-media" data-reveal="">
            <div className="tf-hero-frame">
              <img src="/redesign-assets/services/home-valuation.webp" alt="NYC home valuation" width="640" height="512" loading="eager" />
            </div>
            <HeroGoogleRating prefix="tf" />
          </div>
        </div>
      </section>

      <section className="tf-guide" data-screen-label="Guide">
        <div className="tf-guide-inner">
          <div data-reveal="">
            <h1>Free Home Value Estimator: Guide &amp; Consultation Services</h1>
            <p>
              Get instant property insights with our free home value estimator tool, and connect with a real estate
              expert for personalized advice.
            </p>
            <h2>Introduction: What This Guide Covers and Why It Matters</h2>
            <p>
              Are you curious about your home’s value? A free home value estimator can give you a quick idea of your
              home’s worth by using recent sales data, property details, and market trends to determine an estimated
              value. However, many factors—such as location, home improvements, and property condition—can affect the
              accuracy of these estimates. The accuracy of online home value estimators can vary greatly, and they are
              not a substitute for a professional appraisal, which considers a wider range of factors for a more precise
              valuation. Consulting a local real estate agent can provide a more accurate and personalized assessment,
              as they understand neighborhood-specific influences that online tools may overlook. Whether you’re a
              homeowner, seller, or real estate investor, understanding{" "}
              <a href="/whats-my-home-worth/" className="tf-guide-link">
                how home value estimation works
              </a>{" "}
              is crucial for making informed decisions—whether you’re planning to sell, refinance, or invest in
              property. By learning how these tools work and when to seek expert advice, you can maximize your
              property’s potential and avoid costly mistakes.
            </p>
            <p>
              This guide is designed for homeowners, sellers, and real estate investors who want to understand the ins
              and outs of home value estimation. You’ll learn how free home value estimator tools work, what their
              limitations are, and how expert consultation can bridge the gap between automated estimates and real
              market value. Understanding your home’s value is essential for making smart decisions about selling,
              refinancing, or investing in property.
            </p>
            <div className="tf-guide-rule" />
            <h2>Expert Home Value Guidance: Get the Most Out of Your Home Value Estimator</h2>
            <p>
              Free home value estimator tools are great for quickly getting an idea of what your home might be worth.
              These tools use Automated Valuation Models (AVMs), which analyze public data to provide a quick estimated
              value. The estimated value is based on available data such as recent sales, property details, and local
              market trends, but may not account for many factors like recent home improvements or unique features.
              User-editable property details can enhance the accuracy of AVM estimates, but even then, these tools are
              only as good as the data they use. And that data is often limited to just a few million points—not exactly
              a comprehensive picture of your home’s value.
            </p>
            <p>
              While online home valuation tools crunch millions of transactions and home records to spit out an estimate
              of your home’s value in seconds, they can miss some really important stuff. Automated Valuation Models
              (AVMs) analyze public data to provide quick home value estimates, but they cannot assess interior
              conditions, home improvements, or unique property features. Many factors—such as property condition,
              renovations, location, and current market trends—can influence your home’s value, and online estimators
              may not capture them all.
            </p>
            <div className="tf-fig">
              <img
                src="/redesign-assets/services/home-valuation-process.png"
                alt="Real estate home valuation and property appraisal process with house inspection and market analysis concept for estimating home value"
                loading="lazy"
              />
            </div>
            <p>
              <strong>Get Your Free Consultation Today and Get a Real Answer!</strong>
            </p>
            <p>
              When it comes to figuring out what your home’s really worth, you want to be talking to someone who knows
              what they’re doing—like Stanley Montfort. As a local real estate expert, Stanley can spot things that
              algorithms just can’t—like recent renovations, neighborhood trends that aren’t on anyone’s radar, and
              local market conditions that are driving prices up or down.
            </p>
            <p>
              Your home’s value is largely influenced by supply and demand. When there are more buyers out there than
              there are homes to buy, prices tend to rise because everyone’s competing with each other. When you put the
              data from those free estimator tools together with Stanley’s expert eye, you get a much more accurate
              picture of your home’s value that takes into account what’s really going on in your local market.
            </p>
            <p>
              Keep in mind that even the best home value estimates are updated regularly but aren’t a guarantee of the
              final sale price.
            </p>
            <div className="tf-guide-rule" />
            <p>
              All estimates are provided without any promises of accuracy and you should not rely solely on them as a
              substitute for professional advice.
            </p>
            <h2>The Hidden Problems with Free Home Value Estimators - and Why You Need Expert Insight</h2>
            <p>
              Free home value estimators might seem like a no-brainer for getting a quick idea of what your home is
              worth—but the truth is, they can be pretty misleading. They rely too heavily on public records, MLS data,
              and automated algorithms—which can lead to some pretty big errors for a few reasons:
            </p>
            <ul className="tf-list">
              <li>
                <span className="tf-dot" />
                <strong>Unique Features Just Don’t Show Up:</strong> Estimators can’t really account for recent
                renovations, the condition your home’s interior is in, or unique upgrades that really add value—but
                aren’t reflected in public records. AVMs can give you a rough idea of your home’s value, but they’re not
                going to be able to give you a good idea of what your home’s really like on the inside.
              </li>
              <li>
                <span className="tf-dot" />
                <strong>Outdated or Inaccurate Records:</strong> Public and tax records can be out of date or
                incomplete, especially in places where sale prices aren’t publicly disclosed. This can really mess with
                your estimate.
              </li>
              <li>
                <span className="tf-dot" />
                <strong>Algorithms Just Can’t Cut It:</strong> Automated Valuation Models (AVMs) can crunch a ton of
                data to give you a quick home value estimate—but they use broad market data and comparable sales, and
                really struggle to get a sense of what’s going on in your local market. Automated Valuation Models
                (AVMs) analyze public data to provide quick home value estimates, but they cannot assess interior
                conditions or unique property features.
              </li>
              <li>
                <span className="tf-dot" />
                <strong>Different Tools Give Different Answers:</strong> Sometimes you’ll get different estimates for
                the same property from different tools—which is just confusing without a human to interpret it for you.
              </li>
              <li>
                <span className="tf-dot" />
                <strong>No Actual Inspection Occurs:</strong> Unlike a human appraiser or real estate agent, online
                tools can’t actually see what your home looks like on the inside or how it looks from the curb—which can
                really affect its value.
              </li>
            </ul>
            <p>
              The estimated value you receive from online tools is a general estimate based on available data, and
              should always be supplemented with professional insight. Local real estate agents often conduct more
              precise valuations through Comparative Market Analyses (CMA), taking into account recent comparable sales
              and neighborhood-specific factors. The most accurate home valuations are performed by licensed
              professionals who can consider all the unique aspects affecting your specific property.
            </p>
            <p>
              Because of all these limitations, working with Stanley Montfort is really the best way to get an accurate
              idea of what your home’s worth. By editing in your own details, you can get a more accurate estimate from
              AVMs, and it’s also super helpful to review the history of past sales and valuations for your property.
            </p>
            <p>
              Stanley brings a ton of local market knowledge and can really evaluate your home’s unique features in
              context. He can help you navigate the different estimates you get from different tools and give you a
              realistic understanding of what your home’s really worth.
            </p>
            <p>
              Getting some guidance from an expert bridges the gap between raw data and what the real value of your
              property is, so you don’t end up relying solely on numbers that might not be entirely accurate.
            </p>
            <h2>Our Home Value Estimation Services</h2>
            <h3>Residential Property Valuations</h3>
            <p>
              Stanley Montfort is an expert in guiding condo, co-op, and brownstone owners in Manhattan and Brooklyn. He
              knows all about the unique challenges that come with trying to estimate the value of these types of
              properties in these neighborhoods, where a home&apos;s market and location are key factors in determining
              value.
            </p>
            <p>
              For example, when trying to figure out the value of a Manhattan condo or Brooklyn brownstone, Stanley
              brings that estimator data together with his knowledge of what recent neighborhood sales, building
              amenities, and unique property features are worth. He also analyzes nearby homes as comparables to refine
              the estimate, taking into account how local trends and sales history impact your home’s market value. This
              approach helps refine the online estimate and gives you a more accurate picture of your home’s value
              that’s specific to your property.
            </p>
            <p>
              Stanley’s personalized consultation focuses on helping people understand what the data really means for
              their specific property in these urban areas where estimator errors can be really significant due to
              complex ownership arrangements and fluctuating market trends.
            </p>
            <h3>Investment Property Assessments for 2-4 Unit Multifamily Properties in Manhattan and Brooklyn</h3>
            <p>
              When you’re a real estate investor specializing in 2-4 unit multifamily properties in Manhattan and
              Brooklyn, you need some serious expertise to give you a really accurate picture of their value. The
              estimated value of investment properties is influenced by many factors, including recent home
              improvements, property condition, and current market trends. Stanley Montfort offers expert valuation
              services focused specifically on these kinds of properties—because they have unique market dynamics and
              investment considerations that just can’t be captured with generic home value estimates.
            </p>
            <p>
              His approach includes a really detailed analysis of rental income potential, occupancy trends, and local
              market demand for these kinds of buildings. Stanley analyzes recent sales of comparable properties in
              targeted neighborhoods and takes broader economic indicators like interest rate shifts, zoning changes,
              and employment patterns into account.
            </p>
            <p>
              By hooking up Estimator data with market insights, Stanley helps investors make the smartest decisions
              about when to snap up a property, how to spread their portfolio risk, and which assets to hang onto in
              Manhattan and Brooklyn’s cutthroat multifamily markets. The free home value estimator tool is also useful
              for monitoring today&apos;s market conditions, helping investors stay informed about shifts in property
              values.
            </p>
            <h2>Top 10 Free Home Value Estimation Tools to Use in 2026</h2>
            <p>
              To estimate your home value, enter your address into one of these online home value estimator tools. Each
              home value estimator tool calculates an estimate based on available data and recent sales in your area.
              User-editable property details can enhance the accuracy of these AVM (Automated Valuation Model)
              estimates.
            </p>
            <ol className="tf-olist">
              <li>
                <strong>Zillow Zestimate:</strong>
                <a href="https://www.zillow.com/zestimate/" className="tf-guide-link">
                  The most well-known home value estimator tool
                </a>
                , covering around 104-116 million properties with automated updates many times a week. For on-market
                homes, Zestimate has a median error rate of just 1.83%. However, accuracy drops for off-market
                properties, with error rates far worse than 7%.
              </li>
              <li>
                <strong>Redfin Estimate:</strong> A home value estimator tool that uses direct access to{" "}
                <a href="https://www.redfin.com/redfin-estimate" className="tf-guide-link">
                  MLS home pricing data
                </a>{" "}
                with an on-market median error rate of 1.9-2.1%—among the most accurate available for active listings.
                Redfin tends to do a lot better in hot markets because it uses local MLS data.
              </li>
              <li>
                <strong>Property Estimate:</strong> A home value estimator tool powered by Collateral Analytics with a
                ton of neighborhood insights and market trend data beyond just valuations.
              </li>
              <li>
                <strong>Chase Home Value Estimator:</strong> A bank-grade home value estimator tool built for mortgage
                and refinance decisions based on your{" "}
                <a href="https://www.bankrate.com/home-equity/what-is-home-equity/" className="tf-guide-link">
                  home equity and loan-to-value ratio
                </a>
                , and it integrates pretty seamlessly with home loan options.
              </li>
              <li>
                <strong>Eppraisal Home Value Tool:</strong> A professional home value estimator tool with confidence
                scores that give you an idea of how sure the model is about your home’s value.
              </li>
              <li>
                <strong>HomeLight Home Estimator:</strong> An agent-backed home value estimator tool that combines
                algorithmic estimates with local market expertise from actual real estate agents.
              </li>
              <li>
                <strong>Rocket Homes Estimate:</strong> A home value estimator tool that integrates directly with
                mortgage pre-approval processes, making it super useful when exploring options for that new home
                purchase.
              </li>
              <li>
                <strong>Bank of America Home Value Estimator:</strong> A comprehensive home value estimator tool
                providing property reports with credit and loan context for existing customers.
              </li>
              <li>
                <strong>Trulia Property Estimate:</strong> A neighborhood-focused home value estimator tool that
                incorporates lifestyle data like walkability, school ratings, and local amenities.
              </li>
              <li>
                <strong>StreetEasy:</strong> A home value estimator tool that is usually a go-to in the NYC metropolitan
                area for reliability.
              </li>
              <li>
                <strong>RedfinNow Instant Offers:</strong> A home value estimator tool providing cash offer estimates
                for sellers thinking about quick sales—useful for understanding the trade-off between speed and maximum
                sale price.
              </li>
            </ol>
            <h2>How We Tackle Home Value Estimation</h2>
            <h3>Step 1: Initial Property Scoop</h3>
            <p>
              Determining the value of your home involves analyzing many factors, such as location, nearby homes, and
              recent home improvements. Stanley takes a close look at your property details including square footage,
              lot size, home upgrades, and recent renovations that algorithms might miss. He analyzes neighborhood
              comparables and recent sales within a half-mile of your home address, finding the most relevant similar
              homes for comparison.
            </p>
            <p>
              He also gets a handle on the current market conditions and seasonal trends affecting property values in
              your area. Note that sale prices in your neighborhood can follow patterns that differ from regional
              averages—Stanley factors that in.
            </p>
            <h3>Step 2: Bringing It All Together</h3>
            <div className="tf-fig">
              <img
                src="/redesign-assets/services/home-valuation-checklist.png"
                alt="Home valuation process showing property information review checklist and house inspection for real estate appraisal and accurate home value estimate"
                loading="lazy"
              />
            </div>
            <p>
              Stanley gives you the lowdown on estimate variations and confidence levels across multiple tools. The
              estimated value from different free home value estimator tools can vary significantly, so connecting with
              a local real estate agent can help you interpret these differences and understand which estimate best
              reflects your property’s true worth. When Zillow says $420,000 and Redfin says $395,000, he explains
              what’s going on with the discrepancy and which number is more likely to be your home’s current value.
            </p>
            <p>
              These free home value estimator tools often get it wrong because they rely so heavily on limited public
              data and automated algorithms that just can’t capture the unique features of your home, or the current
              condition of your property. They may not pick up on local market nuances either, or recent neighborhood
              developments that can swing home values.
            </p>
            <p>
              Stanley brings a realtor’s perspective, with boots-on-the-ground experience, giving you insights that
              online tools just don’t. He assesses the good stuff like recent renovations, curb appeal, and local buyer
              demand first-hand, giving you a more accurate and realistic picture of what your house is worth. This
              helps you understand the real value beyond just numbers, and makes informed decisions about selling,
              refinancing or leveraging your home equity.
            </p>
            <h3>Step 3: Staying on Top of It All</h3>
            <p>
              Property values don’t stay the same. Monitoring your home&apos;s value in today&apos;s market is essential
              for making informed decisions about refinancing, selling, or investing further. Stanley sets up bi-annual
              value checks to keep an eye on market changes affecting your investment. You’ll get alerts when property
              values jump up or down significantly—especially useful when you’re thinking about a refinance or sale.
            </p>
            <p>
              He gives you updated advice based on changing market conditions, making sure the information stays
              relevant as your neighborhood evolves. Additionally, making improvements—whether major renovations or
              minor updates—can help maintain or even increase your home&apos;s value over time.
            </p>
            <h2>What Our Customers Say</h2>
            <blockquote className="tf-quote">
              <p>
                <strong>
                  <em>
                    “Zillow said $1,485,000, but Stanley explained how making improvements like our recent kitchen
                    renovation and cooling updates significantly impacted our estimated value, bringing the real value
                    closer to $2,000,000. We sold for way more than we thought we would.”
                  </em>
                </strong>
                <br />
                <strong>
                  <em>– Sarah M., Home Seller</em>
                </strong>
              </p>
            </blockquote>
            <blockquote className="tf-quote">
              <p>
                <strong>
                  <em>
                    “I was planning to refinance based on online estimates but connecting with Stanley, a local real
                    estate agent, helped determine my property was worth $400,000 more than the tools said. The higher
                    appraisal gave me better loan terms and saved me thousands in interest.”
                  </em>
                </strong>
                <br />
                <strong>
                  <em>– David K., Homeowner &amp; Investor</em>
                </strong>
              </p>
            </blockquote>
            <blockquote className="tf-quote">
              <p>
                <strong>
                  <em>
                    “As a first-time seller I didn’t know which estimator to trust. Stanley’s guidance helped me connect
                    with a local realtor to determine the most accurate value and price my house properly—we had
                    multiple offers within a week!”
                  </em>
                </strong>
                <br />
                <strong>
                  <em>– Maria L., First-Time Seller</em>
                </strong>
              </p>
            </blockquote>
            <div className="tf-guide-rule" />
            <h2>Frequently Asked Questions</h2>
            <FaqAccordion>
              <FaqItem question={<>How Accurate is a Free Home Value Estimator Compared to a Professional Appraisal?</>}>
              <p>
                Free home value estimator tools provide an estimated value based on recent sales, property details, and
                local market trends. For off-market properties, these tools usually show a 5-10% swing from actual market
                value, while on-market homes tend to be more accurate, often within 2-3%. For example, Zillow&apos;s
                Zestimate has a median error rate of 1.83% for on-market homes. However, it&apos;s important to remember
                that the estimated value from online tools is a general estimate and should be supplemented with
                professional insight for a more precise valuation. A professional appraisal, on the other hand, can get it
                spot on 2-5% of the time because an appraiser actually goes out and inspects the property and can take
                into account the condition, how well the place has been finished, and any unique features that an
                algorithm might miss.
              </p>
              <p>
                But accuracy will depend on any number of factors like how much data is available in your area, how
                recently homes nearby have sold, the uniqueness of your place, and whether you’re in a state that
                discloses prices or not. Homes in suburban neighbourhoods with lots of sales will usually get a more
                accurate estimate than a rural property or one with a really unusual architecture.
              </p>
              </FaqItem>
              <FaqItem question={<>Which Free Home Value Estimator is the Most Reliable in 2026?</>}>
              <p>
                On-market properties are usually easiest for free home value estimators to get right, and Redfin Estimate
                comes out on top with an error rate of around 1.9-2.1% because of its direct access to the MLS. Zillow
                Zestimate is second, with an error rate of about 2.4% for active listings. But for off-market homes, both
                of these tools tend to be way off—we are talking 6.5-7.8% error on average.
              </p>
              <p>
                Where you live and what kind of home you have also makes a big difference in how accurate the estimates
                are. In really busy areas, where lots of homes are sold, the estimates will be way more accurate. To
                estimate home value more accurately, search multiple free home value estimator tools and compare their
                results. However, connecting with a local real estate agent will provide the most precise and personalized
                estimate, as a local expert can account for neighborhood-specific factors that online tools may miss.
              </p>
              </FaqItem>
              <FaqItem question={<>When Should I Just Get a Professional Appraisal?</>}>
              <div className="tf-fig">
                <img
                  src="/redesign-assets/services/home-valuation-appraisal.png"
                  alt="Professional home appraisal with real estate appraiser completing property valuation report inside residential home"
                  loading="lazy"
                />
              </div>
              <p>
                You’ll need a professional appraisal, or it will be strongly recommended for things like mortgage
                applications, refinancing, divorce settlements, estate planning, property tax disputes, and any other
                situation where the value of a property is in dispute. Banks and lenders are pretty strict about this—they
                won’t accept a Zestimate as a home loan decision.
              </p>
              <p>
                The most accurate home valuations are performed by licensed professionals who can account for the many
                factors that affect a specific property’s value. These factors include property condition, recent
                renovations, location, and current market trends—variables that online estimators simply cannot fully
                consider.
              </p>
              <p>
                It’s worth noting that the results of an appraisal can be influenced by the context. When someone is
                refinancing a property the appraisal often comes in a bit higher because the lender is more likely to
                approve the loan. But when someone is selling, the appraisal will usually match the sale price 90% of the
                time because appraisal companies have a vested interest in getting it right. So keep that in mind when
                you’re setting your expectations.
              </p>
              <p>
                The cost-benefit analysis is pretty clear: free estimators are great for getting a rough idea of your
                home’s value and keeping an eye on things, but for big money decisions, you really can’t beat the accuracy
                of a professional appraisal. If your house has some unique features, has had a major renovation recently,
                or if you live in an area where there is very little data available, then a professional appraisal will be
                worth the cost. Get one 30-60 days before you need the final number.
              </p>
              <div className="tf-guide-rule" />
              </FaqItem>
            </FaqAccordion>
            <h2>Contact Us</h2>
            <h3>Get Your Free Consultation - Let&apos;s Get Started!</h3>
            <p>
              Want to get a better handle on what your property is worth? Request your free home value estimate today
              and connect with Stanley Montfort for expert guidance. He offers personalized consultations to help you
              understand your home’s value and explore your options.
            </p>
            <div className="tf-cta-card">
              <p>
                <strong>Phone:</strong> 1-646-970-1078{" "}
                <strong>Email:</strong>{" "}
                <a href="mailto:sm@montfortre.com" className="tf-cta-mail">
                  sm@montfortre.com
                </a>{" "}
                <strong>Address:</strong> 8 West 126th Street, New York NY 10027
              </p>
              <p>
                <strong>Business Hours:</strong> Open 24 hours, 7 days a week{" "}
                <strong>Response Time:</strong> We’ll get back to you within 24 business hours
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="tf-related" data-screen-label="Related valuation services">
        <div className="tf-related-inner">
          <div className="tf-related-head" data-reveal="">
            <h2>Our Complete NYC Home Valuation service</h2>
          </div>
          <div className="tf-related-grid">
            {RELATED_SERVICES.map((item) => (
              <div key={item.title} data-reveal="" className="tf-related-card">
                <h2>{item.title}</h2>
                <a href={item.imageHref} aria-label={item.alt}>
                  <img src={item.image} alt={item.alt} loading="lazy" />
                </a>
                <p>{item.copy}</p>
                <a href={item.learnHref} className="tf-related-more" aria-label="Learn More">
                  Learn More
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

<ResourcesSection
        title="Recent News & Realtor Advice"
        subtitle="Stay in the loop on the latest events, news, & happenings in and around our community!"
        ctaLabel="Read More"
        showCategory={false}
        articles={NEWS_ARTICLES}
      />

      <section className="contact-section" data-screen-label="Checklist">
        <div className="contact-inner">
          <div data-reveal="" className="contact-copy">
            <div className="contact-form">
              <div className="contact-names">
                <input type="text" name="first_name" placeholder="First Name *" className="contact-field" required />
                <input type="text" name="last_name" placeholder="Last Name *" className="contact-field" required />
              </div>
              <input type="email" name="email_address" placeholder="Email *" className="contact-field" required />
              <input type="text" name="City" placeholder="City" className="contact-field" />
              <a
                href="https://assets.agentfire3.com/uploads/sites/312/2023/04/11-Costly-Brownstone-Mistakes.pdf"
                className="contact-submit"
                target="_blank"
                rel="noopener noreferrer"
              >
                Send me Free Checklist!
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
            <div className="hv-checklist-photo">
              <img src="/redesign-assets/services/ljg7105-min.png" alt="_LJG7105-min" loading="lazy" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

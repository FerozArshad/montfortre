import PromisesBar from "../shared/PromisesBar";
import ResourcesSection from "../shared/ResourcesSection";
import "../../styles/neighborhoods-page.css";
import "../../styles/harlem-sros-page.css";
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

export default function HarlemSrosContent() {
  return (
    <>
      <section className="nbhd-hero" data-screen-label="Service hero">
        <div className="nbhd-hero-ring" />
        <div className="nbhd-hero-inner">
          <div data-reveal="">
            <h1>Harlem SROs — Expert Guidance for Buyers, Sellers & Investors</h1>
            <p className="nbhd-hero-lead">
              We’ll help you identify profitable Harlem SRO opportunities while minimizing regulatory, compliance, and
              management-related risks
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
            <h2>WHAT SHOULD BUYERS KNOW ABOUT HARLEM SROS?</h2>
            <p>
              Single Room Occupancy properties, commonly known as SROs, represent a unique segment of Harlem real estate.
              These properties are often historic buildings that were originally designed or later converted to
              accommodate multiple individual living spaces. Harlem SROs can offer investment potential, redevelopment
              opportunities, and entry points into Manhattan real estate for buyers familiar with this specialized
              market.
            </p>
            <p>
              Many SRO buildings in Harlem are located in historic neighborhoods with strong long term growth potential.
              Buyers interested in restoration projects, income producing properties, or redevelopment opportunities
              often explore SRO investments because of their location, architectural character, and future upside.
            </p>
            <p>
              At the same time, purchasing an SRO property in New York City involves significant complexity. Regulations,
              tenant protections, zoning restrictions, certificate of occupancy requirements, and renovation limitations
              all play a major role in the transaction process. Buyers must fully understand the legal and financial
              responsibilities associated with these properties before moving forward.
            </p>
            <p>
              Without experienced guidance, navigating the Harlem SRO market can quickly become overwhelming. Proper due
              diligence is essential to avoid costly legal or renovation issues and to evaluate whether a property aligns
              with your investment strategy.
            </p>
            <h2>OUR HARLEM SRO SERVICES</h2>
            <p>
              We help buyers and investors navigate the unique challenges associated with Harlem SRO properties. Our
              approach focuses on identifying opportunities while ensuring clients fully understand the risks,
              regulations, and redevelopment potential involved.
            </p>
            <p>
              We assist with property searches tailored to investment goals, whether you are looking for a value add
              opportunity, long term hold, redevelopment project, or income producing asset. Harlem’s evolving market
              continues to create interest in well located SRO properties with future upside potential.
            </p>
            <p>
              When evaluating a property, we help review zoning, occupancy status, existing tenancy, renovation history,
              and building compliance. Understanding these details is critical before making an offer on any SRO property
              in Manhattan.
            </p>
            <p>
              We also coordinate with attorneys, architects, contractors, and inspectors experienced in NYC SRO
              transactions to help buyers move through the process with greater clarity and confidence.
            </p>
            <p>
              From negotiation and contract guidance to due diligence and closing coordination, we help ensure every
              stage of the transaction is handled carefully and professionally.
            </p>
            <h2>INVESTING IN HARLEM SRO PROPERTIES</h2>
            <p>
              Harlem continues to attract investors seeking long term growth opportunities in Manhattan real estate.
              Certain SRO properties may offer redevelopment or repositioning potential depending on the building’s
              condition, zoning, and occupancy status.
            </p>
            <p>
              Buyers are often drawn to Harlem because of its historic architecture, transportation access, cultural
              significance, and continued neighborhood development. However, SRO investments require a much deeper level
              of analysis compared to traditional residential purchases.
            </p>
            <p>
              Factors such as tenant protections, city regulations, conversion restrictions, and renovation costs can
              significantly impact timelines and investment returns. Having access to knowledgeable professionals is
              essential when evaluating these properties.
            </p>
            <p>
              Whether you are an experienced investor or exploring Harlem SRO opportunities for the first time,
              understanding the legal and operational complexities of this property type is critical for making informed
              decisions.
            </p>
            <h2>WHY WORK WITH US FOR HARLEM SROS</h2>
            <p>
              We understand the challenges and opportunities involved in Harlem SRO transactions. Our goal is to help
              buyers approach these properties strategically while minimizing unnecessary risk throughout the process.
            </p>
            <p>
              You receive personalized support, transparent communication, and access to local market knowledge specific
              to Harlem investment properties and redevelopment opportunities.
            </p>
            <p>
              We work closely with experienced professionals across legal, construction, and real estate sectors to help
              buyers evaluate each opportunity carefully and confidently.
            </p>
            <p>
              If you are considering purchasing a Harlem SRO property, we are ready to help you navigate the market and
              identify opportunities aligned with your investment goals.
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

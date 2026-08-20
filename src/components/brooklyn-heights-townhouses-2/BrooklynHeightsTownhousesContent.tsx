import PromisesBar from "../shared/PromisesBar";
import ResourcesSection from "../shared/ResourcesSection";
import "../../styles/neighborhoods-page.css";
import "../../styles/brooklyn-heights-townhouses-page.css";
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

export default function BrooklynHeightsTownhousesContent() {
  return (
    <>
      <section className="nbhd-hero" data-screen-label="Service hero">
        <div className="nbhd-hero-ring" />
        <div className="nbhd-hero-inner">
          <div data-reveal="">
            <h1>Brooklyn Heights Townhouses — Expert Guidance for Buyers, Sellers & Investors</h1>
            <p className="nbhd-hero-lead">
              We’ll help you purchase the right Brooklyn Heights townhouse by identifying hidden maintenance concerns, evaluating long-term value, and negotiating the best possible terms on your behalf
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
            <h2>WHY ARE BROOKLYN HEIGHTS TOWNHOUSES SO DESIRABLE?</h2>
            <p>
              Brooklyn Heights townhouses are among the most prestigious and historic homes in New York City. Known for their beautiful brownstone architecture, tree lined streets, and spacious layouts, these properties offer a rare combination of classic charm and luxury living.
            </p>
            <p>
              Many buyers are drawn to Brooklyn Heights townhouses because of their historic details, private outdoor spaces, and proximity to the Brooklyn Promenade, parks, restaurants, and convenient access to Manhattan. Features such as high ceilings, fireplaces, original woodwork, and multi level living make these homes especially desirable for families and long term homeowners.
            </p>
            <p>
              At the same time, townhouse inventory in Brooklyn Heights is limited, and pricing can vary depending on location, condition, and renovation quality. Understanding the local market is essential before making a purchase.
            </p>
            <h2>OUR BROOKLYN HEIGHTS TOWNHOUSE SERVICES</h2>
            <p>
              We help buyers navigate the Brooklyn Heights townhouse market with personalized guidance and local expertise.
            </p>
            <p>
              Our services include property searches, pricing analysis, negotiations, and support throughout the buying process. Whether you are looking for a restored brownstone, a luxury townhouse, or a property with renovation potential, we help identify the best opportunities for your goals and budget.
            </p>
            <p>
              We also assist with inspections, renovation evaluations, attorney coordination, and closing preparation to help ensure a smooth transaction.
            </p>
            <h2>BUYING A TOWNHOUSE IN BROOKLYN HEIGHTS</h2>
            <p>
              Brooklyn Heights offers a unique mix of historic architecture, waterfront views, and residential charm that continues to attract strong buyer demand.
            </p>
            <p>
              Townhouses throughout the neighborhood range from classic brownstones to fully renovated luxury residences located on some of Brooklyn’s most iconic streets. Combined with excellent schools, parks, dining, and transportation access, these homes remain highly desirable in the New York City real estate market.
            </p>
            <p>
              Whether you are purchasing a primary residence or long term investment property, understanding the Brooklyn Heights townhouse market is essential for making a confident decision.
            </p>
            <h2>WHY WORK WITH US</h2>
            <p>
              We understand the unique aspects of buying townhouse properties in Brooklyn Heights and provide support throughout every stage of the transaction.
            </p>
            <p>
              From private tours and negotiations to inspections and closing coordination, we help buyers navigate the process with confidence and clarity.
            </p>
            <p>
              If you are considering buying a Brooklyn Heights townhouse, we are ready to help you explore available opportunities and find the right property for your lifestyle and goals.
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

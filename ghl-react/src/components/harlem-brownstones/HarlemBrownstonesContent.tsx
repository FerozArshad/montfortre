import ResourcesSection from "../shared/ResourcesSection";
import "../../styles/neighborhoods-page.css";
import "../../styles/harlem-brownstones-page.css";
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

export default function HarlemBrownstonesContent() {
  return (
    <>
      <section className="nbhd-hero" data-screen-label="Service hero">
        <div className="nbhd-hero-ring" />
        <div className="nbhd-hero-inner">
          <div data-reveal="">
            <h1>Harlem Brownstones — Expert Guidance for Buyers, Sellers & Investors</h1>
            <p className="nbhd-hero-lead">
              We’ll help you purchase the right <b>Harlem brownstone</b> while avoiding costly renovation surprises,
              structural issues, and unnecessary risks
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

      <section className="nbhd-promises-sec" data-screen-label="Promises">
        <div className="nbhd-promises-ring" />
        <div className="nbhd-promises-inner">
          <div className="nbhd-promises">
            <div className="nbhd-promise" data-reveal="">
              <div className="nbhd-promise-head">
                <span className="nbhd-promise-icon">{CHECK_ICON}</span>
                <h3 className="nbhd-promise-title">SMOOTH TRANSACTION</h3>
              </div>
              <p>With limited risk throughout the buying process.</p>
            </div>
            <div className="nbhd-promise" data-reveal="">
              <div className="nbhd-promise-head">
                <span className="nbhd-promise-icon">{CHECK_ICON}</span>
                <h3 className="nbhd-promise-title">NO PRESSURE</h3>
              </div>
              <p>No pressure to overpay or purchase within a specific timeframe.</p>
            </div>
            <div className="nbhd-promise" data-reveal="">
              <div className="nbhd-promise-head">
                <span className="nbhd-promise-icon">{CHECK_ICON}</span>
                <h3 className="nbhd-promise-title">ONGOING SUPPORT</h3>
              </div>
              <p>A dedicated team that remains available even after the transaction is complete.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="nbhd-intro" data-screen-label="Guide">
        <div className="nbhd-intro-inner">
          <div className="nbhd-intro-copy" data-reveal="">
            <h2>WHAT MAKES HARLEM BROWNSTONES SO DESIRABLE?</h2>
            <p>
              Harlem brownstones are among the most iconic and architecturally rich homes in New York City. Known for
              their historic charm, classic stoops, spacious layouts, and timeless character, these properties offer a
              unique blend of old New York elegance and modern city living. Buyers are often drawn to Harlem brownstones
              for their generous square footage, private outdoor spaces, and distinctive details that are difficult to
              find in newer developments.
            </p>
            <p>
              Finding the right brownstone in Harlem can still be challenging. Inventory is limited, many homes move
              quickly, and conditions can vary significantly from one property to another. Some brownstones have been
              fully renovated, while others may require substantial restoration or updates. Buyers also need to consider
              landmark regulations, maintenance costs, and long term investment potential before making a decision.
            </p>
            <p>
              Without local market expertise, it is easy to overlook important details during the buying process.
              Understanding block by block value, renovation quality, and future neighborhood growth can make a major
              difference when purchasing a Harlem brownstone. Working with a knowledgeable real estate professional
              helps buyers identify the right opportunities and avoid costly mistakes.
            </p>
            <h2>OUR HARLEM BROWNSTONE SERVICES</h2>
            <p>
              We help buyers navigate every stage of the Harlem brownstone market with confidence. From identifying
              available properties to evaluating restoration potential, we provide guidance tailored specifically to
              townhouse and brownstone purchases.
            </p>
            <p>
              Our property search process focuses on matching buyers with homes that align with their lifestyle,
              investment goals, and budget. Whether you are looking for a fully renovated townhouse, a historic multi
              family property, or a brownstone with original details, we help narrow down the best opportunities in
              Harlem.
            </p>
            <p>
              When you find the right property, we assist with pricing analysis, offer strategy, and negotiation to help
              you stay competitive in a fast moving market. Harlem brownstones often attract strong buyer interest,
              making strategic representation essential.
            </p>
            <p>
              We also help buyers evaluate building condition, renovation history, and long term ownership costs. From
              inspections and contractor recommendations to understanding zoning and landmark considerations, we make
              sure every detail is reviewed carefully before closing.
            </p>
            <h2>BUYING A BROWNSTONE IN HARLEM</h2>
            <p>
              Harlem offers a wide variety of brownstone-lined streets, each with its own character and appeal. From
              Central Harlem to Hamilton Heights and Sugar Hill, buyers can explore neighborhoods filled with historic
              architecture, vibrant culture, and growing investment potential.
            </p>
            <p>
              Many Harlem brownstones feature original craftsmanship including high ceilings, decorative fireplaces,
              woodwork, and large floor plans that are increasingly difficult to find elsewhere in Manhattan. Buyers
              looking for more space and long term value often see Harlem as one of the city’s strongest opportunities.
            </p>
            <p>
              Whether you are searching for a primary residence, multi generational home, or investment property,
              understanding the local market is essential. Property values, renovation standards, and future
              appreciation can vary significantly depending on the location and condition of the home.
            </p>
            <p>
              With deep knowledge of Harlem real estate trends and brownstone inventory, we help buyers make informed
              decisions and move through the process with clarity and confidence.
            </p>
            <h2>WHY WORK WITH US FOR HARLEM BROWNSTONES</h2>
            <p>
              We understand the unique aspects of buying historic properties in Harlem. Our goal is to help buyers
              secure the right brownstone while protecting their long term interests throughout the transaction.
            </p>
            <p>
              You receive personalized guidance, honest communication, and local expertise from start to finish. We
              explain every step clearly and help you evaluate each property beyond the listing photos and descriptions.
            </p>
            <p>
              From private showings and negotiation to inspections and closing coordination, we are here to make the
              process smooth and efficient.
            </p>
            <p>
              If you are considering buying a Harlem brownstone, we are ready to help you explore the market and find
              the right property for your goals.
            </p>
          </div>
        </div>
      </section>

      <section className="nbhd-reviews" data-screen-label="Reviews">
        <div className="nbhd-reviews-inner">
          <iframe
            className="nbhd-reviews-frame"
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

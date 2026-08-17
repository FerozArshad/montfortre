import ResourcesSection from "../shared/ResourcesSection";
import "../../styles/neighborhoods-page.css";
import "../../styles/bedford-stuyvesant-condos-page.css";
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

export default function BedfordStuyvesantCondosContent() {
  return (
    <>
      <section className="nbhd-hero" data-screen-label="Service hero">
        <div className="nbhd-hero-ring" />
        <div className="nbhd-hero-inner">
          <div data-reveal="">
            <h1>Bedford-Stuyvesant Condos — Local Market Expertise for Buyers, Sellers & Investors</h1>
            <p className="nbhd-hero-lead">
              We'll help you find a Bedford-Stuyvesant condo that fits your goals while avoiding unnecessary expenses, unfavorable building conditions, and overpaying in a competitive market
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
            <h2>WHY ARE BEDFORD STUYVESANT CONDOS SO POPULAR?</h2>
            <p>
              Bedford Stuyvesant condos continue to attract buyers looking for modern living, strong investment potential, and vibrant Brooklyn neighborhood culture. From boutique developments to newly renovated residences, Bed Stuy offers a wide range of condominium options for buyers seeking both comfort and long term value.
            </p>
            <p>
              Many buyers are drawn to Bedford Stuyvesant condos because of their modern finishes, spacious layouts, and more accessible pricing compared to other Brooklyn neighborhoods. Features such as rooftop terraces, fitness centers, private outdoor spaces, and contemporary interiors make condo living especially appealing in Bed Stuy.
            </p>
            <p>
              At the same time, buying a condo in Bedford Stuyvesant requires careful market evaluation. Pricing, common charges, building financials, and future resale potential can vary depending on the property and location.
            </p>
            <h2>OUR BEDFORD STUYVESANT CONDO SERVICES</h2>
            <p>
              We help buyers navigate the Bedford Stuyvesant condo market with personalized guidance and local expertise.
            </p>
            <p>
              Our services include property searches, pricing analysis, negotiations, and support throughout the buying process. Whether you are searching for a modern starter home, a luxury residence, or an investment property, we help identify the best opportunities for your goals and budget.
            </p>
            <p>
              We also assist with reviewing building financials, inspections, attorney coordination, and closing preparation to help ensure a smooth transaction.
            </p>
            <h2>BUYING A CONDO IN BEDFORD STUYVESANT</h2>
            <p>
              Bedford Stuyvesant offers a unique mix of historic charm, growing development, and strong community atmosphere that continues to attract buyers across New York City.
            </p>
            <p>
              Many condo buildings feature amenities such as rooftop spaces, private terraces, fitness centers, and modern layouts designed for comfortable city living. Combined with local restaurants, parks, cafes, and convenient transportation access, these properties continue to see strong buyer demand.
            </p>
            <p>
              Whether you are purchasing your first Brooklyn property or adding to your investment portfolio, understanding the Bed Stuy condo market is essential for making a confident decision.
            </p>
            <h2>WHY WORK WITH US</h2>
            <p>
              We understand the Bedford Stuyvesant condo market and provide support throughout every stage of the transaction.
            </p>
            <p>
              From private tours and negotiations to inspections and closing coordination, we help buyers navigate the process with confidence and clarity.
            </p>
            <p>
              If you are considering buying a Bedford Stuyvesant condo, we are ready to help you explore available opportunities and find the right property for your lifestyle and goals.
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

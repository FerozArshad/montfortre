import ResourcesSection from "../shared/ResourcesSection";
import "../../styles/neighborhoods-page.css";
import "../../styles/bedford-stuyvesant-co-ownership-page.css";
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

export default function BedfordStuyvesantCoOwnershipContent() {
  return (
    <>
      <section className="nbhd-hero" data-screen-label="Service hero">
        <div className="nbhd-hero-ring" />
        <div className="nbhd-hero-inner">
          <div data-reveal="">
            <h1>Bedford-Stuyvesant Co-Ownership — Expert Advice for Shared Property Buyers & Investors</h1>
            <p className="nbhd-hero-lead">
              We'll help you structure a Bedford-Stuyvesant co-ownership purchase that protects your interests, minimizes future disputes, and ensures all parties enter the agreement with clarity and confidence
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
            <h2>WHY ARE BEDFORD STUYVESANT CO OWNERSHIP PROPERTIES GAINING ATTENTION?</h2>
            <p>
              Bedford Stuyvesant co ownership properties are becoming increasingly popular among buyers looking for more flexible and affordable ways to enter the Brooklyn real estate market. Co ownership allows multiple buyers to share ownership costs while gaining access to larger properties and long term investment opportunities in one of Brooklyn’s fastest growing neighborhoods.
            </p>
            <p>
              Many buyers are drawn to Bed Stuy co ownership opportunities because they can provide access to spacious brownstones, multi unit homes, and renovated properties at a lower individual cost. This option is especially attractive for friends, family members, investors, and buyers looking to combine lifestyle and investment goals.
            </p>
            <p>
              At the same time, co ownership requires careful planning and a clear understanding of financial responsibilities, ownership agreements, and future exit strategies. Proper structure and guidance are essential for a successful purchase.
            </p>
            <h2>OUR BEDFORD STUYVESANT CO OWNERSHIP SERVICES</h2>
            <p>
              We help buyers navigate Bedford Stuyvesant co ownership opportunities with personalized guidance and local market expertise.
            </p>
            <p>
              Our services include property searches, investment analysis, negotiations, and support throughout the transaction process. Whether you are purchasing with family, friends, or investment partners, we help identify properties that align with your shared goals and budget.
            </p>
            <p>
              We also assist with coordinating attorneys, reviewing ownership structures, and helping buyers understand responsibilities related to shared ownership arrangements.
            </p>
            <h2>BUYING A CO OWNERSHIP PROPERTY IN BEDFORD STUYVESANT</h2>
            <p>
              Bedford Stuyvesant offers a variety of properties well suited for co ownership, including brownstones, multi family homes, and renovated residences with strong long term value potential.
            </p>
            <p>
              The neighborhood continues to attract buyers because of its historic charm, growing development, vibrant culture, and convenient transportation access throughout Brooklyn and Manhattan.
            </p>
            <p>
              Whether you are searching for a primary residence or a shared investment opportunity, understanding the Bed Stuy co ownership market is essential for making a confident decision.
            </p>
            <h2>WHY WORK WITH US</h2>
            <p>
              We understand the unique considerations involved in co ownership transactions and provide support throughout every stage of the process.
            </p>
            <p>
              From property tours and negotiations to contract coordination and closing preparation, we help buyers navigate co ownership purchases with confidence and clarity.
            </p>
            <p>
              If you are considering a Bedford Stuyvesant co ownership property, we are ready to help you explore available opportunities and find the right fit for your goals.
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

import PromisesBar from "../shared/PromisesBar";
import ResourcesSection from "../shared/ResourcesSection";
import "../../styles/neighborhoods-page.css";
import "../../styles/bedford-stuyvesant-brownstones-page.css";
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

export default function BedfordStuyvesantBrownstonesContent() {
  return (
    <>
      <section className="nbhd-hero" data-screen-label="Service hero">
        <div className="nbhd-hero-ring" />
        <div className="nbhd-hero-inner">
          <div data-reveal="">
            <h1>Bedford-Stuyvesant Brownstones — Expert Guidance for Historic Home Buyers, Sellers & Investors</h1>
            <p className="nbhd-hero-lead">
              We'll help you purchase the right Bedford-Stuyvesant brownstone while avoiding costly renovation surprises, hidden maintenance issues, and overpriced properties
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
            <h2>WHY ARE BEDFORD STUYVESANT BROWNSTONES SO DESIRABLE?</h2>
            <p>
              Bedford Stuyvesant brownstones are some of Brooklyn’s most iconic and architecturally rich homes. Known for their historic charm, beautiful facades, and classic New York character, these properties continue to attract buyers looking for space, style, and long term value.
            </p>
            <p>
              Many buyers are drawn to Bed Stuy brownstones because of their original details, spacious multi level layouts, private outdoor areas, and strong investment potential. Features such as high ceilings, decorative fireplaces, woodwork, and stoops give these homes a timeless appeal that is difficult to find in newer developments.
            </p>
            <p>
              At the same time, buying a brownstone in Bedford Stuyvesant requires careful evaluation. Property condition, renovation quality, landmark considerations, and long term maintenance costs can vary significantly from one home to another.
            </p>
            <h2>OUR BEDFORD STUYVESANT BROWNSTONE SERVICES</h2>
            <p>
              We help buyers navigate the Bedford Stuyvesant brownstone market with personalized guidance and local expertise.
            </p>
            <p>
              Our services include property searches, pricing analysis, negotiations, and support throughout the buying process. Whether you are looking for a fully renovated brownstone, a multi family property, or a home with restoration potential, we help identify the right opportunities for your goals and budget.
            </p>
            <p>
              We also assist with inspections, renovation evaluations, attorney coordination, and closing preparation to help ensure a smooth transaction.
            </p>
            <h2>BUYING A BROWNSTONE IN BEDFORD STUYVESANT</h2>
            <p>
              Bedford Stuyvesant offers a unique blend of historic architecture, vibrant culture, and growing property demand that continues to attract buyers throughout New York City.
            </p>
            <p>
              Brownstones throughout the neighborhood range from carefully restored historic homes to properties with renovation opportunities. Combined with local restaurants, parks, community atmosphere, and convenient transportation access, these homes remain highly desirable for both homeowners and investors.
            </p>
            <p>
              Whether you are purchasing a primary residence or an investment property, understanding the Bed Stuy brownstone market is essential for making a confident decision.
            </p>
            <h2>WHY WORK WITH US</h2>
            <p>
              We understand the unique aspects of buying brownstone properties in Bedford Stuyvesant and provide support throughout every stage of the transaction.
            </p>
            <p>
              From private tours and negotiations to inspections and closing coordination, we help buyers navigate the process with confidence and clarity.
            </p>
            <p>
              If you are considering buying a Bedford Stuyvesant brownstone, we are ready to help you explore available opportunities and find the right property for your lifestyle and goals.
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

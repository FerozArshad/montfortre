import ResourcesSection from "../shared/ResourcesSection";
import PromisesBar from "../shared/PromisesBar";
import "../../styles/neighborhoods-page.css";
import "../../styles/downstone-brooklyn-co-ops-page.css";
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

export default function DownstoneBrooklynCoOpsContent() {
  return (
    <>
      <section className="nbhd-hero" data-screen-label="Service hero">
        <div className="nbhd-hero-ring" />
        <div className="nbhd-hero-inner">
          <div data-reveal="">
            <h1>Downtown Brooklyn co-ops</h1>
            <p className="nbhd-hero-lead">
              From off-market multifamily investments to precision mortgage planning, we provide the data, tools, and
              local expertise needed to master the world’s most complex property market.
            </p>
            <div className="nbhd-hero-ctas">
              <a href="tel:646-970-1078" className="nbhd-hero-tel">
                Call 1-(646)-970-1078
              </a>
              <a href="https://calendly.com/montfort" className="nbhd-hero-book">
                Schedule Consultation
              </a>
            </div>
          </div>
          <div className="nbhd-hero-media" data-reveal="">
            <div className="nbhd-hero-frame">
              <img src="/redesign-assets/hoods/downtown-co-ops.png" alt="Downtown Brooklyn co-ops" />
            </div>
          </div>
        </div>
      </section>
<PromisesBar variant="nbhd" />


      <section className="nbhd-intro" data-screen-label="Heading">
        <div className="nbhd-intro-inner">
          <div className="nbhd-intro-copy" data-reveal="">
            <h2>Heading</h2>
            <p>
              Looking for a specific real estate service? You’re in the right place. We handle everything from precision
              home valuations to complex multifamily investment strategies. Browse our specialized NYC services below, or
              if you’re not sure which path is right for your goals, just call us at <strong>1-646-970-1078</strong>. We
              provide expert consultations and are ready to help you navigate the New York market today.
            </p>
          </div>
        </div>
      </section>

<section className="nbhd-intro" data-screen-label="Guide">
        <div className="nbhd-intro-inner">
          <div className="nbhd-intro-copy" data-reveal="">
            <h2>WHY ARE DOWNTOWN BROOKLYN CO OPS SO DESIRABLE?</h2>
            <p>
              Downtown Brooklyn co ops offer buyers a combination of value, convenience, and classic New York living in
              one of Brooklyn’s most rapidly growing neighborhoods. Known for their spacious layouts, established
              residential communities, and attractive pricing compared to many Manhattan properties, co ops continue to
              be a popular choice for long term homeowners.
            </p>
            <p>
              Many buyers are drawn to Downtown Brooklyn co ops because of their proximity to major subway lines,
              shopping, restaurants, parks, and cultural destinations. Co ops often provide larger living spaces and
              lower purchase prices compared to condos in similar locations, making them appealing for first time buyers
              and families alike.
            </p>
            <p>
              At the same time, buying a co op involves a more detailed approval process that may include financial
              review, board approval, and building specific policies. Understanding these requirements is important
              before moving forward with a purchase.
            </p>
            <h2>OUR DOWNTOWN BROOKLYN CO OP SERVICES</h2>
            <p>We help buyers navigate the Downtown Brooklyn co op market with personalized guidance and local expertise.</p>
            <p>
              Our services include property searches, market analysis, negotiations, and support throughout the board
              approval process. Whether you are searching for a renovated apartment, a family residence, or a full
              service building, we help identify the right opportunities for your goals and budget.
            </p>
            <p>
              We also assist with board applications, inspections, attorney coordination, and closing preparation to help
              ensure a smooth and organized transaction.
            </p>
            <h2>BUYING A CO OP IN DOWNTOWN BROOKLYN</h2>
            <p>
              Downtown Brooklyn offers a wide variety of co op properties ranging from classic residential buildings to
              modernized communities with updated amenities.
            </p>
            <p>
              Many co ops feature amenities such as doormen, fitness centers, storage, laundry facilities, landscaped
              courtyards, and rooftop spaces. Combined with Downtown Brooklyn’s central location and continued
              development, these properties continue to attract strong buyer demand.
            </p>
            <p>
              Whether you are purchasing your first Brooklyn property or relocating within New York City, understanding
              the Downtown Brooklyn co op market is essential for making a confident investment decision.
            </p>
            <h2>WHY WORK WITH US</h2>
            <p>
              We understand the unique process involved in buying co op properties in Downtown Brooklyn and provide
              support throughout every stage of the transaction.
            </p>
            <p>
              From property tours and negotiations to board approval and closing coordination, we help buyers navigate
              the process with confidence and clarity.
            </p>
            <p>
              If you are considering buying a Downtown Brooklyn co op, we are ready to help you explore available
              opportunities and find the right property for your lifestyle and goals.
            </p>
          </div>
        </div>
      </section>

      <ResourcesSection
        title="Title"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
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

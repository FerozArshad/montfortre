import PromisesBar from "../shared/PromisesBar";
import ResourcesSection from "../shared/ResourcesSection";
import "../../styles/neighborhoods-page.css";
import "../../styles/brooklyn-heights-co-ops-page.css";
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

export default function BrooklynHeightsCoOpsContent() {
  return (
    <>
      <section className="nbhd-hero" data-screen-label="Service hero">
        <div className="nbhd-hero-ring" />
        <div className="nbhd-hero-inner">
          <div data-reveal="">
            <h1>Brooklyn Heights Co-Ops — Expert Guidance for Buyers, Sellers & Investors</h1>
            <p className="nbhd-hero-lead">
              We’ll guide you through the Brooklyn Heights co-op buying process, helping you navigate board requirements, avoid costly mistakes, and secure the right home with confidence
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
            <h2>WHY ARE BROOKLYN HEIGHTS CO OPS SO DESIRABLE?</h2>
            <p>
              Brooklyn Heights co ops offer buyers classic New York charm, spacious layouts, and long term value in one of Brooklyn’s most historic and prestigious neighborhoods. Known for elegant pre war buildings, tree lined streets, and strong residential communities, these properties continue to attract buyers seeking character and stability.
            </p>
            <p>
              Many buyers are drawn to Brooklyn Heights co ops because they often provide larger living spaces and more value compared to condos in similar locations. Residents also enjoy close access to the Brooklyn Promenade, waterfront parks, restaurants, shopping, and convenient transportation to Manhattan.
            </p>
            <p>
              At the same time, purchasing a co op involves a more detailed approval process that may include financial review, board approval, and building specific policies. Understanding these requirements is important before making a purchase.
            </p>
            <h2>OUR BROOKLYN HEIGHTS CO OP SERVICES</h2>
            <p>
              We help buyers navigate the Brooklyn Heights co op market with personalized guidance and local expertise.
            </p>
            <p>
              Our services include property searches, pricing analysis, negotiations, and support throughout the co op board approval process. Whether you are searching for a historic apartment, a renovated residence, or a full service building, we help identify the right opportunities for your goals and budget.
            </p>
            <p>
              We also assist with board applications, inspections, attorney coordination, and closing preparation to help ensure a smooth and organized transaction.
            </p>
            <h2>BUYING A CO OP IN BROOKLYN HEIGHTS</h2>
            <p>
              Brooklyn Heights offers a wide variety of co op properties ranging from historic brownstone conversions to full service residential buildings.
            </p>
            <p>
              Many co ops feature amenities such as doormen, storage, landscaped courtyards, rooftop spaces, and fitness centers. Combined with the neighborhood’s peaceful atmosphere and strong property demand, these residences remain highly desirable for long term homeowners.
            </p>
            <p>
              Whether you are purchasing your first Brooklyn property or relocating within New York City, understanding the Brooklyn Heights co op market is essential for making a confident investment decision.
            </p>
            <h2>WHY WORK WITH US</h2>
            <p>
              We understand the unique process involved in buying co op properties in Brooklyn Heights and provide support throughout every stage of the transaction.
            </p>
            <p>
              From property tours and negotiations to board approval and closing coordination, we help buyers navigate the process with confidence and clarity.
            </p>
            <p>
              If you are considering buying a Brooklyn Heights co op, we are ready to help you explore available opportunities and find the right property for your lifestyle and goals.
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

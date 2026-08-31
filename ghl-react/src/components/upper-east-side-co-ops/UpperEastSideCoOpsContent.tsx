import PromisesBar from "../shared/PromisesBar";
import ResourcesSection from "../shared/ResourcesSection";
import "../../styles/neighborhoods-page.css";
import "../../styles/upper-east-side-co-ops-page.css";
import "../../styles/contact-section.css";
import HeroGoogleRating from "../shared/HeroGoogleRating";
import PageListingsSection from "../shared/PageListingsSection";


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

export default function UpperEastSideCoOpsContent() {
  return (
    <>
      <section className="nbhd-hero" data-screen-label="Service hero">
        <div className="nbhd-hero-ring" />
        <div className="nbhd-hero-inner">
          <div data-reveal="">
            <h1>Upper East Side Co-Ops — Expert Guidance for Buyers, Sellers & Investors</h1>
            <p className="nbhd-hero-lead">
              We’ll guide you through the Upper East Side co-op buying process by evaluating building policies, financial
              health, and board requirements to help you secure the right home with fewer risks
            </p>
            <div className="nbhd-hero-ctas">
              <a href="tel:+16469701078" className="nbhd-hero-tel">
                Call 1-(646)-970-1078
              </a>
              <a href="https://calendly.com/montfort" className="nbhd-hero-book">
                Schedule A Consultation
              </a>
            </div>
          </div>
          <div className="nbhd-hero-media" data-reveal="">
            <div className="nbhd-hero-frame">
              <img src="/redesign-assets/hoods/ues-coops.png" alt="Upper East Side co-op buildings" width="640" height="512" loading="eager" />
            </div>
            <HeroGoogleRating prefix="nbhd" />
          </div>
        </div>
      </section>

      <PromisesBar variant="nbhd" />

      <PageListingsSection market="Upper East Side" propertyType="Co-op" label="Upper East Side co-ops" />

      <section className="nbhd-intro" data-screen-label="Guide">
        <div className="nbhd-intro-inner">
          <div className="nbhd-intro-copy" data-reveal="">
            <h2>WHY BUYERS CHOOSE UPPER EAST SIDE CO OPS</h2>
            <p>
              Upper East Side co ops remain one of the most desirable property types in Manhattan. Known for elegant pre
              war buildings, spacious layouts, and prime residential locations, these homes offer timeless New York charm
              and long term value.
            </p>
            <p>
              Many buyers are attracted to Upper East Side co ops because of their classic architectural details, full
              service amenities, and proximity to Central Park, luxury shopping, fine dining, museums, and top private
              schools. Compared to condos, co ops often provide more space and value in similar locations.
            </p>
            <p>
              At the same time, buying a co op involves a more detailed approval process. Buyers should understand board
              requirements, financial qualifications, and building policies before moving forward.
            </p>
            <h2>OUR UPPER EAST SIDE CO OP SERVICES</h2>
            <p>We help buyers navigate the Upper East Side co op market with personalized guidance and local expertise.</p>
            <p>
              Our services include property searches, pricing analysis, negotiations, and assistance throughout the board
              approval process. Whether you are searching for a luxury pre war apartment, a family residence, or a full
              service building, we help identify the best opportunities for your goals and budget.
            </p>
            <p>
              We also assist with board applications, financial preparation, inspections, attorney coordination, and
              closing management to help keep the process smooth and organized.
            </p>
            <h2>BUYING A CO OP ON THE UPPER EAST SIDE</h2>
            <p>
              The Upper East Side offers a wide selection of historic cooperatives, luxury residences, and boutique
              buildings located on quiet tree lined streets throughout Manhattan.
            </p>
            <p>
              Many co ops feature amenities such as doormen, fitness centers, storage, and landscaped common areas.
              Combined with the neighborhood’s strong residential atmosphere and prestigious reputation, these properties
              continue to attract long term buyer demand.
            </p>
            <p>
              Whether you are purchasing your first Manhattan home or relocating within the city, understanding the
              Upper East Side co op market is essential for making a confident investment.
            </p>
            <h2>WHY WORK WITH US</h2>
            <p>
              We understand the unique process involved in buying co op properties on the Upper East Side and provide
              support throughout every stage of the transaction.
            </p>
            <p>
              From private showings and negotiations to board approval and closing coordination, we help buyers move
              through the process with confidence and clarity.
            </p>
            <p>
              If you are considering buying an Upper East Side co op, we are ready to help you explore available
              opportunities and find the right property for your needs.
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

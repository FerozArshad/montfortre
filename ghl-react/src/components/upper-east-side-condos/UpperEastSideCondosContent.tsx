import PromisesBar from "../shared/PromisesBar";
import ResourcesSection from "../shared/ResourcesSection";
import "../../styles/neighborhoods-page.css";
import "../../styles/upper-east-side-condos-page.css";
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

export default function UpperEastSideCondosContent() {
  return (
    <>
      <section className="nbhd-hero" data-screen-label="Service hero">
        <div className="nbhd-hero-ring" />
        <div className="nbhd-hero-inner">
          <div data-reveal="">
            <h1>Upper East Side Condos — Expert Guidance for Buyers, Sellers & Investors</h1>
            <p className="nbhd-hero-lead">
              We’ll help you find the right Upper East Side condo by reviewing building finances, amenities, and
              ownership costs so you can avoid costly surprises and buy with confidence
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
            <h2>WHY ARE UPPER EAST SIDE CONDOS SO DESIRABLE?</h2>
            <p>
              Upper East Side condos continue to attract buyers seeking luxury living, convenience, and long term value
              in one of Manhattan’s most prestigious neighborhoods. From elegant boutique buildings to full service
              luxury towers, the Upper East Side offers a wide range of condominium options designed for sophisticated
              city living.
            </p>
            <p>
              Many buyers are drawn to Upper East Side condos because they combine modern amenities with prime Manhattan
              locations. Features such as private terraces, fitness centers, concierge services, rooftop lounges, valet
              parking, and high end finishes make condo living especially appealing for professionals, families,
              international buyers, and investors.
            </p>
            <p>
              At the same time, buying a condo on the Upper East Side requires careful market evaluation. Pricing can
              vary significantly depending on the building, location, amenities, and views. Buyers should also consider
              common charges, property taxes, building financials, and long term resale potential before making a
              purchase.
            </p>
            <p>
              Without local expertise, it can be difficult to identify the strongest opportunities in a competitive
              luxury market. Understanding neighborhood trends, building reputation, and future appreciation potential is
              essential when purchasing an Upper East Side condo.
            </p>
            <h2>OUR UPPER EAST SIDE CONDO SERVICES</h2>
            <p>
              We help buyers navigate the Upper East Side condo market with personalized guidance and a strategy tailored
              to their goals and lifestyle.
            </p>
            <p>
              Our property search services focus on identifying condos that align with your preferences, whether you are
              looking for a luxury penthouse, family residence, investment property, or pied à terre. We provide access
              to available listings, off market opportunities, and valuable market insights throughout the Upper East
              Side.
            </p>
            <p>
              When you find the right property, we assist with pricing analysis, offer strategy, and negotiations to
              help secure the best possible terms in a highly competitive market.
            </p>
            <p>
              We also help buyers review critical building details including reserve funds, financial stability, common
              charges, tax considerations, and ownership policies. Understanding these factors is essential before
              moving forward with a purchase.
            </p>
            <p>
              From inspections and attorney coordination to contract review and closing preparation, we help manage
              every stage of the process with clarity and efficiency.
            </p>
            <h2>BUYING A CONDO ON THE UPPER EAST SIDE</h2>
            <p>
              The Upper East Side offers a unique combination of luxury, privacy, and convenience. Buyers can choose
              from historic condominium conversions, newly developed luxury towers, and full service buildings with
              world class amenities and services.
            </p>
            <p>
              Many condo buildings are located near Central Park, Madison Avenue shopping, fine dining, museums, and
              some of Manhattan’s top private schools. The neighborhood’s quiet residential atmosphere combined with its
              access to culture and transportation continues to attract strong buyer demand year after year.
            </p>
            <p>
              For buyers seeking flexibility, condos often provide fewer restrictions compared to co ops, making them
              especially attractive for investors, international buyers, and those planning future rental opportunities.
            </p>
            <p>
              Whether you are purchasing your first Manhattan property or expanding your real estate portfolio,
              understanding the Upper East Side condo market is essential for making a confident and informed
              investment.
            </p>
            <h2>WHY WORK WITH US FOR UPPER EAST SIDE CONDOS</h2>
            <p>
              We understand the Upper East Side condo market and the factors that influence luxury property value, buyer
              demand, and long term appreciation.
            </p>
            <p>
              You receive personalized support, honest communication, and local expertise throughout every stage of the
              transaction. We help buyers simplify complex decisions and evaluate properties beyond the listing
              presentation alone.
            </p>
            <p>
              From private tours and negotiations to inspections and closing coordination, we are committed to making
              your condo purchase smooth, informed, and successful.
            </p>
            <p>
              If you are considering buying a condo on the Upper East Side, we are ready to help you explore available
              opportunities and find the right property for your lifestyle and investment goals.
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

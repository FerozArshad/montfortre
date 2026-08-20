import PromisesBar from "../shared/PromisesBar";
import ResourcesSection from "../shared/ResourcesSection";
import "../../styles/neighborhoods-page.css";
import "../../styles/upper-east-side-townhouses-page.css";
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

export default function UpperEastSideTownhousesContent() {
  return (
    <>
      <section className="nbhd-hero" data-screen-label="Service hero">
        <div className="nbhd-hero-ring" />
        <div className="nbhd-hero-inner">
          <div data-reveal="">
            <h1>Upper East Side Townhouses — Expert Guidance for Buyers, Sellers & Investors</h1>
            <p className="nbhd-hero-lead">
              We’ll help you purchase the right Upper East Side townhouse by identifying hidden maintenance concerns,
              evaluating long-term ownership costs, and ensuring you make a confident investment
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
            <h2>WHY ARE UPPER EAST SIDE TOWNHOUSES SO PRESTIGIOUS?</h2>
            <p>
              Upper East Side townhouses are among the most exclusive and architecturally significant homes in
              Manhattan. Known for their elegant facades, historic charm, and prime locations, these properties offer a
              rare combination of privacy, luxury, and timeless New York character. Buyers are often drawn to Upper East
              Side townhouses for their spacious interiors, classic craftsmanship, and long term investment value.
            </p>
            <p>
              Many townhouses on the Upper East Side feature grand entrances, high ceilings, private gardens, multiple
              floors, and beautifully preserved architectural details. From historic brownstones to fully renovated
              luxury residences, these homes provide a level of sophistication and flexibility rarely found in
              traditional apartments.
            </p>
            <p>
              At the same time, purchasing a townhouse on the Upper East Side requires careful analysis and market
              expertise. Inventory is limited, pricing varies significantly depending on the block and condition, and
              many properties involve landmark considerations, renovation history, or structural evaluations that can
              impact ownership costs and future value.
            </p>
            <p>
              Without experienced guidance, it can be difficult to evaluate whether a townhouse is priced correctly or
              understand the long term potential of the property. Buyers should carefully assess location, renovation
              quality, zoning, and maintenance requirements before making a decision.
            </p>
            <h2>OUR UPPER EAST SIDE TOWNHOUSE SERVICES</h2>
            <p>
              We help buyers navigate the Upper East Side townhouse market with personalized support and deep local
              market knowledge.
            </p>
            <p>
              Our property search services are tailored to your lifestyle, space needs, and investment goals. Whether
              you are searching for a fully renovated luxury townhouse, a historic brownstone, or a property with
              renovation potential, we help identify the best opportunities available across the neighborhood.
            </p>
            <p>
              When you find the right property, we assist with pricing analysis, negotiation strategy, and offer
              preparation to help position you competitively in a highly selective market.
            </p>
            <p>
              We also help buyers evaluate important property details including structural condition, renovation
              history, landmark restrictions, and long term ownership costs. From inspections and contractor referrals
              to attorney coordination and transaction management, we help simplify every stage of the process.
            </p>
            <h2>BUYING A TOWNHOUSE ON THE UPPER EAST SIDE</h2>
            <p>
              The Upper East Side is one of Manhattan’s most established and prestigious residential neighborhoods.
              Known for its quiet tree lined streets, luxury residences, world class shopping, fine dining, and cultural
              institutions, the neighborhood continues to attract buyers seeking both exclusivity and convenience.
            </p>
            <p>
              Townhouses throughout the Upper East Side range from classic pre war homes to modernized luxury residences
              with high end finishes and contemporary amenities. Many properties are located near Central Park, Madison
              Avenue, Museum Mile, and some of the city’s most respected private schools.
            </p>
            <p>
              For buyers seeking privacy and long term value, Upper East Side townhouses remain one of the strongest
              real estate investments in Manhattan. However, each property presents unique considerations related to
              condition, layout, zoning, and future resale potential.
            </p>
            <p>
              Whether you are purchasing a family residence, pied à terre, or investment property, understanding the
              nuances of the Upper East Side townhouse market is essential for making informed decisions.
            </p>
            <h2>WHY WORK WITH US FOR UPPER EAST SIDE TOWNHOUSES</h2>
            <p>
              We understand the complexities involved in purchasing luxury townhouse properties in Manhattan and provide
              guidance tailored specifically to the Upper East Side market.
            </p>
            <p>
              You receive personalized attention, honest communication, and local expertise throughout every stage of
              the transaction. We help buyers evaluate properties carefully and navigate complex decisions with
              confidence.
            </p>
            <p>
              From private showings and negotiations to inspections and closing coordination, we are committed to making
              your townhouse purchase smooth, informed, and successful.
            </p>
            <p>
              If you are considering buying an Upper East Side townhouse, we are ready to help you explore available
              opportunities and navigate the market with confidence.
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

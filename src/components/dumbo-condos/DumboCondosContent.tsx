import PromisesBar from "../shared/PromisesBar";
import ResourcesSection from "../shared/ResourcesSection";
import "../../styles/neighborhoods-page.css";
import "../../styles/dumbo-condos-page.css";
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

export default function DumboCondosContent() {
  return (
    <>
      <section className="nbhd-hero" data-screen-label="Service hero">
        <div className="nbhd-hero-ring" />
        <div className="nbhd-hero-inner">
          <div data-reveal="">
            <h1>Dumbo Condos — Local Market Expertise for Buyers, Sellers & Investors</h1>
            <p className="nbhd-hero-lead">
              We'll help you find the right DUMBO condo by identifying strong investment opportunities, avoiding costly
              surprises, and ensuring you purchase a property that fits both your lifestyle and long-term goals
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
            <h2>WHY ARE DUMBO CONDOS SO POPULAR?</h2>
            <p>
              DUMBO condos continue to attract buyers looking for luxury living, modern design, and iconic New York City
              views. Known for its waterfront location, converted warehouse buildings, and upscale residential
              developments, DUMBO offers some of Brooklyn’s most desirable condominium properties.
            </p>
            <p>
              Many buyers are drawn to DUMBO condos because of their spacious layouts, high ceilings, large windows, and
              premium amenities. Features such as rooftop terraces, fitness centers, concierge services, private outdoor
              spaces, and panoramic skyline views make condo living especially appealing in this neighborhood.
            </p>
            <p>
              At the same time, buying a condo in DUMBO requires careful market evaluation. Pricing, building financials,
              common charges, and long term resale potential can vary depending on the property and location.
            </p>
            <h2>OUR DUMBO CONDO SERVICES</h2>
            <p>We help buyers navigate the DUMBO condo market with personalized guidance and local expertise.</p>
            <p>
              Our services include property searches, pricing analysis, negotiations, and support throughout the entire
              buying process. Whether you are searching for a luxury penthouse, a waterfront residence, or an investment
              property, we help identify the best opportunities for your goals and budget.
            </p>
            <p>
              We also assist with reviewing building financials, inspections, attorney coordination, and closing
              preparation to help ensure a smooth transaction.
            </p>
            <h2>BUYING A CONDO IN DUMBO</h2>
            <p>
              DUMBO offers a unique mix of luxury waterfront towers, boutique condominiums, and historic industrial
              conversions throughout the neighborhood.
            </p>
            <p>
              Many condo buildings feature amenities such as doormen, fitness centers, rooftop lounges, coworking spaces,
              and private terraces. Combined with DUMBO’s vibrant atmosphere, waterfront parks, restaurants, art scene,
              and convenient access to Manhattan, these properties continue to attract strong buyer demand.
            </p>
            <p>
              Whether you are purchasing a primary residence, pied à terre, or investment property, understanding the
              DUMBO condo market is essential for making a confident investment decision.
            </p>
            <h2>WHY WORK WITH US</h2>
            <p>We understand the DUMBO condo market and provide support throughout every stage of the transaction.</p>
            <p>
              From private tours and negotiations to inspections and closing coordination, we help buyers navigate the
              process with confidence and clarity.
            </p>
            <p>
              If you are considering buying a condo in DUMBO, we are ready to help you explore available opportunities
              and find the right property for your lifestyle and goals.
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

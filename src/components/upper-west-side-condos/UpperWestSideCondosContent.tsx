import PromisesBar from "../shared/PromisesBar";
import ResourcesSection from "../shared/ResourcesSection";
import "../../styles/neighborhoods-page.css";
import "../../styles/upper-west-side-condos-page.css";
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

export default function UpperWestSideCondosContent() {
  return (
    <>
      <section className="nbhd-hero" data-screen-label="Service hero">
        <div className="nbhd-hero-ring" />
        <div className="nbhd-hero-inner">
          <div data-reveal="">
            <h1>Upper West Side Condos — Expert Guidance for Buyers, Sellers & Investors</h1>
            <p className="nbhd-hero-lead">
              We’ll help you find the right Upper West Side condo by identifying hidden costs, evaluating building
              finances, and ensuring you make a smart long-term investment
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
              <img src="/redesign-assets/hoods/uws-condo.png" alt="Upper West Side condos" width="640" height="512" loading="eager" />
            </div>
            <HeroGoogleRating prefix="nbhd" />
          </div>
        </div>
      </section>

      <PromisesBar variant="nbhd" />

      <PageListingsSection market="Upper West Side" propertyType="Condo" label="Upper West Side condos" />

      <section className="nbhd-intro" data-screen-label="Guide">
        <div className="nbhd-intro-inner">
          <div className="nbhd-intro-copy" data-reveal="">
            <h2>WHY ARE UPPER WEST SIDE CONDOS SO POPULAR?</h2>
            <p>
              Upper West Side condos continue to attract buyers looking for luxury living, convenience, and long term
              value in one of Manhattan’s most established residential neighborhoods. From boutique condominium
              buildings to modern high rise developments, the Upper West Side offers a wide variety of options for
              buyers seeking both comfort and investment potential.
            </p>
            <p>
              Many buyers are drawn to Upper West Side condos because of their spacious layouts, premium amenities, and
              proximity to Central Park, Riverside Park, top schools, restaurants, and cultural institutions. Condo
              living also provides flexibility and convenience, making these properties especially attractive for
              professionals, families, international buyers, and investors.
            </p>
            <p>
              At the same time, purchasing a condo on the Upper West Side requires careful market analysis. Pricing can
              vary significantly depending on location, building amenities, views, and property condition. Buyers should
              also evaluate monthly common charges, building financials, and long term resale potential before making a
              purchase.
            </p>
            <p>
              Without local expertise, it can be difficult to identify the best opportunities in a competitive Manhattan
              market. Understanding neighborhood trends, building reputation, and future market growth is essential when
              purchasing an Upper West Side condo.
            </p>
            <h2>OUR UPPER WEST SIDE CONDO SERVICES</h2>
            <p>
              We help buyers navigate the Upper West Side condo market with personalized guidance and a strategy tailored
              to their goals.
            </p>
            <p>
              Our property search services focus on identifying condos that match your lifestyle, budget, and long term
              plans. Whether you are searching for a luxury penthouse, family residence, investment property, or modern
              starter home, we help you explore the best available opportunities across the neighborhood.
            </p>
            <p>
              When you find the right property, we assist with pricing analysis, offer strategy, and negotiations to
              help you remain competitive in a fast moving market. Strong representation is especially important when
              dealing with high demand condominium inventory in Manhattan.
            </p>
            <p>
              We also help buyers review critical building details including financial health, reserve funds, common
              charges, tax implications, and building policies. Understanding these factors is essential before moving
              forward with a purchase.
            </p>
            <p>
              From inspections and attorney coordination to contract review and closing preparation, we help keep the
              process organized, efficient, and stress free.
            </p>
            <h2>BUYING A CONDO ON THE UPPER WEST SIDE</h2>
            <p>
              The Upper West Side offers an exceptional mix of classic New York charm and modern luxury living. Buyers
              can choose from historic condominium conversions, full service luxury towers, and newly developed
              residences featuring contemporary amenities and finishes.
            </p>
            <p>
              Many condo buildings on the Upper West Side provide amenities such as fitness centers, rooftop terraces,
              concierge services, children’s playrooms, and private outdoor spaces. Combined with the neighborhood’s
              residential atmosphere and cultural appeal, these features continue to attract strong buyer demand.
            </p>
            <p>
              For buyers seeking flexibility, condos often provide fewer restrictions compared to co ops, making them
              appealing for investors, pied à terre buyers, and those considering future rental opportunities.
            </p>
            <p>
              Whether you are purchasing your first Manhattan property or expanding your real estate portfolio,
              understanding market trends and building quality is essential for making a confident investment decision.
            </p>
            <h2>WHY WORK WITH US FOR UPPER WEST SIDE CONDOS</h2>
            <p>
              We understand the Upper West Side condo market and the factors that influence property value, buyer
              demand, and long term appreciation.
            </p>
            <p>
              You receive personalized support, clear communication, and local expertise throughout every stage of the
              transaction. We help simplify complex decisions and ensure buyers fully understand the financial and
              practical aspects of each property.
            </p>
            <p>
              Our goal is to make your Upper West Side condo purchase smooth, informed, and successful from the initial
              search through closing day.
            </p>
            <p>
              If you are considering buying a condo on the Upper West Side, we are ready to help you explore available
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

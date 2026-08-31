import PromisesBar from "../shared/PromisesBar";
import ResourcesSection from "../shared/ResourcesSection";
import "../../styles/neighborhoods-page.css";
import "../../styles/harlem-condos-page.css";
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

export default function HarlemCondosContent() {
  return (
    <>
      <section className="nbhd-hero" data-screen-label="Service hero">
        <div className="nbhd-hero-ring" />
        <div className="nbhd-hero-inner">
          <div data-reveal="">
            <h1>Harlem Condos — Expert Guidance for Buyers, Sellers & Investors</h1>
            <p className="nbhd-hero-lead">
              We’ll help you find the right <b>Harlem condo</b> while avoiding overpaying, excessive fees, and properties
              that don't fit your long-term goals
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
              <img src="/redesign-assets/hoods/harlem-condos.png" alt="Harlem condos" width="640" height="512" loading="eager" />
            </div>
            <HeroGoogleRating prefix="nbhd" />
          </div>
        </div>
      </section>

      <PromisesBar variant="nbhd" />

      <PageListingsSection market="Harlem" propertyType="Condo" label="Harlem condos" />

      <section className="nbhd-intro" data-screen-label="Guide">
        <div className="nbhd-intro-inner">
          <div className="nbhd-intro-copy" data-reveal="">
            <h2>WHY ARE HARLEM CONDOS IN HIGH DEMAND?</h2>
            <p>
              Harlem condos continue to attract buyers looking for modern convenience, strong long term value, and access
              to one of Manhattan’s most vibrant neighborhoods. From boutique developments to luxury high rise
              residences, Harlem offers a wide range of condominium options for buyers seeking ownership flexibility and
              contemporary amenities.
            </p>
            <p>
              Many buyers are drawn to Harlem condos because they often provide more space and value compared to other
              Manhattan neighborhoods. Features such as private balconies, fitness centers, rooftop terraces, doormen,
              and updated interiors make condo living especially appealing for professionals, first time buyers, and
              investors alike.
            </p>
            <p>
              At the same time, buying a condo in Harlem comes with important considerations. Inventory can move quickly,
              pricing varies block by block, and building financials, common charges, and future resale potential all
              play a major role in the decision making process.
            </p>
            <p>
              Without local expertise, buyers may miss opportunities or overlook details that affect long term value.
              Understanding the Harlem condo market requires knowledge of new developments, established buildings,
              neighborhood growth, and investment trends across the area.
            </p>
            <h2>OUR HARLEM CONDO SERVICES</h2>
            <p>
              We guide buyers through every stage of the Harlem condo buying process with a strategy tailored to their
              goals, budget, and lifestyle needs.
            </p>
            <p>
              Our property search services help identify condos that match your priorities, whether you are looking for a
              luxury penthouse, a modern starter home, or an investment property with strong appreciation potential. We
              provide access to available listings, upcoming opportunities, and valuable market insights throughout
              Harlem.
            </p>
            <p>
              When you find the right condo, we assist with offer strategy, pricing analysis, and negotiations to help
              you secure the best possible terms. In competitive Manhattan markets, strong representation can make a
              significant difference.
            </p>
            <p>
              We also help buyers review important building information including financial health, common charges, tax
              considerations, reserve funds, and building rules. Understanding these details is essential before moving
              forward with a purchase.
            </p>
            <p>
              From inspections and attorney coordination to contract review and closing preparation, we help keep every
              step organized and stress free.
            </p>
            <h2>BUYING A CONDO IN HARLEM</h2>
            <p>
              Harlem offers a diverse condo market with options ranging from historic conversions to sleek new
              construction developments. Buyers can find residences that combine modern finishes with the neighborhood’s
              rich architectural and cultural history.
            </p>
            <p>
              Many Harlem condo buildings are located near restaurants, parks, subway lines, and shopping, making the
              neighborhood attractive for both homeowners and investors. Areas such as Central Harlem, South Harlem, and
              West Harlem continue to see strong buyer demand and ongoing development.
            </p>
            <p>
              For buyers seeking flexibility, condos often provide a simpler ownership structure compared to co ops, with
              fewer restrictions and more financing options. This makes Harlem condos especially appealing for
              international buyers, investors, and those planning future rental opportunities.
            </p>
            <p>
              Whether you are purchasing your first Manhattan property or expanding your real estate portfolio,
              understanding market trends and building quality is essential for making a confident investment.
            </p>
            <h2>WHY WORK WITH US FOR HARLEM CONDOS</h2>
            <p>
              We understand the Harlem condo market and the factors that influence property value, buyer demand, and long
              term appreciation. Our focus is on helping buyers find the right property while protecting their interests
              throughout the transaction.
            </p>
            <p>
              You receive clear communication, local expertise, and personalized support from the first showing to
              closing day. We help simplify complex decisions and provide honest guidance at every stage of the process.
            </p>
            <p>Our goal is to make your Harlem condo purchase as smooth, informed, and successful as possible.</p>
            <p>
              If you are considering buying a condo in Harlem, we are ready to help you explore the market and find the
              right fit for your lifestyle and investment goals.
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

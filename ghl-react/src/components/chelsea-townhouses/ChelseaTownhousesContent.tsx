import PromisesBar from "../shared/PromisesBar";
import ResourcesSection from "../shared/ResourcesSection";
import "../../styles/neighborhoods-page.css";
import "../../styles/chelsea-townhouses-page.css";
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

export default function ChelseaTownhousesContent() {
  return (
    <>
      <section className="nbhd-hero" data-screen-label="Service hero">
        <div className="nbhd-hero-ring" />
        <div className="nbhd-hero-inner">
          <div data-reveal="">
            <h1>Chelsea Townhouses — Expert Guidance for Buyers, Sellers & Investors</h1>
            <p className="nbhd-hero-lead">
              We'll help you purchase the right Chelsea townhouse by identifying potential maintenance concerns,
              evaluating long-term value, and negotiating favorable terms to protect your investment
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
              <img src="/redesign-assets/hoods/chelsea-townhouse.png" alt="Chelsea townhouses" width="640" height="512" loading="eager" />
            </div>
            <HeroGoogleRating prefix="nbhd" />
          </div>
        </div>
      </section>

      <PromisesBar variant="nbhd" />

      <PageListingsSection market="Chelsea" propertyType="Townhouse" label="Chelsea townhouses" />

      <section className="nbhd-intro" data-screen-label="Guide">
        <div className="nbhd-intro-inner">
          <div className="nbhd-intro-copy" data-reveal="">
            <h2>WHY ARE CHELSEA TOWNHOUSES SO DESIRABLE?</h2>
            <p>
              Chelsea townhouses offer a rare combination of historic charm, luxury living, and prime Manhattan
              location. Known for their classic brownstone architecture, spacious layouts, and private outdoor spaces,
              these homes continue to attract buyers seeking both character and long term value.
            </p>
            <p>
              Many Chelsea townhouses feature original details such as high ceilings, decorative moldings, fireplaces,
              and large windows, while others have been fully renovated with modern luxury finishes. Buyers are drawn to
              the neighborhood’s vibrant atmosphere, art galleries, restaurants, shopping, and proximity to the High
              Line and Hudson River Park.
            </p>
            <p>
              At the same time, townhouse inventory in Chelsea is limited, and pricing can vary significantly depending
              on location, condition, and renovation quality. Understanding the market and evaluating each property
              carefully is essential before making a purchase.
            </p>
            <h2>OUR CHELSEA TOWNHOUSE SERVICES</h2>
            <p>We help buyers navigate the Chelsea townhouse market with personalized support and local expertise.</p>
            <p>
              Our services include property searches, market analysis, negotiations, and guidance throughout the entire
              buying process. Whether you are looking for a historic brownstone, a renovated luxury residence, or an
              investment property, we help identify the best opportunities for your goals.
            </p>
            <p>
              We also assist with inspections, renovation evaluations, attorney coordination, and closing preparation to
              help keep the transaction smooth and organized.
            </p>
            <h2>BUYING A TOWNHOUSE IN CHELSEA</h2>
            <p>
              Chelsea remains one of Manhattan’s most desirable neighborhoods, offering a blend of historic
              architecture, modern development, and vibrant city living.
            </p>
            <p>
              Townhouses throughout Chelsea range from classic brownstones on quiet residential streets to modernized
              luxury homes near some of the neighborhood’s most popular destinations. Buyers often choose Chelsea for
              its convenience, cultural scene, dining options, and strong long term property value.
            </p>
            <p>
              Whether you are purchasing a primary residence, pied à terre, or investment property, understanding the
              Chelsea townhouse market is essential for making a confident decision.
            </p>
            <h2>WHY WORK WITH US</h2>
            <p>
              We understand the unique aspects of buying townhouse properties in Chelsea and provide guidance throughout
              every stage of the transaction.
            </p>
            <p>
              From private tours and negotiations to inspections and closing coordination, we help buyers move through
              the process with confidence and clarity.
            </p>
            <p>
              If you are considering buying a Chelsea townhouse, we are ready to help you explore available
              opportunities and find the right property for your lifestyle and goals.
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

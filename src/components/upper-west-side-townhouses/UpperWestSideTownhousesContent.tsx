import ResourcesSection from "../shared/ResourcesSection";
import "../../styles/neighborhoods-page.css";
import "../../styles/upper-west-side-townhouses-page.css";
import "../../styles/contact-section.css";

const CHECK_ICON = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C98A2C" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

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

export default function UpperWestSideTownhousesContent() {
  return (
    <>
      <section className="nbhd-hero" data-screen-label="Service hero">
        <div className="nbhd-hero-ring" />
        <div className="nbhd-hero-inner">
          <div data-reveal="">
            <h2>Upper West Side Townhouses — Expert Guidance for Buyers, Sellers & Investors</h2>
            <p className="nbhd-hero-lead">
              We’ll help you purchase the right Upper West Side townhouse while avoiding costly structural, maintenance,
              and compliance issues that can impact your investment
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

      <section className="nbhd-promises-sec" data-screen-label="Promises">
        <div className="nbhd-promises-ring" />
        <div className="nbhd-promises-inner">
          <div className="nbhd-promises">
            <div className="nbhd-promise" data-reveal="">
              <div className="nbhd-promise-head">
                <span className="nbhd-promise-icon">{CHECK_ICON}</span>
                <h3 className="nbhd-promise-title">SMOOTH TRANSACTION</h3>
              </div>
              <p>With limited risk throughout the buying process.</p>
            </div>
            <div className="nbhd-promise" data-reveal="">
              <div className="nbhd-promise-head">
                <span className="nbhd-promise-icon">{CHECK_ICON}</span>
                <h3 className="nbhd-promise-title">NO PRESSURE</h3>
              </div>
              <p>No pressure to overpay or purchase within a specific timeframe.</p>
            </div>
            <div className="nbhd-promise" data-reveal="">
              <div className="nbhd-promise-head">
                <span className="nbhd-promise-icon">{CHECK_ICON}</span>
                <h3 className="nbhd-promise-title">ONGOING SUPPORT</h3>
              </div>
              <p>A dedicated team that remains available even after the transaction is complete.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="nbhd-intro" data-screen-label="Guide">
        <div className="nbhd-intro-inner">
          <div className="nbhd-intro-copy" data-reveal="">
            <h2>WHY ARE UPPER WEST SIDE TOWNHOUSES SO DESIRABLE?</h2>
            <p>
              Upper West Side townhouses represent some of the most elegant and sought after properties in Manhattan.
              Known for their classic architecture, tree lined streets, and spacious layouts, these homes offer a rare
              combination of historic character and refined city living. Buyers are often drawn to Upper West Side
              townhouses for their privacy, generous square footage, and timeless architectural details.
            </p>
            <p>
              Many townhouses in the Upper West Side feature original craftsmanship including grand staircases, high
              ceilings, decorative moldings, fireplaces, and private outdoor spaces. These properties provide a level of
              space and flexibility that is increasingly difficult to find in Manhattan condominiums or co ops.
            </p>
            <p>
              At the same time, purchasing a townhouse in the Upper West Side requires careful evaluation. Inventory is
              limited, pricing can vary significantly by block, and renovation history plays an important role in long
              term value. Buyers must also consider landmark preservation guidelines, maintenance costs, and the
              condition of older systems and structures.
            </p>
            <p>
              Without local market expertise, it can be difficult to fully assess the true value and future potential of
              a townhouse property. Understanding the neighborhood, renovation quality, and long term appreciation
              trends is essential before making a major investment.
            </p>
            <h2>OUR UPPER WEST SIDE TOWNHOUSE SERVICES</h2>
            <p>
              We guide buyers through every stage of the Upper West Side townhouse market with personalized support and
              local expertise.
            </p>
            <p>
              Our property search services help buyers identify townhouses that align with their lifestyle, space
              requirements, and investment goals. Whether you are looking for a fully renovated historic residence, a
              multi family townhouse, or a property with renovation potential, we help narrow down the best
              opportunities available.
            </p>
            <p>
              When you find the right townhouse, we assist with market analysis, pricing strategy, and negotiation to
              help position your offer competitively. Townhouses in prime Upper West Side locations often attract strong
              demand, making experienced representation especially valuable.
            </p>
            <p>
              We also help buyers evaluate important property details including structural condition, renovation
              history, zoning considerations, and long term ownership costs. From inspections and contractor referrals
              to attorney coordination and closing preparation, we help manage the process from start to finish.
            </p>
            <h2>BUYING A TOWNHOUSE ON THE UPPER WEST SIDE</h2>
            <p>
              The Upper West Side is known for its historic charm, cultural landmarks, and residential atmosphere.
              Buyers are attracted to the neighborhood’s proximity to Central Park, Riverside Park, top schools,
              restaurants, museums, and convenient transportation throughout Manhattan.
            </p>
            <p>
              Townhouses throughout the Upper West Side range from beautifully restored single family homes to
              investment properties with multiple units. Many properties are located on quiet residential blocks lined
              with classic brownstones and historic architecture that define the neighborhood’s identity.
            </p>
            <p>
              For buyers seeking long term value, Upper West Side townhouses continue to be among Manhattan’s most
              stable and prestigious property types. However, every property comes with unique considerations related to
              condition, layout, and future resale potential.
            </p>
            <p>
              Whether you are searching for a primary residence, family home, or investment opportunity, understanding
              the nuances of the Upper West Side townhouse market is critical for making informed decisions.
            </p>
            <h2>WHY WORK WITH US FOR UPPER WEST SIDE TOWNHOUSES</h2>
            <p>
              We understand the complexities involved in purchasing historic townhouse properties in Manhattan. Our goal
              is to help buyers secure the right property while protecting their interests throughout the transaction.
            </p>
            <p>
              You receive clear communication, honest guidance, and local expertise tailored specifically to the Upper
              West Side townhouse market. We help buyers evaluate each property carefully beyond the listing
              presentation alone.
            </p>
            <p>
              From private tours and negotiations to inspections and closing coordination, we are committed to making
              the buying experience smooth, informed, and efficient.
            </p>
            <p>
              If you are considering purchasing an Upper West Side townhouse, we are ready to help you explore available
              opportunities and navigate the market with confidence.
            </p>
          </div>
        </div>
      </section>

      <section className="nbhd-reviews" data-screen-label="Reviews">
        <div className="nbhd-reviews-inner">
          <iframe
            className="nbhd-reviews-frame"
            title="Montfort Real Estate reviews"
            src="https://reputationhub.site/reputation/widgets/review_widget/J3cYmGK3p1ja7wTS63Dn"
            loading="lazy"
          />
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

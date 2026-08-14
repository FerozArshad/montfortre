import ContactSection from "../shared/ContactSection";
import ResourcesSection from "../shared/ResourcesSection";
import "../../styles/about-page.css";

const CHECK_ICON = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path d="M6 12.5l3.5 3.5L18 7.5" stroke="#0F1729" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const NEIGHBORHOODS = [
  {
    href: "/harlem/",
    image: "/redesign-assets/hoods/harlem.webp",
    alt: "Harlem Realtor",
    borough: "Manhattan",
    title: "Harlem Realtor",
    description: "Historic brownstones, rich culture, and timeless Manhattan charm.",
  },
  {
    href: "/upper-west-side/",
    image: "/redesign-assets/hoods/upper-west-side.webp",
    alt: "Upper West Side Realtor",
    borough: "Manhattan",
    title: "Upper West Side Realtor",
    description: "Elegant brownstones, cultural landmarks, and classic Manhattan living.",
  },
  {
    href: "/upper-east-side/",
    image: "/redesign-assets/hoods/upper-east-side.webp",
    alt: "Upper East Side Realtor",
    borough: "Manhattan",
    title: "Upper East Side Realtor",
    description: "Luxury residences, world-class culture, and timeless Upper Manhattan elegance.",
  },
  {
    href: "/chelsea/",
    image: "/redesign-assets/hoods/chelsea.webp",
    alt: "Chelsea Realtor",
    borough: "Manhattan",
    title: "Chelsea Realtor",
    description: "Modern luxury, world-class art, and vibrant Manhattan living.",
  },
  {
    href: "/downtown-brooklyn/",
    image: "/redesign-assets/hoods/downtown-brooklyn.webp",
    alt: "Downtown Brooklyn Realtor",
    borough: "Brooklyn",
    title: "Downtown Brooklyn Realtor",
    description: "Modern high-rises, unmatched transit access, and vibrant Brooklyn living.",
  },
  {
    href: "/dumbo/",
    image: "/redesign-assets/hoods/dumbo.webp",
    alt: "DUMBO Realtor",
    borough: "Brooklyn",
    title: "DUMBO Realtor",
    description: "Cobblestone streets, waterfront views, and the iconic Brooklyn skyline.",
  },
  {
    href: "/brooklyn-heights/",
    image: "/redesign-assets/hoods/brooklyn-heights.webp",
    alt: "Brooklyn Heights Realtor",
    borough: "Brooklyn",
    title: "Brooklyn Heights Realtor",
    description: "Landmark brownstones, promenade views, and quiet Brooklyn elegance.",
  },
  {
    href: "/williamsburg/",
    image: "/redesign-assets/hoods/williamsburg.webp",
    alt: "Williamsburg Realtor",
    borough: "Brooklyn",
    title: "Williamsburg Realtor",
    description: "Creative energy, waterfront lofts, and vibrant Brooklyn culture.",
  },
  {
    href: "/bedford-stuyvesant/",
    image: "/redesign-assets/hoods/bedford-stuyvesant.webp",
    alt: "Bedford-Stuyvesant Realtor",
    borough: "Brooklyn",
    title: "Bedford-Stuyvesant Realtor",
    description: "Classic brownstones, tree-lined blocks, and rich Brooklyn heritage.",
  },
  {
    href: "/crown-heights/",
    image: "/redesign-assets/hoods/crown-heights.webp",
    alt: "Crown Heights Realtor",
    borough: "Brooklyn",
    title: "Crown Heights Realtor",
    description: "Historic homes, cultural diversity, and dynamic Brooklyn living.",
  },
] as const;

export default function AboutUsContent() {
  return (
    <>
      <section className="abt-hero" data-screen-label="About hero">
        <img className="abt-hero-bg" src="/redesign-assets/hoods/harlem.webp" alt="Harlem" aria-hidden="true" />
        <div className="abt-hero-shade" />
        <div className="abt-hero-ring" />
        <div className="abt-hero-inner">
          <div data-reveal="">
            <div className="abt-kicker">
              <span className="abt-kicker-line" />
              <span className="abt-hero-kicker-label">About Montfort Real Estate</span>
            </div>
            <h1>
              Meet Stanley Montfort, trusted NYC real estate advisor with <span className="abt-hero-accent">20+ years</span> of experience
            </h1>
            <p className="abt-hero-lead">
              Whether you&apos;re buying your first home, investing in a brownstone, or selling a valuable property, Stanley provides the expertise, market insight, and personalized guidance needed to make informed decisions and achieve the best possible outcome.
            </p>
            <div className="abt-hero-ctas">
              <a href="tel:646-970-1078" className="abt-hero-tel">
                Call 1-646-970-1078
              </a>
              <a href="https://calendly.com/montfort" className="abt-hero-book">
                Schedule a Consultation
              </a>
            </div>
          </div>
          <div className="abt-hero-portrait" data-reveal="">
            <div className="abt-hero-halo" />
            <div className="abt-hero-dot" />
            <div className="abt-hero-photo">
              <img src="/redesign-assets/stanley-portrait.webp" alt="Stanley Montfort" />
            </div>
          </div>
        </div>
      </section>

      <section className="abt-promises" data-screen-label="Client promises">
        <div className="abt-promises-inner">
          <div className="abt-promise" data-reveal="">
            <span className="abt-promise-icon">{CHECK_ICON}</span>
            <div>
              <div className="abt-promise-title">Smooth Transaction</div>
              <p>With limited risk throughout the buying process.</p>
            </div>
          </div>
          <div className="abt-promise" data-reveal="">
            <span className="abt-promise-icon">{CHECK_ICON}</span>
            <div>
              <div className="abt-promise-title">No Pressure</div>
              <p>No pressure to overpay or purchase within a specific timeframe.</p>
            </div>
          </div>
          <div className="abt-promise" data-reveal="">
            <span className="abt-promise-icon">{CHECK_ICON}</span>
            <div>
              <div className="abt-promise-title">Ongoing Support</div>
              <p>A dedicated team that stays available even after the deal closes.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="abt-approach" data-screen-label="Approach">
        <div className="abt-approach-inner" data-reveal="">
          <div className="abt-section-kicker">Our approach</div>
          <h2>Expert guidance for every NYC real estate decision</h2>
          <span className="abt-rule" />
          <p>
            Whether you&apos;re purchasing your first home, financing a brownstone, investing in multifamily properties, or preparing to sell, Stanley provides the market expertise and strategic guidance needed to navigate New York City&apos;s competitive landscape, helping clients make informed decisions, avoid costly mistakes, and achieve the best possible outcome for their unique situation.
          </p>
        </div>
      </section>

      <section className="abt-story" data-screen-label="Story">
        <div className="abt-story-inner">
          <div data-reveal="">
            <div className="abt-kicker">
              <span className="abt-kicker-line" />
              <span className="abt-story-kicker-label">How it started</span>
            </div>
            <h2>How Stanley Montfort got started</h2>
            <div className="abt-story-copy">
              <p>
                Stanley Montfort is a dynamic, accomplished real estate professional whose expertise and passion for the industry have made him a standout in New York City. With a background in <strong>law and the military</strong>, he has made his mark in the city&apos;s competitive brownstone and townhouse market, playing a pivotal role in over <strong>one billion dollars</strong> worth of sales.
              </p>
              <p>
                At <strong>Leslie J. Garfield</strong>, he established himself as an expert in the Harlem townhouse market, renowned for navigating even the most complex co-ownership transactions with ease, working with SROs, negotiating with tenants, and securing seller financing while keeping every party satisfied.
              </p>
              <p>
                Now at <strong>Serhant</strong>, one of New York&apos;s most renowned brokerages, Stanley has expanded his expertise to condos, co-ops, and new developments while maintaining a stronghold on the townhouse and brownstone market.
              </p>
              <p>
                What sets Stanley apart is his ability to merge creativity with precision. Deep marketing knowledge, strategic thinking, and impeccable analytical skills let him tackle the most challenging deals with confidence and positive outcomes for everyone involved.
              </p>
              <p>
                More than a successful professional, he is known for a genuinely personalized approach, complete transparency, data-driven decisions, and honest conversations tailored to each client&apos;s needs.
              </p>
              <p>
                Originally from New Jersey, Stanley is a graduate of <strong>Fordham University</strong>, where he earned his JD and a Master&apos;s in International Political Economy and Development.
              </p>
            </div>
          </div>
          <div className="abt-story-photo" data-reveal="">
            <div className="abt-story-frame">
              <img src="/redesign-assets/stanley-portrait.webp" alt="Stanley Montfort" />
            </div>
          </div>
        </div>
      </section>

      <section className="abt-hoods" data-screen-label="Neighborhoods">
        <div className="abt-hoods-inner">
          <div className="abt-hoods-head" data-reveal="">
            <div className="abt-section-kicker">Where we work</div>
            <h2>Proudly serving NYC&apos;s most desirable neighborhoods</h2>
            <p>
              From the historic brownstones of Harlem and Brooklyn Heights to the luxury residences of the Upper East Side and Chelsea, our local expertise helps you understand each neighborhood&apos;s character, market trends, and opportunities.
            </p>
            <span className="abt-rule" />
          </div>
          <div className="abt-hoods-grid">
            {NEIGHBORHOODS.map((hood) => (
              <a key={hood.href} data-reveal="" href={hood.href} className="abt-hood-card">
                <img src={hood.image} alt={hood.alt} loading="lazy" />
                <div className="abt-hood-shade" />
                <div className="abt-hood-boro">{hood.borough}</div>
                <div className="abt-hood-body">
                  <div className="abt-hood-title">{hood.title}</div>
                  <div className="abt-hood-desc">{hood.description}</div>
                  <div className="abt-hood-explore">
                    Explore <span>→</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <ResourcesSection />
      <ContactSection />
    </>
  );
}

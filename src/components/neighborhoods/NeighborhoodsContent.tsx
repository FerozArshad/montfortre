import ContactSection from "../shared/ContactSection";
import "../../styles/neighborhoods-page.css";

type PropertyLink = {
  href: string;
  title: string;
  subtitle: string;
};

type ManhattanHood = {
  href: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  imageFirst: boolean;
  types: PropertyLink[];
};

type BrooklynHood = {
  href: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  wide?: boolean;
  types: PropertyLink[];
};

const PROMISES = [
  {
    title: (
      <>
        Smooth
        <br />
        Transaction
      </>
    ),
    text: "With limited risk throughout the buying process.",
  },
  {
    title: (
      <>
        No
        <br />
        Pressure
      </>
    ),
    text: "No pressure to overpay or purchase within a specific timeframe.",
  },
  {
    title: (
      <>
        Ongoing
        <br />
        Support
      </>
    ),
    text: "A dedicated team that remains available even after the transaction is complete.",
  },
] as const;

const MANHATTAN: ManhattanHood[] = [
  {
    href: "/harlem/",
    title: "Harlem Realtor",
    description: "Historic architecture, world-famous culture, and one of Manhattan’s deepest brownstone markets.",
    image: "/redesign-assets/nbhd/65438018.webp",
    alt: "Harlem brownstones",
    imageFirst: true,
    types: [
      { href: "/harlem-brownstones/", title: "Harlem Brownstones", subtitle: "Historic architecture, timeless charm, and classic Harlem living" },
      { href: "/harlem-condos/", title: "Harlem Condos", subtitle: "Modern amenities, urban convenience, and vibrant Harlem living" },
      { href: "/harlem-sros/", title: "Harlem SROs", subtitle: "Affordable housing, investment potential, and unique opportunities" },
      { href: "/harlem-co-ownership/", title: "Harlem Co-Ownership", subtitle: "Shared ownership, lower costs, and greater buying power" },
    ],
  },
  {
    href: "/upper-west-side/",
    title: "Upper West Side Realtor",
    description: "Pre-war grandeur between Central Park and Riverside, with townhouses, condos, and classic co-ops.",
    image: "/redesign-assets/nbhd/eadc74f3.webp",
    alt: "Upper West Side",
    imageFirst: false,
    types: [
      { href: "/upper-west-side-townhouses/", title: "Upper West Side Townhouses", subtitle: "Elegant townhomes, historic charm, and classic Manhattan living" },
      { href: "/upper-west-side-condos/", title: "Upper West Side Condos", subtitle: "Modern luxury, premium amenities, and sophisticated city living" },
      { href: "/upper-west-side-co-ops-2/", title: "Upper West Side Co-Ops", subtitle: "Classic residences, strong communities, and timeless Manhattan appeal" },
    ],
  },
  {
    href: "/upper-east-side/",
    title: "Upper East Side Realtor",
    description: "Museum Mile, Carnegie Hill, and Lenox Hill — Manhattan’s most prestigious addresses.",
    image: "/redesign-assets/nbhd/943207db.webp",
    alt: "Upper East Side",
    imageFirst: true,
    types: [
      { href: "/upper-east-side-townhouses/", title: "Upper East Side Townhouses", subtitle: "Elegant townhomes, timeless charm, and prestigious Manhattan living" },
      { href: "/upper-east-side-condos/", title: "Upper East Side Condos", subtitle: "Luxury residences, premium amenities, and sophisticated city living" },
      { href: "/upper-east-side-co-ops/", title: "Upper East Side Co-Ops", subtitle: "Classic residences, refined communities, and timeless Upper East Side appeal" },
    ],
  },
  {
    href: "/chelsea/",
    title: "Chelsea Realtor",
    description: "Galleries, the High Line, and a mix of landmarked townhouses and new-development condos.",
    image: "/redesign-assets/nbhd/90c53c45.webp",
    alt: "Chelsea",
    imageFirst: false,
    types: [
      { href: "/chelsea-townhouses/", title: "Chelsea Townhouses", subtitle: "Historic townhomes, architectural charm, and stylish city living" },
      { href: "/chelsea-condos/", title: "Chelsea Condos", subtitle: "Modern luxury, premium amenities, and vibrant Manhattan living" },
      { href: "/chelsea-co-ops-2/", title: "Chelsea Co-Ops", subtitle: "Classic residences, strong communities, and timeless Chelsea appeal" },
    ],
  },
];

const BROOKLYN: BrooklynHood[] = [
  {
    href: "/downtown-brooklyn/",
    title: "Downtown Brooklyn Realtor",
    description: "High-rise living at the borough’s transit and business core.",
    image: "/redesign-assets/nbhd/0dd93ed5.webp",
    alt: "Downtown Brooklyn",
    types: [
      { href: "/downtown-brooklyn-condos-2/", title: "Downtown Brooklyn Condos", subtitle: "Modern high-rises, premium amenities, and convenient city living" },
      { href: "/downstone-brooklyn-co-ops/", title: "Downtown Brooklyn Co-Ops", subtitle: "Established communities, great value, and classic Brooklyn living" },
    ],
  },
  {
    href: "/dumbo/",
    title: "Dumbo Realtor",
    description: "Converted warehouses, cobblestone streets, and the best skyline views in the city.",
    image: "/redesign-assets/nbhd/d86879d1.webp",
    alt: "Dumbo",
    types: [
      { href: "/dumbo-condos/", title: "Dumbo Condos", subtitle: "Waterfront views, modern luxury, and iconic Brooklyn living" },
      { href: "/dumbo-co-ops-2/", title: "Dumbo Co-Ops", subtitle: "Historic character, vibrant communities, and lasting Brooklyn appeal" },
    ],
  },
  {
    href: "/brooklyn-heights/",
    title: "Brooklyn Heights Realtor",
    description: "The city’s first landmarked district — the Promenade, and blocks of 19th-century townhouses.",
    image: "/redesign-assets/nbhd/745851cc.webp",
    alt: "Brooklyn Heights",
    types: [
      { href: "/brooklyn-heights-townhouses-2/", title: "Brooklyn Heights Townhouses", subtitle: "Historic brownstones, skyline views, and timeless Brooklyn charm" },
      { href: "/brooklyn-heights-condos-3/", title: "Brooklyn Heights Condos", subtitle: "Luxury residences, waterfront views, and sophisticated city living" },
      { href: "/brooklyn-heights-co-ops-3/", title: "Brooklyn Heights Co-Ops", subtitle: "Classic residences, strong communities, and enduring Brooklyn appeal" },
    ],
  },
  {
    href: "/bedford-stuyvesant/",
    title: "Bedford-Stuyvesant Realtor",
    description: "One of the largest concentrations of intact brownstones anywhere in New York.",
    image: "/redesign-assets/nbhd/66fdf193.webp",
    alt: "Bedford-Stuyvesant",
    types: [
      { href: "/bedford-stuyvesant-brownstones-2/", title: "Bedford-Stuyvesant Brownstones", subtitle: "Historic brownstones, rich culture, and authentic Brooklyn living" },
      { href: "/bedford-stuyvesant/", title: "Bedford-Stuyvesant Multifamily", subtitle: "Two-, three-, and four-family houses with strong rental income" },
    ],
  },
  {
    href: "/williamsburg/",
    title: "Williamsburg Realtor",
    description: "Waterfront towers, converted lofts, and Brooklyn’s most in-demand nightlife and dining.",
    image: "/redesign-assets/nbhd/f55c71f9.webp",
    alt: "Williamsburg",
    types: [
      { href: "/williamsburg/", title: "Williamsburg Condos", subtitle: "New development, waterfront amenities, and strong resale demand" },
      { href: "/williamsburg/", title: "Williamsburg Townhouses", subtitle: "Row houses and conversions with rental upside" },
    ],
  },
  {
    href: "/crown-heights/",
    title: "Crown Heights Realtor",
    description: "Limestone row houses beside the Botanic Garden — still one of Brooklyn’s best values.",
    image: "/redesign-assets/nbhd/b6c26a69.webp",
    alt: "Crown Heights",
    types: [
      { href: "/crown-heights/", title: "Crown Heights Brownstones", subtitle: "Limestone and brownstone row houses with original detail" },
      { href: "/crown-heights/", title: "Crown Heights Multifamily", subtitle: "Investment buildings with room to reposition" },
    ],
  },
  {
    href: "/park-slope/",
    title: "Park Slope Realtor",
    description: "Prospect Park at the door, celebrated schools, and some of the most sought-after row houses in Brooklyn.",
    image: "/redesign-assets/nbhd/69cc59cd.webp",
    alt: "Park Slope",
    wide: true,
    types: [
      { href: "/park-slope/", title: "Park Slope Brownstones", subtitle: "Landmarked row houses steps from Prospect Park" },
      { href: "/park-slope/", title: "Park Slope Co-Ops", subtitle: "Pre-war apartments with strong communities and steady value" },
    ],
  },
];

const CHECK_ICON = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C98A2C" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

function PtArrow({ compact }: { compact?: boolean }) {
  const w = compact ? 18 : 20;
  const h = compact ? 13 : 14;
  return (
    <svg className="pt-arrow" width={w} height={h} viewBox="0 0 20 14" fill="none">
      <path d="M1 7h16M12.5 1.5L18 7l-5.5 5.5" stroke="#C98A2C" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ManhattanCopy({ hood }: { hood: ManhattanHood }) {
  return (
    <div className="nbhd-copy">
      <a href={hood.href} className="nbhd-copy-title">
        {hood.title}
      </a>
      <p>{hood.description}</p>
      <div className="nbhd-types">
        {hood.types.map((item) => (
          <a key={item.title} href={item.href} className="pt-row pt-row--mh">
            <span className="pt-row-copy">
              <span className="pt-row-title pt-row-title--mh">{item.title}</span>
              <span className="pt-row-sub pt-row-sub--mh">{item.subtitle}</span>
            </span>
            <PtArrow />
          </a>
        ))}
      </div>
    </div>
  );
}

export default function NeighborhoodsContent() {
  return (
    <>
      <section className="nbhd-hero" data-screen-label="Neighborhoods hero">
        <div className="nbhd-hero-ring" />
        <div className="nbhd-hero-inner">
          <div data-reveal="">
            <div className="nbhd-crumb">
              <a href="/" className="nbhd-crumb-link">Home</a> <span className="nbhd-crumb-sep">/</span> <span className="nbhd-crumb-here">Neighborhoods</span>
            </div>
            <h1>NYC Neighborhoods</h1>
            <p className="nbhd-hero-lead">
              Expert local insight for buyers, sellers and investors. We’ll help you find the <strong>right NYC neighborhood</strong> based on your lifestyle, budget and long-term goals — so you can buy with confidence and avoid costly mistakes.
            </p>
            <div className="nbhd-hero-ctas">
              <a href="https://calendly.com/montfort" className="nbhd-hero-book">
                Book Now
              </a>
              <a href="tel:646-970-1078" className="nbhd-hero-tel">
                (646) 970-1078
              </a>
            </div>
            <div className="nbhd-hero-boro">
              <div className="nbhd-hero-boro-label">Explore by borough</div>
              <div className="nbhd-hero-boro-links">
                <a href="#manhattan" className="nbhd-hero-boro-link">Manhattan · 4 neighborhoods</a>
                <a href="#brooklyn" className="nbhd-hero-boro-link">Brooklyn · 7 neighborhoods</a>
              </div>
            </div>
          </div>
          <div className="nbhd-hero-media" data-reveal="">
            <div className="nbhd-hero-frame">
              <img src="/redesign-assets/nbhd/d86879d1.webp" alt="New York City skyline from Brooklyn" />
            </div>
            <div className="nbhd-hero-rating">
              <svg width="50" height="50" viewBox="0 0 48 48" role="img" aria-label="Google">
                <path fill="#4285F4" d="M45.1 24.5c0-1.6-.1-2.8-.4-4H24v7.3h12.1c-.2 2-1.6 5-4.5 7l-.1.3 6.5 5 .5.1c4.2-3.8 6.6-9.5 6.6-15.7" />
                <path fill="#34A853" d="M24 46c5.9 0 10.9-1.9 14.5-5.3l-6.9-5.4c-1.8 1.3-4.3 2.2-7.6 2.2-5.8 0-10.7-3.8-12.5-9.1l-.3.1-6.7 5.2-.1.3C8 41.6 15.4 46 24 46" />
                <path fill="#FBBC05" d="M11.5 28.4c-.5-1.4-.7-2.9-.7-4.4s.3-3 .7-4.4v-.3l-6.8-5.3-.2.1A22 22 0 0 0 2 24c0 3.5.9 6.9 2.5 9.9z" />
                <path fill="#EA4335" d="M24 10.5c4.1 0 6.9 1.8 8.5 3.3l6.2-6C34.9 4.3 29.9 2 24 2 15.4 2 8 6.4 4.5 14.1l7 5.4c1.8-5.3 6.7-9 12.5-9" />
              </svg>
              <div className="nbhd-hero-rating-copy">
                <span className="nbhd-hero-rating-title">Google Rating</span>
                <div className="nbhd-hero-rating-row">
                  <span className="nbhd-hero-rating-score">5.0</span>
                  <span className="nbhd-hero-rating-stars">★★★★★</span>
                </div>
                <span className="nbhd-hero-rating-count">
                  Over <strong>57 Reviews</strong>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="nbhd-promises-sec" data-screen-label="Promises">
        <div className="nbhd-promises-ring" />
        <div className="nbhd-promises-inner">
          <div className="nbhd-promises-kicker">
            <span className="nbhd-promises-kicker-line" />
            <span className="nbhd-promises-kicker-label">What working with us means</span>
            <span className="nbhd-promises-kicker-line" />
          </div>
          <div className="nbhd-promises">
            {PROMISES.map((item) => (
              <div key={item.text} className="nbhd-promise" data-reveal="">
                <div className="nbhd-promise-head">
                  <span className="nbhd-promise-icon">{CHECK_ICON}</span>
                  <span className="nbhd-promise-title">{item.title}</span>
                </div>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="nbhd-intro" data-screen-label="Intro">
        <div className="nbhd-intro-inner">
          <div data-reveal="">
            <div className="nbhd-intro-kicker">
              <span className="nbhd-intro-kicker-line" />
              <span className="nbhd-intro-kicker-label">Neighborhood guides</span>
            </div>
            <h2>Explore NYC Neighborhoods with Confidence</h2>
          </div>
          <div className="nbhd-intro-copy" data-reveal="">
            <p>
              Finding the right neighborhood is just as important as finding the right property. Whether you’re searching for a historic Harlem brownstone, a luxury Upper East Side condo, or an investment opportunity in Brooklyn, our neighborhood guides provide local market insights, lifestyle information, pricing trends, and community highlights to help you make an informed decision.
            </p>
            <p>
              Browse NYC neighborhoods below, or call us at <a href="tel:646-970-1078" className="nbhd-intro-phone">1-646-970-1078</a> for personalized guidance from a local real estate expert.
            </p>
            <div className="nbhd-intro-pills">
              <a href="#manhattan" className="nbhd-pill-fill">
                Manhattan · 4 neighborhoods
              </a>
              <a href="#brooklyn" className="nbhd-pill-line">
                Brooklyn · 7 neighborhoods
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="manhattan" className="nbhd-boro nbhd-boro--mh" data-screen-label="Manhattan">
        <div className="nbhd-boro-head">
          <h2>Manhattan</h2>
          <span className="nbhd-boro-rule" />
          <span className="nbhd-boro-meta">Harlem · UWS · UES · Chelsea</span>
        </div>
        <div className="nbhd-hood-list nbhd-hood-list--mh">
          {MANHATTAN.map((hood) => (
            <div
              key={hood.href}
              className={`nbhd-hood ${hood.imageFirst ? "nbhd-hood--img-first" : "nbhd-hood--copy-first"}`}
              data-reveal=""
            >
              {hood.imageFirst ? (
                <>
                  <div className="hood-card hood-card--mh-photo">
                    <img src={hood.image} alt={hood.alt} />
                  </div>
                  <ManhattanCopy hood={hood} />
                </>
              ) : (
                <>
                  <ManhattanCopy hood={hood} />
                  <div className="hood-card hood-card--mh-photo">
                    <img src={hood.image} alt={hood.alt} />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </section>

      <section id="brooklyn" className="nbhd-boro nbhd-boro--bk" data-screen-label="Brooklyn">
        <div className="nbhd-boro-head">
          <h2>Brooklyn</h2>
          <span className="nbhd-boro-rule" />
          <span className="nbhd-boro-meta">Seven neighborhoods</span>
        </div>
        <div className="nbhd-hood-list nbhd-hood-list--bk">
          {BROOKLYN.map((hood) =>
            hood.wide ? (
              <div key={hood.href} data-reveal="" className="hood-card hood-card--wide">
                <div className="hood-card--wide-media">
                  <img src={hood.image} alt={hood.alt} />
                </div>
                <div className="hood-card--wide-body">
                  <a href={hood.href} className="nbhd-bk-title nbhd-bk-title--wide">
                    {hood.title}
                  </a>
                  <p>{hood.description}</p>
                  <div className="hood-card--wide-types">
                    {hood.types.map((item) => (
                      <a key={item.title} href={item.href} className="pt-row pt-row--bk">
                        <span className="pt-row-copy">
                          <span className="pt-row-title pt-row-title--bk">{item.title}</span>
                          <span className="pt-row-sub pt-row-sub--bk">{item.subtitle}</span>
                        </span>
                        <PtArrow compact />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div key={hood.href} data-reveal="" className="hood-card hood-card--bk">
                <div className="hood-card--bk-media">
                  <img src={hood.image} alt={hood.alt} />
                </div>
                <div className="hood-card--bk-body">
                  <a href={hood.href} className="nbhd-bk-title nbhd-bk-title--card">
                    {hood.title}
                  </a>
                  <p>{hood.description}</p>
                  <div className="hood-card--bk-types">
                    {hood.types.map((item) => (
                      <a key={item.title} href={item.href} className="pt-row pt-row--bk">
                        <span className="pt-row-copy">
                          <span className="pt-row-title pt-row-title--bk">{item.title}</span>
                          <span className="pt-row-sub pt-row-sub--bk">{item.subtitle}</span>
                        </span>
                        <PtArrow compact />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ),
          )}
        </div>
      </section>

      <section className="nbhd-cta" data-screen-label="Not sure CTA">
        <div className="nbhd-cta-card" data-reveal="">
          <div className="nbhd-cta-copy">
            <h2>Not sure which neighborhood fits?</h2>
            <p>
              Tell us your budget, commute, and long-term plan. We’ll shortlist the blocks worth your weekends — and the ones worth skipping.
            </p>
          </div>
          <div className="nbhd-cta-actions">
            <a href="https://calendly.com/montfort" className="nbhd-cta-book">
              Book Now
            </a>
            <a href="tel:646-970-1078" className="nbhd-cta-tel">
              (646) 970-1078
            </a>
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}

import PromisesBar from "../shared/PromisesBar";
import ResourcesSection from "../shared/ResourcesSection";
import ReviewsSection from "../shared/ReviewsSection";
import HarlemAreaNav from "./HarlemAreaNav";
import HarlemPoiMap from "./HarlemPoiMap";
import HarlemRealtorArticle from "./HarlemRealtorArticle";
import { HARLEM_ABOUT_PARAS } from "../../data/harlemGuide";
import "../../styles/harlem-page.css";
import NeighborhoodHubHero from "../shared/NeighborhoodHubHero";
import NeighborhoodMistakesLead from "../shared/NeighborhoodMistakesLead";
import PageListingsSection from "../shared/PageListingsSection";
import { NEIGHBORHOOD_MAIN_IDX } from "../../lib/neighborhoodMainIdx";

const PROPERTY_TYPES = [
  {
    href: "/harlem-brownstones/",
    image: "/redesign-assets/hoods/harlem-brownstones.webp",
    alt: "Harlem Brownstones",
    title: "Harlem Brownstones",
    copy: "Historic architecture, timeless charm, and classic Harlem living",
  },
  {
    href: "/harlem-condos/",
    image: "/redesign-assets/hoods/harlem-condos.webp",
    alt: "Harlem Condos",
    title: "Harlem Condos",
    copy: "Modern amenities, urban convenience, and vibrant Harlem living",
  },
  {
    href: "/harlem-co-ops/",
    image: "/redesign-assets/hoods/uws-coops.png",
    alt: "Harlem Co-Ops",
    title: "Harlem Co-Ops",
    copy: "Investment opportunity, urban convenience, and vibrant Harlem living",
  },
  {
    href: "/harlem-co-ownership/",
    image: "/redesign-assets/hoods/harlem-coownership.webp",
    alt: "Harlem Co-Ownership",
    title: "Harlem Co-Ownership",
    copy: "Shared ownership, lower costs, and greater buying power",
  },
] as const;






const HARLEM_ARTICLES = [
  {
    href: "/upper-west-side-townhouse-q2-2024-market-report/",
    image: "/redesign-assets/hoods/upper-west-side.webp",
    alt: "Upper West Side Townhouse Q2 2024 Market Report",
    title: "Upper West Side Townhouse Q2 2024 Market Report",
    excerpt: "On the Upper West Side, we observed a distinct trend that diverges from the citywide patterns. Specifically, the…",
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
    alt: "Discover Your Dream Home: Explore Apartments for Sale on the …",
    title: "Discover Your Dream Home: Explore Apartments for Sale on the …",
    excerpt: "Are you searching for your dream home in one of New York City’s most sought-after neighborhoods? Look no…",
  },
] as const;

export default function HarlemContent() {

  return (
    <>
      <NeighborhoodHubHero name="Harlem" image="/redesign-assets/migrated-live/Harlem-main-page.png" lead="Brownstones, townhouses, condos and co-ops across Harlem, with block-by-block guidance from first showing to closing day." />

      <HarlemPoiMap />
      <HarlemAreaNav />

      <PromisesBar variant="nbhd" />
      <section id="featured-listings" className="hlm-listings" data-screen-label="Featured listings">
        <div className="hlm-listings-inner">
          <div data-reveal="">
            <p>
              In the beautiful area of Harlem resides 338,411 people where 18% are homeowners. With an average age of 39, the residents of Harlem are well established, with many growing families of all ages. Over the past 30 days roughly 17 homes have been sold with an average sold price of 659,263. That is a decrease of $49,637 from the previous period.
            </p>
          </div>
        </div>
      </section>

      <PageListingsSection {...NEIGHBORHOOD_MAIN_IDX["harlem"]} />

      <HarlemRealtorArticle />

      <section className="hlm-about" data-screen-label="About Harlem">
        <div className="hlm-about-inner">
          <div data-reveal="">
            {HARLEM_ABOUT_PARAS.map((para) => (
              <p key={para.slice(0, 40)}>{para}</p>
            ))}
          </div>
          <div className="hlm-about-photo" data-reveal="">
            <img src="/redesign-assets/hoods/harlem.webp" alt="Harlem street" />
          </div>
        </div>
      </section>

      <section className="hlm-types" data-screen-label="Harlem property types">
        <div className="hlm-types-inner">
          <div className="hlm-types-grid">
            {PROPERTY_TYPES.map((item) => (
              <a key={item.href} data-reveal="" href={item.href} className="hlm-type-card">
                <div className="hlm-type-media">
                  <img src={item.image} alt={item.alt} loading="eager" className="hlm-type-photo" />
                </div>
                <div className="hlm-type-body">
                  <div className="hlm-type-title">{item.title}</div>
                  <p>{item.copy}</p>
                  <div className="hlm-type-explore">Learn More</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
      <NeighborhoodMistakesLead neighborhood="Harlem" brownstoneHref="/harlem-brownstones/" />

      
      <div id="advice">
        <ReviewsSection />

        <ResourcesSection
          title="Local News & Advice"
          subtitle="Read helpful resources and articles related to the area."
          ctaLabel="View More Articles"
          moreLabel="Read More"
          showCategory={false}
          articles={HARLEM_ARTICLES}
        />
      </div>
    </>
  );
}

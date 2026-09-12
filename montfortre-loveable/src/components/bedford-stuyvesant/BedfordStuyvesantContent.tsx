import PromisesBar from "../shared/PromisesBar";
import ResourcesSection from "../shared/ResourcesSection";
import ReviewsSection from "../shared/ReviewsSection";
import BedfordStuyvesantAreaNav from "./BedfordStuyvesantAreaNav";
import BedfordStuyvesantPoiMap from "./BedfordStuyvesantPoiMap";
import BedfordStuyvesantRealtorArticle from "./BedfordStuyvesantRealtorArticle";

import "../../styles/harlem-page.css";
import "../../styles/bedford-stuyvesant-page.css";
import NeighborhoodHubHero from "../shared/NeighborhoodHubHero";
import NeighborhoodMistakesLead from "../shared/NeighborhoodMistakesLead";
import PageListingsSection from "../shared/PageListingsSection";
import { NEIGHBORHOOD_MAIN_IDX } from "../../lib/neighborhoodMainIdx";

const PROPERTY_TYPES = [
  {
    href: "/bedford-stuyvesant-brownstones-2/",
    image: "/redesign-assets/hoods/bedford-stuyvesant-brownstones.png",
    alt: "Bedford stuyvesant Brownstones",
    title: "Bedford stuyvesant Brownstones",
    copy: "Historic brownstones, rich culture, and authentic Brooklyn living",
  },
  {
    href: "/bedford-stuyvesant-condos-2/",
    image: "/redesign-assets/hoods/bedford-stuyvesant-condos.png",
    alt: "Bedford stuyvesant Condos",
    title: "Bedford stuyvesant Condos",
    copy: "Modern residences, vibrant neighborhoods, and urban convenience",
  },
  {
    href: "/bedford-stuyvesant-co-ops-2/",
    image: "/redesign-assets/hoods/bedford-stuyvesant-coops.png",
    alt: "Bedford stuyvesant Co-Ops",
    title: "Bedford stuyvesant Co-Ops",
    copy: "Community-focused living, great value, and Brooklyn charm",
  },
  {
    href: "/bedford-stuyvesant-sros-2/",
    image: "/redesign-assets/hoods/bedford-stuyvesant-sros.png",
    alt: "Bedford stuyvesant SROs",
    title: "Bedford stuyvesant SROs",
    copy: "Affordable housing, investment potential, and unique opportunities",
  },
  {
    href: "/bedford-stuyvesant-co-ownership/",
    image: "/redesign-assets/hoods/bedford-stuyvesant-coownership.png",
    alt: "Bedford Coownership",
    title: "Bedford stuyvesant Co-Ownership",
    copy: "Shared ownership, lower costs, and greater buying power",
  },
] as const;






const BEDFORD_STUYVESANT_ARTICLES = [
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
    image: "/redesign-assets/hoods/brooklyn-heights.webp",
    alt: "Discover Your Dream Home: Explore Apartments for Sale on the …",
    title: "Discover Your Dream Home: Explore Apartments for Sale on the …",
    excerpt: "Are you searching for your dream home in one of New York City’s most sought-after neighborhoods? Look no…",
  },
] as const;

export default function BedfordStuyvesantContent() {

  return (
    <>
      <NeighborhoodHubHero name="Bedford-Stuyvesant" image="/redesign-assets/migrated-live/bedford-stuyvesant-Main-Page.jpg" lead="Brownstones, condos and multifamily homes across Bed-Stuy, with block-by-block guidance you can rely on." />

      <BedfordStuyvesantPoiMap />
      <BedfordStuyvesantAreaNav />

      <PromisesBar variant="nbhd" />
      <section id="featured-listings" className="hlm-listings" data-screen-label="Featured listings">
        <div className="hlm-listings-inner">
          <div data-reveal="">
            <p>
              In the beautiful area of Bedford-Stuyvesant resides 68,920 people where 21% are homeowners. With an average
              age of 30, it’s a fairly young and energetic area, with many of them starting new families. Over the{"  "}
              roughly 51 homes have been sold with an average sold price of 2,207,397. That is an increase of $553,408
              from the previous period.
            </p>
          </div>
        </div>
      </section>

      <PageListingsSection {...NEIGHBORHOOD_MAIN_IDX["bedford-stuyvesant"]} />

      <BedfordStuyvesantRealtorArticle />

<section className="hlm-types" data-screen-label="Bedford-Stuyvesant property types">
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
      <NeighborhoodMistakesLead neighborhood="Bedford Stuyvesant" brownstoneHref="/bedford-stuyvesant-brownstones-2/" />

      
      <div id="advice">
        <ReviewsSection />

        <ResourcesSection
          title="Local News & Advice"
          subtitle="Read helpful resources and articles related to the area."
          ctaLabel="View More Articles"
          moreLabel="Read More"
          showCategory={false}
          articles={BEDFORD_STUYVESANT_ARTICLES}
        />
      </div>
    </>
  );
}

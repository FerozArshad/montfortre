import PromisesBar from "../shared/PromisesBar";
import ResourcesSection from "../shared/ResourcesSection";
import ReviewsSection from "../shared/ReviewsSection";
import WilliamsburgAreaNav from "./WilliamsburgAreaNav";
import WilliamsburgPoiMap from "./WilliamsburgPoiMap";
import WilliamsburgRealtorArticle from "./WilliamsburgRealtorArticle";

import "../../styles/harlem-page.css";
import "../../styles/williamsburg-page.css";
import NeighborhoodHubHero from "../shared/NeighborhoodHubHero";
import NeighborhoodMistakesLead from "../shared/NeighborhoodMistakesLead";
import PageListingsSection from "../shared/PageListingsSection";
import { NEIGHBORHOOD_MAIN_IDX } from "../../lib/neighborhoodMainIdx";

const PROPERTY_TYPES = [
  {
    href: "/williamsburg-brownstones-2/",
    image: "/redesign-assets/hoods/williamsburg-brownstones.png",
    alt: "Williamsburg Brownstones",
    title: "Williamsburg Brownstones",
    copy: "Historic townhomes, creative energy, and timeless Brooklyn charm",
  },
  {
    href: "/williamsburg-condos/",
    image: "/redesign-assets/hoods/williamsburg-condos.png",
    alt: "Williamsburg Condos",
    title: "Williamsburg Condos",
    copy: "Modern luxury, waterfront living, and vibrant city life",
  },
  {
    href: "/williamsburg-co-ops/",
    image: "/redesign-assets/hoods/williamsburg-coops.png",
    alt: "Williamsburg Co-Ops",
    title: "Williamsburg Co-Ops",
    copy: "Established communities, great value, and classic Brooklyn living",
  },
  {
    href: "/williamsburg-co-ownership/",
    image: "/redesign-assets/hoods/williamsburg-coownership.png",
    alt: "Williamsburg Co-Ownership",
    title: "Williamsburg Co-Ownership",
    copy: "Shared ownership, flexible financing, and smarter home buying",
  },
] as const;






const WILLIAMSBURG_ARTICLES = [
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

export default function WilliamsburgContent() {

  return (
    <>
      <NeighborhoodHubHero name="Williamsburg" image="/redesign-assets/migrated-live/williamsburg-Main-Page.png" lead="Condos, co-ops, brownstones and townhouses across Williamsburg, guided from first showing to closing day." />

      <WilliamsburgPoiMap />
      <WilliamsburgAreaNav />

      <PromisesBar variant="nbhd" />
      <section id="featured-listings" className="hlm-listings" data-screen-label="Featured listings">
        <div className="hlm-listings-inner">
          <div data-reveal="">
            <p>
              In the beautiful area of Williamsburg resides 103,867 people where 17% are homeowners. With an average age
              of 27, it’s a fairly young and energetic area, with many of them starting new families. Over the past 30
              days roughly 7 homes have been sold with an average sold price of 3,028,950. That is an increase of
              $1,481,440 from the previous period.
            </p>
          </div>
        </div>
      </section>

      <PageListingsSection {...NEIGHBORHOOD_MAIN_IDX["williamsburg"]} />

      <WilliamsburgRealtorArticle />

<section className="hlm-types" data-screen-label="Williamsburg property types">
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
      <NeighborhoodMistakesLead neighborhood="Williamsburg" brownstoneHref="/williamsburg-brownstones-2/" />

      
      <div id="advice">
        <ReviewsSection />

        <ResourcesSection
          title="Local News & Advice"
          subtitle="Read helpful resources and articles related to the area."
          ctaLabel="View More Articles"
          moreLabel="Read More"
          showCategory={false}
          articles={WILLIAMSBURG_ARTICLES}
        />
      </div>
    </>
  );
}

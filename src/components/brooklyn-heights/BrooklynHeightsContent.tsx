import PromisesBar from "../shared/PromisesBar";
import ResourcesSection from "../shared/ResourcesSection";
import ReviewsSection from "../shared/ReviewsSection";
import BrooklynHeightsAreaNav from "./BrooklynHeightsAreaNav";
import BrooklynHeightsPoiMap from "./BrooklynHeightsPoiMap";
import BrooklynHeightsRealtorArticle from "./BrooklynHeightsRealtorArticle";

import "../../styles/harlem-page.css";
import "../../styles/brooklyn-heights-page.css";
import NeighborhoodHubHero from "../shared/NeighborhoodHubHero";
import NeighborhoodMistakesLead from "../shared/NeighborhoodMistakesLead";
import PageListingsSection from "../shared/PageListingsSection";
import { NEIGHBORHOOD_MAIN_IDX } from "../../lib/neighborhoodMainIdx";

const PROPERTY_TYPES = [
  {
    href: "/brooklyn-heights-townhouses-2/",
    image: "/redesign-assets/hoods/brooklyn-heights-townhouses.png",
    alt: "Brooklyn Heights Townhouses",
    title: "Brooklyn Heights Townhouses",
    copy: "Historic brownstones, skyline views, and timeless Brooklyn charm",
  },
  {
    href: "/brooklyn-heights-condos-3/",
    image: "/redesign-assets/hoods/brooklyn-heights-condos.png",
    alt: "Brooklyn Heights Condos",
    title: "Brooklyn Heights Condos",
    copy: "Luxury residences, waterfront views, and sophisticated city living",
  },
  {
    href: "/brooklyn-heights-co-ops-3/",
    image: "/redesign-assets/hoods/brooklyn-heights-coops.png",
    alt: "Brooklyn Heights Co-Ops",
    title: "Brooklyn Heights Co-Ops",
    copy: "Classic residences, strong communities, and enduring Brooklyn appeal",
  },
] as const;






const BROOKLYN_HEIGHTS_ARTICLES = [
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

export default function BrooklynHeightsContent() {

  return (
    <>
      <NeighborhoodHubHero name="Brooklyn Heights" image="/redesign-assets/migrated-live/Brooklyn-Heights-Real-Estate.png" lead="Historic townhouses, condos and co-ops in Brooklyn Heights, guided by an agent who knows the neighborhood." />

      <BrooklynHeightsPoiMap />
      <BrooklynHeightsAreaNav />

      <PromisesBar variant="nbhd" />
      <section id="featured-listings" className="hlm-listings" data-screen-label="Featured listings">
        <div className="hlm-listings-inner">
          <div data-reveal="">
            <p>
              In the beautiful area of Brooklyn Heights resides 22,901 people where 50% are homeowners. With an average
              age of 42, the residents of Brooklyn Heights are well established, with many growing families of all ages.
              Over the past 30 days roughly 5 homes have been sold with an average sold price of 4,767,813. That is a
              decrease of $1,325,800 from the previous period.
            </p>
          </div>
        </div>
      </section>

      <PageListingsSection {...NEIGHBORHOOD_MAIN_IDX["brooklyn-heights"]} />

      <BrooklynHeightsRealtorArticle />

<section className="hlm-types" data-screen-label="Brooklyn Heights property types">
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
      <NeighborhoodMistakesLead neighborhood="Brooklyn Heights" brownstoneHref="/brooklyn-heights-townhouses-2/" />

      
      <div id="advice">
        <ReviewsSection />

        <ResourcesSection
          title="Local News & Advice"
          subtitle="Read helpful resources and articles related to the area."
          ctaLabel="View More Articles"
          moreLabel="Read More"
          showCategory={false}
          articles={BROOKLYN_HEIGHTS_ARTICLES}
        />
      </div>
    </>
  );
}

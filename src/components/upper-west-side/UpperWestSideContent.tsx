import PromisesBar from "../shared/PromisesBar";
import ResourcesSection from "../shared/ResourcesSection";
import ReviewsSection from "../shared/ReviewsSection";
import UpperWestSideAreaNav from "./UpperWestSideAreaNav";
import UpperWestSidePoiMap from "./UpperWestSidePoiMap";
import UpperWestSideRealtorArticle from "./UpperWestSideRealtorArticle";

import "../../styles/harlem-page.css";
import "../../styles/uws-page.css";
import NeighborhoodHubHero from "../shared/NeighborhoodHubHero";
import NeighborhoodMistakesLead from "../shared/NeighborhoodMistakesLead";
import PageListingsSection from "../shared/PageListingsSection";
import { NEIGHBORHOOD_MAIN_IDX } from "../../lib/neighborhoodMainIdx";

const PROPERTY_TYPES = [
  {
    href: "/upper-west-side-townhouses/",
    image: "/redesign-assets/hoods/uws-townhouse.jpg",
    alt: "Uper West Side Townhouse",
    title: "Upper West Side Townhouses",
    copy: "Elegant townhomes, historic charm, and classic Manhattan living",
  },
  {
    href: "/upper-west-side-condos/",
    image: "/redesign-assets/hoods/uws-condo.png",
    alt: "West Side Condo",
    title: "Upper West Side Condos",
    copy: "Modern luxury, premium amenities, and sophisticated city living",
  },
  {
    href: "/upper-west-side-co-ops-2/",
    image: "/redesign-assets/hoods/uws-coops.png",
    alt: "Upper West Side Co-ops",
    title: "Upper East Side Co-Ops",
    copy: "Classic residences, strong communities, and timeless Manhattan appeal",
  },
] as const;






const UWS_ARTICLES = [
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

export default function UpperWestSideContent() {

  return (
    <>
      <NeighborhoodHubHero name="Upper West Side" image="/redesign-assets/migrated-live/Upper-West-Side-Real-Estate.png" lead="Prewar co-ops, condos and townhouses between the Park and the River, guided by an agent who knows every block." />

      <UpperWestSidePoiMap />
      <UpperWestSideAreaNav />

      <PromisesBar variant="nbhd" />
      <section id="featured-listings" className="hlm-listings" data-screen-label="Featured listings">
        <div className="hlm-listings-inner">
          <div data-reveal="">
            <p>
              In the beautiful area of Upper West Side resides 219,184 people where 37% are homeowners. With an average
              age of 43, the residents of Upper West Side are well established, with many growing families of all ages.
              Over the past 30 days roughly 53 homes have been sold with an average sold price of 2,732,813. That is a
              decrease of $404,178 from the previous period.
            </p>
          </div>
        </div>
      </section>

      <PageListingsSection {...NEIGHBORHOOD_MAIN_IDX["upper-west-side"]} />

      <UpperWestSideRealtorArticle />

<section className="hlm-types" data-screen-label="Upper West Side property types">
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
      <NeighborhoodMistakesLead neighborhood="Upper West Side" brownstoneHref="/upper-west-side-townhouses/" />

      
      <div id="advice">
        <ReviewsSection />

        <ResourcesSection
          title="Local News & Advice"
          subtitle="Read helpful resources and articles related to the area."
          ctaLabel="View More Articles"
          moreLabel="Read More"
          showCategory={false}
          articles={UWS_ARTICLES}
        />
      </div>
    </>
  );
}

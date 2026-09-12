import PromisesBar from "../shared/PromisesBar";
import ResourcesSection from "../shared/ResourcesSection";
import ReviewsSection from "../shared/ReviewsSection";
import UpperEastSideAreaNav from "./UpperEastSideAreaNav";
import UpperEastSidePoiMap from "./UpperEastSidePoiMap";
import UpperEastSideRealtorArticle from "./UpperEastSideRealtorArticle";

import "../../styles/harlem-page.css";
import "../../styles/ues-page.css";
import NeighborhoodHubHero from "../shared/NeighborhoodHubHero";
import NeighborhoodMistakesLead from "../shared/NeighborhoodMistakesLead";
import PageListingsSection from "../shared/PageListingsSection";
import { NEIGHBORHOOD_MAIN_IDX } from "../../lib/neighborhoodMainIdx";

const PROPERTY_TYPES = [
  {
    href: "/upper-east-side-townhouses/",
    image: "/redesign-assets/hoods/ues-townhouse.png",
    alt: "Upper East Side Main Page",
    title: "Upper East Side Townhouses",
    copy: "Elegant townhomes, timeless charm, and prestigious Manhattan living",
  },
  {
    href: "/upper-east-side-condos/",
    image: "/redesign-assets/hoods/ues-condo.png",
    alt: "Upper East Side Condo",
    title: "Upper East Side Condos",
    copy: "Luxury residences, premium amenities, and sophisticated city living",
  },
  {
    href: "/upper-east-side-co-ops/",
    image: "/redesign-assets/hoods/ues-coops.png",
    alt: "Co-ops Upper East Side",
    title: "Upper East Side Co-Ops",
    copy: "Classic residences, refined communities, and timeless Upper East Side appeal",
  },
] as const;






const UES_ARTICLES = [
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

export default function UpperEastSideContent() {

  return (
    <>
      <NeighborhoodHubHero name="Upper East Side" image="/redesign-assets/migrated-live/Upper-East-Side-Main-Page.png" lead="Townhouses, condos and co-ops across the Upper East Side, with representation for buyers and sellers alike." />

      <UpperEastSidePoiMap />
      <UpperEastSideAreaNav />

      <PromisesBar variant="nbhd" />
      <section id="featured-listings" className="hlm-listings" data-screen-label="Featured listings">
        <div className="hlm-listings-inner">
          <div data-reveal="">
            <p>
              In the beautiful area of Upper East Side resides 202,400 people where 37% are homeowners. With an average
              age of 44, the residents of Upper East Side are well established, with many growing families of all ages.
              Over the past 30 days roughly 23 homes have been sold with an average sold price of 5,035,880. That is an
              increase of $2,947,592 from the previous period.
            </p>
          </div>
        </div>
      </section>

      <PageListingsSection {...NEIGHBORHOOD_MAIN_IDX["upper-east-side"]} />

      <UpperEastSideRealtorArticle />

<section className="hlm-types" data-screen-label="Upper East Side property types">
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
      <NeighborhoodMistakesLead neighborhood="Upper East Side" brownstoneHref="/upper-east-side-townhouses/" />

      
      <div id="advice">
        <ReviewsSection />

        <ResourcesSection
          title="Local News & Advice"
          subtitle="Read helpful resources and articles related to the area."
          ctaLabel="View More Articles"
          moreLabel="Read More"
          showCategory={false}
          articles={UES_ARTICLES}
        />
      </div>
    </>
  );
}

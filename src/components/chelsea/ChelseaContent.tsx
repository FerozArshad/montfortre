import PromisesBar from "../shared/PromisesBar";
import ResourcesSection from "../shared/ResourcesSection";
import ReviewsSection from "../shared/ReviewsSection";
import ChelseaAreaNav from "./ChelseaAreaNav";
import ChelseaPoiMap from "./ChelseaPoiMap";
import ChelseaRealtorArticle from "./ChelseaRealtorArticle";

import "../../styles/harlem-page.css";
import "../../styles/chelsea-page.css";
import NeighborhoodHubHero from "../shared/NeighborhoodHubHero";
import NeighborhoodMistakesLead from "../shared/NeighborhoodMistakesLead";
import PageListingsSection from "../shared/PageListingsSection";
import { NEIGHBORHOOD_MAIN_IDX } from "../../lib/neighborhoodMainIdx";

const PROPERTY_TYPES = [
  {
    href: "/chelsea-townhouses/",
    image: "/redesign-assets/hoods/chelsea-townhouse.png",
    alt: "Chelsea townhouse",
    title: "Chelsea Townhouses",
    copy: "Historic townhomes, architectural charm, and stylish city living",
  },
  {
    href: "/chelsea-condos/",
    image: "/redesign-assets/hoods/chelsea-condo.png",
    alt: "Chelsea Main Page",
    title: "Chelsea Condos",
    copy: "Modern luxury, premium amenities, and vibrant Manhattan living",
  },
  {
    href: "/chelsea-co-ops-2/",
    image: "/redesign-assets/hoods/chelsea-coops.png",
    alt: "Chelsea co-ops",
    title: "Chelsea Co-Ops",
    copy: "Classic residences, strong communities, and timeless Chelsea appeal",
  },
] as const;






const CHELSEA_ARTICLES = [
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

export default function ChelseaContent() {

  return (
    <>
      <NeighborhoodHubHero name="Chelsea" image="/redesign-assets/migrated-live/Chelsea-Main-Page.png" lead="Lofts, condos, co-ops and townhouses in Chelsea, with straight answers on pricing and timing." />

      <ChelseaPoiMap />
      <ChelseaAreaNav />

      <PromisesBar variant="nbhd" />
      <section id="featured-listings" className="hlm-listings" data-screen-label="Featured listings">
        <div className="hlm-listings-inner">
          <div data-reveal="">
            <p>
              In the beautiful area of Chelsea resides 56,784 people where 33% are homeowners. With an average age of
              42, the residents of Chelsea are well established, with many growing families of all ages. Over the past
              30 days roughly 27 homes have been sold with an average sold price of 3,405,578. That is an increase of
              $1,108,683 from the previous period.
            </p>
          </div>
        </div>
      </section>

      <PageListingsSection {...NEIGHBORHOOD_MAIN_IDX["chelsea"]} />

      <ChelseaRealtorArticle />

<section className="hlm-types" data-screen-label="Chelsea property types">
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
      <NeighborhoodMistakesLead neighborhood="Chelsea" brownstoneHref="/chelsea-townhouses/" />

      
      <div id="advice">
        <ReviewsSection />

        <ResourcesSection
          title="Local News & Advice"
          subtitle="Read helpful resources and articles related to the area."
          ctaLabel="View More Articles"
          moreLabel="Read More"
          showCategory={false}
          articles={CHELSEA_ARTICLES}
        />
      </div>
    </>
  );
}

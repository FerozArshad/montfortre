import PromisesBar from "../shared/PromisesBar";
import ResourcesSection from "../shared/ResourcesSection";
import ReviewsSection from "../shared/ReviewsSection";
import DumboAreaNav from "./DumboAreaNav";
import DumboPoiMap from "./DumboPoiMap";
import DumboRealtorArticle from "./DumboRealtorArticle";

import "../../styles/harlem-page.css";
import "../../styles/dumbo-page.css";
import NeighborhoodHubHero from "../shared/NeighborhoodHubHero";
import NeighborhoodMistakesLead from "../shared/NeighborhoodMistakesLead";
import PageListingsSection from "../shared/PageListingsSection";
import { NEIGHBORHOOD_MAIN_IDX } from "../../lib/neighborhoodMainIdx";

const PROPERTY_TYPES = [
  {
    href: "/dumbo-condos/",
    image: "/redesign-assets/hoods/dumbo-condos.png",
    alt: "Dumbo condo",
    title: "Dumbo Condos",
    copy: "Waterfront views, modern luxury, and iconic Brooklyn living",
  },
  {
    href: "/dumbo-co-ops-2/",
    image: "/redesign-assets/hoods/dumbo-coops.png",
    alt: "Dumbo Co-ops",
    title: "Dumbo Co-Ops",
    copy: "Historic character, vibrant communities, and lasting Brooklyn appeal",
  },
] as const;






const DUMBO_ARTICLES = [
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
    image: "/redesign-assets/hoods/dumbo.webp",
    alt: "Discover Your Dream Home: Explore Apartments for Sale on the …",
    title: "Discover Your Dream Home: Explore Apartments for Sale on the …",
    excerpt: "Are you searching for your dream home in one of New York City’s most sought-after neighborhoods? Look no…",
  },
] as const;

export default function DumboContent() {

  return (
    <>
      <NeighborhoodHubHero name="DUMBO" image="/redesign-assets/migrated-live/Dumbo-Main-Page.png" lead="Converted lofts, condos and co-ops in DUMBO, with representation for buyers and sellers alike." />

      <DumboPoiMap />
      <DumboAreaNav />

      <PromisesBar variant="nbhd" />
      <section id="featured-listings" className="hlm-listings" data-screen-label="Featured listings">
        <div className="hlm-listings-inner">
          <div data-reveal="">
            <p>
              In the beautiful area of Dumbo resides 8,793 people where 29% are homeowners. With an average age of 34,
              it&apos;s a fairly young and energetic area, with many of them starting new families. Over the past 30
              days roughly 3 homes have been sold with an average sold price of 1,256,875. That is a decrease of
              $439,425 from the previous period.
            </p>
          </div>
        </div>
      </section>

      <PageListingsSection {...NEIGHBORHOOD_MAIN_IDX["dumbo"]} />

      <DumboRealtorArticle />

<section className="hlm-types" data-screen-label="Dumbo property types">
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
      <NeighborhoodMistakesLead neighborhood="Dumbo" brownstoneHref="/dumbo/" />

      
      <div id="advice">
        <ReviewsSection />

        <ResourcesSection
          title="Local News & Advice"
          subtitle="Read helpful resources and articles related to the area."
          ctaLabel="View More Articles"
          moreLabel="Read More"
          showCategory={false}
          articles={DUMBO_ARTICLES}
        />
      </div>
    </>
  );
}

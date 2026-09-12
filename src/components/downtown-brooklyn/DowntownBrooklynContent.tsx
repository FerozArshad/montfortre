import PromisesBar from "../shared/PromisesBar";
import ResourcesSection from "../shared/ResourcesSection";
import ReviewsSection from "../shared/ReviewsSection";
import DowntownBrooklynAreaNav from "./DowntownBrooklynAreaNav";
import DowntownBrooklynPoiMap from "./DowntownBrooklynPoiMap";
import DowntownBrooklynRealtorArticle from "./DowntownBrooklynRealtorArticle";

import "../../styles/harlem-page.css";
import "../../styles/downtown-brooklyn-page.css";
import NeighborhoodHubHero from "../shared/NeighborhoodHubHero";
import NeighborhoodMistakesLead from "../shared/NeighborhoodMistakesLead";
import PageListingsSection from "../shared/PageListingsSection";
import { NEIGHBORHOOD_MAIN_IDX } from "../../lib/neighborhoodMainIdx";

const PROPERTY_TYPES = [
  {
    href: "/downtown-brooklyn-condos-2/",
    image: "/redesign-assets/hoods/downtown-brooklyn-condos.jpg",
    alt: "Downtown Brooklyn Condos",
    title: "Downtown Brooklyn Condos",
    copy: "Modern high-rises, premium amenities, and convenient city living",
  },
  {
    href: "/downstone-brooklyn-co-ops/",
    image: "/redesign-assets/hoods/downtown-brooklyn-coops.jpg",
    alt: "Downtown Co-ops",
    title: "Downstone Brooklyn Co-Ops",
    copy: "Established communities, great value, and classic Brooklyn living",
  },
] as const;






const DOWNTOWN_BROOKLYN_ARTICLES = [
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
    image: "/redesign-assets/hoods/downtown-brooklyn.webp",
    alt: "Discover Your Dream Home: Explore Apartments for Sale on the …",
    title: "Discover Your Dream Home: Explore Apartments for Sale on the …",
    excerpt: "Are you searching for your dream home in one of New York City’s most sought-after neighborhoods? Look no…",
  },
] as const;

export default function DowntownBrooklynContent() {

  return (
    <>
      <NeighborhoodHubHero name="Downtown Brooklyn" image="/redesign-assets/migrated-live/Downtown-Brooklyn-Main-Page.jpg" lead="Condos and co-ops in the heart of Downtown Brooklyn, with clear guidance on value and timing." />

      <DowntownBrooklynPoiMap />
      <DowntownBrooklynAreaNav />

      <PromisesBar variant="nbhd" />
      <section id="featured-listings" className="hlm-listings" data-screen-label="Featured listings">
        <div className="hlm-listings-inner">
          <div data-reveal="">
            <p>
              In the beautiful area of Downtown Brooklyn resides 20,854 people where 25% are homeowners. With an average
              age of 34, it&apos;s a fairly young and energetic area, with many of them starting new families. Over the
              past 30 days roughly 13 homes have been sold with an average sold price of 1,242,075. That is a decrease of
              $457,475 from the previous period.
            </p>
          </div>
        </div>
      </section>

      <PageListingsSection {...NEIGHBORHOOD_MAIN_IDX["downtown-brooklyn"]} />

      <DowntownBrooklynRealtorArticle />

<section className="hlm-types" data-screen-label="Downtown Brooklyn property types">
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
      <NeighborhoodMistakesLead neighborhood="Downtown Brooklyn" brownstoneHref="/downtown-brooklyn/" />

      
      <div id="advice">
        <ReviewsSection />

        <ResourcesSection
          title="Local News & Advice"
          subtitle="Read helpful resources and articles related to the area."
          ctaLabel="View More Articles"
          moreLabel="Read More"
          showCategory={false}
          articles={DOWNTOWN_BROOKLYN_ARTICLES}
        />
      </div>
    </>
  );
}


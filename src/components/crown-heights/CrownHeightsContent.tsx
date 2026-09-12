import PromisesBar from "../shared/PromisesBar";
import ResourcesSection from "../shared/ResourcesSection";
import ReviewsSection from "../shared/ReviewsSection";
import CrownHeightsAreaNav from "./CrownHeightsAreaNav";
import CrownHeightsPoiMap from "./CrownHeightsPoiMap";
import CrownHeightsRealtorArticle from "./CrownHeightsRealtorArticle";

import "../../styles/harlem-page.css";
import "../../styles/crown-heights-page.css";
import NeighborhoodHubHero from "../shared/NeighborhoodHubHero";
import NeighborhoodMistakesLead from "../shared/NeighborhoodMistakesLead";
import PageListingsSection from "../shared/PageListingsSection";
import { NEIGHBORHOOD_MAIN_IDX } from "../../lib/neighborhoodMainIdx";

const PROPERTY_TYPES = [
  {
    href: "/crown-heights-brownstones-2/",
    image: "/redesign-assets/hoods/crown-heights-brownstones.png",
    alt: "Crown Heights Brownstones",
    title: "Crown Heights Brownstones",
    copy: "Historic brownstones, cultural richness, and timeless Brooklyn charm",
  },
  {
    href: "/crown-heights-condos-2/",
    image: "/redesign-assets/hoods/crown-heights-condos.png",
    alt: "Crown Heights Condos",
    title: "Crown Heights Condos",
    copy: "Modern residences, vibrant amenities, and convenient city living",
  },
  {
    href: "/crown-heights-co-ops-2/",
    image: "/redesign-assets/hoods/crown-heights-coops.png",
    alt: "Crown Heights Co-Ops",
    title: "Crown Heights Co-Ops",
    copy: "Strong communities, great value, and classic Brooklyn living",
  },
  {
    href: "/crown-heights-sros-3/",
    image: "/redesign-assets/hoods/crown-heights-sros.png",
    alt: "Crown Heights SROs",
    title: "Crown Heights SROs",
    copy: "Affordable housing, investment potential, and unique opportunities",
  },
  {
    href: "/crown-heights-co-ownership-2/",
    image: "/redesign-assets/hoods/crown-heights-coownership.png",
    alt: "Crown Heights Co-Ownership",
    title: "Crown Heights Co-Ownership",
    copy: "Shared ownership, lower costs, and greater buying power",
  },
] as const;






const CROWN_HEIGHTS_ARTICLES = [
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

export default function CrownHeightsContent() {

  return (
    <>
      <NeighborhoodHubHero name="Crown Heights" image="/redesign-assets/migrated-live/crown-heights-Main-Page.jpg" lead="Brownstones, condos, co-ops and multifamily homes across Crown Heights, with local market insight at every step." />

      <CrownHeightsPoiMap />
      <CrownHeightsAreaNav />

      <PromisesBar variant="nbhd" />
      <section id="featured-listings" className="hlm-listings" data-screen-label="Featured listings">
        <div className="hlm-listings-inner">
          <div data-reveal="">
            <p>
              In the beautiful area of Crown Heights resides 139,974 people where 17% are homeowners. With an average age
              of 35, it’s a fairly young and energetic area, with many of them starting new families. Over the past 30
              days roughly 10 homes have been sold with an average sold price of 1,385,341. That is a decrease of
              $306,206 from the previous period.
            </p>
          </div>
        </div>
      </section>

      <PageListingsSection {...NEIGHBORHOOD_MAIN_IDX["crown-heights"]} />

      <CrownHeightsRealtorArticle />

<section className="hlm-types" data-screen-label="Crown Heights property types">
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
      <NeighborhoodMistakesLead neighborhood="Crown Heights" brownstoneHref="/crown-heights-brownstones-2/" />

      
      <div id="advice">
        <ReviewsSection />

        <ResourcesSection
          title="Recent News & Realtor Advice"
          subtitle="Stay in the loop on the latest events, news, & happenings in and around our community!"
          ctaLabel="Read More"
          moreLabel="Read More"
          showCategory={false}
          articles={CROWN_HEIGHTS_ARTICLES}
        />
      </div>
    </>
  );
}

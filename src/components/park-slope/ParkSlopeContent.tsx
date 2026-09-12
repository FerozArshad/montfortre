import PromisesBar from "../shared/PromisesBar";
import ResourcesSection from "../shared/ResourcesSection";
import ReviewsSection from "../shared/ReviewsSection";
import ParkSlopeAreaNav from "./ParkSlopeAreaNav";
import ParkSlopePoiMap from "./ParkSlopePoiMap";
import ParkSlopeRealtorArticle from "./ParkSlopeRealtorArticle";

import "../../styles/harlem-page.css";
import "../../styles/park-slope-page.css";
import NeighborhoodHubHero from "../shared/NeighborhoodHubHero";
import NeighborhoodMistakesLead from "../shared/NeighborhoodMistakesLead";
import PageListingsSection from "../shared/PageListingsSection";
import { NEIGHBORHOOD_MAIN_IDX } from "../../lib/neighborhoodMainIdx";

const PROPERTY_TYPES = [
  {
    href: "/park-slope-brownstone-2/",
    image: "/redesign-assets/hoods/park-slope-brownstones.png",
    alt: "Park Slope Brownstone",
    title: "Park Slope Brownstones",
    copy: "Historic brownstones, timeless architecture, and expert guidance for buying and selling in Park Slope",
  },
  {
    href: "/park-slope-condo-2/",
    image: "/redesign-assets/hoods/park-slope-condos.png",
    alt: "Park Slope Condo",
    title: "Park Slope Condos",
    copy: "Modern condominiums, luxury amenities, and expert representation in Park Slope's competitive market",
  },
  {
    href: "/park-slope-coops/",
    image: "/redesign-assets/hoods/park-slope-coops.png",
    alt: "Park Slope Co-ops",
    title: "Park Slope Co-Ops",
    copy: "Established co-op communities, board expertise, and trusted guidance for buying and selling in Park Slope",
  },
  {
    href: "/park-slope-coownership-2/",
    image: "/redesign-assets/hoods/park-slope-coownership.png",
    alt: "Park Slope Coownership",
    title: "Park Slope Coownership",
    copy: "Affordable shared ownership, flexible financing, and expert guidance for buying a co-ownership home in Park Slope",
  },
  {
    href: "/park-slope-sro-2/",
    image: "/redesign-assets/hoods/park-slope-sros.png",
    alt: "Park Slope SRO",
    title: "Park Slope SRO",
    copy: "Expert guidance for buying and selling SRO properties in Park Slope with confidence and local market expertise",
  },
] as const;

const VIEW_MORE_LISTINGS_HREF =
  "/idx/?idx-q-Locations%3C0%3E=Park+Slope&idx-q-ListingStatuses=1&idx-d-SortOrders%3C0%3E-Column=Price&idx-d-SortOrders%3C0%3E-Direction=DESC";






const PARK_SLOPE_ARTICLES = [
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

export default function ParkSlopeContent() {

  return (
    <>
      <NeighborhoodHubHero name="Park Slope" image="/redesign-assets/migrated-live/Park-Slope-NYC.png" lead="Brownstones, condos and co-ops across Park Slope, guided from first showing to closing day." />

      <ParkSlopePoiMap />
      <ParkSlopeAreaNav />

      <PromisesBar variant="nbhd" />
      <section id="featured-listings" className="hlm-listings" data-screen-label="Featured listings">
        <div className="hlm-listings-inner">
          <div data-reveal="">
            <p>
              In the beautiful area of Park Slope resides 46,606 people where 46% are homeowners. With an average age of
              38, the residents of Park Slope are well established, with many growing families of all ages. Over the past
              30 days roughly 8 homes have been sold with an average sold price of 4,081,413. That is an increase of
              $806,413 from the previous period.
            </p>
          </div>
        </div>
      </section>

      <PageListingsSection {...NEIGHBORHOOD_MAIN_IDX["park-slope"]} />

      <ParkSlopeRealtorArticle />

<section className="hlm-types" data-screen-label="Park Slope property types">
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
      <NeighborhoodMistakesLead neighborhood="Park Slope" brownstoneHref="/park-slope-brownstone-2/" />

      
      <div id="advice">
        <ReviewsSection />

        <ResourcesSection
          title="Recent News & Realtor Advice"
          subtitle="Stay in the loop on the latest events, news, & happenings in and around our community!"
          ctaLabel="View More Articles"
          moreLabel="Read More"
          showCategory={false}
          articles={PARK_SLOPE_ARTICLES}
        />
      </div>
    </>
  );
}

import { BLOG_ARTICLE_REGISTRY } from "../../blog/registry";
import "../../styles/legal-pages.css";

type SiteLink = {
  href: string;
  label: string;
};

const COMPANY_LINKS: readonly SiteLink[] = [
  { href: "/", label: "Home" },
  { href: "/about-us/", label: "About Us" },
  { href: "/stanley-montfort/", label: "Stanley Montfort" },
  { href: "/services/", label: "Services" },
  { href: "/success-stories/", label: "Success Stories" },
  { href: "/privacy-policy/", label: "Privacy Policy" },
  { href: "/sitemap/", label: "Sitemap" },
];

const SERVICE_LINKS: readonly SiteLink[] = [
  { href: "/nyc-buyers-agent-service/", label: "NYC Buyer’s Agent Service" },
  { href: "/nyc-listing-agent-service/", label: "NYC Listing Agent Service" },
  { href: "/nyc-multifamily-real-estate-agent-service/", label: "NYC Multifamily Real Estate Agent Service" },
  { href: "/2-family-house-for-sale-nyc/", label: "2 Family House for Sale NYC" },
  { href: "/home-valuation/", label: "Free Home Valuation" },
  { href: "/mortgage-calculator/", label: "Mortgage Calculator" },
  { href: "/idx-sales/", label: "Search Homes for Sale" },
  { href: "/idx-rentals/", label: "Search Rentals" },
];

const NEIGHBORHOOD_LINKS: readonly SiteLink[] = [
  { href: "/neighborhoods/", label: "All Neighborhoods" },
  { href: "/harlem/", label: "Harlem Realtor" },
  { href: "/upper-west-side/", label: "Upper West Side Realtor" },
  { href: "/upper-east-side/", label: "Upper East Side Realtor" },
  { href: "/chelsea/", label: "Chelsea Realtor" },
  { href: "/downtown-brooklyn/", label: "Downtown Brooklyn Realtor" },
  { href: "/dumbo/", label: "DUMBO Realtor" },
  { href: "/brooklyn-heights/", label: "Brooklyn Heights Realtor" },
  { href: "/bedford-stuyvesant/", label: "Bedford-Stuyvesant Realtor" },
  { href: "/williamsburg/", label: "Williamsburg Realtor" },
  { href: "/crown-heights/", label: "Crown Heights Realtor" },
  { href: "/park-slope/", label: "Park Slope Realtor" },
];

const PROPERTY_LINKS: readonly SiteLink[] = [
  { href: "/harlem-brownstones/", label: "Harlem Brownstones" },
  { href: "/harlem-condos/", label: "Harlem Condos" },
  { href: "/harlem-sros/", label: "Harlem SROs" },
  { href: "/harlem-co-ownership/", label: "Harlem Co-Ownership" },
  { href: "/upper-west-side-townhouses/", label: "Upper West Side Townhouses" },
  { href: "/upper-west-side-condos/", label: "Upper West Side Condos" },
  { href: "/upper-west-side-co-ops-2/", label: "Upper West Side Co-Ops" },
  { href: "/upper-east-side-townhouses/", label: "Upper East Side Townhouses" },
  { href: "/upper-east-side-condos/", label: "Upper East Side Condos" },
  { href: "/upper-east-side-co-ops/", label: "Upper East Side Co-Ops" },
  { href: "/chelsea-townhouses/", label: "Chelsea Townhouses" },
  { href: "/chelsea-co-ops-2/", label: "Chelsea Co-Ops" },
  { href: "/downtown-brooklyn-condos-2/", label: "Downtown Brooklyn Condos" },
  { href: "/downstone-brooklyn-co-ops/", label: "Downtown Brooklyn Co-Ops" },
  { href: "/dumbo-condos/", label: "DUMBO Condos" },
  { href: "/dumbo-co-ops-2/", label: "DUMBO Co-Ops" },
  { href: "/brooklyn-heights-townhouses-2/", label: "Brooklyn Heights Townhouses" },
  { href: "/brooklyn-heights-condos-3/", label: "Brooklyn Heights Condos" },
  { href: "/brooklyn-heights-co-ops-3/", label: "Brooklyn Heights Co-Ops" },
  { href: "/bedford-stuyvesant-brownstones-2/", label: "Bedford-Stuyvesant Brownstones" },
  { href: "/bedford-stuyvesant-condos-2/", label: "Bedford-Stuyvesant Condos" },
  { href: "/bedford-stuyvesant-co-ops-2/", label: "Bedford-Stuyvesant Co-Ops" },
  { href: "/bedford-stuyvesant-sros-2/", label: "Bedford-Stuyvesant SROs" },
  { href: "/bedford-stuyvesant-co-ownership/", label: "Bedford-Stuyvesant Co-Ownership" },
  { href: "/williamsburg-brownstones-2/", label: "Williamsburg Brownstones" },
  { href: "/williamsburg-condos/", label: "Williamsburg Condos" },
  { href: "/williamsburg-co-ownership/", label: "Williamsburg Co-Ownership" },
  { href: "/crown-heights-brownstones-2/", label: "Crown Heights Brownstones" },
  { href: "/crown-heights-condos-2/", label: "Crown Heights Condos" },
  { href: "/crown-heights-co-ops-2/", label: "Crown Heights Co-Ops" },
  { href: "/crown-heights-sros-3/", label: "Crown Heights SROs" },
  { href: "/crown-heights-co-ownership-2/", label: "Crown Heights Co-Ownership" },
  { href: "/park-slope-brownstone-2/", label: "Park Slope Brownstones" },
  { href: "/park-slope-condo-2/", label: "Park Slope Condos" },
  { href: "/park-slope-coops/", label: "Park Slope Co-Ops" },
  { href: "/park-slope-sro-2/", label: "Park Slope SROs" },
  { href: "/park-slope-coownership-2/", label: "Park Slope Co-Ownership" },
];

const RESOURCE_LINKS: readonly SiteLink[] = [
  { href: "/blog/", label: "Real Estate Resources" },
  {
    href: "/advice-for-buyers-looking-to-purchase-brownstones/",
    label: "Brownstone Buying Guide for Buyers",
  },
];

const ARTICLE_LINKS: readonly SiteLink[] = Object.entries(BLOG_ARTICLE_REGISTRY).map(([slug, article]) => ({
  href: `/${slug}/`,
  label: article.meta.h1,
}));

const SECTIONS = [
  ["Company", COMPANY_LINKS],
  ["Services & Tools", SERVICE_LINKS],
  ["Neighborhoods", NEIGHBORHOOD_LINKS],
  ["Property Guides", PROPERTY_LINKS],
  ["Resources", RESOURCE_LINKS],
  ["Articles", ARTICLE_LINKS],
] as const;

export default function SiteMapContent() {
  return (
    <>
      <section className="legal-hero legal-hero--sitemap" aria-labelledby="sitemap-heading">
        <div className="legal-hero-ring" aria-hidden="true" />
        <div className="legal-hero-inner">
          <div className="legal-kicker">
            <span className="legal-kicker-line" />
            <span>Explore Montfort</span>
          </div>
          <h1 id="sitemap-heading">Sitemap</h1>
          <p>Browse every page, neighborhood guide, service, and article available on the Montfort Real Estate site.</p>
        </div>
      </section>

      <main className="legal-content sitemap-content">
        <div className="sitemap-grid">
          {SECTIONS.map(([title, links]) => (
            <section key={title} className={`sitemap-group${title === "Articles" ? " sitemap-group--wide" : ""}`}>
              <h2>{title}</h2>
              <ul>
                {links.map((link) => (
                  <li key={link.href}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </main>
    </>
  );
}

import "../../styles/resources-section.css";

const BLOG_ARTICLES = [
  {
    href: "/upper-west-side-townhouse-q2-2024-market-report/",
    image: "/redesign-assets/hoods/upper-west-side.webp",
    alt: "Upper West Side Townhouse Q2 2024 Market Report",
    category: "Market Report",
    title: "Upper West Side Townhouse Q2 2024 Market Report",
    excerpt: "On the Upper West Side, we observed a distinct trend that diverges from the citywide patterns…",
  },
  {
    href: "/harlem-brownstone-q2-2024-market-report/",
    image: "/redesign-assets/hoods/harlem.webp",
    alt: "Harlem Brownstone Q2 2024 Market Report",
    category: "Market Report",
    title: "Harlem Brownstone Q2 2024 Market Report",
    excerpt: "The Harlem brownstone market has seen an increase in sales activity since this time last year…",
  },
  {
    href: "/discover-your-dream-home-explore-apartments-for-sale-on-the-upper-west-side/",
    image: "/redesign-assets/hoods/chelsea.webp",
    alt: "Explore Apartments for Sale on the Upper West Side",
    category: "Buyer Guide",
    title: "Discover Your Dream Home: Apartments for Sale on the Upper West Side",
    excerpt: "Searching for your dream home in one of New York City's most sought-after neighborhoods?…",
  },
] as const;

export default function ResourcesSection() {
  return (
    <section className="resources-section" data-screen-label="Resources">
      <div className="resources-inner">
        <div data-reveal="" className="resources-head">
          <div className="resources-copy">
            <h2>Recent News &amp; Realtor Advice</h2>
            <p>Stay in the loop on the latest events, news, &amp; happenings in and around our community!</p>
          </div>
          <a href="/blog/" className="resources-cta">
            All resources
          </a>
        </div>
        <div className="resources-grid">
          {BLOG_ARTICLES.map((article) => (
            <a key={article.href} data-reveal="" href={article.href} className="resources-card">
              <div className="resources-card-media">
                <img src={article.image} alt={article.alt} loading="lazy" />
              </div>
              <div className="resources-card-cat">{article.category}</div>
              <div className="resources-card-title">{article.title}</div>
              <p className="resources-card-excerpt">{article.excerpt}</p>
              <div className="resources-card-more">
                Read article <span>→</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

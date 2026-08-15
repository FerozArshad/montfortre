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

type ResourceArticle = {
  href: string;
  image: string;
  alt: string;
  title: string;
  excerpt: string;
  category?: string;
};

type ResourcesSectionProps = {
  title?: string;
  subtitle?: string;
  ctaLabel?: string;
  moreLabel?: string;
  showCategory?: boolean;
  articles?: readonly ResourceArticle[];
};

export default function ResourcesSection({
  title = "Recent News & Realtor Advice",
  subtitle = "Stay in the loop on the latest events, news, & happenings in and around our community!",
  ctaLabel = "All resources",
  moreLabel = "Read article",
  showCategory = true,
  articles = BLOG_ARTICLES,
}: ResourcesSectionProps) {
  return (
    <section className="resources-section" data-screen-label="Resources">
      <div className="resources-inner">
        <div data-reveal="" className="resources-head">
          <div className="resources-copy">
            <h2>{title}</h2>
            <p>{subtitle}</p>
          </div>
          <a href="/blog/" className="resources-cta">
            {ctaLabel}
          </a>
        </div>
        <div className="resources-grid">
          {articles.map((article) => (
            <a key={article.href} data-reveal="" href={article.href} className="resources-card">
              <div className="resources-card-media">
                <img src={article.image} alt={article.alt} loading="lazy" />
              </div>
              {showCategory && article.category ? <div className="resources-card-cat">{article.category}</div> : null}
              <div className="resources-card-title">{article.title}</div>
              <p className="resources-card-excerpt">{article.excerpt}</p>
              <div className="resources-card-more">{moreLabel}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

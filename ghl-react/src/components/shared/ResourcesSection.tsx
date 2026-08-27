import { BLOG_ARTICLE_REGISTRY } from "../../blog/registry";
import "../../styles/resources-section.css";

const RESOURCE_SLUGS = [
  "upper-west-side-townhouse-q2-2024-market-report",
  "harlem-brownstone-q2-2024-market-report",
  "discover-your-dream-home-explore-apartments-for-sale-on-the-upper-west-side",
] as const;

const BLOG_ARTICLES = RESOURCE_SLUGS.map((slug) => {
  const meta = BLOG_ARTICLE_REGISTRY[slug]?.meta;
  return {
    href: `/${slug}/`,
    image: meta?.featuredImageSrc || "/redesign-assets/hoods/harlem.webp",
    alt: meta?.featuredImageAlt || meta?.h1 || slug,
    category: meta?.category || "News",
    title: meta?.h1 || slug,
    excerpt: meta?.lead ? `${meta.lead.slice(0, 120).trimEnd()}…` : "",
  };
});

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
  showCta?: boolean;
  articleTitlesAsHeadings?: boolean;
  articles?: readonly ResourceArticle[];
};

export default function ResourcesSection({
  title = "Recent News & Realtor Advice",
  subtitle = "Stay in the loop on the latest events, news, & happenings in and around our community!",
  ctaLabel = "All resources",
  moreLabel = "Read article",
  showCategory = true,
  showCta = true,
  articleTitlesAsHeadings = false,
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
          {showCta ? (
            <a href="/blog/" className="resources-cta">
              {ctaLabel}
            </a>
          ) : null}
        </div>
        <div className="resources-grid">
          {articles.map((article) => (
            <a key={article.href} data-reveal="" href={article.href} className="resources-card">
              <div className="resources-card-media">
                <img src={article.image} alt={article.alt} loading="lazy" />
              </div>
              {showCategory && article.category ? <div className="resources-card-cat">{article.category}</div> : null}
              {articleTitlesAsHeadings ? (
                <h3 className="resources-card-title">{article.title}</h3>
              ) : (
                <div className="resources-card-title">{article.title}</div>
              )}
              <p className="resources-card-excerpt">{article.excerpt}</p>
              <div className="resources-card-more">{moreLabel}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

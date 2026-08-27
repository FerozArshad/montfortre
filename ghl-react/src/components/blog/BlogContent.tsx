import { useEffect, useState } from "react";
import ContactSection from "../shared/ContactSection";
import PromisesBar from "../shared/PromisesBar";
import { BLOG_ARTICLE_REGISTRY } from "../../blog/registry";
import { fetchPublishedBlogCards, type BlogCard } from "../../lib/cms/blog";
import "../../styles/blog-page.css";

/** Offline / pre-CMS fallback — real featured images from static article meta. */
const ARTICLES: BlogCard[] = Object.values(BLOG_ARTICLE_REGISTRY).map((article) => ({
  href: `/${article.meta.slug}/`,
  image: article.meta.featuredImageSrc,
  alt: article.meta.featuredImageAlt || article.meta.h1,
  category: article.meta.category,
  title: article.meta.h1,
  excerpt: article.meta.lead,
}));

export default function BlogContent() {
  const [articles, setArticles] = useState<BlogCard[]>([...ARTICLES]);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const cms = await fetchPublishedBlogCards();
      if (!cancelled && cms?.length) setArticles(cms);
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <>
      <section className="blog-hero" data-screen-label="Blog hero">
        <img className="blog-hero-photo" src="/redesign-assets/hoods/harlem.webp" alt="Harlem" aria-hidden="true" />
        <div className="blog-hero-shade" />
        <div className="blog-hero-ring" />
        <div className="blog-hero-inner">
          <div className="blog-hero-kicker">
            <span className="blog-hero-kicker-line" />
            <span className="blog-hero-kicker-label">Resources</span>
            <span className="blog-hero-kicker-line" />
          </div>
          <h1>News & realtor advice</h1>
          <p className="blog-hero-lead">
            Market reports, buyer and seller guides, and neighborhood insight from Stanley Montfort, stay in the loop on everything NYC real estate.
          </p>
          <div className="blog-hero-ctas">
            <a href="https://calendly.com/montfort" target="_blank" rel="noopener" className="blog-hero-book">
              Book a consultation{" "}
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h9M8 3.5L12.5 8 8 12.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href="tel:+1-646-970-1078" className="blog-hero-tel">
              Call (646) 970-1078
            </a>
          </div>
        </div>
      </section>
      <PromisesBar variant="nbhd" />

      <section className="blog-articles" data-screen-label="Articles">
        <div className="blog-articles-inner">
          <div data-reveal="" className="blog-articles-head">
            <div className="blog-articles-count">
              {articles.length} article{articles.length === 1 ? "" : "s"}
            </div>
            <div className="blog-articles-topics">Market Reports · Buyer & Seller Guides · Co-Ownership · Investing</div>
          </div>
          <div className="blog-articles-grid">
            {articles.map((article) => (
              <a key={article.href} data-reveal="" href={article.href} className="blog-card">
                <div className="blog-card-media">
                  <img src={article.image} alt={article.alt} loading="lazy" />
                </div>
                <div className="blog-card-body">
                  <div className="blog-card-cat">{article.category}</div>
                  <div className="blog-card-title">{article.title}</div>
                  <p>{article.excerpt}</p>
                  <div className="blog-card-more">
                    Read article <span className="blog-card-more-arrow">→</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}

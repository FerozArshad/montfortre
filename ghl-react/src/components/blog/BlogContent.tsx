import { useEffect, useState } from "react";
import ContactSection from "../shared/ContactSection";
import HeroGoogleRating from "../shared/HeroGoogleRating";
import PromisesBar from "../shared/PromisesBar";
import { BLOG_ARTICLE_REGISTRY } from "../../blog/registry";
import { fetchPublishedBlogCards, type BlogCard } from "../../lib/cms/blog";
import "../../styles/neighborhoods-page.css";
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
      <section className="nbhd-hero" data-screen-label="Blog hero">
        <div className="nbhd-hero-ring" />
        <div className="nbhd-hero-inner">
          <div data-reveal="">
            <div className="nbhd-crumb">
              <a href="/" className="nbhd-crumb-link">Home</a> <span className="nbhd-crumb-sep">/</span>{" "}
              <span className="nbhd-crumb-here">News &amp; Realtor Advice</span>
            </div>
            <h1>News &amp; realtor advice for NYC buyers and sellers</h1>
            <p className="nbhd-hero-lead">
              Market reports, buyer and seller guides, and neighborhood insight from Stanley Montfort, stay in the loop
              on everything NYC real estate.
            </p>
            <div className="nbhd-hero-ctas">
              <a href="tel:+16469701078" className="nbhd-hero-tel">
                Call 1-(646)-970-1078
              </a>
              <a href="https://calendly.com/montfort" className="nbhd-hero-book">
                Book A Consultation
              </a>
            </div>
          </div>
          <div className="nbhd-hero-media" data-reveal="">
            <div className="nbhd-hero-frame">
              <img
                src="/redesign-assets/hoods/harlem.webp"
                alt="Harlem brownstones"
                width="640"
                height="512"
                loading="eager"
              />
            </div>
            <HeroGoogleRating prefix="nbhd" />
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

import ContactSection from "../shared/ContactSection";
import "../../styles/brownstone-guide.css";
import BlogAuthorBio from "./BlogAuthorBio";
import BlogShareButtons from "./BlogShareButtons";
import LeadFormHydrator from "../shared/LeadFormHydrator";
import type { BlogArticleMeta } from "./types";
import type { ReactNode } from "react";
import { useRef } from "react";

interface BlogArticleLayoutProps {
  meta: BlogArticleMeta;
  bodyHtml: string;
  afterBody?: ReactNode;
}

export default function BlogArticleLayout({ meta, bodyHtml, afterBody }: BlogArticleLayoutProps) {
  const showHeroCtas = meta.showHeroCtas !== false;
  const faqs = meta.faqs ?? [];
  const bodyRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <section className="bsg-hero" data-screen-label="Article hero">
        <div className="bsg-hero-ring" />
        <div className="bsg-hero-inner">
          <div data-reveal="">
            <div className="bsg-crumb">
              <a href="/blog/" className="bsg-crumb-link">
                Resources
              </a>{" "}
              <span className="bsg-crumb-sep">/</span>{" "}
              <span className="bsg-crumb-here">{meta.category}</span>
            </div>
            <h1>{meta.h1}</h1>
            {meta.lead ? <p className="bsg-hero-lead">{meta.lead}</p> : null}
            <div className="bsg-hero-by">
              By{" "}
              <a href={meta.authorHref} className="bsg-hero-author">
                {meta.authorName}
              </a>{" "}
              <span className="bsg-hero-dot">·</span> {meta.authorRole}
            </div>
            {showHeroCtas ? (
              <div className="bsg-hero-ctas">
                <a href="https://calendly.com/montfort" className="bsg-hero-book">
                  Book Now
                </a>
                <a href="tel:+16469701078" className="bsg-hero-tel">
                  (646) 970-1078
                </a>
              </div>
            ) : null}
          </div>
          <div data-reveal="" className="bsg-hero-media">
            <div className="bsg-hero-pin" />
            <div className="bsg-hero-frame">
              <img className="bsg-hero-image" src={meta.featuredImageSrc} alt={meta.featuredImageAlt} />
            </div>
          </div>
        </div>
      </section>
      <section className="bsg-article" data-screen-label="Article">
        <div className="bsg-article-inner">
          {meta.toc.length > 0 ? (
            <aside className="bsg-toc">
              <div className="bsg-toc-label">On this page</div>
              <nav>
                {meta.toc.map(([href, label]) => (
                  <a key={href} href={href} className="bsg-toc-link">
                    {label}
                  </a>
                ))}
              </nav>
            </aside>
          ) : (
            <aside className="bsg-toc bsg-toc-empty" aria-hidden="true" />
          )}
          <div data-reveal="" className="bsg-body">
            <div className="bsg-kicker">
              <span className="bsg-kicker-line" />
              <span className="bsg-kicker-label">{meta.kickerLabel ?? "The article"}</span>
            </div>
            <div ref={bodyRef} className="bsg-html" dangerouslySetInnerHTML={{ __html: bodyHtml }} />
            <LeadFormHydrator containerRef={bodyRef} bodyHtml={bodyHtml} />
            {afterBody}
            {faqs.length > 0 ? (
              <>
                <h2 id="faqs" className="bsg-faqs-title">
                  Frequently asked questions
                </h2>
                <div className="bsg-faqs">
                  {faqs.map((faq, i) => (
                    <details key={`${faq.q}-${i}`} className="bsg-faq">
                      <summary>
                        {faq.q}
                        <span className="bsg-faq-mark">+</span>
                      </summary>
                      <p>{faq.a}</p>
                    </details>
                  ))}
                </div>
              </>
            ) : null}
            <BlogShareButtons shareUrl={meta.shareUrl} />
            <BlogAuthorBio />
          </div>
        </div>
      </section>
      <ContactSection />
    </>
  );
}

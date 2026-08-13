import "../../styles/idx-page.css";
import DesktopHeader from "../layout/DesktopHeader";

export interface IdxSearchLayoutProps {
  eyebrow: string;
  title: string;
  description: string;
  iframeSrc: string;
  iframeTitle: string;
  externalSearchUrl: string;
  externalButtonLabel: string;
}

export default function IdxSearchLayout({
  eyebrow,
  title,
  description,
  iframeSrc,
  iframeTitle,
  externalSearchUrl,
  externalButtonLabel,
}: IdxSearchLayoutProps) {
  return (
    <div className="idx-page">
      <DesktopHeader />

      <section className="idx-hero">
        <div className="idx-hero-inner">
          <div className="idx-eyebrow">{eyebrow}</div>
          <h1 className="idx-title">{title}</h1>
          <p className="idx-lead">{description}</p>
        </div>
      </section>

      <div className="idx-wrap">
        <div className="idx-ext-row">
          <a href={externalSearchUrl} target="_blank" rel="noopener noreferrer" className="idx-ext-btn">
            {externalButtonLabel}
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path
                d="M6 3h7v7M13 3L7.5 8.5M11 9v4H3V5h4"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

        <iframe
          className="idx-frame"
          src={iframeSrc}
          scrolling="yes"
          title={iframeTitle}
          loading="lazy"
        />

        <p className="idx-footnote">
          Live listing data provided by OLR IDX. Need help?{" "}
          <a href="/contact/">Contact us</a> or{" "}
          <a href="https://stanley.olridx.com/#" target="_blank" rel="noopener noreferrer">
            log in to your customer account
          </a>
          .
        </p>
      </div>
    </div>
  );
}

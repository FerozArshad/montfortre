import { useEffect, useState } from "react";
import "../../styles/idx-page.css";
import "../../styles/page-listings.css";
import DesktopHeader from "../layout/DesktopHeader";
import { fetchOlrCatalogListings, peekOlrCatalogCache, type OlrListingCard } from "../../lib/olrListings";

export interface IdxSearchLayoutProps {
  eyebrow: string;
  title: string;
  description: string;
  mode: "sales" | "rentals";
  externalSearchUrl: string;
  externalButtonLabel: string;
}

/** Smaller first page = faster OLR response on cold loads. */
const PAGE_SIZE = 12;

export default function IdxSearchLayout({
  eyebrow,
  title,
  description,
  mode,
  externalSearchUrl,
  externalButtonLabel,
}: IdxSearchLayoutProps) {
  const cached = peekOlrCatalogCache(mode, 0, PAGE_SIZE);
  const [listings, setListings] = useState<OlrListingCard[]>(cached?.listings ?? []);
  const [total, setTotal] = useState(cached?.total ?? 0);
  const [status, setStatus] = useState<"loading" | "ready" | "error">(cached ? "ready" : "loading");
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;
    const warm = peekOlrCatalogCache(mode, 0, PAGE_SIZE);
    if (warm) {
      setListings(warm.listings);
      setTotal(warm.total);
      setStatus("ready");
      setError("");
    } else {
      setStatus("loading");
      setError("");
    }

    void (async () => {
      try {
        const result = await fetchOlrCatalogListings(mode, 0, PAGE_SIZE, {
          onUpdate: (fresh) => {
            if (cancelled) return;
            setListings(fresh.listings);
            setTotal(fresh.total);
            setStatus("ready");
          },
        });
        if (cancelled) return;
        setListings(result.listings);
        setTotal(result.total);
        setStatus("ready");
      } catch (err) {
        if (cancelled) return;
        if (warm) {
          setStatus("ready");
          return;
        }
        setListings([]);
        setTotal(0);
        setStatus("error");
        setError(err instanceof Error ? err.message : "Could not load listings");
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [mode]);

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
          {status === "ready" ? (
            <p className="idx-count">
              Showing {listings.length}
              {total > listings.length ? ` of ${total.toLocaleString()}` : ""} live MLS results
            </p>
          ) : status === "loading" ? (
            <p className="idx-count idx-count--loading">Fetching live MLS results…</p>
          ) : (
            <span />
          )}
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

        {status === "loading" ? (
          <div className="pls-grid idx-grid" aria-busy="true" aria-label="Loading listings">
            {Array.from({ length: 6 }, (_, i) => (
              <div key={i} className="pls-card pls-card--skeleton" aria-hidden="true">
                <div className="pls-card-media" />
                <div className="pls-card-body">
                  <div className="pls-skel-line pls-skel-line--price" />
                  <div className="pls-skel-line" />
                  <div className="pls-skel-line pls-skel-line--meta" />
                </div>
              </div>
            ))}
          </div>
        ) : null}

        {status === "error" ? (
          <div className="pls-idx-fallback">
            <div className="pls-idx-fallback-kicker">Live MLS search</div>
            <h3>Couldn’t load listings here</h3>
            <p>{error || "The OLR feed is temporarily unavailable."}</p>
            <a href={externalSearchUrl} target="_blank" rel="noopener noreferrer" className="pls-btn pls-btn--gold">
              Open full search
            </a>
          </div>
        ) : null}

        {status === "ready" && listings.length > 0 ? (
          <div className="pls-grid idx-grid">
            {listings.map((listing) => (
              <a
                key={listing.id}
                href={listing.href}
                target="_blank"
                rel="noopener noreferrer"
                className="pls-card"
              >
                <div className="pls-card-media">
                  {listing.ribbon ? <span className="pls-card-ribbon">{listing.ribbon}</span> : null}
                  <img className="pls-card-photo" src={listing.image} alt={listing.title} loading="lazy" />
                </div>
                <div className="pls-card-body">
                  <div className="pls-card-price">{listing.price}</div>
                  <div className="pls-card-title">{listing.title}</div>
                  <div className="pls-card-meta">
                    {[listing.neighborhood, listing.borough].filter(Boolean).join(" · ")}
                  </div>
                  {listing.meta ? <div className="pls-card-meta">{listing.meta}</div> : null}
                </div>
              </a>
            ))}
          </div>
        ) : null}

        {status === "ready" && listings.length === 0 ? (
          <div className="pls-idx-fallback">
            <div className="pls-idx-fallback-kicker">Live MLS search</div>
            <h3>No listings returned</h3>
            <p>Try the full OLR search for the latest inventory.</p>
            <a href={externalSearchUrl} target="_blank" rel="noopener noreferrer" className="pls-btn pls-btn--gold">
              Open full search
            </a>
          </div>
        ) : null}

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

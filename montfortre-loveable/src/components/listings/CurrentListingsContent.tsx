import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  fetchOlrCatalogListings,
  OLR_CARD_FETCH_SIZE,
  peekOlrCatalogCache,
  prefetchOlrSalesCatalog,
  type OlrListingCard,
} from "../../lib/olrListings";
import HeroGoogleRating from "../shared/HeroGoogleRating";
import IdxListingLeadModal, { isIdxListingUnlocked } from "../shared/IdxListingLeadModal";
import "../../styles/current-listings.css";
import "../../styles/page-listings.css";

const PAGE_SIZE = 6;
const FETCH_SIZE = OLR_CARD_FETCH_SIZE;
const OLR_SALES_URL = "https://stanley.olridx.com/Search/Sales";

type SortKey = "default" | "price-asc" | "price-desc";

function parsePriceNum(price: string): number {
  const n = Number(String(price).replace(/[^\d.]/g, ""));
  return Number.isFinite(n) ? n : 0;
}

function ListingPager({
  page,
  pageCount,
  onPrev,
  onNext,
}: {
  page: number;
  pageCount: number;
  onPrev: () => void;
  onNext: () => void;
}) {
  if (pageCount <= 1) return null;
  return (
    <div className="pls-pager cl-pager">
      <button
        type="button"
        className="pls-pager-btn"
        disabled={page <= 0}
        onClick={onPrev}
        aria-label="Previous listings"
      >
        ←
      </button>
      <span className="pls-pager-status">
        Page {page + 1} of {pageCount}
      </span>
      <button
        type="button"
        className="pls-pager-btn"
        disabled={page >= pageCount - 1}
        onClick={onNext}
        aria-label="Next listings"
      >
        →
      </button>
    </div>
  );
}

function OlrCard({
  listing,
  onOpen,
}: {
  listing: OlrListingCard;
  onOpen: (listing: OlrListingCard) => void;
}) {
  const [imgSrc, setImgSrc] = useState(listing.image || "/placeholder.svg");

  useEffect(() => {
    setImgSrc(listing.image || "/placeholder.svg");
  }, [listing.image, listing.id]);

  return (
    <button type="button" className="pls-card pls-card--btn" onClick={() => onOpen(listing)}>
      <div className="pls-card-media">
        {listing.ribbon ? <span className="pls-card-ribbon">{listing.ribbon}</span> : null}
        <img
          className="pls-card-photo"
          src={imgSrc}
          alt={listing.title}
          loading="lazy"
          decoding="async"
          onError={() => setImgSrc("/placeholder.svg")}
        />
      </div>
      <div className="pls-card-body">
        <div className="pls-card-price">{listing.price}</div>
        <div className="pls-card-title">{listing.title}</div>
        <div className="pls-card-meta">
          {[listing.neighborhood, listing.borough].filter(Boolean).join(" · ")}
        </div>
        {listing.meta ? <div className="pls-card-meta">{listing.meta}</div> : null}
      </div>
    </button>
  );
}

export default function CurrentListingsContent() {
  const cached = peekOlrCatalogCache("sales", 0, FETCH_SIZE);
  const [olrListings, setOlrListings] = useState<OlrListingCard[]>(cached?.listings ?? []);
  const [olrTotal, setOlrTotal] = useState(cached?.total ?? 0);
  const [status, setStatus] = useState<"loading" | "ready" | "error">(cached ? "ready" : "loading");
  const [error, setError] = useState("");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<SortKey>("default");
  const [page, setPage] = useState(0);
  const [pendingHref, setPendingHref] = useState<string | null>(null);
  const [pendingTitle, setPendingTitle] = useState("");
  const [leadOpen, setLeadOpen] = useState(false);

  useEffect(() => {
    prefetchOlrSalesCatalog(FETCH_SIZE);
  }, []);

  useEffect(() => {
    let cancelled = false;
    const warm = peekOlrCatalogCache("sales", 0, FETCH_SIZE);
    if (warm) {
      setOlrListings(warm.listings);
      setOlrTotal(warm.total);
      setStatus("ready");
      setError("");
    } else {
      setStatus("loading");
      setError("");
    }

    void (async () => {
      try {
        const result = await fetchOlrCatalogListings("sales", 0, FETCH_SIZE, {
          onUpdate: (fresh) => {
            if (cancelled) return;
            setOlrListings(fresh.listings);
            setOlrTotal(fresh.total);
            setStatus("ready");
          },
        });
        if (cancelled) return;
        setOlrListings(result.listings);
        setOlrTotal(result.total);
        setStatus("ready");
      } catch (err) {
        if (cancelled) return;
        if (warm) {
          setStatus("ready");
          return;
        }
        setOlrListings([]);
        setOlrTotal(0);
        setStatus("error");
        setError(err instanceof Error ? err.message : "Could not load listings");
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    let rows = olrListings;
    if (q) {
      rows = rows.filter((l) => {
        const hay = `${l.title} ${l.neighborhood} ${l.borough} ${l.meta} ${l.price}`.toLowerCase();
        return hay.includes(q);
      });
    }
    if (sort === "price-asc") rows = [...rows].sort((a, b) => parsePriceNum(a.price) - parsePriceNum(b.price));
    else if (sort === "price-desc") rows = [...rows].sort((a, b) => parsePriceNum(b.price) - parsePriceNum(a.price));
    return rows;
  }, [olrListings, query, sort]);

  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const safePage = Math.min(page, pageCount - 1);
  const sliceStart = safePage * PAGE_SIZE;
  const visible = filtered.slice(sliceStart, sliceStart + PAGE_SIZE);
  const displayTotal = Math.max(olrTotal, filtered.length);
  const rangeStart = filtered.length ? sliceStart + 1 : 0;
  const rangeEnd = sliceStart + visible.length;

  useEffect(() => {
    setPage(0);
  }, [query, sort]);

  const featuredImage = "/redesign-assets/hoods/harlem.webp";
  const activeCount = status === "ready" ? displayTotal : olrListings.length || "—";

  function openListing(listing: OlrListingCard) {
    if (isIdxListingUnlocked()) {
      window.open(listing.href, "_blank", "noopener,noreferrer");
      return;
    }
    setPendingHref(listing.href);
    setPendingTitle(listing.title);
    setLeadOpen(true);
  }

  function handleUnlocked() {
    if (pendingHref) {
      window.open(pendingHref, "_blank", "noopener,noreferrer");
      setPendingHref(null);
    }
  }

  function goPrev() {
    setPage((p) => Math.max(0, p - 1));
    document.getElementById("cl-grid")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function goNext() {
    setPage((p) => Math.min(pageCount - 1, p + 1));
    document.getElementById("cl-grid")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div className="cl-root">
      <section className="cl-hero cl-hero--stan" data-screen-label="Current listings hero">
        <div className="cl-hero-ring cl-hero-ring--tr" />
        <div className="cl-hero-ring cl-hero-ring--bl" />
        <div className="cl-hero-stan-inner">
          <div className="cl-hero-portrait" data-reveal="">
            <div className="cl-hero-halo" />
            <div className="cl-hero-dot" />
            <div className="cl-hero-photo">
              <img
                className="cl-hero-photo-img"
                src={featuredImage}
                alt="Featured Montfort listing"
              />
            </div>
            <div className="cl-hero-sales">
              <div className="cl-hero-sales-num">
                {typeof activeCount === "number" ? activeCount.toLocaleString() : activeCount}
              </div>
              <div className="cl-hero-sales-label">Active Listings</div>
            </div>
            <HeroGoogleRating prefix="cl" />
          </div>
          <div data-reveal="">
            <div className="cl-hero-kicker">
              <span className="cl-kicker-line" />
              <span className="cl-hero-kicker-label">Live MLS inventory</span>
            </div>
            <h1>Current Listings</h1>
            <p className="cl-hero-lead">
              Browse live NYC inventory below — the same card layout and MLS feed used on our neighborhood
              pages, with price-drop badges and photo-backed results.
            </p>
            <div className="cl-hero-ctas">
              <a href="#cl-grid" className="cl-hero-book">
                View listings below
              </a>
              <a href={OLR_SALES_URL} className="cl-hero-email" target="_blank" rel="noopener noreferrer">
                Open full search
              </a>
            </div>
            <div className="cl-hero-contact">
              <a href="tel:+16469701078" className="cl-hero-link">
                <span>(646) 970-1078</span>
              </a>
              <a href="mailto:sm@montfortre.com" className="cl-hero-link">
                <span>sm@montfortre.com</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="cl-toolbar" aria-label="Search and sort listings">
        <div className="cl-toolbar-inner">
          <div className="cl-toolbar-controls">
            <label className="cl-search">
              <span className="cl-sr">Search listings</span>
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by address or neighborhood"
              />
            </label>
            <label className="cl-sort">
              <span>Sort</span>
              <select value={sort} onChange={(e) => setSort(e.target.value as SortKey)}>
                <option value="default">Default</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </label>
          </div>

          {status === "ready" && filtered.length > 0 ? (
            <div className="pls-toolbar cl-toolbar-meta">
              <p className="pls-count">
                Showing {rangeStart}–{rangeEnd} of {filtered.length} live MLS results
                {olrTotal > filtered.length && !query
                  ? ` (${olrTotal.toLocaleString()} total in full search)`
                  : ""}
              </p>
              <ListingPager page={safePage} pageCount={pageCount} onPrev={goPrev} onNext={goNext} />
            </div>
          ) : (
            <p className="cl-count">
              {status === "loading"
                ? "Loading…"
                : status === "error"
                  ? "Listings unavailable"
                  : `${filtered.length} listing${filtered.length === 1 ? "" : "s"}`}
            </p>
          )}
        </div>
      </section>

      <section className="cl-grid-wrap pls" id="cl-grid" data-screen-label="Listings grid">
        <div className="pls-inner cl-pls-inner">
          <div className="pls-head">
            <div>
              <div className="pls-kicker">Current listings</div>
              <h2>Homes for sale</h2>
            </div>
            <div className="pls-actions">
              <a href={OLR_SALES_URL} target="_blank" rel="noopener noreferrer" className="pls-btn">
                Open full search
              </a>
              <Link to="/idx-sales/" className="pls-ext">
                Search all listings
              </Link>
            </div>
          </div>

          {status === "loading" ? (
            <div className="pls-grid" aria-busy="true" aria-label="Loading listings">
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
              <p>{error || "The OLR feed is temporarily unavailable. It can take up to a minute on a cold start."}</p>
              <a href={OLR_SALES_URL} target="_blank" rel="noopener noreferrer" className="pls-btn pls-btn--gold">
                Open full search
              </a>
            </div>
          ) : null}

          {status === "ready" && visible.length > 0 ? (
            <div className="pls-grid">
              {visible.map((listing) => (
                <OlrCard key={listing.id} listing={listing} onOpen={openListing} />
              ))}
            </div>
          ) : null}

          {status === "ready" && filtered.length === 0 ? (
            <div className="pls-idx-fallback">
              <div className="pls-idx-fallback-kicker">Live MLS search</div>
              <h3>{query ? "No listings match your search" : "No active listings right now"}</h3>
              <p>
                {query
                  ? "Try a different address or clear the filter."
                  : "Check back soon, or open the full OLR search for the latest inventory."}
              </p>
              <a href={OLR_SALES_URL} target="_blank" rel="noopener noreferrer" className="pls-btn pls-btn--gold">
                Open full search
              </a>
            </div>
          ) : null}

          <p className="pls-note">
            Live listing data provided by OLR IDX. Need help? <a href="/contact/">Contact us</a> or{" "}
            <a href="https://stanley.olridx.com/#" target="_blank" rel="noopener noreferrer">
              log in to your customer account
            </a>
            .
          </p>
        </div>
      </section>

      <IdxListingLeadModal
        open={leadOpen}
        onClose={() => setLeadOpen(false)}
        onUnlocked={handleUnlocked}
        marketLabel="Current Listings"
        listingTitle={pendingTitle}
      />
    </div>
  );
}

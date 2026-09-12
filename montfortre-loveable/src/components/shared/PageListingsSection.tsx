import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import type { ListingDetail } from "../../data/listings";
import { fetchPublishedListings } from "../../lib/cms/listings";
import {
  extractOlrSavedSearchId,
  fetchOlrSavedSearchListings,
  OLR_CARD_FETCH_SIZE,
  peekOlrSavedSearchCache,
  type OlrListingCard,
} from "../../lib/olrListings";
import IdxListingLeadModal, { isIdxListingUnlocked } from "./IdxListingLeadModal";
import "../../styles/page-listings.css";

const OLR_SALES_URL = "https://stanley.olridx.com/Search/Sales";
const PAGE_SIZE = 6;

interface PageListingsSectionProps {
  market: string;
  propertyType?: string;
  label: string;
  idxUrl?: string;
}

function norm(value: string): string {
  return value.trim().toLowerCase();
}

function matches(listing: ListingDetail, market: string, propertyType?: string): boolean {
  const hood = norm(listing.neighborhood);
  if (!hood || !hood.includes(norm(market))) return false;
  const type = norm(listing.propertyType);
  if (!propertyType || !type) return true;
  return type.includes(norm(propertyType));
}

function OlrListingCardButton({
  listing,
  onOpen,
}: {
  listing: OlrListingCard;
  onOpen: (href: string, title: string) => void;
}) {
  const [imgSrc, setImgSrc] = useState(listing.image || "/placeholder.svg");

  useEffect(() => {
    setImgSrc(listing.image || "/placeholder.svg");
  }, [listing.image, listing.id]);

  return (
    <button
      type="button"
      className="pls-card pls-card--btn"
      onClick={() => onOpen(listing.href, listing.title)}
    >
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

function ListingsPager({
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
    <div className="pls-pager" role="navigation" aria-label="Listings pages">
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

/**
 * Listings for one market page.
 * When idxUrl is set, loads that OLR saved search and shows 6 cards at a time
 * with prev/next. Card click requires a session lead unlock before opening OLR.
 */
export default function PageListingsSection({ market, propertyType, label, idxUrl }: PageListingsSectionProps) {
  const searchUrl = idxUrl?.trim() || OLR_SALES_URL;
  const savedSearchId = idxUrl ? extractOlrSavedSearchId(idxUrl) : null;
  const cachedOlr = savedSearchId ? peekOlrSavedSearchCache(savedSearchId, { pageSize: OLR_CARD_FETCH_SIZE }) : null;

  const [rows, setRows] = useState<ListingDetail[]>([]);
  const [olrListings, setOlrListings] = useState<OlrListingCard[]>(cachedOlr?.listings ?? []);
  const [olrTotal, setOlrTotal] = useState(cachedOlr?.total ?? 0);
  const [olrStatus, setOlrStatus] = useState<"idle" | "loading" | "ready" | "error">(
    savedSearchId ? (cachedOlr ? "ready" : "loading") : "idle",
  );
  const [olrError, setOlrError] = useState("");
  const [page, setPage] = useState(0);
  const [pendingHref, setPendingHref] = useState<string | null>(null);
  const [pendingTitle, setPendingTitle] = useState("");
  const [leadOpen, setLeadOpen] = useState(false);

  useEffect(() => {
    let cancelled = false;
    void (async () => {
      const listings = await fetchPublishedListings();
      if (!cancelled) setRows(listings);
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!savedSearchId) {
      setOlrListings([]);
      setOlrTotal(0);
      setOlrStatus("idle");
      setOlrError("");
      setPage(0);
      return;
    }

    let cancelled = false;
    const cached = peekOlrSavedSearchCache(savedSearchId, { pageSize: OLR_CARD_FETCH_SIZE });
    if (cached) {
      setOlrListings(cached.listings);
      setOlrTotal(cached.total);
      setOlrStatus("ready");
      setOlrError("");
    } else {
      setOlrStatus("loading");
      setOlrError("");
    }
    setPage(0);

    void (async () => {
      try {
        const result = await fetchOlrSavedSearchListings(savedSearchId, {
          pageSize: OLR_CARD_FETCH_SIZE,
          onUpdate: (fresh) => {
            if (cancelled) return;
            setOlrListings(fresh.listings);
            setOlrTotal(fresh.total);
            setOlrStatus("ready");
          },
        });
        if (cancelled) return;
        setOlrListings(result.listings);
        setOlrTotal(result.total);
        setOlrStatus("ready");
      } catch (err) {
        if (cancelled) return;
        if (cached) {
          // Keep showing stale cards if refresh failed.
          setOlrStatus("ready");
          return;
        }
        setOlrListings([]);
        setOlrTotal(0);
        setOlrStatus("error");
        setOlrError(err instanceof Error ? err.message : "Could not load listings");
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [savedSearchId]);

  const mine = useMemo(
    () => rows.filter((listing) => matches(listing, market, propertyType)),
    [rows, market, propertyType],
  );

  const showOlr = Boolean(savedSearchId);
  const pageCount = Math.max(1, Math.ceil(olrListings.length / PAGE_SIZE));
  const safePage = Math.min(page, pageCount - 1);
  const sliceStart = safePage * PAGE_SIZE;
  const visible = olrListings.slice(sliceStart, sliceStart + PAGE_SIZE);
  const displayTotal = Math.max(olrTotal, olrListings.length);
  const rangeStart = olrListings.length ? sliceStart + 1 : 0;
  const rangeEnd = sliceStart + visible.length;

  function openListing(href: string, title: string) {
    if (isIdxListingUnlocked()) {
      window.open(href, "_blank", "noopener,noreferrer");
      return;
    }
    setPendingHref(href);
    setPendingTitle(title);
    setLeadOpen(true);
  }

  function handleUnlocked() {
    if (pendingHref) {
      window.open(pendingHref, "_blank", "noopener,noreferrer");
      setPendingHref(null);
    }
  }

  return (
    <section className="pls" data-screen-label="Market listings">
      <div className="pls-inner">
        <div className="pls-head">
          <div>
            <div className="pls-kicker">Current listings</div>
            <h2>{label} for sale</h2>
          </div>
          <div className="pls-actions">
            <a href={searchUrl} target="_blank" rel="noopener noreferrer" className="pls-btn">
              Open full search
            </a>
            <Link to="/idx-sales" className="pls-ext">
              Search all listings
            </Link>
          </div>
        </div>

        {showOlr ? (
          <div className="pls-idx">
            {olrStatus === "loading" ? <div className="pls-idx-loading">Loading live listings…</div> : null}

            {olrStatus === "error" ? (
              <div className="pls-idx-fallback">
                <div className="pls-idx-fallback-kicker">Live MLS search</div>
                <h3>Couldn’t load listings here</h3>
                <p>{olrError || "The OLR feed is temporarily unavailable."}</p>
                <a href={searchUrl} target="_blank" rel="noopener noreferrer" className="pls-btn pls-btn--gold">
                  Open {label} listings
                </a>
              </div>
            ) : null}

            {olrStatus === "ready" && olrListings.length === 0 ? (
              <div className="pls-idx-fallback">
                <div className="pls-idx-fallback-kicker">Live MLS search</div>
                <h3>No active listings right now</h3>
                <p>Check back soon, or open the full OLR search for the latest inventory.</p>
                <a href={searchUrl} target="_blank" rel="noopener noreferrer" className="pls-btn pls-btn--gold">
                  Open full search
                </a>
              </div>
            ) : null}

            {visible.length > 0 ? (
              <>
                <div className="pls-toolbar">
                  <p className="pls-count">
                    Showing {rangeStart}–{rangeEnd} of {displayTotal} live MLS results
                    {olrListings.length < displayTotal ? " · open full search for more" : ""}
                  </p>
                  <ListingsPager
                    page={safePage}
                    pageCount={pageCount}
                    onPrev={() => setPage((p) => Math.max(0, p - 1))}
                    onNext={() => setPage((p) => Math.min(pageCount - 1, p + 1))}
                  />
                </div>

                <div className="pls-grid">
                  {visible.map((listing) => (
                    <OlrListingCardButton key={listing.id} listing={listing} onOpen={openListing} />
                  ))}
                </div>
              </>
            ) : null}

            <p className="pls-note">
              Live listing data provided by OLR IDX. Need help? <a href="/contact/">Contact us</a> or{" "}
              <a href="https://stanley.olridx.com/#" target="_blank" rel="noopener noreferrer">
                log in to your customer account
              </a>
              .
            </p>
          </div>
        ) : mine.length > 0 ? (
          <div className="pls-grid">
            {mine.slice(0, 6).map((listing) => (
              <Link key={listing.slug} to={`/${listing.slug}/`} className="pls-card">
                <div className="pls-card-media">
                  <img className="pls-card-photo" src={listing.heroImage} alt={listing.heroAlt || listing.title} loading="lazy" />
                </div>
                <div className="pls-card-body">
                  <div className="pls-card-price">{listing.price}</div>
                  <div className="pls-card-title">{listing.title}</div>
                  <div className="pls-card-meta">
                    {[listing.beds && `${listing.beds} beds`, listing.baths && `${listing.baths} baths`, listing.sqft]
                      .filter(Boolean)
                      .join(" · ")}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="pls-idx">
            <div className="pls-idx-fallback">
              <div className="pls-idx-fallback-kicker">Live MLS search</div>
              <h3>Browse {label} on OLR IDX</h3>
              <p>Open the full MLS search to see current inventory for this market.</p>
              <a href={searchUrl} target="_blank" rel="noopener noreferrer" className="pls-btn pls-btn--gold">
                Open {label} listings
              </a>
            </div>
          </div>
        )}
      </div>

      <IdxListingLeadModal
        open={leadOpen}
        onClose={() => setLeadOpen(false)}
        onUnlocked={handleUnlocked}
        marketLabel={label}
        listingTitle={pendingTitle}
      />
    </section>
  );
}

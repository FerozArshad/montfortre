import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import type { ListingDetail } from "../../data/listings";
import { fetchPublishedListings } from "../../lib/cms/listings";
import "../../styles/page-listings.css";

const OLR_SALES_URL = "https://stanley.olridx.com/Search/Sales";

interface PageListingsSectionProps {
  /** Market this page covers, e.g. "Harlem". Matched against listing.neighborhood. */
  market: string;
  /** Property type this page covers, e.g. "Co-op". Matched when listings carry one. */
  propertyType?: string;
  /** Label used in headings and CTA copy, e.g. "Harlem co-ops". */
  label: string;
}

function norm(value: string): string {
  return value.trim().toLowerCase();
}

function matches(listing: ListingDetail, market: string, propertyType?: string): boolean {
  const hood = norm(listing.neighborhood);
  if (!hood || !hood.includes(norm(market))) return false;
  // Property type is optional on listings; only narrow when the listing has one.
  const type = norm(listing.propertyType);
  if (!propertyType || !type) return true;
  return type.includes(norm(propertyType));
}

/**
 * Listings for one market page. Prefers Stanley's own published listings when
 * any are tagged for this market, and otherwise falls back to the live OLR IDX
 * search, which cannot be filtered by URL. Tagging a listing's neighbourhood in
 * the admin promotes it into these sections automatically.
 */
export default function PageListingsSection({ market, propertyType, label }: PageListingsSectionProps) {
  const [rows, setRows] = useState<ListingDetail[]>([]);

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

  const mine = useMemo(
    () => rows.filter((listing) => matches(listing, market, propertyType)),
    [rows, market, propertyType],
  );

  // OLR only authorises the iframe on the live domain, so previews and
  // localhost get the link treatment instead of an empty white box.
  const canEmbed = typeof window !== "undefined" && window.location.hostname === "montfortre.com";

  return (
    <section className="pls" data-screen-label="Market listings">
      <div className="pls-inner">
        <div className="pls-head">
          <div>
            <div className="pls-kicker">Current listings</div>
            <h2>{label} for sale</h2>
          </div>
          <div className="pls-actions">
            <Link to="/idx-sales" className="pls-btn">
              Search all listings
            </Link>
            <a href={OLR_SALES_URL} target="_blank" rel="noopener noreferrer" className="pls-ext">
              Open full MLS search
            </a>
          </div>
        </div>

        {mine.length > 0 ? (
          <div className="pls-grid">
            {mine.slice(0, 6).map((listing) => (
              <Link key={listing.slug} to={`/listings/${listing.slug}/`} className="pls-card">
                <div className="pls-card-media">
                  <img src={listing.heroImage} alt={listing.heroAlt || listing.title} loading="lazy" />
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
            {canEmbed ? (
              <iframe
                className="pls-idx-frame"
                src={OLR_SALES_URL}
                scrolling="yes"
                title={`${label} for sale`}
                loading="lazy"
              />
            ) : (
              <div className="pls-idx-fallback">
                <p>
                  This panel holds the live OLR IDX sales search. OLR only permits it to embed on montfortre.com, so it
                  stays blank on localhost and preview builds.
                </p>
                <a href={OLR_SALES_URL} target="_blank" rel="noopener noreferrer" className="pls-btn">
                  Open live listings
                </a>
              </div>
            )}
            <p className="pls-note">
              Live listing data provided by OLR IDX. Need help? <a href="/contact/">Contact us</a> or{" "}
              <a href="https://stanley.olridx.com/#" target="_blank" rel="noopener noreferrer">
                log in to your customer account
              </a>
              .
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ALL_LISTINGS, type ListingDetail } from "../../data/listings";
import { fetchPublishedListings } from "../../lib/cms/listings";
import "../../styles/current-listings.css";

type SortKey = "default" | "newest" | "price-asc" | "price-desc";

function cardChips(listing: ListingDetail): string[] {
  const chips: string[] = [];
  if (listing.beds) {
    chips.push(`${listing.beds} bd`);
    if (listing.baths) chips.push(`${listing.baths} ba`);
    if (listing.sqft) chips.push(`${listing.sqft} sqft`);
    return chips;
  }
  if (listing.year) chips.push(`${listing.year} year`);
  if (listing.sqft) chips.push(`${listing.sqft} sqft`);
  if (listing.stories) chips.push(`${listing.stories} stories`);
  return chips;
}

function ListingCard({ listing }: { listing: ListingDetail }) {
  const chips = cardChips(listing);
  return (
    <Link to={`/${listing.slug}`} className="cl-card">
      <div className="cl-card-media">
        <img src={listing.heroImage} alt={listing.heroAlt || listing.title} loading="lazy" />
      </div>
      <div className="cl-card-body">
        <div className="cl-card-price">{listing.price}</div>
        <h2 className="cl-card-title">{listing.title}</h2>
        <p className="cl-card-loc">
          {listing.city.trim()}, {listing.state} {listing.zip}
        </p>
        {chips.length ? (
          <ul className="cl-card-chips">
            {chips.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        ) : null}
      </div>
    </Link>
  );
}

export default function CurrentListingsContent() {
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<SortKey>("default");
  const [source, setSource] = useState<ListingDetail[]>(ALL_LISTINGS);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const rows = await fetchPublishedListings();
      if (!cancelled) setSource(rows);
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const listings = useMemo(() => {
    const q = query.trim().toLowerCase();
    let rows = source.filter((l) => {
      if (/sold/i.test(l.status || "")) return false;
      if (!q) return true;
      const hay = `${l.title} ${l.street} ${l.city} ${l.zip} ${l.neighborhood}`.toLowerCase();
      return hay.includes(q);
    });
    if (sort === "newest") rows = [...rows].sort((a, b) => a.sortOrder - b.sortOrder);
    else if (sort === "price-asc") rows = [...rows].sort((a, b) => a.priceValue - b.priceValue);
    else if (sort === "price-desc") rows = [...rows].sort((a, b) => b.priceValue - a.priceValue);
    else rows = [...rows].sort((a, b) => a.sortOrder - b.sortOrder);
    return rows;
  }, [query, sort, source]);

  return (
    <div className="cl-root">
      <section className="cl-hero" data-screen-label="Current listings hero">
        <img
          className="cl-hero-photo"
          src="/redesign-assets/hoods/harlem.webp"
          alt=""
          aria-hidden="true"
        />
        <div className="cl-hero-shade" />
        <div className="cl-hero-inner">
          <p className="cl-brand">Montfort Real Estate</p>
          <h1>Current Listings</h1>
          <p className="cl-hero-lead">
            Curated Harlem and Manhattan inventory — browse every active Montfort listing in one
            place.
          </p>
          <a href="#cl-grid" className="cl-hero-cta">
            View listings
          </a>
        </div>
      </section>

      <section className="cl-toolbar" aria-label="Search and sort listings">
        <div className="cl-toolbar-inner">
          <label className="cl-search">
            <span className="cl-sr">Search listings</span>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by address or title"
            />
          </label>
          <label className="cl-sort">
            <span>Sort</span>
            <select value={sort} onChange={(e) => setSort(e.target.value as SortKey)}>
              <option value="default">Default</option>
              <option value="newest">Newest</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </label>
          <p className="cl-count" aria-live="polite">
            {listings.length} listing{listings.length === 1 ? "" : "s"}
          </p>
        </div>
      </section>

      <section id="cl-grid" className="cl-grid-wrap" data-screen-label="Listing grid">
        <div className="cl-grid">
          {listings.map((listing) => (
            <ListingCard key={listing.slug} listing={listing} />
          ))}
        </div>
        {!listings.length ? (
          <p className="cl-empty">No listings match your search. Try a different address or title.</p>
        ) : null}
      </section>
    </div>
  );
}

import { useCallback, useEffect, useRef, useState } from "react";
import type { ListingDetail } from "../../data/listings";
import { mergeSparkUi } from "../../data/listings/sparkUi";
import { submitLead } from "../../lib/cms/leads";
import ListingLeadModal, {
  dismissListingLeadSession,
  shouldAutoOpenListingLead,
} from "./ListingLeadModal";
import "../../styles/listing-page.css";

const DAYS = ["Mon", "Tues", "Weds", "Thur", "Fri", "Sat", "Sun"] as const;
const TIMES = ["Morning", "Afternoon", "Evening"] as const;

type TabId = "overview" | "insights";

type Props = {
  listing: ListingDetail;
  /** Spark-style live canvas — no lead popup, quieter chrome. */
  preview?: boolean;
};

function heroChips(listing: ListingDetail): string[] {
  const chips: string[] = [];
  if (listing.beds) chips.push(`${listing.beds} Bedroom${listing.beds === "1" ? "" : "s"}`);
  if (listing.baths) {
    chips.push(`${listing.baths} Bathroom${listing.baths === "1" ? "" : "s"}`);
  }
  if (!listing.beds && listing.year) chips.push(`Built ${listing.year}`);
  if (!listing.beds && listing.sqft) chips.push(`${listing.sqft} sqft`);
  if (!listing.beds && listing.stories) chips.push(`${listing.stories} stories`);
  if (listing.propertyType) chips.push(listing.propertyType);
  return chips;
}

function stickyMeta(listing: ListingDetail): string {
  const parts = [listing.price];
  if (listing.beds) parts.push(`${listing.beds} bd`);
  if (listing.baths) parts.push(`${listing.baths} ba`);
  if (!listing.beds && listing.year) parts.push(listing.year);
  if (!listing.beds && listing.sqft) parts.push(`${listing.sqft} sqft`);
  if (listing.propertyType) parts.push(listing.propertyType);
  return parts.join(" · ");
}

function Arrow({ dir }: { dir: "left" | "right" }) {
  return (
    <svg viewBox="0 0 16 16" width="16" height="16" fill="none" aria-hidden="true">
      <path
        d={dir === "left" ? "M13 8H3.5M8 3.5L3.5 8 8 12.5" : "M3 8h9.5M8 3.5L12.5 8 8 12.5"}
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Live AgentFire bed/bath icons, inlined so color follows brand. */
function BedIcon() {
  return (
    <svg viewBox="0 0 388.819 388.819" width="44" height="44" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M368.753,175.923V80.088c0-13.132-10.684-23.816-23.816-23.816H43.882c-13.132,0-23.816,10.684-23.816,23.816v95.836 C8.721,177.65,0,187.469,0,199.289v59.318c0,4.142,3.358,7.5,7.5,7.5h8.035v37c0,4.142,3.358,7.5,7.5,7.5h13.539v14.441 c0,4.142,3.358,7.5,7.5,7.5s7.5-3.358,7.5-7.5v-14.441h285.672v14.441c0,4.142,3.357,7.5,7.5,7.5s7.5-3.358,7.5-7.5v-14.441h13.539 c4.143,0,7.5-3.358,7.5-7.5v-37h8.034c4.143,0,7.5-3.358,7.5-7.5v-59.318C388.819,187.469,380.098,177.649,368.753,175.923z M35.065,80.088c0-4.861,3.955-8.816,8.816-8.816h301.055c4.861,0,8.816,3.955,8.816,8.816v95.566h-26.335 c5.24-5.641,10.57-11.573,16.09-17.92c2.455-2.823,2.454-7.023-0.001-9.845c-21.698-24.938-39.865-43.105-64.796-64.796 c-2.822-2.456-7.023-2.456-9.846,0c-24.932,21.692-43.098,39.859-64.795,64.796c-2.455,2.822-2.456,7.022-0.001,9.845 c5.521,6.348,10.85,12.28,16.09,17.92h-51.503c5.24-5.641,10.571-11.573,16.091-17.92c2.455-2.823,2.455-7.023-0.001-9.845 c-21.695-24.934-39.862-43.101-64.796-64.796c-2.822-2.456-7.023-2.456-9.846,0c-24.934,21.695-43.101,39.862-64.796,64.796 c-2.456,2.822-2.456,7.022-0.001,9.845c5.521,6.347,10.851,12.279,16.091,17.92H35.065V80.088z M240.853,175.654 c-6.901-7.084-13.872-14.611-21.15-22.842c17.929-20.287,33.803-36.161,54.085-54.086c20.282,17.924,36.156,33.799,54.086,54.086 c-7.277,8.231-14.249,15.758-21.15,22.842H240.853z M82.093,175.654c-6.901-7.085-13.873-14.611-21.151-22.842 c17.926-20.283,33.803-36.16,54.086-54.086c20.283,17.926,36.16,33.803,54.086,54.086c-7.277,8.231-14.249,15.757-21.151,22.842 H82.093z M358.285,295.607H30.535v-29.5h327.75V295.607z M373.819,251.107H15v-51.818c0-4.761,3.874-8.635,8.636-8.635h341.547 c4.762,0,8.636,3.874,8.636,8.635V251.107z"
      />
    </svg>
  );
}

function BathIcon() {
  return (
    <svg viewBox="0 0 60 60" width="44" height="44" aria-hidden="true" focusable="false">
      <g fill="currentColor">
        <path d="M59,57.999H49v-2.246c2.487-0.633,4.533-2.536,5.241-5.087l3.552-12.787c1.268-0.35,2.207-1.502,2.207-2.88 c0-1.654-1.346-3-3-3V2.416c0-0.979-0.585-1.855-1.49-2.23c-0.905-0.373-1.938-0.169-2.631,0.523l-2.59,2.59 c-2.258-1.722-5.495-1.575-7.558,0.487c-0.391,0.391-0.391,1.023,0,1.414l7.071,7.071c0.188,0.188,0.442,0.293,0.707,0.293 s0.52-0.105,0.707-0.293c2.062-2.063,2.209-5.3,0.486-7.558l2.59-2.59c0.17-0.17,0.357-0.128,0.452-0.09 C54.84,2.073,55,2.175,55,2.416v29.583H24v-2H11v2H3c-1.654,0-3,1.346-3,3c0,1.378,0.939,2.53,2.207,2.88l3.552,12.787 C6.467,53.217,8.513,55.12,11,55.753v2.246H1c-0.552,0-1,0.447-1,1s0.448,1,1,1h11h3h30h3h11c0.552,0,1-0.447,1-1 S59.552,57.999,59,57.999z M50.414,10.054l-5.467-5.466c1.437-0.818,3.3-0.612,4.524,0.611l0.331,0.331 C51.025,6.755,51.229,8.618,50.414,10.054z M57,33.999c0.551,0,1,0.448,1,1s-0.449,1-1,1H24v-2H57z M22,31.999v4v2v5h-9v-5v-2v-4 H22z M13,44.999h9v2h-9V44.999z M3,33.999h8v2H3c-0.551,0-1-0.448-1-1S2.449,33.999,3,33.999z M7.686,50.131l-3.37-12.132H11v5v6 h13v-6v-5h31.685l-3.37,12.132c-0.633,2.277-2.726,3.868-5.089,3.868H43H17h-4.226C10.411,53.999,8.318,52.408,7.686,50.131z  M42.382,55.999l1,2H16.618l1-2H42.382z M13,57.999v-2h2.382l-1,2H13z M45.618,57.999l-1-2H47v2H45.618z" />
        <path d="M47,13.999c0.552,0,1-0.447,1-1v-1c0-0.553-0.448-1-1-1s-1,0.447-1,1v1C46,13.551,46.448,13.999,47,13.999z" />
        <path d="M46,20.999c0,0.553,0.448,1,1,1s1-0.447,1-1v-1c0-0.553-0.448-1-1-1s-1,0.447-1,1V20.999z" />
        <path d="M46,24.999c0,0.553,0.448,1,1,1s1-0.447,1-1v-1c0-0.553-0.448-1-1-1s-1,0.447-1,1V24.999z" />
        <path d="M46,28.999c0,0.553,0.448,1,1,1s1-0.447,1-1v-1c0-0.553-0.448-1-1-1s-1,0.447-1,1V28.999z" />
        <path d="M46,16.999c0,0.553,0.448,1,1,1s1-0.447,1-1v-1c0-0.553-0.448-1-1-1s-1,0.447-1,1V16.999z" />
        <path d="M37.464,12.534c0.256,0,0.512-0.098,0.707-0.293l0.707-0.707c0.391-0.391,0.391-1.023,0-1.414s-1.023-0.391-1.414,0 l-0.707,0.707c-0.391,0.391-0.391,1.023,0,1.414C36.953,12.436,37.208,12.534,37.464,12.534z" />
        <path d="M34.636,15.363c0.256,0,0.512-0.098,0.707-0.293l0.707-0.707c0.391-0.391,0.391-1.023,0-1.414s-1.023-0.391-1.414,0 l-0.707,0.707c-0.391,0.391-0.391,1.023,0,1.414C34.125,15.265,34.38,15.363,34.636,15.363z" />
        <path d="M31.808,18.191c0.256,0,0.512-0.098,0.707-0.293l0.707-0.707c0.391-0.391,0.391-1.023,0-1.414s-1.023-0.391-1.414,0 l-0.707,0.707c-0.391,0.391-0.391,1.023,0,1.414C31.296,18.093,31.552,18.191,31.808,18.191z" />
        <path d="M40.293,9.706c0.256,0,0.512-0.098,0.707-0.293l0.707-0.707c0.391-0.391,0.391-1.023,0-1.414s-1.023-0.391-1.414,0 l-0.707,0.707c-0.391,0.391-0.391,1.023,0,1.414C39.781,9.608,40.037,9.706,40.293,9.706z" />
        <path d="M26.151,23.848c0.256,0,0.512-0.098,0.707-0.293l0.707-0.707c0.391-0.391,0.391-1.023,0-1.414s-1.023-0.391-1.414,0 l-0.707,0.707c-0.391,0.391-0.391,1.023,0,1.414C25.639,23.751,25.895,23.848,26.151,23.848z" />
        <path d="M20.494,29.505c0.256,0,0.512-0.098,0.707-0.293l0.707-0.707c0.391-0.391,0.391-1.023,0-1.414s-1.023-0.391-1.414,0 l-0.707,0.707c-0.391,0.391-0.391,1.023,0,1.414C19.982,29.407,20.238,29.505,20.494,29.505z" />
        <path d="M28.979,21.019c0.256,0,0.512-0.098,0.707-0.293l0.708-0.707c0.391-0.39,0.391-1.023,0-1.414 c-0.391-0.391-1.024-0.391-1.415,0l-0.708,0.707c-0.391,0.39-0.391,1.023,0,1.414C28.467,20.922,28.723,21.019,28.979,21.019z" />
        <path d="M23.322,26.676c0.256,0,0.512-0.098,0.707-0.293l0.707-0.707c0.391-0.391,0.391-1.023,0-1.414s-1.023-0.391-1.414,0 l-0.707,0.707c-0.391,0.391-0.391,1.023,0,1.414C22.811,26.579,23.066,26.676,23.322,26.676z" />
        <path d="M39.144,19.74c0.154,0.086,0.32,0.126,0.484,0.126c0.352,0,0.692-0.186,0.875-0.515l0.485-0.874 c0.269-0.482,0.094-1.092-0.389-1.359c-0.483-0.27-1.091-0.094-1.359,0.389l-0.485,0.874C38.487,18.863,38.661,19.472,39.144,19.74 z" />
        <path d="M41.184,14.009l-0.486,0.874c-0.269,0.483-0.095,1.092,0.388,1.36c0.154,0.086,0.32,0.126,0.485,0.126 c0.352,0,0.692-0.186,0.875-0.514l0.486-0.874c0.269-0.483,0.095-1.092-0.388-1.36C42.061,13.351,41.451,13.527,41.184,14.009z" />
        <path d="M43.028,12.747c0.154,0.086,0.32,0.126,0.485,0.126c0.352,0,0.692-0.186,0.875-0.514l0.486-0.874 c0.269-0.483,0.095-1.092-0.388-1.36c-0.483-0.27-1.092-0.094-1.36,0.388l-0.486,0.874C42.372,11.87,42.545,12.478,43.028,12.747z" />
        <path d="M36.618,26.344l0.485-0.874c0.269-0.482,0.094-1.092-0.389-1.359c-0.484-0.27-1.092-0.094-1.359,0.389l-0.485,0.874 c-0.269,0.482-0.094,1.092,0.389,1.359c0.154,0.086,0.32,0.126,0.484,0.126C36.095,26.859,36.436,26.674,36.618,26.344z" />
        <path d="M38.561,22.849l0.486-0.874c0.269-0.483,0.095-1.092-0.388-1.36c-0.482-0.271-1.092-0.095-1.36,0.388l-0.486,0.874 c-0.269,0.483-0.095,1.092,0.388,1.36c0.154,0.086,0.32,0.126,0.485,0.126C38.037,23.363,38.378,23.177,38.561,22.849z" />
        <path d="M34.773,27.608c-0.483-0.27-1.092-0.094-1.36,0.389l-0.287,0.517c-0.269,0.482-0.095,1.091,0.388,1.359 c0.154,0.086,0.321,0.126,0.485,0.126c0.352,0,0.692-0.186,0.875-0.515l0.287-0.517C35.43,28.485,35.256,27.877,34.773,27.608z" />
      </g>
    </svg>
  );
}

function InsightIcon({ title }: { title: string }) {
  const key = title.toLowerCase();
  if (key.includes("bed")) return <BedIcon />;
  if (key.includes("bath")) return <BathIcon />;
  return null;
}

export default function ListingPageContent({ listing, preview = false }: Props) {
  const [active, setActive] = useState(0);
  const [tab, setTab] = useState<TabId>("overview");
  const [lightbox, setLightbox] = useState(false);
  const [tourOpen, setTourOpen] = useState(false);
  const [leadOpen, setLeadOpen] = useState(false);
  const [heroPassed, setHeroPassed] = useState(false);
  const heroRef = useRef<HTMLElement | null>(null);
  const railRef = useRef<HTMLDivElement | null>(null);

  const images = listing.gallery.length
    ? listing.gallery
    : [{ src: listing.heroImage, alt: listing.heroAlt }];
  const current = images[Math.min(active, images.length - 1)] ?? images[0];
  const chips = heroChips(listing);
  const hoodLabel = listing.neighborhood || listing.city || "New York";
  const spark = mergeSparkUi(listing.spark);
  const tourLabel = listing.tourButtonLabel?.trim() || "Schedule a tour";
  const showTour = listing.showScheduleButton !== false;
  const moreParas = listing.moreDetailsParas?.filter(Boolean) || [];
  const matterport = listing.matterportEmbed?.trim() || "";
  const videoTour = listing.videoTour?.trim() || "";
  const areaDesc = listing.areaDescription?.trim() || "";
  const areaGuide = listing.areaGuideName?.trim() || "";
  const matterportSrc = matterport.includes("<iframe")
    ? matterport.match(/src=["']([^"']+)["']/i)?.[1] || ""
    : matterport;
  const zoom = Number(spark.mapZoom) || 14;
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(listing.location.mapQuery)}&z=${zoom}&output=embed`;
  const aboutTitle = spark.aboutDescriptionTitle || "About this property";
  const overviewTab = spark.aboutTabTitle || "Property Overview";
  const insightsTab = spark.insightsTabTitle || "Property Insights";
  const showInsights = spark.showInsightsSection !== false;
  const showArea = spark.showAreaSection !== false;
  const showMore = spark.showMoreDetailsSection !== false;
  const showReviews = spark.showReviewsSection === true;
  const showMap = spark.showAboutMap !== false && spark.showMapHeader !== false;

  const go = useCallback(
    (dir: -1 | 1) => {
      setActive((i) => (i + dir + images.length) % images.length);
    },
    [images.length],
  );

  useEffect(() => {
    if (preview || !spark.infiniteSlider || images.length < 2) return;
    const t = window.setInterval(() => go(1), 4500);
    return () => window.clearInterval(t);
  }, [preview, spark.infiniteSlider, images.length, go]);

  useEffect(() => {
    if (preview) return;
    if (!shouldAutoOpenListingLead()) return;
    const t = window.setTimeout(() => setLeadOpen(true), 900);
    return () => window.clearTimeout(t);
  }, [listing.slug, preview]);

  const closeLead = () => {
    dismissListingLeadSession();
    setLeadOpen(false);
  };

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const io = new IntersectionObserver(([entry]) => setHeroPassed(!entry.isIntersecting), {
      rootMargin: "-140px 0px 0px 0px",
    });
    io.observe(hero);
    return () => io.disconnect();
  }, []);

  /* Keep the active thumbnail centred in the rail as the photo changes. */
  useEffect(() => {
    const rail = railRef.current;
    const thumb = rail?.children[active] as HTMLElement | undefined;
    if (!rail || !thumb) return;
    rail.scrollTo({
      left: thumb.offsetLeft - rail.clientWidth / 2 + thumb.clientWidth / 2,
      behavior: "smooth",
    });
  }, [active]);

  const overlayOpen = lightbox || tourOpen || leadOpen;

  useEffect(() => {
    if (!overlayOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (leadOpen) closeLead();
        else if (tourOpen) setTourOpen(false);
        else setLightbox(false);
        return;
      }
      if (!lightbox) return;
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    if (!preview) document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      if (!preview) document.body.style.overflow = "";
    };
  }, [overlayOpen, lightbox, tourOpen, leadOpen, go, preview]);

  const openAt = (index: number) => {
    setActive(index);
    setLightbox(true);
  };

  /* 9 cells = a clean 4x3 block once the first image spans 2x2. */
  const mosaic = images.slice(0, 9);

  return (
    <div className={`listing-root${preview ? " listing-root--preview" : ""}`}>
      <section className="listing-hero" ref={heroRef} data-screen-label="Listing hero">
        <div className="listing-hero-media">
          <img src={current.src} alt={current.alt} className="listing-hero-img listing-cover-img" />
          <div className="listing-hero-veil" aria-hidden="true" />
        </div>

        <nav className="listing-crumbs" aria-label="Breadcrumb">
          <a href="/">Home</a>
          <span aria-hidden="true">/</span>
          <a href="/current-listings/">Current Listings</a>
          <span aria-hidden="true">/</span>
          <span>{listing.title}</span>
        </nav>

        <div className="listing-hero-body">
          <div className="listing-hero-copy">
            <div className="listing-hero-tags">
              {listing.status ? <span className="listing-status">{listing.status}</span> : null}
              {hoodLabel ? <span className="listing-hero-hood">{hoodLabel}</span> : null}
            </div>
            <h1 className="listing-hero-title">{listing.title}</h1>
            {spark.showPriceTitle && listing.priceTitle ? (
              <div className="listing-hero-price-title">{listing.priceTitle}</div>
            ) : null}
            <div className="listing-hero-price">{listing.price}</div>
            {spark.showPriceSubtitle && listing.priceSubtitle ? (
              <div className="listing-hero-price-sub">{listing.priceSubtitle}</div>
            ) : null}
            {chips.length ? (
              <div className="listing-hero-chips">
                {chips.map((c) => (
                  <span key={c}>{c}</span>
                ))}
              </div>
            ) : null}
            <div className="listing-hero-actions">
              {showTour ? (
                <button type="button" className="listing-btn listing-btn--gold" onClick={() => setTourOpen(true)}>
                  {tourLabel}
                </button>
              ) : null}
              <button type="button" className="listing-btn listing-btn--ghost" onClick={() => openAt(active)}>
                View all {images.length} photos
              </button>
            </div>
          </div>

          <div
            className="listing-hero-count"
            aria-live="polite"
            aria-label={`Photo ${active + 1} of ${images.length}${current.alt ? `: ${current.alt}` : ""}`}
          >
            <span className="listing-hero-count-num">{active + 1}</span>
            <span className="listing-hero-count-sep" aria-hidden="true">
              /
            </span>
            <span className="listing-hero-count-total">{images.length}</span>
          </div>
        </div>

        <div className="listing-rail">
          <button
            type="button"
            className="listing-rail-arrow listing-rail-arrow--prev"
            aria-label="Previous photo"
            onClick={() => go(-1)}
          >
            <Arrow dir="left" />
          </button>

          <div className="listing-thumbs" ref={railRef}>
            {images.map((img, i) => (
              <button
                key={`${img.src}-${i}`}
                type="button"
                className={`listing-thumb${i === active ? " is-active" : ""}`}
                onClick={() => setActive(i)}
                aria-label={`Show photo ${i + 1}: ${img.alt}`}
                aria-current={i === active ? "true" : undefined}
              >
                <img src={img.src} alt="" loading="lazy" className="listing-cover-img" />
              </button>
            ))}
          </div>

          <button
            type="button"
            className="listing-rail-arrow listing-rail-arrow--next"
            aria-label="Next photo"
            onClick={() => go(1)}
          >
            <Arrow dir="right" />
          </button>
        </div>
      </section>

      <div
        className={`listing-sticky${heroPassed && !overlayOpen ? " is-stuck" : ""}`}
        aria-hidden={!heroPassed || overlayOpen}
      >
        <div className="listing-sticky-inner">
          <div className="listing-sticky-id">
            <div className="listing-sticky-title">{listing.title}</div>
            <div className="listing-sticky-meta">{stickyMeta(listing)}</div>
          </div>
          <div className="listing-sticky-actions">
            <a href={listing.agent.phoneHref} className="listing-btn listing-btn--outline">
              {listing.agent.phoneDisplay}
            </a>
            {showTour ? (
              <button type="button" className="listing-btn listing-btn--gold" onClick={() => setTourOpen(true)}>
                {tourLabel}
              </button>
            ) : null}
          </div>
        </div>
      </div>

      <section className="listing-main" data-screen-label="Property details">
        <div className="listing-main-inner">
          <div className="listing-col-main">
            <div className="listing-kicker">
              <span className="listing-kicker-line" aria-hidden="true" />
              <span>At a glance</span>
            </div>

            <div className="listing-facts">
              {listing.facts.map((fact) => (
                <div key={fact.label} className="listing-fact">
                  <div className="listing-fact-label">{fact.label}</div>
                  <div className="listing-fact-value">{fact.value}</div>
                </div>
              ))}
            </div>

            <div className="listing-tabs" role="tablist" aria-label="Property details">
              <button
                type="button"
                role="tab"
                id="listing-tab-overview"
                aria-selected={tab === "overview"}
                aria-controls="listing-panel-overview"
                className={`listing-tab${tab === "overview" ? " is-active" : ""}`}
                onClick={() => setTab("overview")}
              >
                {overviewTab}
              </button>
              {showInsights ? (
                <button
                  type="button"
                  role="tab"
                  id="listing-tab-insights"
                  aria-selected={tab === "insights"}
                  aria-controls="listing-panel-insights"
                  className={`listing-tab${tab === "insights" ? " is-active" : ""}`}
                  onClick={() => setTab("insights")}
                >
                  {insightsTab}
                </button>
              ) : null}
            </div>

            {tab === "overview" || !showInsights ? (
              <div
                role="tabpanel"
                id="listing-panel-overview"
                aria-labelledby="listing-tab-overview"
                className="listing-panel"
              >
                <h2>{aboutTitle}</h2>
                {listing.overviewParas.map((p) => (
                  <p key={p.slice(0, 48)}>{p}</p>
                ))}
                {spark.aboutButtonLabel && spark.aboutButtonUrl ? (
                  <p>
                    <a className="listing-btn listing-btn--gold" href={spark.aboutButtonUrl}>
                      {spark.aboutButtonLabel}
                    </a>
                  </p>
                ) : null}
                {showMore && moreParas.length ? (
                  <>
                    <h2>{spark.moreDetailsTabTitle || "More details"}</h2>
                    {moreParas.map((p) => (
                      <p key={p.slice(0, 48)}>{p}</p>
                    ))}
                  </>
                ) : null}
                {showArea && (areaGuide || areaDesc) ? (
                  <>
                    <h2>
                      {spark.areaTabTitle || "The area"}
                      {areaGuide ? `: ${areaGuide}` : ""}
                    </h2>
                    {areaDesc ? <p>{areaDesc}</p> : null}
                  </>
                ) : null}
                {showReviews ? (
                  <>
                    <h2>Reviews</h2>
                    <p>
                      {spark.reviewsSource ? (
                        <a href={spark.reviewsSource} target="_blank" rel="noreferrer" style={{ color: spark.reviewsPrimaryColor }}>
                          See client reviews
                        </a>
                      ) : (
                        <a href="/success-stories/" style={{ color: spark.reviewsPrimaryColor }}>
                          See success stories
                        </a>
                      )}
                    </p>
                  </>
                ) : null}
              </div>
            ) : (
              <div
                role="tabpanel"
                id="listing-panel-insights"
                aria-labelledby="listing-tab-insights"
                className="listing-panel"
              >
                <h2>{insightsTab}</h2>
                <div className="listing-insights">
                  {listing.insights.map((item) => (
                    <div key={item.title} className="listing-insight">
                      <span className="listing-insight-icon" aria-hidden="true">
                        <InsightIcon title={item.title} />
                      </span>
                      <div className="listing-insight-label">{item.title}</div>
                      <div className="listing-insight-value">{item.body}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <aside className="listing-col-side">
            <div className="listing-agent-card">
              <div className="listing-agent-head">
                  <span className="listing-agent-photo-wrap">
                    <img
                      src={listing.agent.photo}
                      alt={listing.agent.name}
                      className="listing-agent-photo listing-cover-img"
                      width={76}
                      height={76}
                    />
                  </span>
                <div>
                  <div className="listing-agent-name">{listing.agent.name}</div>
                  <div className="listing-agent-title">{listing.agent.title}</div>
                </div>
              </div>
              <p className="listing-agent-note">
                Questions about the layout, the building or the co-op board package? Reach out and I will walk you
                through it.
              </p>
              {showTour ? (
                <button
                  type="button"
                  className="listing-btn listing-btn--gold listing-btn--block"
                  onClick={() => setTourOpen(true)}
                >
                  {tourLabel}
                </button>
              ) : null}
              <a
                href={listing.agent.phoneHref}
                className="listing-btn listing-btn--outline listing-btn--block"
              >
                Call {listing.agent.phoneDisplay}
              </a>
              <a href={`mailto:${listing.agent.email}`} className="listing-agent-mail">
                {listing.agent.email}
              </a>
            </div>
          </aside>
        </div>
      </section>

      <section className="listing-gallery" data-screen-label="Photo gallery">
        <div className="listing-gallery-inner">
          <div className="listing-section-head">
            <div className="listing-kicker">
              <span className="listing-kicker-line" aria-hidden="true" />
              <span>Gallery</span>
            </div>
            <h2>Inside the home</h2>
            <button type="button" className="listing-btn listing-btn--outline" onClick={() => openAt(0)}>
              View all {images.length} photos
            </button>
          </div>

          <div className="listing-mosaic">
            {mosaic.map((img, i) => (
              <button
                key={`${img.src}-mosaic-${i}`}
                type="button"
                className="listing-mosaic-cell"
                onClick={() => openAt(i)}
                aria-label={`Open photo ${i + 1}: ${img.alt}`}
              >
                <img src={img.src} alt={img.alt} loading="lazy" className="listing-cover-img" />
                {i === mosaic.length - 1 && images.length > mosaic.length ? (
                  <span className="listing-mosaic-more">+{images.length - mosaic.length} more</span>
                ) : null}
              </button>
            ))}
          </div>
        </div>
      </section>

      {videoTour || matterportSrc ? (
        <section className="listing-gallery" data-screen-label="Tours">
          <div className="listing-gallery-inner">
            <div className="listing-section-head">
              <div className="listing-kicker">
                <span className="listing-kicker-line" aria-hidden="true" />
                <span>Virtual tour</span>
              </div>
              <h2>Walk through the home</h2>
            </div>
            {videoTour ? (
              <p>
                <a href={videoTour} target="_blank" rel="noreferrer">
                  Watch video tour
                </a>
              </p>
            ) : null}
            {matterportSrc ? (
              <div className="listing-map" style={{ minHeight: 420, marginTop: 16 }}>
                <iframe title={`3D tour of ${listing.title}`} src={matterportSrc} loading="lazy" allowFullScreen />
              </div>
            ) : null}
          </div>
        </section>
      ) : null}

      {showMap ? (
      <section className="listing-location" data-screen-label="Location">
        <div className="listing-location-inner">
          <div className="listing-location-copy">
            <div className="listing-kicker listing-kicker--light">
              <span className="listing-kicker-line" aria-hidden="true" />
              <span>Location</span>
            </div>
            <h2>{hoodLabel}</h2>
            <p>{listing.location.blurb}</p>
            <ul className="listing-nearby">
              {listing.location.nearby.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="listing-location-address">
              {listing.street}
              <span>
                {listing.city}, {listing.state} {listing.zip}
              </span>
            </div>
            {showTour ? (
              <button
                type="button"
                className="listing-btn listing-btn--gold listing-location-cta"
                onClick={() => setTourOpen(true)}
              >
                {tourLabel}
              </button>
            ) : null}
          </div>
          <div className="listing-map">
            <iframe
              title={`Map of ${listing.title}`}
              src={mapSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
      ) : null}

      {tourOpen ? (
        <div
          className="listing-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="listing-tour-title"
          onClick={() => setTourOpen(false)}
        >
          <div className="listing-modal-card" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="listing-modal-close"
              onClick={() => setTourOpen(false)}
              aria-label="Close"
            >
              Close
            </button>

            <div className="listing-modal-head">
              <span className="listing-modal-agent-wrap">
                <img
                  src={listing.agent.photo}
                  alt=""
                  width={64}
                  height={64}
                  className="listing-modal-agent listing-cover-img"
                />
              </span>
              <div>
                <div className="listing-kicker">
                  <span className="listing-kicker-line" aria-hidden="true" />
                  <span>Private showing</span>
                </div>
                <h2 id="listing-tour-title">Want to take a tour of this property?</h2>
                <p>Fill in your details and we will contact you to confirm a time.</p>
              </div>
            </div>

            <form
              className="listing-tour-form"
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const data = new FormData(form);
                const days = data.getAll("days").map(String).join(", ");
                const times = data.getAll("times").map(String).join(", ");
                const name = String(data.get("name") || "");
                const [firstName, ...rest] = name.trim().split(/\s+/);
                const lastName = rest.join(" ");
                void (async () => {
                  try {
                    await submitLead({
                      firstName: firstName || name,
                      lastName,
                      email: String(data.get("email") || ""),
                      phone: String(data.get("phone") || ""),
                      message: [
                        String(data.get("comments") || ""),
                        days ? `Preferred days: ${days}` : "",
                        times ? `Preferred times: ${times}` : "",
                      ]
                        .filter(Boolean)
                        .join("\n"),
                      formType: "listing-tour",
                      listingSlug: listing.slug,
                      meta: { days, times, tourHref: listing.tourHref },
                    });
                    setTourOpen(false);
                    window.location.href = listing.tourHref;
                  } catch (err) {
                    window.alert(err instanceof Error ? err.message : "Could not submit tour request");
                  }
                })();
              }}
            >
              <div className="listing-field-row">
                <label className="listing-field">
                  <span>Your name *</span>
                  <input name="name" type="text" required autoComplete="name" placeholder="Full name" />
                </label>
                <label className="listing-field">
                  <span>Email address *</span>
                  <input name="email" type="email" required autoComplete="email" placeholder="you@email.com" />
                </label>
              </div>

              <label className="listing-field">
                <span>Phone number</span>
                <input name="phone" type="tel" autoComplete="tel" placeholder="(555) 555-5555" />
              </label>

              <fieldset className="listing-fieldset">
                <legend>What days of the week are best for you? *</legend>
                <div className="listing-chip-row">
                  {DAYS.map((day) => (
                    <label key={day} className="listing-chip">
                      <input type="checkbox" name="days" value={day} />
                      <span>{day}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <fieldset className="listing-fieldset">
                <legend>What times are best for you? *</legend>
                <div className="listing-chip-row">
                  {TIMES.map((time) => (
                    <label key={time} className="listing-chip">
                      <input type="checkbox" name="times" value={time} />
                      <span>{time}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <label className="listing-field">
                <span>Feel free to leave me any additional comments</span>
                <textarea name="comments" rows={3} placeholder="" />
              </label>

              {spark.showFormDisclaimer && spark.disclaimerText ? (
                <label className="listing-field listing-disclaimer">
                  {spark.showDisclaimerCheckbox ? (
                    <span className="listing-chip" style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                      <input type="checkbox" name="disclaimer" required={spark.disclaimerRequired} />
                      <span>{spark.disclaimerText}</span>
                    </span>
                  ) : (
                    <span>{spark.disclaimerText}</span>
                  )}
                </label>
              ) : null}

              <button type="submit" className="listing-btn listing-btn--gold listing-btn--block">
                {tourLabel}
              </button>
            </form>
          </div>
        </div>
      ) : null}

      {!preview ? <ListingLeadModal open={leadOpen} onClose={closeLead} listingSlug={listing.slug} /> : null}

      {lightbox ? (
        <div className="listing-lightbox" role="dialog" aria-modal="true" aria-label="Photo gallery">
          <div className="listing-lightbox-bar">
            <span>
              {active + 1} / {images.length} · {current.alt}
            </span>
            <button type="button" className="listing-lightbox-close" onClick={() => setLightbox(false)}>
              Close
            </button>
          </div>
          <button
            type="button"
            className="listing-lightbox-nav listing-lightbox-nav--prev"
            aria-label="Previous photo"
            onClick={() => go(-1)}
          >
            <Arrow dir="left" />
          </button>
          <img src={current.src} alt={current.alt} className="listing-lightbox-img" />
          <button
            type="button"
            className="listing-lightbox-nav listing-lightbox-nav--next"
            aria-label="Next photo"
            onClick={() => go(1)}
          >
            <Arrow dir="right" />
          </button>
          <div className="listing-lightbox-thumbs">
            {images.map((img, i) => (
              <button
                key={`${img.src}-lb-${i}`}
                type="button"
                className={`listing-thumb${i === active ? " is-active" : ""}`}
                onClick={() => setActive(i)}
                aria-label={`Show photo ${i + 1}`}
              >
                <img src={img.src} alt="" loading="lazy" className="listing-cover-img" />
              </button>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}

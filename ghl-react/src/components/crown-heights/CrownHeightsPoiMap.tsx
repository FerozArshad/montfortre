import { useState } from "react";
import {
  googleMapsEmbedSrc,
  CROWN_HEIGHTS_MAP_DEFAULT_QUERY,
  CROWN_HEIGHTS_POI_FILTERS,
} from "../../data/crownHeightsGuide";

function PoiIcon({ id }: { id: string }) {
  const common = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  if (id === "hospital") {
    return (
      <svg {...common}>
        <rect x="4" y="3" width="16" height="18" rx="2" />
        <path d="M12 8v8M8 12h8" />
      </svg>
    );
  }
  if (id === "school") {
    return (
      <svg {...common}>
        <path d="M3 10l9-5 9 5-9 5-9-5z" />
        <path d="M7 12v5c2 1.4 4 2 5 2s3-.6 5-2v-5" />
      </svg>
    );
  }
  if (id === "park") {
    return (
      <svg {...common}>
        <path d="M12 21V11" />
        <path d="M8 21h8" />
        <path d="M12 11c-3 0-5-2.2-5-5 2.5 0 5 1 5 5 0-4 2.5-5 5-5 0 2.8-2 5-5 5z" />
      </svg>
    );
  }
  if (id === "station") {
    return (
      <svg {...common}>
        <rect x="5" y="3" width="14" height="14" rx="2" />
        <path d="M8 17l-2 4M16 17l2 4M8 10h8M9 14h.01M15 14h.01" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <path d="M4 20V8h16v12" />
      <path d="M4 12h16M9 8V4h6v4" />
    </svg>
  );
}

export default function CrownHeightsPoiMap() {
  const [active, setActive] = useState<string | null>(null);
  const query = active
    ? CROWN_HEIGHTS_POI_FILTERS.find((f) => f.id === active)?.query ?? CROWN_HEIGHTS_MAP_DEFAULT_QUERY
    : CROWN_HEIGHTS_MAP_DEFAULT_QUERY;

  return (
    <section className="hlm-map" data-screen-label="Crown Heights map" id="section-poi-map">
      <div className="hlm-map-frame">
        <iframe
          title={
            active
              ? `${CROWN_HEIGHTS_POI_FILTERS.find((f) => f.id === active)?.title} near Crown Heights`
              : "Map of Crown Heights"
          }
          src={googleMapsEmbedSrc(query)}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div className="hlm-map-badge">
          <div className="hlm-map-subtitle">Welcome to</div>
          <h1 className="hlm-map-title">Crown Heights</h1>
        </div>
      </div>
      <div className="hlm-map-filters" role="toolbar" aria-label="POI Category">
        {CROWN_HEIGHTS_POI_FILTERS.map((filter) => (
          <button
            key={filter.id}
            type="button"
            className={`hlm-map-poi${active === filter.id ? " is-active" : ""}`}
            title={filter.title}
            aria-label="POI Category"
            aria-pressed={active === filter.id}
            onClick={() => setActive((cur) => (cur === filter.id ? null : filter.id))}
          >
            <PoiIcon id={filter.id} />
            <span className="hlm-map-poi-label">{filter.title}</span>
          </button>
        ))}
      </div>
    </section>
  );
}

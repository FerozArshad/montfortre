import { useEffect, useMemo, useRef, useState } from "react";
import schools from "../data/harlemSchools.json";

type School = {
  name: string;
  phone: string;
  type: string;
  grades: string;
  rating: number | null;
  website: string | null;
  categories: string[];
};

const FILTERS = [
  { id: "all", label: "All Schools" },
  { id: "preschool", label: "Preschool" },
  { id: "elementary-school", label: "Elementary School" },
  { id: "middle-school", label: "Middle School" },
  { id: "high-school", label: "High School" },
] as const;

const VISIBLE = 4;
const ROW_H = 92;

function Stars({ rating }: { rating: number }) {
  return (
    <span
      aria-label={`${rating} out of 5 stars`}
      style={{
        display: "inline-flex",
        gap: 3,
        color: "#C98A2C",
        fontSize: 15,
        letterSpacing: 1,
        lineHeight: 1,
      }}
    >
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} style={{ opacity: i < rating ? 1 : 0.28 }}>
          ★
        </span>
      ))}
    </span>
  );
}

export default function HarlemSchools() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]["id"]>("all");
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const menuRef = useRef<HTMLDivElement>(null);

  const filtered = useMemo(() => {
    const list = schools as School[];
    if (filter === "all") return list;
    return list.filter((s) => s.categories.includes(filter));
  }, [filter]);

  const maxIndex = Math.max(0, filtered.length - VISIBLE);

  useEffect(() => {
    setIndex(0);
  }, [filter]);

  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      if (!menuRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [open]);

  const activeLabel = FILTERS.find((f) => f.id === filter)?.label ?? "All Schools";

  return (
    <section
      id="top-schools"
      data-screen-label="Schools"
      className="harlem-schools"
      style={{
        background: "#F9F6E6",
        padding: "90px 64px",
        borderBottom: "1px solid #E0D9B8",
      }}
    >
      <style>{`
        @media (max-width: 900px) {
          .harlem-schools { padding: 56px 20px !important; }
          .harlem-schools h2 { font-size: 28px !important; }
          .harlem-schools__item {
            grid-template-columns: 1fr 1fr !important;
            grid-template-rows: auto auto auto !important;
            gap: 8px 16px !important;
            padding: 16px 18px !important;
            height: auto !important;
            min-height: 100%;
          }
          .harlem-schools__name {
            grid-column: 1 / -1;
            font-size: 15px !important;
          }
          .harlem-schools__rating {
            grid-column: 1 / -1;
            justify-self: start !important;
            padding-top: 4px;
          }
          .harlem-schools__viewport {
            height: min(70vh, 520px) !important;
            overflow-y: auto !important;
            -webkit-overflow-scrolling: touch;
          }
          .harlem-schools__viewport > div {
            transform: none !important;
          }
          .harlem-schools__row {
            height: auto !important;
          }
          .harlem-schools__nav-desktop { display: none !important; }
        }
      `}</style>
      <div style={{ maxWidth: 1440, margin: "0 auto" }}>
        <div
          className="harlem-schools__header"
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: 28,
            flexWrap: "wrap",
            marginBottom: 28,
          }}
        >
          <div style={{ maxWidth: 720 }}>
            <h2
              style={{
                fontFamily: "'Space Grotesk',system-ui,sans-serif",
                fontWeight: 700,
                fontSize: 38,
                lineHeight: 1.2,
                letterSpacing: "-0.01em",
                color: "#0F1729",
                margin: 0,
                textWrap: "pretty",
              }}
            >
              Schools In The Area
            </h2>
            <p
              style={{
                fontSize: 16,
                lineHeight: 1.7,
                color: "#3B4C5E",
                margin: "12px 0 0",
              }}
            >
              Check our schools near Harlem complete with ratings and contact info.
            </p>
          </div>

          <div ref={menuRef} style={{ position: "relative", flex: "0 0 auto" }}>
            <button
              type="button"
              aria-haspopup="listbox"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                background: "#C98A2C",
                color: "#0F1729",
                border: "none",
                borderRadius: 100,
                padding: "14px 22px",
                minHeight: 48,
                fontSize: 13,
                fontWeight: 800,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                cursor: "pointer",
              }}
            >
              {activeLabel}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                <path
                  d="M3 5l4 4 4-4"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            {open && (
              <div
                role="listbox"
                style={{
                  position: "absolute",
                  right: 0,
                  top: "calc(100% + 8px)",
                  minWidth: 220,
                  background: "#F5EECB",
                  border: "1px solid #E0D9B8",
                  borderRadius: 14,
                  padding: 8,
                  zIndex: 20,
                  boxShadow: "0 18px 40px rgba(15,23,41,0.14)",
                }}
              >
                {FILTERS.map((f) => (
                  <button
                    key={f.id}
                    type="button"
                    role="option"
                    aria-selected={filter === f.id}
                    onClick={() => {
                      setFilter(f.id);
                      setOpen(false);
                    }}
                    style={{
                      display: "block",
                      width: "100%",
                      textAlign: "left",
                      border: "none",
                      borderRadius: 10,
                      background: filter === f.id ? "#C98A2C" : "transparent",
                      color: "#0F1729",
                      fontSize: 14,
                      fontWeight: filter === f.id ? 700 : 500,
                      padding: "11px 14px",
                      cursor: "pointer",
                    }}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div
          className="harlem-schools__viewport"
          style={{
            height: VISIBLE * ROW_H,
            overflow: "hidden",
            position: "relative",
          }}
        >
          <div
            style={{
              transform: `translateY(-${index * ROW_H}px)`,
              transition: "transform 0.35s ease",
            }}
          >
            {filtered.map((school) => (
              <div
                key={school.name}
                className="harlem-schools__row"
                style={{
                  height: ROW_H,
                  display: "flex",
                  alignItems: "center",
                  padding: "0 4px 12px",
                  boxSizing: "border-box",
                }}
              >
                <div
                  className="harlem-schools__item"
                  style={{
                    width: "100%",
                    height: "100%",
                    background: "#fff",
                    border: "1px solid #E8E2C8",
                    borderRadius: 10,
                    display: "grid",
                    gridTemplateColumns: "minmax(200px,1.6fr) 130px 88px 72px 120px",
                    alignItems: "center",
                    gap: 12,
                    padding: "0 24px",
                  }}
                >
                  <div
                    className="harlem-schools__name"
                    style={{
                      fontFamily: "'Space Grotesk',system-ui,sans-serif",
                      fontWeight: 700,
                      fontSize: 16,
                      color: "#0F1729",
                      lineHeight: 1.3,
                      minWidth: 0,
                    }}
                  >
                    {school.name}
                  </div>
                  <div
                    className="harlem-schools__phone"
                    style={{ fontSize: 15, fontWeight: 600, color: "#0F1729", whiteSpace: "nowrap" }}
                  >
                    {school.phone}
                  </div>
                  <div
                    className="harlem-schools__type"
                    style={{ fontSize: 15, color: "#3B4C5E", textTransform: "capitalize" }}
                  >
                    {school.type}
                  </div>
                  <div
                    className="harlem-schools__grades"
                    style={{ fontSize: 15, fontWeight: 600, color: "#0F1729" }}
                  >
                    {school.grades}
                  </div>
                  <div className="harlem-schools__rating" style={{ justifySelf: "end" }}>
                    {school.rating != null ? (
                      <Stars rating={school.rating} />
                    ) : school.website ? (
                      <a
                        href={school.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          background: "#C98A2C",
                          color: "#0F1729",
                          fontSize: 12,
                          fontWeight: 800,
                          letterSpacing: "0.06em",
                          textTransform: "uppercase",
                          borderRadius: 100,
                          padding: "10px 16px",
                          textDecoration: "none",
                        }}
                      >
                        Website
                      </a>
                    ) : (
                      <span style={{ fontSize: 13, color: "#8A8490" }}>—</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
            {filtered.length === 0 && (
              <div style={{ padding: 28, color: "#3B4C5E" }}>No schools in this category.</div>
            )}
          </div>
        </div>

        <div className="harlem-schools__nav-desktop" style={{ display: "flex", gap: 10, marginTop: 18 }}>
          <button
            type="button"
            aria-label="Previous schools"
            disabled={index <= 0}
            onClick={() => setIndex((i) => Math.max(0, i - 1))}
            style={{
              width: 44,
              height: 44,
              borderRadius: 8,
              border: "none",
              background: index <= 0 ? "#E8E2C8" : "#C98A2C",
              color: "#0F1729",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: index <= 0 ? "default" : "pointer",
              opacity: index <= 0 ? 0.55 : 1,
            }}
          >
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
              <path
                d="M5 12.5L10 7.5l5 5"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Next schools"
            disabled={index >= maxIndex}
            onClick={() => setIndex((i) => Math.min(maxIndex, i + 1))}
            style={{
              width: 44,
              height: 44,
              borderRadius: 8,
              border: "none",
              background: index >= maxIndex ? "#E8E2C8" : "#C98A2C",
              color: "#0F1729",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: index >= maxIndex ? "default" : "pointer",
              opacity: index >= maxIndex ? 0.55 : 1,
            }}
          >
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
              <path
                d="M5 7.5L10 12.5l5-5"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

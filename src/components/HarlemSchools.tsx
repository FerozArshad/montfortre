import { useEffect, useMemo, useRef, useState } from "react";
import schools from "../data/harlemSchools.json";
import "../styles/harlem-page.css";

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
    <span className="harlem-schools__stars" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={i < rating ? undefined : "harlem-schools__star--dim"}>
          ★
        </span>
      ))}
    </span>
  );
}

type HarlemSchoolsProps = {
  schools?: School[];
  nearLabel?: string;
};

export default function HarlemSchools({
  schools: schoolsProp,
  nearLabel = "Harlem",
}: HarlemSchoolsProps) {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]["id"]>("all");
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const menuRef = useRef<HTMLDivElement>(null);
  const schoolList = schoolsProp ?? (schools as School[]);

  const filtered = useMemo(() => {
    if (filter === "all") return schoolList;
    return schoolList.filter((s) => s.categories.includes(filter));
  }, [filter, schoolList]);

  const maxIndex = Math.max(0, filtered.length - VISIBLE);

  useEffect(() => {
    // Reset carousel position when the filter changes.
    // eslint-disable-next-line react-hooks/set-state-in-effect -- intentional sync with filter
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
    <section id="top-schools" data-screen-label="Schools" className="harlem-schools">
      <div className="harlem-schools-inner">
        <div className="harlem-schools__header">
          <div className="harlem-schools__intro">
            <h2>Schools In The Area</h2>
            <p>Check our schools near {nearLabel} complete with ratings and contact info.</p>
          </div>

          <div ref={menuRef} className="harlem-schools__menu">
            <button
              type="button"
              className="harlem-schools__toggle"
              aria-haspopup="listbox"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
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
              <div role="listbox" className="harlem-schools__listbox">
                {FILTERS.map((f) => (
                  <button
                    key={f.id}
                    type="button"
                    role="option"
                    aria-selected={filter === f.id}
                    className={`harlem-schools__option${filter === f.id ? " is-active" : ""}`}
                    onClick={() => {
                      setFilter(f.id);
                      setOpen(false);
                    }}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="harlem-schools__viewport">
          <div
            className="harlem-schools__track"
            style={{ transform: `translateY(-${index * ROW_H}px)` }}
          >
            {filtered.map((school) => (
              <div key={school.name} className="harlem-schools__row">
                <div className="harlem-schools__item">
                  <div className="harlem-schools__name">{school.name}</div>
                  <div className="harlem-schools__phone">{school.phone}</div>
                  <div className="harlem-schools__type">{school.type}</div>
                  <div className="harlem-schools__grades">{school.grades}</div>
                  <div className="harlem-schools__rating">
                    {school.rating != null ? (
                      <Stars rating={school.rating} />
                    ) : school.website ? (
                      <a
                        href={school.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="harlem-schools__web"
                      >
                        Website
                      </a>
                    ) : (
                      <span className="harlem-schools__dash">—</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
            {filtered.length === 0 && (
              <div className="harlem-schools__empty">No schools in this category.</div>
            )}
          </div>
        </div>

        <div className="harlem-schools__nav-desktop">
          <button
            type="button"
            className="harlem-schools__nav-btn"
            aria-label="Previous schools"
            disabled={index <= 0}
            onClick={() => setIndex((i) => Math.max(0, i - 1))}
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
            className="harlem-schools__nav-btn"
            aria-label="Next schools"
            disabled={index >= maxIndex}
            onClick={() => setIndex((i) => Math.min(maxIndex, i + 1))}
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

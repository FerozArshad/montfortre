import { useEffect, useRef, useState } from "react";
import {
  BEDFORD_STUYVESANT_AGENT,
  BEDFORD_STUYVESANT_AREA_LINKS,
  BEDFORD_STUYVESANT_NEIGHBORHOODS,
} from "../../data/bedfordStuyvesantGuide";

export default function BedfordStuyvesantAreaNav() {
  const [agentOpen, setAgentOpen] = useState(false);
  const agentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!agentOpen) return;
    const onDoc = (e: MouseEvent) => {
      if (!agentRef.current?.contains(e.target as Node)) setAgentOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [agentOpen]);

  return (
    <section
      className="hlm-guide-nav"
      data-screen-label="Bedford-Stuyvesant area navigation"
      aria-label="Bedford-Stuyvesant area navigation"
    >
      <div className="hlm-guide-nav-inner">
        <div className="hlm-guide-agent" ref={agentRef}>
          <button
            type="button"
            className="hlm-guide-agent-btn"
            title={BEDFORD_STUYVESANT_AGENT.name}
            aria-expanded={agentOpen}
            aria-haspopup="true"
            onClick={() => setAgentOpen((v) => !v)}
          >
            <img src={BEDFORD_STUYVESANT_AGENT.photo} alt={BEDFORD_STUYVESANT_AGENT.name} />
          </button>
          {agentOpen ? (
            <div className="hlm-guide-agent-menu" role="menu">
              <div className="hlm-guide-agent-row">
                <strong>Name:</strong> {BEDFORD_STUYVESANT_AGENT.name}
              </div>
              <a className="hlm-guide-agent-row" href={BEDFORD_STUYVESANT_AGENT.phoneHref}>
                <strong>Phone:</strong> {BEDFORD_STUYVESANT_AGENT.phoneDisplay}
              </a>
              <a className="hlm-guide-agent-row" href={`mailto:${BEDFORD_STUYVESANT_AGENT.email}`}>
                <strong>Email:</strong> {BEDFORD_STUYVESANT_AGENT.email}
              </a>
              <div className="hlm-guide-agent-div" />
              {BEDFORD_STUYVESANT_AGENT.socials.map((s) => (
                <a key={s.label} className="hlm-guide-agent-row" href={s.href} target="_blank" rel="noopener noreferrer">
                  <strong>{s.label}</strong> Click to view
                </a>
              ))}
            </div>
          ) : null}
        </div>

        <label className="hlm-guide-hood">
          <span className="sr-only">Area</span>
          <select
            className="hlm-guide-hood-select"
            defaultValue="/bedford-stuyvesant/"
            aria-label="Area"
            onChange={(e) => {
              const href = e.target.value;
              if (href && href !== "/bedford-stuyvesant/") window.location.assign(href);
            }}
          >
            {BEDFORD_STUYVESANT_NEIGHBORHOODS.map((n) => (
              <option key={n.label} value={n.href}>
                {n.label}
              </option>
            ))}
          </select>
        </label>

        <nav className="hlm-guide-tabs" aria-label="On this page">
          {BEDFORD_STUYVESANT_AREA_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="hlm-guide-tab">
              {link.label}
            </a>
          ))}
        </nav>

        <a href="/idx/" className="hlm-guide-search">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.8" />
            <path d="M20 20l-3.5-3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
          <span>Search For Listings</span>
        </a>
      </div>
    </section>
  );
}

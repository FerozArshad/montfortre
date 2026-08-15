import { useEffect, useRef, useState } from "react";
import {
  CROWN_HEIGHTS_AGENT,
  CROWN_HEIGHTS_AREA_LINKS,
  CROWN_HEIGHTS_NEIGHBORHOODS,
} from "../../data/crownHeightsGuide";

export default function CrownHeightsAreaNav() {
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
      data-screen-label="Crown Heights area navigation"
      aria-label="Crown Heights area navigation"
    >
      <div className="hlm-guide-nav-inner">
        <div className="hlm-guide-agent" ref={agentRef}>
          <button
            type="button"
            className="hlm-guide-agent-btn"
            title={CROWN_HEIGHTS_AGENT.name}
            aria-expanded={agentOpen}
            aria-haspopup="true"
            onClick={() => setAgentOpen((v) => !v)}
          >
            <img src={CROWN_HEIGHTS_AGENT.photo} alt={CROWN_HEIGHTS_AGENT.name} />
          </button>
          {agentOpen ? (
            <div className="hlm-guide-agent-menu" role="menu">
              <div className="hlm-guide-agent-row">
                <strong>Name:</strong> {CROWN_HEIGHTS_AGENT.name}
              </div>
              <a className="hlm-guide-agent-row" href={CROWN_HEIGHTS_AGENT.phoneHref}>
                <strong>Phone:</strong> {CROWN_HEIGHTS_AGENT.phoneDisplay}
              </a>
              <a className="hlm-guide-agent-row" href={`mailto:${CROWN_HEIGHTS_AGENT.email}`}>
                <strong>Email:</strong> {CROWN_HEIGHTS_AGENT.email}
              </a>
              <div className="hlm-guide-agent-div" />
              {CROWN_HEIGHTS_AGENT.socials.map((s) => (
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
            defaultValue="/crown-heights/"
            aria-label="Area"
            onChange={(e) => {
              const href = e.target.value;
              if (href && href !== "/crown-heights/") window.location.assign(href);
            }}
          >
            {CROWN_HEIGHTS_NEIGHBORHOODS.map((n) => (
              <option key={n.label} value={n.href}>
                {n.label}
              </option>
            ))}
          </select>
        </label>

        <nav className="hlm-guide-tabs" aria-label="On this page">
          {CROWN_HEIGHTS_AREA_LINKS.map((link) => (
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

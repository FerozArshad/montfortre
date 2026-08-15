import { useEffect, useRef, useState } from "react";
import {
  DOWNTOWN_BROOKLYN_AGENT,
  DOWNTOWN_BROOKLYN_AREA_LINKS,
  DOWNTOWN_BROOKLYN_NEIGHBORHOODS,
} from "../../data/downtownBrooklynGuide";

export default function DowntownBrooklynAreaNav() {
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
      data-screen-label="Downtown Brooklyn area navigation"
      aria-label="Downtown Brooklyn area navigation"
    >
      <div className="hlm-guide-nav-inner">
        <div className="hlm-guide-agent" ref={agentRef}>
          <button
            type="button"
            className="hlm-guide-agent-btn"
            title={DOWNTOWN_BROOKLYN_AGENT.name}
            aria-expanded={agentOpen}
            aria-haspopup="true"
            onClick={() => setAgentOpen((v) => !v)}
          >
            <img src={DOWNTOWN_BROOKLYN_AGENT.photo} alt={DOWNTOWN_BROOKLYN_AGENT.name} />
          </button>
          {agentOpen ? (
            <div className="hlm-guide-agent-menu" role="menu">
              <div className="hlm-guide-agent-row">
                <strong>Name:</strong> {DOWNTOWN_BROOKLYN_AGENT.name}
              </div>
              <a className="hlm-guide-agent-row" href={DOWNTOWN_BROOKLYN_AGENT.phoneHref}>
                <strong>Phone:</strong> {DOWNTOWN_BROOKLYN_AGENT.phoneDisplay}
              </a>
              <a className="hlm-guide-agent-row" href={`mailto:${DOWNTOWN_BROOKLYN_AGENT.email}`}>
                <strong>Email:</strong> {DOWNTOWN_BROOKLYN_AGENT.email}
              </a>
              <div className="hlm-guide-agent-div" />
              {DOWNTOWN_BROOKLYN_AGENT.socials.map((s) => (
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
            defaultValue="/downtown-brooklyn/"
            aria-label="Area"
            onChange={(e) => {
              const href = e.target.value;
              if (href && href !== "/downtown-brooklyn/") window.location.assign(href);
            }}
          >
            {DOWNTOWN_BROOKLYN_NEIGHBORHOODS.map((n) => (
              <option key={n.label} value={n.href}>
                {n.label}
              </option>
            ))}
          </select>
        </label>

        <nav className="hlm-guide-tabs" aria-label="On this page">
          {DOWNTOWN_BROOKLYN_AREA_LINKS.map((link) => (
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

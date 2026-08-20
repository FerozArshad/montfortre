import { useEffect, useRef, useState } from "react";
import {
  WILLIAMSBURG_AGENT,
  WILLIAMSBURG_AREA_LINKS,
  WILLIAMSBURG_NEIGHBORHOODS,
} from "../../data/williamsburgGuide";

export default function WilliamsburgAreaNav() {
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
      data-screen-label="Williamsburg area navigation"
      aria-label="Williamsburg area navigation"
    >
      <div className="hlm-guide-nav-inner">
        <div className="hlm-guide-nav-start">
        <div className="hlm-guide-agent" ref={agentRef}>
          <button
            type="button"
            className="hlm-guide-agent-btn"
            title={WILLIAMSBURG_AGENT.name}
            aria-expanded={agentOpen}
            aria-haspopup="true"
            onClick={() => setAgentOpen((v) => !v)}
          >
            <img src={WILLIAMSBURG_AGENT.photo} alt={WILLIAMSBURG_AGENT.name} />
          </button>
          {agentOpen ? (
            <div className="hlm-guide-agent-menu" role="menu">
              <div className="hlm-guide-agent-row">
                <strong>Name:</strong> {WILLIAMSBURG_AGENT.name}
              </div>
              <a className="hlm-guide-agent-row" href={WILLIAMSBURG_AGENT.phoneHref}>
                <strong>Phone:</strong> {WILLIAMSBURG_AGENT.phoneDisplay}
              </a>
              <a className="hlm-guide-agent-row" href={`mailto:${WILLIAMSBURG_AGENT.email}`}>
                <strong>Email:</strong> {WILLIAMSBURG_AGENT.email}
              </a>
              <div className="hlm-guide-agent-div" />
              {WILLIAMSBURG_AGENT.socials.map((s) => (
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
            defaultValue="/williamsburg/"
            aria-label="Area"
            onChange={(e) => {
              const href = e.target.value;
              if (href && href !== "/williamsburg/") window.location.assign(href);
            }}
          >
            {WILLIAMSBURG_NEIGHBORHOODS.map((n) => (
              <option key={n.label} value={n.href}>
                {n.label}
              </option>
            ))}
          </select>
        </label>
        </div>

        <nav className="hlm-guide-tabs" aria-label="On this page">
          {WILLIAMSBURG_AREA_LINKS.map((link) => (
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

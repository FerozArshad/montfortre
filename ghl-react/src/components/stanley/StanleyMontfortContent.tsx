import ContactSection from "../shared/ContactSection";
import HeroGoogleRating from "../shared/HeroGoogleRating";
import PromisesBar from "../shared/PromisesBar";
import ResourcesSection from "../shared/ResourcesSection";
import "../../styles/stanley-page.css";

export default function StanleyMontfortContent() {
  return (
    <div>
      <section className="stan-hero" data-screen-label="Stanley hero">
        <div className="stan-hero-ring stan-hero-ring--tr" />
        <div className="stan-hero-ring stan-hero-ring--bl" />
        <div className="stan-hero-inner">
          <div data-reveal="" className="stan-hero-portrait">
            <div className="stan-hero-halo" />
            <div className="stan-hero-dot" />
            <div className="stan-hero-photo">
              <img src="/redesign-assets/stanley-montfort-hero.png" alt="Stanley Montfort" />
            </div>
            <div className="stan-hero-sales">
              <div className="stan-hero-sales-num">$1B+</div>
              <div className="stan-hero-sales-label">In Brownstone Sales</div>
            </div>
            <HeroGoogleRating prefix="stan" />
          </div>
          <div data-reveal="">
            <div className="stan-hero-kicker">
              <span className="stan-kicker-line" />
              <span className="stan-hero-kicker-label">Real Estate Advisor&reg;</span>
            </div>
            <h1>Stanley Montfort</h1>
            <p className="stan-hero-lead">
              NYC&apos;s brownstone and townhouse specialist, blending a background in law and the military with the market instinct to close even the most complex deals, and keep every party satisfied.
            </p>
            <div className="stan-hero-ctas">
              <a href="https://calendly.com/montfort" className="stan-hero-book">
                Schedule a Call
              </a>
              <a href="mailto:sm@montfortre.com" className="stan-hero-email">
                Click to Email
              </a>
            </div>
            <div className="stan-hero-contact">
              <a href="tel:+19084146006" className="stan-hero-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>(908) 414-6006</span>
              </a>
              <a href="mailto:sm@montfortre.com" className="stan-hero-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M2 6l10 7 10-7" />
                </svg>
                <span>sm@montfortre.com</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <PromisesBar variant="light" />

      <section className="stan-stats" data-screen-label="Stats">
        <div className="stan-stats-inner">
          <div data-reveal="" className="stan-stats-item">
            <div className="stan-stats-num">$1B+</div>
            <p>In brownstone &amp; townhouse sales facilitated</p>
          </div>
          <div data-reveal="" className="stan-stats-item stan-stats-item--rule">
            <div className="stan-stats-num">NYC</div>
            <p>Townhouses, condos, co-ops and new development citywide</p>
          </div>
          <div data-reveal="" className="stan-stats-item stan-stats-item--rule">
            <div className="stan-stats-num">JD</div>
            <p>Fordham University, with a Master&apos;s in IPED</p>
          </div>
          <div data-reveal="" className="stan-stats-item stan-stats-item--rule">
            <div className="stan-stats-num">Brownstone Expert</div>
            <p>Established in the Harlem townhouse and brownstone market</p>
          </div>
        </div>
      </section>

      <section className="stan-about" data-screen-label="A little about me">
        <div data-reveal="" className="stan-about-inner">
          <div className="stan-about-kicker">In his words</div>
          <h2>A little about me</h2>
          <span className="stan-about-rule" />
          <p>
            Since the start of the pandemic, I&apos;ve played a crucial role in facilitating over one billion dollars worth of brownstone sales in New York City. I&apos;m a recognized expert in the city&apos;s brownstone and townhouse market, with extensive experience on both the sell side and buy side, thanks to a background rooted in the military and law.
          </p>
          <p>
            I honed my skills in the Harlem townhouse market and assisted in numerous co-ownership transactions, including more complicated deals involving SROs, seller financing, and negotiating with tenants, always leaving every party satisfied.
          </p>
        </div>
      </section>

      <section className="stan-story" data-screen-label="Story">
        <div className="stan-story-inner">
          <div data-reveal="">
            <div className="stan-story-kicker">
              <span className="stan-kicker-line" />
              <span className="stan-story-kicker-label">How it started</span>
            </div>
            <h2>How Stanley Montfort got started</h2>
            <div className="stan-story-copy">
              <p>
                Stanley Montfort is a dynamic, accomplished real estate professional whose expertise and passion for the industry have made him a standout in New York City. With a background in <strong>law and the military</strong>, he has made his mark in the city&apos;s competitive brownstone and townhouse market, playing a pivotal role in over <strong>one billion dollars</strong> worth of sales.
              </p>
              <p>
                He established himself as an expert in the Harlem townhouse market, renowned for navigating even the most complex co-ownership transactions with ease, working with SROs, negotiating with tenants, and securing seller financing while keeping every party satisfied.
              </p>
              <p>
                Stanley has since expanded his expertise to condos, co-ops, and new developments while maintaining a stronghold on the townhouse and brownstone market.
              </p>
              <p>
                What sets Stanley apart is his ability to merge creativity with precision. Deep marketing knowledge, strategic thinking, and impeccable analytical skills let him tackle the most challenging deals with confidence and positive outcomes for everyone involved.
              </p>
              <p>
                More than a successful professional, he is known for a genuinely personalized approach, complete transparency, data-driven decisions, and honest conversations tailored to each client&apos;s needs.
              </p>
              <p>
                Originally from New Jersey, Stanley is a graduate of <strong>Fordham University</strong>, where he earned his JD and a Master&apos;s in International Political Economy and Development.
              </p>
            </div>
          </div>
          <div data-reveal="" className="stan-story-photo">
            <div className="stan-story-frame">
              <img src="/redesign-assets/stanley-portrait.webp" alt="Stanley Montfort" />
            </div>
          </div>
        </div>
      </section>

      <section className="stan-connect" data-screen-label="Connect">
        <div className="stan-connect-ring" />
        <div className="stan-connect-inner">
          <div data-reveal="">
            <div className="stan-connect-kicker">
              <span className="stan-kicker-line" />
              <span className="stan-connect-kicker-label">Let&apos;s connect</span>
            </div>
            <h2>Reach out any way you like</h2>
            <p className="stan-connect-lead">
              Ready to buy, sell, or just talk through the market? Book a call, send an email, or follow along, I answer personally.
            </p>
            <div className="stan-connect-cta">
              <a href="https://calendly.com/montfort" className="stan-connect-book">
                Schedule a Call
              </a>
            </div>
          </div>
          <div data-reveal="" className="stan-connect-grid">
            <a href="tel:+19084146006" className="stan-connect-card">
              <span className="stan-connect-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0F1729" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </span>
              <span>
                <span className="stan-connect-card-kicker">Call or text</span>
                <span className="stan-connect-card-value">(908) 414-6006</span>
              </span>
            </a>
            <a href="mailto:sm@montfortre.com" className="stan-connect-card">
              <span className="stan-connect-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0F1729" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M2 6l10 7 10-7" />
                </svg>
              </span>
              <span>
                <span className="stan-connect-card-kicker">Email</span>
                <span className="stan-connect-card-value">sm@montfortre.com</span>
              </span>
            </a>
            <a href="https://www.instagram.com/stanleymontfort/" target="_blank" rel="noopener" className="stan-connect-card">
              <span className="stan-connect-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="3" width="18" height="18" rx="5" stroke="#0F1729" strokeWidth="1.9" />
                  <circle cx="12" cy="12" r="4" stroke="#0F1729" strokeWidth="1.9" />
                  <circle cx="17.5" cy="6.5" r="1.3" fill="#0F1729" />
                </svg>
              </span>
              <span>
                <span className="stan-connect-card-kicker">Instagram</span>
                <span className="stan-connect-card-value">@stanleymontfort</span>
              </span>
            </a>
            <a href="https://www.linkedin.com/in/stanley-p-montfort-b3675548/" target="_blank" rel="noopener" className="stan-connect-card">
              <span className="stan-connect-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="#0F1729">
                  <path d="M6.5 8.5v10H3.3v-10h3.2zM4.9 3.5a1.85 1.85 0 1 1 0 3.7 1.85 1.85 0 0 1 0-3.7zM20.7 18.5h-3.2v-5.2c0-1.4-.5-2.3-1.7-2.3-.9 0-1.5.6-1.7 1.2-.1.2-.1.5-.1.8v5.5H10.7s.04-9 0-10h3.2v1.4c.4-.7 1.2-1.6 3-1.6 2.2 0 3.8 1.4 3.8 4.5v5.7z" />
                </svg>
              </span>
              <span>
                <span className="stan-connect-card-kicker">LinkedIn</span>
                <span className="stan-connect-card-value">Stanley P. Montfort</span>
              </span>
            </a>
          </div>
        </div>
      </section>

      <ResourcesSection />
      <ContactSection />
    </div>
  );
}

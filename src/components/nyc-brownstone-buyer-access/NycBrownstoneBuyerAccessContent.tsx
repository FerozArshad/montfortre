import ContactSection from "../shared/ContactSection";
import ReviewsSection from "../shared/ReviewsSection";
import { FaqAccordion, FaqItem } from "../shared/FaqAccordion";
import HeroGoogleRating from "../shared/HeroGoogleRating";
import OffMarketFinderQuiz from "./OffMarketFinderQuiz";
import "../../styles/nyc-brownstone-buyer-access.css";

const TAGS = [
  "Private Listings",
  "2–4 Family Brownstones",
  "House-Hacking Strategy",
  "Low Down-Payment Financing",
] as const;

const UNLOCK_ITEMS = [
  {
    title: "Off-market matching",
    copy: "See opportunities that never hit the open portals — privately marketed and quietly available 2–4 family brownstones.",
  },
  {
    title: "Owner-occupant strategy",
    copy: "Live in one unit and let the others offset your carrying cost — structured around how lenders underwrite house-hack buys.",
  },
  {
    title: "Financing guidance",
    copy: "Navigate low-down-payment and multifamily loan options with lenders who understand NYC brownstone underwriting.",
  },
  {
    title: "Deal analysis",
    copy: "Rent rolls, expenses, and realistic net monthly cost — so you know which buildings actually help pay for themselves.",
  },
  {
    title: "Buyer matching",
    copy: "A profile-based search so Stanley can filter for fit: neighborhood, unit count, budget, and timeline.",
  },
] as const;

const FIT_CRITERIA = [
  "Serious about buying a 2–4 family brownstone in NYC (not browsing casually)",
  "Planning to owner-occupy at least one unit",
  "Open to house-hacking — rental income as part of the monthly math",
  "Ready to share budget, preferred boroughs, and timing in a short profile",
] as const;

export default function NycBrownstoneBuyerAccessContent() {
  return (
    <>
      <section className="nba-hero" data-screen-label="Off-market finder hero">
        <div className="nba-hero-glow" aria-hidden="true" />
        <div className="nba-hero-inner nba-hero-inner--split">
          <div className="nba-hero-copy">
            <p className="nba-badge">Off Market Brownstone Finder</p>
            <h1>
              Buy an Off Market Brownstone — and let the other units{" "}
              <span className="nba-gold">help pay for it</span>
            </h1>
            <p className="nba-lead">
              Certain 2–4 family brownstones can close with roughly ~10% down when you owner-occupy — and rental
              income from the other units can materially offset your monthly payment. Get matched to off-market
              opportunities built around that strategy.
            </p>
            <div className="nba-hero-ctas">
              <a href="#buyer-profile" className="nba-btn nba-btn--primary">
                Find MY Off-Market Brownstone
              </a>
              <a href="tel:+16469701078" className="nba-btn nba-btn--ghost">
                Call (646) 970-1078
              </a>
            </div>
            <p className="nba-trust">Takes about 60 seconds • No obligation • Private advisory</p>
            <ul className="nba-tags" aria-label="Program highlights">
              {TAGS.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </div>
          <div className="nba-hero-media">
            <div className="nba-hero-frame">
              <img
                src="/redesign-assets/services/buying-a-brownstone-nyc.png"
                alt="NYC brownstone exterior"
                width={720}
                height={900}
                loading="eager"
              />
            </div>
            <HeroGoogleRating prefix="nba" />
          </div>
        </div>
      </section>

      <section className="nba-section nba-math" data-screen-label="Why 2-4 family">
        <div className="nba-section-inner">
          <p className="nba-kicker">The math</p>
          <h2>Why 2–4 family changes the math</h2>
          <p className="nba-section-lead">
            A condo payment is yours alone. A multifamily brownstone can put tenants on the other side of the ledger —
            turning shelter into a hybrid of home and income.
          </p>
          <div className="nba-compare">
            <article className="nba-compare-card">
              <h3>Typical condo</h3>
              <ul>
                <li>You cover 100% of the monthly housing cost</li>
                <li>Common charges with limited control</li>
                <li>Appreciation only — no rental offset</li>
                <li>Board or building rules constrain flexibility</li>
              </ul>
            </article>
            <article className="nba-compare-card nba-compare-card--accent">
              <h3>2–4 family brownstone</h3>
              <ul>
                <li>Live in one unit; rent the others</li>
                <li>Rental income can offset mortgage &amp; carrying costs</li>
                <li>Owner-occupant financing paths (often lower down payment)</li>
                <li>Long-term equity in a whole building — not just a unit</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="nba-section nba-unlock" data-screen-label="What you unlock">
        <div className="nba-section-inner">
          <p className="nba-kicker">Access</p>
          <h2>What you unlock</h2>
          <p className="nba-section-lead">
            The Off Market Brownstone Finder is a private advisory lane — not a public listing feed.
          </p>
          <div className="nba-unlock-grid">
            {UNLOCK_ITEMS.map((item) => (
              <article key={item.title} className="nba-unlock-card">
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="nba-section nba-fit" data-screen-label="Fit criteria">
        <div className="nba-section-inner nba-fit-inner">
          <div>
            <p className="nba-kicker">Fit</p>
            <h2>Is this for you?</h2>
            <p className="nba-section-lead">
              This program works best when you&apos;re ready to buy with intention — not just collecting links.
            </p>
            <ul className="nba-fit-list">
              {FIT_CRITERIA.map((item) => (
                <li key={item}>
                  <span className="nba-fit-check" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <aside className="nba-quote">
            <blockquote>
              “I look for buildings where the rent roll and financing actually work for an owner-occupant — not just a
              pretty façade on the market.”
            </blockquote>
            <div className="nba-quote-by">
              <img
                src="/redesign-assets/stanley-portrait.webp"
                alt="Stanley Montfort"
                width={64}
                height={64}
                loading="lazy"
              />
              <div>
                <strong>Stanley Montfort</strong>
                <span>NYC brownstone &amp; townhouse specialist · JD, Fordham</span>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section id="buyer-profile" className="nba-section nba-match" data-screen-label="Off-market quiz">
        <div className="nba-match-shell">
          <p className="nba-match-eyebrow">NYC Brownstone Opportunity Match</p>
          <h2>Tell me what you&apos;re looking for</h2>
          <p className="nba-match-sub">
            I&apos;ll use this to determine which properties, financing strategies, and opportunities may make sense for
            you.
          </p>
          <OffMarketFinderQuiz />
        </div>
      </section>

      <section className="nba-section nba-faq" data-screen-label="FAQ">
        <div className="nba-section-inner">
          <p className="nba-kicker">FAQ</p>
          <h2>Frequently asked questions</h2>
          <FaqAccordion>
            <FaqItem question={<>Can rental income really help pay for a brownstone?</>}>
              <p>
                On many 2–4 family purchases, lender underwriting can count a portion of rental income toward qualifying
                income, and after closing the rents can offset your monthly carrying cost. Exact terms depend on the
                property, loan program, and occupancy.
              </p>
            </FaqItem>
            <FaqItem question={<>What does ~10% down typically refer to?</>}>
              <p>
                Certain owner-occupant multifamily loan programs allow lower down payments than pure investment
                financing. Availability and guidelines change — your profile helps Stanley point you to the right lender
                conversation.
              </p>
            </FaqItem>
            <FaqItem question={<>What is “off-market matching”?</>}>
              <p>
                Some brownstones trade quietly through agent networks before or instead of a full public listing. A
                completed buyer profile lets Stanley match you when a fit appears.
              </p>
            </FaqItem>
            <FaqItem question={<>Is there any obligation?</>}>
              <p>
                No. The profile is a private advisory intake. You decide if and when to move forward after reviewing
                options with Stanley.
              </p>
            </FaqItem>
          </FaqAccordion>
        </div>
      </section>

      <section className="nba-final-cta" data-screen-label="Final CTA">
        <div className="nba-final-inner">
          <h2>Ready to find your off-market brownstone?</h2>
          <p>Start the short finder quiz, or call Stanley directly.</p>
          <div className="nba-hero-ctas nba-hero-ctas--final">
            <a href="#buyer-profile" className="nba-btn nba-btn--primary">
              Find MY Off-Market Brownstone
            </a>
            <a href="tel:+16469701078" className="nba-btn nba-btn--ghost nba-btn--ghost-dark">
              Call (646) 970-1078
            </a>
            <a
              href="https://calendly.com/montfort"
              className="nba-btn nba-btn--ghost nba-btn--ghost-dark nba-btn--span"
              target="_blank"
              rel="noopener noreferrer"
            >
              Schedule a Consultation
            </a>
          </div>
          <p className="nba-final-meta">
            <a href="mailto:sm@montfortre.com">sm@montfortre.com</a>
          </p>
        </div>
      </section>

      <ReviewsSection />
      <ContactSection
        title="Questions about buying a multifamily brownstone?"
        lead="Tell Stanley about your budget, preferred neighborhoods, and timeline — or book a call."
        topic="Off Market Brownstone Finder"
      />
    </>
  );
}

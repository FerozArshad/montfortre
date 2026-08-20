import ContactSection from "../shared/ContactSection";
import PromisesBar from "../shared/PromisesBar";
import "../../styles/brownstone-guide.css";

const TOC = [
  ["#brownstones-long-term", "Long-term commitments"],
  ["#repairs", "Repairs"],
  ["#taxes", "Taxes"],
  ["#roof-repairs", "Roof repairs"],
  ["#facade", "Facade"],
  ["#windows", "Windows"],
  ["#fireplaces", "Fireplaces"],
  ["#air-conditioning", "Air conditioning"],
  ["#stairs", "Stairs"],
  ["#backyard-space", "Backyard space"],
  ["#faqs", "FAQs"],
] as const;

const FAQS = [
  {
    q: "How much does a brownstone cost in NYC?",
    a: "Most single-family brownstones in Manhattan trade for over $2 million, with prices varying widely by neighborhood and condition. Multi-unit brownstones and those needing renovation can fall below that, while turnkey homes in prime areas command a premium.",
    open: true,
  },
  {
    q: "Are brownstones a good investment?",
    a: "They can be an excellent long-term investment, especially if you plan to hold for 10 years or more. Brownstones are taxed favorably compared with apartments and carry no monthly maintenance or common charges, but they require consistent upkeep to protect their value.",
  },
  {
    q: "What are the biggest maintenance costs?",
    a: "Facade restoration is often the largest, running up to $100,000 for major projects, followed by roof repairs, historic window care, and HVAC upgrades. Budgeting for a vetted team of contractors ahead of time keeps surprises manageable.",
  },
  {
    q: "Do I need a specialized real estate agent?",
    a: "Yes. Brownstone and townhouse transactions involve landmark regulations, SRO conversions, and financing nuances that general agents rarely handle. Working with an advisor who focuses on this niche protects you through inspection, negotiation, and closing.",
  },
  {
    q: "How long should I plan to own a brownstone?",
    a: "Plan for at least 10 years to justify the investment on a single-family home. If your horizon is shorter, a condo, co-op, or a 3 to 4 unit brownstone may make more financial sense.",
  },
] as const;

export default function BrownstoneGuideContent() {
  return (
    <>
      <PromisesBar variant="light" />
      <section className="bsg-hero" data-screen-label="Article hero">
        <div className="bsg-hero-ring" />
        <div className="bsg-hero-inner">
          <div data-reveal="">
            <div className="bsg-crumb">
              <a href="/blog/" className="bsg-crumb-link">
                Resources
              </a>{" "}
              <span className="bsg-crumb-sep">/</span> <span className="bsg-crumb-here">Buyer Guide</span>
            </div>
            <h1>Brownstone Buying Guide for Buyers</h1>
            <p className="bsg-hero-lead">
              Everything you should expect when you buy and own a brownstone in New York City, from long-term commitment to repairs, taxes, and maintenance.
            </p>
            <div className="bsg-hero-by">
              By{" "}
              <a href="/stanley-montfort/" className="bsg-hero-author">
                Stanley Montfort
              </a>{" "}
              <span className="bsg-hero-dot">·</span> NYC Buyer's Agent
            </div>
            <div className="bsg-hero-ctas">
              <a href="https://calendly.com/montfort" className="bsg-hero-book">
                Book Now
              </a>
              <a href="tel:646-970-1078" className="bsg-hero-tel">
                (646) 970-1078
              </a>
            </div>
          </div>
          <div data-reveal="" className="bsg-hero-media">
            <div className="bsg-hero-pin" />
            <div className="bsg-hero-frame">
              <img
                className="bsg-hero-image"
                src="/redesign-assets/blog/brownstone-buying-guide.webp"
                alt="Brownstone Buying Guide"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bsg-article" data-screen-label="Article">
        <div className="bsg-article-inner">
          <aside className="bsg-toc">
            <div className="bsg-toc-label">On this page</div>
            <nav>
              {TOC.map(([href, label]) => (
                <a key={href} href={href} className="bsg-toc-link">
                  {label}
                </a>
              ))}
            </nav>
          </aside>
          <div data-reveal="" className="bsg-body">
            <div className="bsg-kicker">
              <span className="bsg-kicker-line" />
              <span className="bsg-kicker-label">The guide</span>
            </div>

            <p>
              For a lot of residents of New York, owning a brownstone is a dream come true.{" "}
              <a href="/brownstones-in-new-york-city/" className="bsg-inline">
                Brownstones
              </a>{" "}
              have a lot of space, a rarity in NYC, and most have extra rooms for friends and in-laws when they visit the Big Apple. For the most part, owning a brownstone is amazing; until you commit to a mortgage and find out your dream brownstone comes with more responsibility than you expected. Owning a brownstone in New York City is a privilege, but it's a major commitment and a long-term investment that requires patience.
            </p>
            <p>If you believe purchasing a brownstone in New York City is for you, read on for what to expect when you buy and own one.</p>
            <h2 id="brownstones-long-term">Brownstones are long-term commitments</h2>
            <p>
              Purchasing any type of property in NYC is a huge accomplishment, especially a brownstone, and especially as a first-time homebuyer. A brownstone is more than a short-term financial play; it's a long-term investment that requires careful budgeting and lifestyle changes to reap the benefits.
            </p>
            <p>
              A brownstone isn't really a starter home, they have generous space and require specialized maintenance, and they're commonly located in pricier neighborhoods like the Upper West Side and Brooklyn Heights. Most single-family brownstones in Manhattan go for over $2 million. If you're not planning to stay more than 10 years, it may be smarter financially to buy a condo or co-op, unless you're purchasing a 3–4 unit brownstone.
            </p>
            <h2 id="repairs">Repairs</h2>
            <p>
              One of the primary benefits of owning a brownstone is autonomy and privacy, you don't answer to anyone. The downside: when things break, there's no Super to call. You're responsible for every issue, from a leaking roof to a lockout to cable that suddenly stops working. Be prepared to handle these yourself, and keep a vetted team of contractors and handymen on speed dial.
            </p>
            <h2 id="taxes">Taxes</h2>
            <p>
              A major benefit of owning a brownstone is that they're typically taxed less than apartments. Single-family homes, including townhouses and brownstones, or a building with fewer than three units, are assessed at a much lower rate than buildings with more than three units. Additionally, with a brownstone you don't pay monthly maintenance fees, association fees, or common charges.
            </p>
            <h2 id="roof-repairs">Roof repairs</h2>
            <p>
              As the owner, you're responsible for maintaining the roof over your head, literally. Before you buy, understand the roof's repair history and maintenance schedule; your home inspector should flag any looming issues. Two common problems are separation of the roof and water intrusion. Set up a semiannual maintenance schedule and have the roof checked by a professional after hard winters or heavy snow.
            </p>
            <h2 id="facade">Facade</h2>
            <p>
              Brownstone is a fairly soft material that erodes and decays over time, so owners must undertake extensive facade renovations to maintain appearance and structural integrity. A full facade repair can cost up to $100,000 for larger projects. The Landmarks Preservation Commission has stringent guidelines, hire a contractor familiar with LPC regulations to ensure you follow applicable NYC laws.
            </p>
            <h2 id="windows">Windows</h2>
            <p>
              Windows in historic brownstones differ from those in other homes. They're beautiful but require meticulous care to maintain their historical appearance, hire a contractor who specializes in 19th-century windows and historic brownstones.
            </p>
            <h2 id="fireplaces">Fireplaces</h2>
            <p>
              Fireplaces, particularly with wooden mantels, are a quintessential brownstone feature. If you own an entire building, chances are you'll have multiple. The mantels are delicate and susceptible to damage, so be prepared for frequent dusting and polishing. In NYC most fireplaces are decorative rather than functional; if you want a renovation, plan it into your overall project from the start to avoid extra cost later.
            </p>
            <h2 id="air-conditioning">Air conditioning</h2>
            <p>
              Most brownstones don't have central air unless recently renovated. Your options are central AC, window units, or split AC systems. Many owners opt for HVAC during a full renovation; others choose less-invasive split systems that mount on walls and let you control each room's temperature independently.
            </p>
            <h2 id="stairs">Stairs</h2>
            <p>
              A brownstone's multiple floors are a great feature, and multiple flights of stairs. Movers will thank you less, and stairs can become an issue as you near retirement. If that's a concern, consider a brownstone with an elevator.
            </p>
            <h2 id="backyard-space">Backyard space</h2>
            <p>
              Owning a brownstone means enjoying a backyard garden or patio in the middle of NYC. Keep in mind plants, a grill, outdoor furniture, and accessories add up, and you're responsible for any trees in your yard, including regular trimming so they don't threaten your property or a neighbor's.
            </p>
            <p>Overall, living in a brownstone is a unique experience, and there are great services for everything above that might have given you pause.</p>

            <h2 id="faqs" className="bsg-faqs-title">
              Frequently asked questions
            </h2>
            <div className="bsg-faqs">
              {FAQS.map((faq) => (
                <details key={faq.q} className="bsg-faq" {...("open" in faq && faq.open ? { open: true } : {})}>
                  <summary>
                    {faq.q}
                    <span className="bsg-faq-mark">+</span>
                  </summary>
                  <p>{faq.a}</p>
                </details>
              ))}
            </div>

            <div className="bsg-cta">
              <div className="bsg-cta-copy">
                <p>
                  If you're interested in selling or buying a brownstone in Manhattan, click the button to schedule a call, or email me at{" "}
                  <a href="mailto:sm@montfortre.com" className="bsg-inline">
                    sm@montfortre.com
                  </a>
                  .
                </p>
              </div>
              <a href="https://calendly.com/montfort" className="bsg-cta-book">
                Click Here to Schedule a Call
              </a>
            </div>

            <div className="bsg-share">
              <a href="https://www.facebook.com/montfortrealestate" target="_blank" rel="noopener" className="bsg-share-btn bsg-share-fb">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14 9h3V5.5h-3c-2.2 0-3.8 1.7-3.8 3.9V11H7.5v3.5h2.7V22h3.6v-7.5h2.7l.5-3.5h-3.2V9.6c0-.4.3-.6.7-.6z" />
                </svg>
                Facebook
              </a>
              <a
                href="https://twitter.com/intent/tweet?url=https://montfortre.com/advice-for-buyers-looking-to-purchase-brownstones/"
                target="_blank"
                rel="noopener"
                className="bsg-share-btn bsg-share-x"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.9 2.3h3.3l-7.2 8.2 8.5 11.2h-6.6l-5.2-6.8-6 6.8H1.4l7.7-8.8L1 2.3h6.8l4.7 6.2 5.4-6.2zm-1.2 17.7h1.8L7.1 4.1H5.2l12.5 15.9z" />
                </svg>
                X
              </a>
              <a
                href="https://pinterest.com/pin/create/button/?url=https://montfortre.com/advice-for-buyers-looking-to-purchase-brownstones/"
                target="_blank"
                rel="noopener"
                className="bsg-share-btn bsg-share-pin"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.5 2 2 6.5 2 12c0 4.2 2.6 7.8 6.3 9.3-.1-.8-.2-2 0-2.9l1.2-5s-.3-.6-.3-1.5c0-1.4.8-2.5 1.9-2.5.9 0 1.3.7 1.3 1.5 0 .9-.6 2.2-.9 3.5-.2 1 .5 1.9 1.6 1.9 1.9 0 3.3-2 3.3-4.9 0-2.6-1.8-4.4-4.5-4.4-3 0-4.8 2.3-4.8 4.6 0 .9.3 1.9.8 2.4.1.1.1.2.1.3l-.3 1.2c0 .2-.2.2-.4.1-1.4-.6-2.2-2.7-2.2-4.3 0-3.5 2.6-6.8 7.4-6.8 3.9 0 6.9 2.8 6.9 6.5 0 3.9-2.4 7-5.9 7-1.2 0-2.3-.6-2.6-1.3l-.7 2.7c-.3 1-1 2.3-1.4 3 .9.3 1.8.4 2.8.4 5.5 0 10-4.5 10-10S17.5 2 12 2z" />
                </svg>
                Pinterest
              </a>
              <a href="https://www.linkedin.com/in/stanley-p-montfort-b3675548/" target="_blank" rel="noopener" className="bsg-share-btn bsg-share-in">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.5 8.5v10H3.3v-10h3.2zM4.9 3.5a1.85 1.85 0 1 1 0 3.7 1.85 1.85 0 0 1 0-3.7zM20.7 18.5h-3.2v-5.2c0-1.4-.5-2.3-1.7-2.3-.9 0-1.5.6-1.7 1.2-.1.2-.1.5-.1.8v5.5H10.7s.04-9 0-10h3.2v1.4c.4-.7 1.2-1.6 3-1.6 2.2 0 3.8 1.4 3.8 4.5v5.7z" />
                </svg>
                LinkedIn
              </a>
            </div>

            <div className="bsg-author">
              <div className="bsg-author-kicker">About the Author</div>
              <div className="bsg-author-grid">
                <div className="bsg-author-photo">
                  <img src="/redesign-assets/stanley-portrait.webp" alt="Stanley Montfort" />
                </div>
                <div>
                  <div className="bsg-author-name">
                    Stanley Montfort<span className="bsg-author-role">, Real Estate Advisor®</span>
                  </div>
                  <div className="bsg-author-copy">
                    <p>
                      Since the start of the pandemic, Stanley Montfort has played a crucial role in facilitating over one billion dollars worth of brownstone sales in New York City. He is a recognized expert in the city's brownstone and townhouse market, with extensive experience in both sell-side and buy-side transactions, thanks to his military and law background.
                    </p>
                    <p>
                      Stanley honed his real estate skills at Leslie J. Garfield, where he established himself in the Harlem townhouse market and assisted in numerous co-ownership transactions, including more complicated deals involving SROs, seller financing, and negotiating with tenants, always leaving all parties satisfied.
                    </p>
                    <p>
                      With a vibrant, diversified career spanning the legal, banking, and technology industries, Stanley brings a wealth of experience to help clients achieve their real estate objectives. He applies innovative marketing, strategic thinking, and utmost professionalism and integrity to every deal. A savvy negotiator with strong analytical skills, he has navigated even the most challenging deals to deliver the desired results.
                    </p>
                    <p>
                      Moreover, Stanley provides a personalized, engaging experience marked by complete transparency, data-driven financial decisions, and honest conversations. He earns his clients' trust and is committed to ensuring their needs are fully understood and resolved without compromise.
                    </p>
                    <p>
                      Originally from New Jersey, Stanley is a graduate of Fordham University, where he earned his JD and a Master's in International Political Economy and Development. Stanley is the no-brainer choice to help you achieve your real estate goals.
                    </p>
                  </div>
                  <div className="bsg-author-social">
                    <a href="https://www.facebook.com/montfortrealestate" target="_blank" rel="noopener" aria-label="Facebook" className="bsg-author-icon">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M14 9h3V5.5h-3c-2.2 0-3.8 1.7-3.8 3.9V11H7.5v3.5h2.7V22h3.6v-7.5h2.7l.5-3.5h-3.2V9.6c0-.4.3-.6.7-.6z" />
                      </svg>
                    </a>
                    <a href="https://www.instagram.com/stanleymontfort/" target="_blank" rel="noopener" aria-label="Instagram" className="bsg-author-icon">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                        <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.9" />
                        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.9" />
                        <circle cx="17.5" cy="6.5" r="1.3" fill="currentColor" />
                      </svg>
                    </a>
                    <a href="https://www.linkedin.com/in/stanley-p-montfort-b3675548/" target="_blank" rel="noopener" aria-label="LinkedIn" className="bsg-author-icon">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M6.5 8.5v10H3.3v-10h3.2zM4.9 3.5a1.85 1.85 0 1 1 0 3.7 1.85 1.85 0 0 1 0-3.7zM20.7 18.5h-3.2v-5.2c0-1.4-.5-2.3-1.7-2.3-.9 0-1.5.6-1.7 1.2-.1.2-.1.5-.1.8v5.5H10.7s.04-9 0-10h3.2v1.4c.4-.7 1.2-1.6 3-1.6 2.2 0 3.8 1.4 3.8 4.5v5.7z" />
                      </svg>
                    </a>
                    <a href="https://www.youtube.com/@montfortrealestate6984" target="_blank" rel="noopener" aria-label="YouTube" className="bsg-author-icon">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M22 8.2a3 3 0 0 0-2.1-2.1C18 5.6 12 5.6 12 5.6s-6 0-7.9.5A3 3 0 0 0 2 8.2 31 31 0 0 0 1.7 12 31 31 0 0 0 2 15.8a3 3 0 0 0 2.1 2.1c1.9.5 7.9.5 7.9.5s6 0 7.9-.5a3 3 0 0 0 2.1-2.1c.3-1.3.3-3.8.3-3.8s0-2.5-.3-3.8zM10 15V9l5.2 3z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContactSection />
    </>
  );
}

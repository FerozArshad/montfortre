import { useLocation } from "react-router-dom";
import "../../styles/calculator-cross-links.css";

const CALCULATORS = [
  {
    href: "/mortgage-calculator/",
    title: "NYC Mortgage Calculator",
    excerpt: "Estimate monthly payment, taxes, and carrying costs before you make an offer.",
    image: "/redesign-assets/services/mortgage.webp",
  },
  {
    href: "/nyc-brownstone-buyer-closing-cost-calculator/",
    title: "Buyer Closing Cost Calculator",
    excerpt: "Project transfer taxes, attorney fees, and total cash needed to close.",
    image: "/redesign-assets/services/buying-a-brownstone-nyc.png",
  },
  {
    href: "/nyc-brownstone-seller-closing-cost-calculator/",
    title: "Seller Closing Cost Calculator",
    excerpt: "See net proceeds after commissions, transfer taxes, and seller fees.",
    image: "/redesign-assets/services/home-valuation.webp",
  },
  {
    href: "/nyc-rent-vs-buy-brownstone-calculator/",
    title: "Rent vs Buy Brownstone",
    excerpt: "Compare the long-term cost of renting versus owning a brownstone.",
    image: "/redesign-assets/services/nyc-brownstone-free-home-valuation.webp",
  },
  {
    href: "/nyc-condo-vs-brownstone-calculator/",
    title: "Condo vs Brownstone",
    excerpt: "Weigh monthly costs between a condo and an income-producing brownstone.",
    image: "/redesign-assets/services/buyers-agent.webp",
  },
] as const;

function normalizePath(path: string): string {
  return path.replace(/\/+$/, "") || "/";
}

/** Card grid of other calculators — omit the page the visitor is already on. */
export default function CalculatorCrossLinks() {
  const { pathname } = useLocation();
  const current = normalizePath(pathname);
  const others = CALCULATORS.filter((item) => normalizePath(item.href) !== current);

  if (!others.length) return null;

  return (
    <section className="calc-xlink" data-screen-label="Other calculators">
      <div className="calc-xlink-inner">
        <div className="calc-xlink-head">
          <div className="calc-xlink-kicker">
            <span className="calc-xlink-kicker-line" />
            <span className="calc-xlink-kicker-label">More tools</span>
          </div>
          <h2>NYC Brownstone Calculators</h2>
          <p>Explore the other calculators to pressure-test closing costs, rent vs buy, and ownership choices.</p>
        </div>
        <div className="calc-xlink-grid">
          {others.map((item) => (
            <a key={item.href} href={item.href} className="calc-xlink-card" data-reveal="">
              <div className="calc-xlink-media">
                <img src={item.image} alt="" loading="lazy" />
              </div>
              <h3 className="calc-xlink-title">{item.title}</h3>
              <p className="calc-xlink-excerpt">{item.excerpt}</p>
              <span className="calc-xlink-more">Open calculator →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

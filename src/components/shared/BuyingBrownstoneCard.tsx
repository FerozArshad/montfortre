import "../../styles/buying-brownstone-card.css";

type BuyingBrownstoneCardProps = {
  /** Optional neighborhood label in the card eyebrow */
  neighborhood?: string;
  image?: string;
  imageAlt?: string;
};

/**
 * Bottom-of-page promo card linking to the Buying a Brownstone in NYC guide.
 * Used on main neighborhood hubs and brownstone/townhouse property pages.
 */
export default function BuyingBrownstoneCard({
  neighborhood,
  image = "/redesign-assets/services/buying-a-brownstone-nyc.png",
  imageAlt = "Buying a brownstone in NYC",
}: BuyingBrownstoneCardProps) {
  const title = neighborhood
    ? `Buying a Brownstone in ${neighborhood}`
    : "Buying a Brownstone in NYC";

  return (
    <section className="bb-card-section" data-screen-label="Buying a brownstone">
      <div className="bb-card-inner">
        <div className="bb-card-head">
          <div className="bb-card-kicker">
            <span className="bb-card-kicker-line" />
            <span className="bb-card-kicker-label">Buyer guide</span>
          </div>
          <h2>Ready to buy a brownstone?</h2>
          <p>
            Walk through NYC brownstone buying with pricing, due diligence, and negotiation guidance —
            then book a free consultation when you&apos;re ready.
          </p>
        </div>
        <a href="/buying-a-brownstone-in-nyc/" className="bb-card" data-reveal="">
          <div className="bb-card-media">
            <img src={image} alt={imageAlt} loading="lazy" />
          </div>
          <div className="bb-card-body">
            {neighborhood ? <div className="bb-card-cat">{neighborhood}</div> : null}
            <h3 className="bb-card-title">{title}</h3>
            <p className="bb-card-excerpt">
              Learn how to evaluate structure, finances, and hidden costs before you make an offer on a
              New York City brownstone or townhouse.
            </p>
            <span className="bb-card-more">Read the guide →</span>
          </div>
        </a>
      </div>
    </section>
  );
}

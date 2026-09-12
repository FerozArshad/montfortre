import type { ReactNode } from "react";
import CalculatorCrossLinks from "../shared/CalculatorCrossLinks";
import ContactSection from "../shared/ContactSection";
import HeroGoogleRating from "../shared/HeroGoogleRating";
import PromisesBar from "../shared/PromisesBar";
import "../../styles/two-family-page.css";
import "../../styles/calculator-tools.css";

type Props = {
  kicker: string;
  title: string;
  lead: string;
  calculator: ReactNode;
  screenLabel: string;
  heroImage: string;
  heroImageAlt?: string;
  /** Short framing chips under the hero lead */
  heroHints?: readonly string[];
  /** Short framing section above the interactive tool */
  intro?: ReactNode;
  /** Long-form educational guide / FAQ below the tool */
  guide?: ReactNode;
};

export default function CalculatorToolContent({
  kicker,
  title,
  lead,
  calculator,
  screenLabel,
  heroImage,
  heroImageAlt,
  heroHints,
  intro,
  guide,
}: Props) {
  return (
    <>
      <section className="tf-hero calc-hero calc-hero--premium" data-screen-label={screenLabel}>
        <div className="tf-hero-ring" />
        <div className="calc-hero-ring calc-hero-ring--bl" />
        <div className="tf-hero-inner">
          <div className="tf-hero-copy">
            <p className="tf-crumb">
              <span className="tf-crumb-here">{kicker}</span>
            </p>
            <h1>{title}</h1>
            <p className="tf-hero-lead">{lead}</p>
            {heroHints?.length ? (
              <ul className="calc-hero-hints">
                {heroHints.map((hint) => (
                  <li key={hint}>{hint}</li>
                ))}
              </ul>
            ) : null}
            <div className="tf-hero-ctas">
              <a href="#calculator" className="tf-hero-book">
                Use the calculator
              </a>
              <a href="tel:+16469701078" className="tf-hero-tel">
                (646) 970-1078
              </a>
            </div>
          </div>
          <div className="tf-hero-media">
            <div className="tf-hero-frame">
              <img
                src={heroImage}
                alt={heroImageAlt ?? title}
                width={640}
                height={512}
                loading="eager"
              />
            </div>
            <HeroGoogleRating prefix="tf" />
          </div>
        </div>
      </section>

      <PromisesBar variant="light" screenLabel="Client promises" />

      {intro ? (
        <section className="calc-intro" data-screen-label={`${screenLabel} intro`}>
          <div className="calc-intro-inner">{intro}</div>
        </section>
      ) : null}

      <section className="calc-tool-wrap" id="calculator" data-screen-label={`${screenLabel} tool`}>
        <div className="calc-tool-wrap-inner">{calculator}</div>
      </section>

      {guide ? (
        <section className="tf-guide calc-guide" data-screen-label={`${screenLabel} guide`}>
          <div className="tf-guide-inner">{guide}</div>
        </section>
      ) : null}

      <CalculatorCrossLinks />
      <ContactSection />
    </>
  );
}

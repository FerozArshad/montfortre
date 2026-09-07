import CalculatorToolContent from "../components/calculators/CalculatorToolContent";
import CondoVsBrownstoneCalculator from "../components/calculators/CondoVsBrownstoneCalculator";
import {
  CondoVsBrownstoneGuide,
  CondoVsBrownstoneIntro,
} from "../components/calculators/guides/CondoVsBrownstoneGuide";
import PageShell from "../layouts/PageShell";
import { NYC_CONDO_VS_BROWNSTONE_CALCULATOR_SEO } from "../seo/pages/calculatorTools";

export default function NycCondoVsBrownstoneCalculator() {
  return (
    <PageShell
      seo={NYC_CONDO_VS_BROWNSTONE_CALCULATOR_SEO}
      pageClassName="two-family-page calculator-tools-page"
    >
      <CalculatorToolContent
        kicker="Condo vs brownstone"
        title="NYC Condo vs. Brownstone Calculator"
        lead="Compare the true monthly cost and long-term financial impact of buying a condo versus an owner-occupied 2–4 unit NYC brownstone."
        screenLabel="Condo vs brownstone calculator"
        heroImage="/redesign-assets/services/2-family-investment.webp"
        heroImageAlt="NYC condo vs brownstone calculator"
        intro={<CondoVsBrownstoneIntro />}
        calculator={<CondoVsBrownstoneCalculator />}
        guide={<CondoVsBrownstoneGuide />}
      />
    </PageShell>
  );
}

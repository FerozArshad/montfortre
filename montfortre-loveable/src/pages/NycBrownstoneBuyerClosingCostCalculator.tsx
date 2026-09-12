import BuyerClosingCostCalculator from "../components/calculators/BuyerClosingCostCalculator";
import CalculatorToolContent from "../components/calculators/CalculatorToolContent";
import {
  BuyerClosingCostGuide,
  BuyerClosingCostIntro,
} from "../components/calculators/guides/BuyerClosingCostGuide";
import PageShell from "../layouts/PageShell";
import { NYC_BROWNSTONE_BUYER_CLOSING_COST_CALCULATOR_SEO } from "../seo/pages/calculatorTools";

export default function NycBrownstoneBuyerClosingCostCalculator() {
  return (
    <PageShell
      seo={NYC_BROWNSTONE_BUYER_CLOSING_COST_CALCULATOR_SEO}
      pageClassName="two-family-page calculator-tools-page"
    >
      <CalculatorToolContent
        kicker="Buyer closing costs"
        title="NYC Brownstone Buyer Closing Cost Calculator"
        lead="Estimate mansion tax, title insurance, mortgage recording tax, and financing fees for NYC condos, co-ops, and brownstones — before you write the offer."
        screenLabel="Buyer closing cost calculator"
        heroImage="/redesign-assets/services/mortgage.webp"
        heroImageAlt="NYC brownstone buyer closing cost calculator"
        heroHints={["~2% co-op rule of thumb", "~4% condo / house when financed", "6%+ new development"]}
        intro={<BuyerClosingCostIntro />}
        calculator={<BuyerClosingCostCalculator />}
        guide={<BuyerClosingCostGuide />}
      />
    </PageShell>
  );
}

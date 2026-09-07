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
        title="NYC Buyer Closing Cost Calculator"
        lead="Estimate mansion tax, title insurance, mortgage recording tax, and financing-related fees for NYC condos, co-ops, and townhouses."
        screenLabel="Buyer closing cost calculator"
        heroImage="/redesign-assets/services/mortgage.webp"
        heroImageAlt="NYC buyer closing cost calculator"
        intro={<BuyerClosingCostIntro />}
        calculator={<BuyerClosingCostCalculator />}
        guide={<BuyerClosingCostGuide />}
      />
    </PageShell>
  );
}

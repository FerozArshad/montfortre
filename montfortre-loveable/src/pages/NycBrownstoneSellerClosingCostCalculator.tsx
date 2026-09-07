import CalculatorToolContent from "../components/calculators/CalculatorToolContent";
import SellerClosingCostCalculator from "../components/calculators/SellerClosingCostCalculator";
import {
  SellerClosingCostGuide,
  SellerClosingCostIntro,
} from "../components/calculators/guides/SellerClosingCostGuide";
import PageShell from "../layouts/PageShell";
import { NYC_BROWNSTONE_SELLER_CLOSING_COST_CALCULATOR_SEO } from "../seo/pages/calculatorTools";

export default function NycBrownstoneSellerClosingCostCalculator() {
  return (
    <PageShell
      seo={NYC_BROWNSTONE_SELLER_CLOSING_COST_CALCULATOR_SEO}
      pageClassName="two-family-page calculator-tools-page"
    >
      <CalculatorToolContent
        kicker="Seller closing costs"
        title="NYC Seller Closing Cost Calculator"
        lead="Estimate broker commission, NYC and NYS transfer taxes, flip tax, attorney fees, and your net sale proceeds before listing."
        screenLabel="Seller closing cost calculator"
        heroImage="/redesign-assets/services/home-valuation.webp"
        heroImageAlt="NYC seller closing cost calculator"
        intro={<SellerClosingCostIntro />}
        calculator={<SellerClosingCostCalculator />}
        guide={<SellerClosingCostGuide />}
      />
    </PageShell>
  );
}

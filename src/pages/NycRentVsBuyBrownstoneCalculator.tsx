import CalculatorToolContent from "../components/calculators/CalculatorToolContent";
import RentVsBuyBrownstoneCalculator from "../components/calculators/RentVsBuyBrownstoneCalculator";
import { RentVsBuyGuide, RentVsBuyIntro } from "../components/calculators/guides/RentVsBuyGuide";
import PageShell from "../layouts/PageShell";
import { NYC_RENT_VS_BUY_BROWNSTONE_CALCULATOR_SEO } from "../seo/pages/calculatorTools";

export default function NycRentVsBuyBrownstoneCalculator() {
  return (
    <PageShell
      seo={NYC_RENT_VS_BUY_BROWNSTONE_CALCULATOR_SEO}
      pageClassName="two-family-page calculator-tools-page"
    >
      <CalculatorToolContent
        kicker="Rent vs buy"
        title="NYC Brownstone Rent vs. Buy Calculator"
        lead="Discover the true out-of-pocket cost of owning a 2–4 unit NYC brownstone after rental income and potential tax benefits."
        screenLabel="Rent vs buy brownstone calculator"
        heroImage="/redesign-assets/services/buyers-agent.webp"
        heroImageAlt="NYC brownstone rent vs buy calculator"
        heroHints={["Net cost after rent", "2–4 unit house-hack math", "Illustrative tax offsets"]}
        intro={<RentVsBuyIntro />}
        calculator={<RentVsBuyBrownstoneCalculator />}
        guide={<RentVsBuyGuide />}
      />
    </PageShell>
  );
}

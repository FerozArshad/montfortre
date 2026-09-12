import MortgageCalculatorContent from "../components/mortgage-calculator/MortgageCalculatorContent";
import PageShell from "../layouts/PageShell";
import { MORTGAGE_CALCULATOR_SEO } from "../seo/pages/mortgageCalculator";

export default function MortgageCalculator() {
  return (
    <PageShell seo={MORTGAGE_CALCULATOR_SEO} pageClassName="two-family-page mortgage-calculator-page">
      <MortgageCalculatorContent />
    </PageShell>
  );
}

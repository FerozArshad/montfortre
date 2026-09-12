import WilliamsburgContent from "../components/williamsburg/WilliamsburgContent";
import PageShell from "../layouts/PageShell";
import { WILLIAMSBURG_SEO } from "../seo/pages/williamsburg";

export default function Williamsburg() {
  return (
    <PageShell seo={WILLIAMSBURG_SEO} pageClassName="harlem-page williamsburg-page">
      <WilliamsburgContent />
    </PageShell>
  );
}

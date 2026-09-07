import WilliamsburgBrownstonesContent from "../components/williamsburg-brownstones-2/WilliamsburgBrownstonesContent";
import PageShell from "../layouts/PageShell";
import { WILLIAMSBURG_BROWNSTONES_SEO } from "../seo/pages/williamsburgBrownstones";

export default function WilliamsburgBrownstones() {
  return (
    <PageShell seo={WILLIAMSBURG_BROWNSTONES_SEO} pageClassName="neighborhoods-page williamsburg-brownstones-page">
      <WilliamsburgBrownstonesContent />
    </PageShell>
  );
}

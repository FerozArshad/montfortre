import NeighborhoodsContent from "../components/neighborhoods/NeighborhoodsContent";
import PageShell from "../layouts/PageShell";
import { NEIGHBORHOODS_SEO } from "../seo/pages/neighborhoods";

export default function Neighborhoods() {
  return (
    <PageShell seo={NEIGHBORHOODS_SEO} pageClassName="neighborhoods-page">
      <NeighborhoodsContent />
    </PageShell>
  );
}

import UpperEastSideTownhousesContent from "../components/upper-east-side-townhouses/UpperEastSideTownhousesContent";
import PageShell from "../layouts/PageShell";
import { UPPER_EAST_SIDE_TOWNHOUSES_SEO } from "../seo/pages/upperEastSideTownhouses";

export default function UpperEastSideTownhouses() {
  return (
    <PageShell seo={UPPER_EAST_SIDE_TOWNHOUSES_SEO} pageClassName="neighborhoods-page ues-townhouses-page">
      <UpperEastSideTownhousesContent />
    </PageShell>
  );
}

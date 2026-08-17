import UpperWestSideTownhousesContent from "../components/upper-west-side-townhouses/UpperWestSideTownhousesContent";
import PageShell from "../layouts/PageShell";
import { UPPER_WEST_SIDE_TOWNHOUSES_SEO } from "../seo/pages/upperWestSideTownhouses";

export default function UpperWestSideTownhouses() {
  return (
    <PageShell seo={UPPER_WEST_SIDE_TOWNHOUSES_SEO} pageClassName="neighborhoods-page uws-townhouses-page">
      <UpperWestSideTownhousesContent />
    </PageShell>
  );
}

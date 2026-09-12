import UpperEastSideContent from "../components/upper-east-side/UpperEastSideContent";
import PageShell from "../layouts/PageShell";
import { UPPER_EAST_SIDE_SEO } from "../seo/pages/upperEastSide";

export default function UpperEastSide() {
  return (
    <PageShell seo={UPPER_EAST_SIDE_SEO} pageClassName="harlem-page ues-page">
      <UpperEastSideContent />
    </PageShell>
  );
}

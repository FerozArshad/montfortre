import UpperWestSideContent from "../components/upper-west-side/UpperWestSideContent";
import PageShell from "../layouts/PageShell";
import { UPPER_WEST_SIDE_SEO } from "../seo/pages/upperWestSide";

export default function UpperWestSide() {
  return (
    <PageShell seo={UPPER_WEST_SIDE_SEO} pageClassName="harlem-page uws-page">
      <UpperWestSideContent />
    </PageShell>
  );
}

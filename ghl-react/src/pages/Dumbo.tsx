import DumboContent from "../components/dumbo/DumboContent";
import PageShell from "../layouts/PageShell";
import { DUMBO_SEO } from "../seo/pages/dumbo";

export default function Dumbo() {
  return (
    <PageShell seo={DUMBO_SEO} pageClassName="harlem-page dumbo-page">
      <DumboContent />
    </PageShell>
  );
}

import ChelseaContent from "../components/chelsea/ChelseaContent";
import PageShell from "../layouts/PageShell";
import { CHELSEA_SEO } from "../seo/pages/chelsea";

export default function Chelsea() {
  return (
    <PageShell seo={CHELSEA_SEO} pageClassName="harlem-page chelsea-page">
      <ChelseaContent />
    </PageShell>
  );
}

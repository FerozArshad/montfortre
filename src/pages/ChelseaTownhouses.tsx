import ChelseaTownhousesContent from "../components/chelsea-townhouses/ChelseaTownhousesContent";
import PageShell from "../layouts/PageShell";
import { CHELSEA_TOWNHOUSES_SEO } from "../seo/pages/chelseaTownhouses";

export default function ChelseaTownhouses() {
  return (
    <PageShell seo={CHELSEA_TOWNHOUSES_SEO} pageClassName="neighborhoods-page chelsea-townhouses-page">
      <ChelseaTownhousesContent />
    </PageShell>
  );
}

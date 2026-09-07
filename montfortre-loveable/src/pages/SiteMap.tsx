import SiteMapContent from "../components/legal/SiteMapContent";
import PageShell from "../layouts/PageShell";
import { SITE_MAP_SEO } from "../seo/pages/siteMap";

export default function SiteMap() {
  return (
    <PageShell seo={SITE_MAP_SEO} pageClassName="legal-page sitemap-page">
      <SiteMapContent />
    </PageShell>
  );
}

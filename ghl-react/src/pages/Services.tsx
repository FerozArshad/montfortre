import ServicesContent from "../components/services/ServicesContent";
import PageShell from "../layouts/PageShell";
import { SERVICES_SEO } from "../seo/pages/services";

export default function Services() {
  return (
    <PageShell seo={SERVICES_SEO} pageClassName="services-page">
      <ServicesContent />
    </PageShell>
  );
}

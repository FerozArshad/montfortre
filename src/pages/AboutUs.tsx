import AboutUsContent from "../components/about/AboutUsContent";
import PageShell from "../layouts/PageShell";
import { ABOUT_US_SEO } from "../seo/pages/aboutUs";

export default function AboutUs() {
  return (
    <PageShell seo={ABOUT_US_SEO} pageClassName="about-page">
      <AboutUsContent />
    </PageShell>
  );
}

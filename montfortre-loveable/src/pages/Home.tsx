import HomeContent from "../components/home/HomeContent";
import PageShell from "../layouts/PageShell";
import { HOME_SEO } from "../seo/pages/home";

export default function Home() {
  return (
    <PageShell seo={HOME_SEO} pageClassName="home-page" showReviews={false}>
      <HomeContent />
    </PageShell>
  );
}

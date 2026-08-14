import SuccessStoriesContent from "../components/success/SuccessStoriesContent";
import PageShell from "../layouts/PageShell";
import { SUCCESS_STORIES_SEO } from "../seo/pages/successStories";

export default function SuccessStories() {
  return (
    <PageShell seo={SUCCESS_STORIES_SEO} pageClassName="success-page">
      <SuccessStoriesContent />
    </PageShell>
  );
}

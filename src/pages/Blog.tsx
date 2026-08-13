import BlogContent from "../components/blog/BlogContent";
import PageShell from "../layouts/PageShell";
import { BLOG_SEO } from "../seo/pages/blog";

export default function Blog() {
  return (
    <PageShell seo={BLOG_SEO} pageClassName="blog-page">
      <BlogContent />
    </PageShell>
  );
}

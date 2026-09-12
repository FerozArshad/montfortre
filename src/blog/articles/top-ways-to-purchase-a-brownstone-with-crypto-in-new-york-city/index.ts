import type { BlogArticleModule } from "../../../components/blog-article/types";
import { ARTICLE_SEO } from "./seo";
import { meta } from "./meta";
import { bodyHtml } from "./bodyHtml";

const article: BlogArticleModule = {
  meta,
  seo: ARTICLE_SEO,
  bodyHtml,
};

export default article;

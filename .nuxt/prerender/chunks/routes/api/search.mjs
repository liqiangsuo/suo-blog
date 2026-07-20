import { defineEventHandler, getQuery } from 'file://C:/codex_learn/codex_list/blog/node_modules/.pnpm/h3@1.15.11/node_modules/h3/dist/index.mjs';
import { serverQueryContent } from '#content/server';

const search = defineEventHandler(async (event) => {
  const { q } = getQuery(event);
  const articles = await serverQueryContent(event, "articles").only(["title", "description", "path", "date", "tags"]).sort({ date: -1 }).find();
  if (!q || String(q).trim() === "") {
    return [];
  }
  const query = String(q).toLowerCase();
  return articles.filter(
    (article) => article.title && article.title.toLowerCase().includes(query) || article.description && article.description.toLowerCase().includes(query) || article.tags && article.tags.some((tag) => tag.toLowerCase().includes(query))
  );
});

export { search as default };
//# sourceMappingURL=search.mjs.map

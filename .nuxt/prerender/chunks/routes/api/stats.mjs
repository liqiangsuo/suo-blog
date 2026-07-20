import { defineEventHandler } from 'file://C:/codex_learn/codex_list/blog/node_modules/.pnpm/h3@1.15.11/node_modules/h3/dist/index.mjs';
import { serverQueryContent } from '#content/server';

const stats = defineEventHandler(async (event) => {
  const articles = await serverQueryContent(event, "articles").only(["title", "description", "path", "date", "tags", "body"]).sort({ date: -1 }).find();
  const totalArticles = articles.length;
  const totalWords = articles.reduce((sum, a) => {
    var _a, _b;
    return sum + (((_b = (_a = a.body) == null ? void 0 : _a.text) == null ? void 0 : _b.length) || 0);
  }, 0);
  const tagMap = /* @__PURE__ */ new Map();
  articles.forEach((article) => {
    (article.tags || []).forEach((tag) => {
      tagMap.set(tag, (tagMap.get(tag) || 0) + 1);
    });
  });
  const byMonth = {};
  articles.forEach((article) => {
    var _a;
    const month = (_a = article.date) == null ? void 0 : _a.slice(0, 7);
    if (month) {
      byMonth[month] = (byMonth[month] || 0) + 1;
    }
  });
  return {
    totalArticles,
    totalWords,
    totalTags: tagMap.size,
    tags: Object.fromEntries(tagMap),
    byMonth,
    articles: articles.map((a) => {
      var _a, _b;
      return {
        title: a.title,
        path: a.path,
        date: a.date,
        tags: a.tags,
        wordCount: ((_b = (_a = a.body) == null ? void 0 : _a.text) == null ? void 0 : _b.length) || 0
      };
    })
  };
});

export { stats as default };
//# sourceMappingURL=stats.mjs.map

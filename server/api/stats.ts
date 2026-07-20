import { serverQueryContent } from '#content/server'

export default defineEventHandler(async (event) => {
  const articles = await serverQueryContent(event, 'articles')
    .select(['title', 'description', 'path', 'date', 'tags', 'body'])
    .sort({ date: -1 })
    .find()

  const totalArticles = articles.length
  const totalWords = articles.reduce((sum, a) => sum + (a.body?.text?.length || 0), 0)
  const tagMap = new Map<string, number>()

  articles.forEach(article => {
    (article.tags || []).forEach((tag: string) => {
      tagMap.set(tag, (tagMap.get(tag) || 0) + 1)
    })
  })

  // Articles grouped by month
  const byMonth: Record<string, number> = {}
  articles.forEach(article => {
    const month = article.date?.slice(0, 7)
    if (month) {
      byMonth[month] = (byMonth[month] || 0) + 1
    }
  })

  return {
    totalArticles,
    totalWords,
    totalTags: tagMap.size,
    tags: Object.fromEntries(tagMap),
    byMonth,
    articles: articles.map(a => ({
      title: a.title,
      path: a.path,
      date: a.date,
      tags: a.tags,
      wordCount: a.body?.text?.length || 0,
    })),
  }
})

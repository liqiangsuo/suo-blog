import { serverQueryContent } from '#content/server'

export default defineEventHandler(async (event) => {
  const { q } = getQuery(event)

  const articles = await serverQueryContent(event, 'articles')
    .select(['title', 'description', 'path', 'date', 'tags'])
    .sort({ date: -1 })
    .find()

  if (!q || String(q).trim() === '') {
    return []
  }

  const query = String(q).toLowerCase()
  return articles.filter(
    article =>
      (article.title && article.title.toLowerCase().includes(query)) ||
      (article.description && article.description.toLowerCase().includes(query)) ||
      (article.tags && article.tags.some((tag: string) => tag.toLowerCase().includes(query)))
  )
})

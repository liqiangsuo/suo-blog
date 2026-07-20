<template>
  <div class="max-w-5xl mx-auto px-4 sm:px-6 py-8">
    <div class="mb-10">
      <h1 class="text-3xl font-bold mb-2">suo的博客</h1>
      <p class="text-gray-600 dark:text-gray-400">记录技术思考与探索</p>
    </div>
    <div v-if="articleList.length === 0" class="text-center py-16 text-gray-500 dark:text-gray-400">暂无文章</div>
    <div v-else class="space-y-4">
      <article v-for="article in paginatedArticles" :key="article.path" class="group">
        <NuxtLink :to="'/articles/' + article.path" class="block p-6 rounded-lg border border-[rgb(var(--color-border))] bg-[rgb(var(--color-card))] hover:border-blue-300 dark:hover:border-blue-600 transition-colors">
          <h2 class="text-lg font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{{ article.title }}</h2>
          <p v-if="article.description" class="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">{{ article.description }}</p>
          <div class="flex items-center justify-between">
            <div class="flex flex-wrap items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
              <time>{{ formatDate(article.date) }}</time>
              <span>· {{ article.wordCount }} 字</span>
            </div>
            <div v-if="article.tags?.length" class="flex items-center gap-1.5">
              <span v-for="tag in article.tags" :key="tag" class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">{{ tag }}</span>
            </div>
          </div>
        </NuxtLink>
      </article>
    </div>
    <nav v-if="totalPages > 1" class="flex items-center justify-center gap-2 mt-8">
      <button :disabled="currentPage === 1" class="px-3 py-1.5 text-sm rounded-md border border-[rgb(var(--color-border))] disabled:opacity-40 hover:bg-[rgb(var(--color-card))] transition-colors" @click="currentPage = Math.max(1, currentPage - 1)">上一页</button>
      <span class="text-sm text-gray-500 dark:text-gray-400">{{ currentPage }} / {{ totalPages }}</span>
      <button :disabled="currentPage === totalPages" class="px-3 py-1.5 text-sm rounded-md border border-[rgb(var(--color-border))] disabled:opacity-40 hover:bg-[rgb(var(--color-card))] transition-colors" @click="currentPage = Math.min(totalPages, currentPage + 1)">下一页</button>
    </nav>
  </div>
</template>

<script setup lang="ts">
import articlesJson from '~/articles.json'

useHead({ title: '首页' })

const articleList = ref(articlesJson)
const pageSize = 10
const currentPage = ref(1)

const totalPages = computed(() => Math.max(1, Math.ceil(articleList.value.length / pageSize)))
const paginatedArticles = computed(() => {
  const start = (currentPage.value - 1) * pageSize
  return articleList.value.slice(start, start + pageSize)
})

function formatDate(date: string) {
  if (!date) return ''
  const d = new Date(date)
  return d.toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric' })
}
watch(currentPage, () => window.scrollTo({ top: 0, behavior: 'smooth' }))
</script>
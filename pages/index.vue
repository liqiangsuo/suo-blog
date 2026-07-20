<template>
  <div class="max-w-5xl mx-auto px-4 sm:px-6 py-8">
    <div class="mb-10">
      <h1 class="text-3xl font-bold mb-2">suo的博客</h1>
      <p class="text-gray-600 dark:text-gray-400">记录技术思考与探索</p>
    </div>

    <div v-if="articles === null" class="flex items-center justify-center py-16">
      <div class="w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
    </div>

    <div v-else-if="articles.length === 0" class="text-center py-16 text-gray-500 dark:text-gray-400">
      暂无文章
    </div>

    <div v-else class="space-y-4">
      <ArticleCard
        v-for="article in paginatedArticles"
        :key="article.path"
        :article="article"
      />
    </div>

    <nav v-if="articles && totalPages > 1" class="flex items-center justify-center gap-2 mt-8">
      <button
        :disabled="currentPage === 1"
        class="px-3 py-1.5 text-sm rounded-md border border-[rgb(var(--color-border))] disabled:opacity-40 hover:bg-[rgb(var(--color-card))] transition-colors"
        @click="currentPage = Math.max(1, currentPage - 1)"
      >
        上一页
      </button>
      <span class="text-sm text-gray-500 dark:text-gray-400">
        {{ currentPage }} / {{ totalPages }}
      </span>
      <button
        :disabled="currentPage === totalPages"
        class="px-3 py-1.5 text-sm rounded-md border border-[rgb(var(--color-border))] disabled:opacity-40 hover:bg-[rgb(var(--color-card))] transition-colors"
        @click="currentPage = Math.min(totalPages, currentPage + 1)"
      >
        下一页
      </button>
    </nav>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: '首页',
})

const pageSize = 10
const currentPage = ref(1)

const { data: articles } = await useAsyncData('articles-list', async () => {
  try {
    const results = await queryCollection('articles')
      .select('title', 'description', 'path', 'date', 'tags')
      .all()
    return (results || []).sort((a: any, b: any) => (b.date || '').localeCompare(a.date || ''))
  } catch {
    return []
  }
})

const totalPages = computed(() => Math.max(1, Math.ceil((articles.value?.length || 0) / pageSize)))

const paginatedArticles = computed(() => {
  if (!articles.value) return []
  const start = (currentPage.value - 1) * pageSize
  return articles.value.slice(start, start + pageSize)
})

watch(currentPage, () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
})
</script>
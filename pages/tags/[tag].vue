<template>
  <div class="max-w-5xl mx-auto px-4 sm:px-6 py-8">
    <div class="mb-8">
      <NuxtLink to="/tags" class="text-sm text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 mb-2 inline-block">
        &larr; 鎵€鏈夋爣绛?      </NuxtLink>
      <h1 class="text-2xl font-bold">
        鏍囩: <span class="text-blue-600 dark:text-blue-400">{{ tag }}</span>
      </h1>
    </div>

    <div v-if="filteredArticles.length === 0" class="text-center py-16 text-gray-500 dark:text-gray-400">
      璇ユ爣绛句笅鏆傛棤鏂囩珷
    </div>

    <div v-else class="space-y-4">
      <ArticleCard
        v-for="article in filteredArticles"
        :key="article.path"
        :article="article"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const tag = computed(() => (route.params.tag as string))

useHead({
  title: `鏍囩: ${tag.value}`,
})

const { data: articles } = await useAsyncData(`tag-${tag.value}`, () =>
  queryCollection('articles')
    .select('title', 'description', 'path', 'date', 'tags')
    .all()
)

const filteredArticles = computed(() => {
  if (!articles.value) return []
  return articles.value.filter((article: any) =>
    article.tags?.some((t: string) => t.toLowerCase() === tag.value.toLowerCase())
  )
})
</script>

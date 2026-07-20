<template>
  <div class="max-w-5xl mx-auto px-4 sm:px-6 py-8">
    <h1 class="text-2xl font-bold mb-6">鏍囩</h1>

    <div v-if="tagList.length === 0" class="text-center py-16 text-gray-500 dark:text-gray-400">
      鏆傛棤鏍囩
    </div>

    <TagList v-else :tags="tagList" />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: '鏍囩',
})

const { data: articles } = await useAsyncData('tags-all', () =>
  queryCollection('articles')
    .select('tags')
    .all()
)

const tagList = computed(() => {
  if (!articles.value) return []
  const tagCount = new Map<string, number>()
  articles.value.forEach((article: any) => {
    ;(article.tags || []).forEach((tag: string) => {
      tagCount.set(tag, (tagCount.get(tag) || 0) + 1)
    })
  })
  return Array.from(tagCount.entries())
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count)
})
</script>

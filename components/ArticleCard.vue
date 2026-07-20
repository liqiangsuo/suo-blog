<template>
  <article class="group">
    <NuxtLink :to="`/articles/${article.path}`" class="block p-6 rounded-lg border border-[rgb(var(--color-border))] bg-[rgb(var(--color-card))] hover:border-blue-300 dark:hover:border-blue-600 transition-colors">
      <h2 class="text-lg font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
        {{ article.title }}
      </h2>
      <p v-if="article.description" class="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
        {{ article.description }}
      </p>
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2">
          <ArticleMeta
            :date="article.date"
            :word-count="article.wordCount"
            :reading-time="article.readingTime"
          />
        </div>
        <div v-if="article.tags?.length" class="flex items-center gap-1.5">
          <TagBadge v-for="tag in article.tags" :key="tag" :tag="tag" />
        </div>
      </div>
    </NuxtLink>
  </article>
</template>

<script setup lang="ts">
defineProps<{
  article: {
    path: string
    title: string
    description?: string
    date: string
    tags?: string[]
    wordCount?: number
    readingTime?: number
  }
}>()
</script>

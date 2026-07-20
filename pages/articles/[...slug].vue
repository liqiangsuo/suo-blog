<template>
  <div class="max-w-5xl mx-auto px-4 sm:px-6 py-8">
    <!-- Loading -->
    <div v-if="pending" class="flex items-center justify-center py-16">
      <div class="w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
    </div>

    <!-- Article not found -->
    <div v-else-if="!article" class="text-center py-16">
      <h1 class="text-xl font-semibold mb-2">文章未找到</h1>
      <NuxtLink to="/" class="text-blue-600 dark:text-blue-400 hover:underline">返回首页</NuxtLink>
    </div>

    <!-- Article content -->
    <template v-else>
      <article class="flex gap-8">
        <!-- Main content -->
        <div class="flex-1 min-w-0 max-w-3xl">
          <header class="mb-8">
            <h1 class="text-3xl font-bold mb-3">{{ article.title }}</h1>
            <div class="flex flex-wrap items-center gap-3">
              <ArticleMeta
                :date="article.date"
                :word-count="article.wordCount"
                :reading-time="article.readingTime"
              />
              <div v-if="article.tags?.length" class="flex items-center gap-1.5">
                <NuxtLink
                  v-for="tag in article.tags"
                  :key="tag"
                  :to="`/tags/${tag}`"
                >
                  <TagBadge :tag="tag" />
                </NuxtLink>
              </div>
            </div>
          </header>

          <ContentRenderer
            :value="article"
            class="prose-article"
          />

          <!-- Comments -->
          <GiscusComments :term="article.path" />
        </div>

        <!-- Sidebar TOC -->
        <aside class="hidden xl:block w-56 flex-shrink-0">
          <div class="sticky top-20">
            <TableOfContents :toc="article.body?.toc || []" />
          </div>
        </aside>
      </article>
    </template>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const slug = computed(() => (route.params.slug as string[]).join('/'))

const { data: article, pending } = await useAsyncData(`article-${slug.value}`, () =>
  queryCollection('articles').path(slug.value).first()
)

const readingTime = computed(() => {
  if (!article.value?.body?.text) return 0
  const words = article.value.body.text.length
  return Math.max(1, Math.round(words / 500))
})

useHead(() => ({
  title: article.value?.title || '文章',
  meta: article.value?.description ? [
    { name: 'description', content: article.value.description },
    { property: 'og:description', content: article.value.description },
  ] : [],
}))
</script>

<template>
  <div class="max-w-3xl mx-auto px-4 sm:px-6 py-8">
    <div v-if="!article" class="text-center py-16">
      文章未找到
      <NuxtLink to="/" class="text-blue-600 ml-2">返回首页</NuxtLink>
    </div>
    <template v-else>
      <article>
        <header class="mb-8">
          <h1 class="text-3xl font-bold mb-3">{{ article.title }}</h1>
          <div class="flex flex-wrap items-center gap-3 text-sm text-gray-500">
            <time>{{ formatDate(article.date) }}</time>
            <span>· {{ article.wordCount }} 字</span>
            <div class="flex items-center gap-1.5">
              <span v-for="tag in article.tags" :key="tag" class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">{{ tag }}</span>
            </div>
          </div>
        </header>
        <div class="prose-article" v-html="renderedBody" />
      </article>
    </template>
  </div>
</template>

<script setup lang="ts">
import articlesJson from '~/public/articles.json'

const route = useRoute()
const slug = computed(() => (route.params.slug as string[]).join('/'))
const article = computed(() => articlesJson.find((a: any) => a.path === slug.value))

useHead(() => ({
  title: (article.value?.title || '文章') + ' - suo的博客',
  meta: article.value?.description ? [
    { name: 'description', content: article.value.description }
  ] : []
}))

function formatDate(date: string) {
  if (!date) return ''
  return new Date(date).toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric' })
}

// Simple markdown-to-HTML conversion
const renderedBody = computed(() => {
  if (!article.value?.body) return ''
  let html = article.value.body
  // Code blocks (```...```)
  html = html.replace(/```(\w*)\n([\s\S]*?)```/g, '<pre class="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 overflow-x-auto my-4"><code>$2</code></pre>')
  // Headings
  html = html.replace(/^### (.+)$/gm, '<h3 class="text-xl font-semibold mt-6 mb-2">$1</h3>')
  html = html.replace(/^## (.+)$/gm, '<h2 class="text-2xl font-bold mt-8 mb-3">$1</h2>')
  html = html.replace(/^# (.+)$/gm, '<h1 class="text-3xl font-bold mt-10 mb-4">$1</h1>')
  // Bold and italic
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
  html = html.replace(/\*(.+?)\*/g, '<em>$1</em>')
  // Links
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-blue-600 hover:underline">$1</a>')
  // Images
  html = html.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" class="rounded-lg my-4 max-w-full">')
  // Lists
  html = html.replace(/^- (.+)$/gm, '<li class="ml-6 list-disc my-1">$1</li>')
  // Horizontal rules
  html = html.replace(/^---$/gm, '<hr class="my-8 border-gray-200 dark:border-gray-700">')
  // Blockquotes
  html = html.replace(/^> (.+)$/gm, '<blockquote class="border-l-4 border-gray-300 dark:border-gray-600 pl-4 my-4 italic text-gray-600 dark:text-gray-400">$1</blockquote>')
  // Paragraphs (lines that aren't already HTML)
  html = html.replace(/^(?!<[a-z])(.+)$/gm, '<p class="my-3 leading-7">$1</p>')
  return html
})
</script>
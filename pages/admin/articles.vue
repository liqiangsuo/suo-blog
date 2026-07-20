<template>
  <div class="max-w-5xl mx-auto px-4 sm:px-6 py-8">
    <div v-if="!authenticated" class="max-w-sm mx-auto mt-16">
      <h1 class="text-xl font-bold mb-4">管理面板</h1>
      <input
        v-model="password"
        type="password"
        placeholder="输入管理员密码"
        class="w-full px-3 py-2 rounded-lg border border-[rgb(var(--color-border))] bg-transparent text-sm outline-none focus:border-blue-500 mb-3"
        @keydown.enter="login"
      >
      <p v-if="error" class="text-red-500 text-sm mb-2">密码错误</p>
      <button
        class="w-full px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
        @click="login"
      >
        登录
      </button>
    </div>

    <div v-else>
      <div class="flex items-center justify-between mb-6">
        <h1 class="text-2xl font-bold">文章管理</h1>
        <input
          v-model="searchQuery"
          type="text"
          placeholder="搜索文章..."
          class="px-3 py-1.5 rounded-lg border border-[rgb(var(--color-border))] bg-transparent text-sm outline-none focus:border-blue-500 w-48"
        >
      </div>

      <div v-if="filteredArticles.length === 0" class="text-center py-16 text-gray-500 dark:text-gray-400">
        暂无文章
      </div>

      <div v-else class="overflow-x-auto">
        <table class="w-full text-sm">
          <thead>
            <tr class="border-b border-[rgb(var(--color-border))]">
              <th class="text-left py-3 px-2 font-semibold">标题</th>
              <th class="text-left py-3 px-2 font-semibold hidden sm:table-cell">标签</th>
              <th class="text-right py-3 px-2 font-semibold hidden md:table-cell">字数</th>
              <th class="text-right py-3 px-2 font-semibold">日期</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="article in filteredArticles"
              :key="article.path"
              class="border-b border-[rgb(var(--color-border))] hover:bg-[rgb(var(--color-card))] transition-colors"
            >
              <td class="py-3 px-2">
                <NuxtLink
                  :to="'/articles/' + article.path"
                  class="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                >
                  {{ article.title }}
                </NuxtLink>
              </td>
              <td class="py-3 px-2 hidden sm:table-cell">
                <div class="flex items-center gap-1">
                  <TagBadge v-for="tag in (article.tags || [])" :key="tag" :tag="tag" />
                </div>
              </td>
              <td class="py-3 px-2 text-right text-gray-500 dark:text-gray-400 hidden md:table-cell">
                {{ (article.wordCount || 0).toLocaleString() }}
              </td>
              <td class="py-3 px-2 text-right text-gray-500 dark:text-gray-400">
                {{ (article.date || '').slice(0, 10) }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'admin',
})

useHead({
  title: '文章管理',
})

const password = ref('')
const error = ref(false)
const authenticated = ref(false)
const searchQuery = ref('')

function login() {
  const adminPassword = useRuntimeConfig().public.adminPassword as string
  if (adminPassword && password.value === adminPassword) {
    authenticated.value = true
    error.value = false
    sessionStorage.setItem('admin_auth', '1')
  } else if (!adminPassword) {
    authenticated.value = true
  } else {
    error.value = true
  }
}

onMounted(() => {
  if (sessionStorage.getItem('admin_auth')) {
    authenticated.value = true
  }
})

const { data: articles } = await useAsyncData('admin-articles', () =>
  queryCollection('articles')
    .select('title', 'path', 'tags', 'date')
    .all()
)

const filteredArticles = computed(() => {
  if (!articles.value) return []
  const q = searchQuery.value.toLowerCase()
  if (!q) return articles.value
  return articles.value.filter((a: any) =>
    a.title?.toLowerCase().includes(q) ||
    a.tags?.some((t: string) => t.toLowerCase().includes(q))
  )
})
</script>
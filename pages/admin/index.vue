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
      <h1 class="text-2xl font-bold mb-6">仪表盘</h1>

      <div v-if="loading" class="flex items-center justify-center py-16">
        <div class="w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
      </div>

      <div v-else>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div class="p-4 rounded-lg border border-[rgb(var(--color-border))] bg-[rgb(var(--color-card))]">
            <p class="text-sm text-gray-500 dark:text-gray-400">文章总数</p>
            <p class="text-2xl font-bold mt-1">{{ totalArticles }}</p>
          </div>
          <div class="p-4 rounded-lg border border-[rgb(var(--color-border))] bg-[rgb(var(--color-card))]">
            <p class="text-sm text-gray-500 dark:text-gray-400">标签数</p>
            <p class="text-2xl font-bold mt-1">{{ totalTags }}</p>
          </div>
          <div class="p-4 rounded-lg border border-[rgb(var(--color-border))] bg-[rgb(var(--color-card))]">
            <p class="text-sm text-gray-500 dark:text-gray-400">总字数</p>
            <p class="text-2xl font-bold mt-1">{{ totalWords.toLocaleString() }}</p>
          </div>
        </div>

        <div class="mb-8">
          <h2 class="text-lg font-semibold mb-4">文章数量按月统计</h2>
          <div v-if="monthlyData.length" class="flex items-end gap-2 h-32">
            <div
              v-for="item in monthlyData"
              :key="item.month"
              class="flex-1 flex flex-col items-center gap-1"
            >
              <span class="text-xs text-gray-500 dark:text-gray-400">{{ item.count }}</span>
              <div
                class="w-full rounded-t bg-blue-500 dark:bg-blue-400 transition-all"
                :style="{ height: Math.max(4, (item.count / maxCount) * 100) + 'px' }"
              />
              <span class="text-xs text-gray-500 dark:text-gray-400 truncate w-full text-center">{{ item.month }}</span>
            </div>
          </div>
          <p v-else class="text-sm text-gray-500 dark:text-gray-400">暂无数据</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'admin',
})

useHead({
  title: '管理面板',
})

const password = ref('')
const error = ref(false)
const authenticated = ref(false)
const loading = ref(true)
const totalArticles = ref(0)
const totalTags = ref(0)
const totalWords = ref(0)
const tagCounts = ref<Record<string, number>>({})
const monthlyData = ref<Array<{ month: string; count: number }>>([])

function login() {
  const adminPassword = useRuntimeConfig().public.adminPassword as string
  if (adminPassword && password.value === adminPassword) {
    authenticated.value = true
    error.value = false
    sessionStorage.setItem('admin_auth', '1')
    loadStats()
  } else if (!adminPassword) {
    authenticated.value = true
    loadStats()
  } else {
    error.value = true
  }
}

onMounted(() => {
  if (sessionStorage.getItem('admin_auth')) {
    authenticated.value = true
    loadStats()
  }
})

async function loadStats() {
  loading.value = true
  try {
    const articles = await queryCollection('articles').all()
    const items = articles || []

    totalArticles.value = items.length

    const tagMap = new Map<string, number>()
    let words = 0
    const monthMap: Record<string, number> = {}

    items.forEach((article: any) => {
      ;(article.tags || []).forEach((tag: string) => {
        tagMap.set(tag, (tagMap.get(tag) || 0) + 1)
      })
      words += (article.body?.text?.length || 0)
      const month = article.date?.slice(0, 7)
      if (month) {
        monthMap[month] = (monthMap[month] || 0) + 1
      }
    })

    totalTags.value = tagMap.size
    totalWords.value = words
    tagCounts.value = Object.fromEntries(tagMap)
    monthlyData.value = Object.entries(monthMap)
      .map(([month, count]) => ({ month, count }))
      .sort((a, b) => a.month.localeCompare(b.month))
  } catch {
    // stats unavailable
  } finally {
    loading.value = false
  }
}

const maxCount = computed(() => Math.max(1, ...monthlyData.value.map(m => m.count)))
</script>
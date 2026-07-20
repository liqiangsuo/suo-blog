<template>
  <Teleport to="body">
    <div
      v-if="isOpen"
      class="fixed inset-0 z-50 flex items-start justify-center pt-[15vh]"
      @click.self="$emit('close')"
    >
      <div class="absolute inset-0 bg-black/40 backdrop-blur-sm" @click="$emit('close')" />

      <div class="relative w-full max-w-lg mx-4 bg-[rgb(var(--color-bg))] border border-[rgb(var(--color-border))] rounded-xl shadow-2xl overflow-hidden">
        <div class="flex items-center gap-3 px-4 border-b border-[rgb(var(--color-border))]">
          <Search class="w-4 h-4 text-gray-400 flex-shrink-0" />
          <input
            ref="input"
            v-model="query"
            type="text"
            placeholder="搜索文章..."
            class="flex-1 py-3.5 bg-transparent text-sm outline-none placeholder:text-gray-400"
            @keydown.escape="$emit('close')"
          >
          <kbd class="hidden sm:inline-flex items-center px-1.5 py-0.5 text-xs text-gray-400 bg-gray-100 dark:bg-gray-800 rounded">
            ESC
          </kbd>
        </div>

        <div v-if="query" class="max-h-80 overflow-y-auto">
          <div v-if="loading" class="flex items-center justify-center py-8">
            <div class="w-5 h-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
          </div>

          <div v-else-if="results.length === 0" class="py-8 text-center text-sm text-gray-500 dark:text-gray-400">
            没有找到相关内容
          </div>

          <NuxtLink
            v-for="result in results"
            :key="result.path"
            :to="'/articles/' + result.path"
            class="block px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
            @click="$emit('close')"
          >
            <p class="text-sm font-medium">{{ result.title }}</p>
            <p v-if="result.description" class="text-xs text-gray-500 dark:text-gray-400 mt-0.5 line-clamp-1">
              {{ result.description }}
            </p>
          </NuxtLink>
        </div>

        <div v-else class="py-8 text-center text-sm text-gray-500 dark:text-gray-400">
          输入关键词开始搜索
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { Search } from 'lucide-vue-next'

defineProps<{
  isOpen: boolean
}>()

defineEmits<{
  close: []
}>()

const input = ref<HTMLInputElement>()
const query = ref('')
const results = ref<Array<{ path: string; title: string; description?: string }>>([])
const loading = ref(false)

watch(query, async (q) => {
  if (!q.trim()) {
    results.value = []
    return
  }

  loading.value = true
  try {
    const allArticles = await queryCollection('articles')
      .select('title', 'description', 'path')
      .all()

    const searchStr = q.trim().toLowerCase()
    results.value = (allArticles || []).filter((article: any) =>
      (article.title && article.title.toLowerCase().includes(searchStr)) ||
      (article.description && article.description.toLowerCase().includes(searchStr))
    )
  } catch {
    results.value = []
  } finally {
    loading.value = false
  }
}, { debounce: 200 })
</script>
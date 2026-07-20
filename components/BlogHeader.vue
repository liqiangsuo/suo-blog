<template>
  <header class="sticky top-0 z-40 border-b border-[rgb(var(--color-border))] bg-[rgb(var(--color-bg))/80] backdrop-blur-sm">
    <nav class="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
      <NuxtLink to="/" class="text-lg font-bold tracking-tight">
        suo的博客
      </NuxtLink>

      <div class="flex items-center gap-3">
        <NuxtLink
          to="/tags"
          class="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
        >
          标签
        </NuxtLink>
        <NuxtLink
          to="/about"
          class="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
        >
          关于
        </NuxtLink>

        <button
          class="p-1.5 rounded-md text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          aria-label="搜索"
          @click="$emit('openSearch')"
        >
          <Search class="w-4 h-4" />
        </button>

        <ThemeToggle />
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { Search } from 'lucide-vue-next'

defineEmits<{
  openSearch: []
}>()
</script>
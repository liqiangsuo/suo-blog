<template>
  <div class="flex flex-wrap items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
    <time :datetime="date">{{ formattedDate }}</time>
    <span v-if="wordCount">· {{ wordCount }} 字</span>
    <span v-if="readingTime">· 阅读约 {{ readingTime }} 分钟</span>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  date: string
  wordCount?: number
  readingTime?: number
}>()

const formattedDate = computed(() => {
  const d = new Date(props.date)
  return d.toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
})
</script>

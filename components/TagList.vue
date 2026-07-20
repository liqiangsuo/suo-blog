<template>
  <div class="flex flex-wrap gap-2">
    <NuxtLink
      v-for="tag in tags"
      :key="tag.name"
      :to="`/tags/${tag.name}`"
      class="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm border border-[rgb(var(--color-border))] hover:border-blue-300 dark:hover:border-blue-600 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
    >
      {{ tag.name }}
      <span class="text-xs text-gray-400 dark:text-gray-500">({{ tag.count }})</span>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  tags: Array<{ name: string; count: number }>
}>()
</script>

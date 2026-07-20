<template>
  <span
    class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
  >
    {{ tag }}
  </span>
</template>

<script setup lang="ts">
defineProps<{
  tag: string
}>()
</script>

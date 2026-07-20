<template>
  <nav v-if="toc.length > 0" class="text-sm">
    <h3 class="font-semibold text-gray-900 dark:text-gray-100 mb-3">目录</h3>
    <ul class="space-y-1.5">
      <li v-for="item in toc" :key="item.id" :class="{ 'ml-4': item.depth === 3, 'ml-8': item.depth === 4 }">
        <a
          :href="`#${item.id}`"
          class="block py-0.5 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors truncate"
          :class="{ 'font-medium': item.depth === 2 }"
          @click.prevent="scrollToHeading(item.id)"
        >
          {{ item.text }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
defineProps<{
  toc: Array<{ id: string; text: string; depth: number }>
}>()

function scrollToHeading(id: string) {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    // Update URL hash without scrolling
    history.pushState(null, '', `#${id}`)
  }
}
</script>

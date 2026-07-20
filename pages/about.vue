<template>
  <div class="max-w-3xl mx-auto px-4 sm:px-6 py-8">
    <h1 class="text-2xl font-bold mb-6">鍏充簬</h1>

    <div v-if="pending" class="flex items-center justify-center py-16">
      <div class="w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
    </div>

    <div v-else-if="content" class="prose-article">
      <ContentRenderer :value="content" />
    </div>

    <div v-else class="text-center py-16 text-gray-500 dark:text-gray-400">
      鏆傛棤鍐呭
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: '鍏充簬',
})

const { data: content, pending } = await useAsyncData('about', () =>
  queryCollection('content').path('/about').first()
)
</script>

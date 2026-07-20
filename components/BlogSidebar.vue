<template>
  <aside class="w-52 flex-shrink-0 hidden lg:block">
    <nav class="sticky top-16 p-4 space-y-6">
      <div v-for="section in navData.sections" :key="section.title">
        <h3 class="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-3 ml-1">
          {{ section.title }}
        </h3>
        <ul class="space-y-0.5">
          <li v-for="item in section.items" :key="item.path">
            <NuxtLink
              :to="item.path"
              class="block text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-md px-3 py-1.5 transition-colors"
              active-class="text-blue-600 dark:text-blue-400 font-semibold bg-blue-50 dark:bg-blue-900/20"
            >
              {{ item.label }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </nav>
  </aside>
</template>

<script setup lang="ts">
import navData from '~/public/navigation.json'
</script>
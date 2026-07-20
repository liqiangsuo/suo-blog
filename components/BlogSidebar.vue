<template>
  <aside class="w-56 flex-shrink-0 lg:block">
    <nav class="sticky top-16 space-y-6">
      <div v-for="section in navData.sections" :key="section.title">
        <h3 class="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
          {{ section.title }}
        </h3>
        <ul class="space-y-2">
          <li v-for="item in section.items" :key="item.path">
            <NuxtLink
              :to="item.path"
              class="block text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-1"
              active-class="text-blue-600 dark:text-blue-400 font-medium"
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

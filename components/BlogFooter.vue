<template>
  <footer class="border-t border-[rgb(var(--color-border))] mt-16">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 py-8">
      <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
        <p class="text-sm text-gray-500 dark:text-gray-400">
          &copy; {{ new Date().getFullYear() }} suo的博客. All rights reserved.
        </p>
        <div class="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
          <NuxtLink to="/" class="hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
            首页
          </NuxtLink>
          <NuxtLink to="/tags" class="hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
            标签
          </NuxtLink>
          <NuxtLink to="/about" class="hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
            关于
          </NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

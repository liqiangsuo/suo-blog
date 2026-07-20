<template>
  <div class="min-h-screen flex flex-col">
    <header class="border-b border-[rgb(var(--color-border))] bg-[rgb(var(--color-card))]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-14">
          <div class="flex items-center gap-4">
            <NuxtLink to="/admin" class="font-semibold text-lg">管理面板</NuxtLink>
          </div>
          <NuxtLink to="/" class="text-sm text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
            返回博客
          </NuxtLink>
        </div>
      </div>
    </header>
    <main class="flex-1">
      <slot />
    </main>
  </div>
</template>

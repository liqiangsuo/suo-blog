<template>
  <div class="min-h-screen flex flex-col">
    <BlogHeader @open-search="isSearchOpen = true" />
    <div class="flex-1 max-w-6xl mx-auto w-full flex">
      <BlogSidebar class="hidden lg:block border-r border-[rgb(var(--color-border))]" />
      <div class="flex-1 min-w-0">
        <main class="px-4 sm:px-6 py-6">
          <slot />
        </main>
      </div>
    </div>
    <BlogFooter />
    <SearchModal :is-open="isSearchOpen" @close="isSearchOpen = false" />
  </div>
</template>

<script setup lang="ts">
const isSearchOpen = ref(false)
onMounted(() => {
  document.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault()
      isSearchOpen.value = !isSearchOpen.value
    }
    if (e.key === 'Escape' && isSearchOpen.value) {
      isSearchOpen.value = false
    }
  })
})
</script>

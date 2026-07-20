<template>
  <div class="min-h-screen flex flex-col">
    <BlogHeader @open-search="isSearchOpen = true" />
    <div class="flex-1 flex max-w-6xl mx-auto w-full">
      <BlogSidebar />
      <main class="flex-1 min-w-0 px-4 sm:px-6 py-6 border-l border-[rgb(var(--color-border))]">
        <slot />
      </main>
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
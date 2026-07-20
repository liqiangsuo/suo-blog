<template>
  <div class="min-h-screen flex flex-col">
    <BlogHeader @open-search="isSearchOpen = true" />
    <main class="flex-1">
      <slot />
    </main>
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

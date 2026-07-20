<template>
  <div class="mt-12 pt-8 border-t border-[rgb(var(--color-border))]">
    <h2 class="text-lg font-semibold mb-6">评论</h2>
    <div ref="container" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  term: string
}>()

const container = ref<HTMLElement>()

onMounted(() => {
  const script = document.createElement('script')
  script.src = 'https://giscus.app/client.js'
  script.setAttribute('data-repo', 'YOUR_GITHUB_USER/YOUR_REPO')
  script.setAttribute('data-repo-id', 'YOUR_REPO_ID')
  script.setAttribute('data-category', 'Announcements')
  script.setAttribute('data-category-id', 'YOUR_CATEGORY_ID')
  script.setAttribute('data-mapping', 'specific')
  script.setAttribute('data-term', props.term)
  script.setAttribute('data-reactions-enabled', '1')
  script.setAttribute('data-emit-metadata', '0')
  script.setAttribute('data-input-position', 'top')
  script.setAttribute('data-theme', 'preferred_color_scheme')
  script.setAttribute('data-lang', 'zh-CN')
  script.setAttribute('crossorigin', 'anonymous')
  script.async = true

  container.value?.appendChild(script)
})
</script>

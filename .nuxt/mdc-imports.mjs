import _RemarkEmoji from 'remark-emoji'
import _Highlight from 'C:/codex_learn/codex_list/blog/node_modules/.pnpm/@nuxtjs+mdc@0.22.2_magic-st_47ab540253be9c51e23a440077b6be9c/node_modules/@nuxtjs/mdc/dist/runtime/highlighter/rehype-nuxt.js'

export const remarkPlugins = {
  'remark-emoji': { instance: _RemarkEmoji },
}

export const rehypePlugins = {
  'highlight': { instance: _Highlight, options: {} },
}

export const highlight = {"theme":{"default":"github-light","dark":"github-dark"}}
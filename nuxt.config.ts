// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    '~/assets/css/main.css',
  ],

  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxtjs/sitemap',
  ],

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    },
  },

  runtimeConfig: {
    public: {
      adminPassword: '',
      siteUrl: '',
    },
  },

  content: {
    experimental: { nativeSqlite: true },
    highlight: {
      theme: {
        default: 'material-theme-lighter',
        dark: 'material-theme-ocean',
      },
      preload: [
        'javascript', 'typescript', 'python', 'vue', 'css',
        'json', 'bash', 'yaml', 'markdown', 'html',
      ],
    },
  },

  colorMode: {
    preference: 'system',
    fallback: 'light',
    classSuffix: '',
  },

  nitro: {
    preset: 'vercel',
  },

  site: {
    url: process.env.NUXT_PUBLIC_SITE_URL || 'https://your-domain.vercel.app',
  },

  compatibilityDate: '2026-07-19',
})

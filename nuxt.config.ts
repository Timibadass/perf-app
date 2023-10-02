// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: false,
  vscode: {
    reuseExistingServer: true
  }},
  modules: [
    'nuxt-delay-hydration',
    '@nuxt/image',
  ],
  delayHydration: {
    // enables nuxt-delay-hydration in dev mode for testing
    debug: process.env.NODE_ENV === 'development',
    mode: 'init'
  },
  components: true,
});

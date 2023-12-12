// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css', '@fortawesome/fontawesome-svg-core/styles.css'],
  modules: ['@pinia/nuxt', '@tresjs/nuxt', ['@nuxtjs/google-fonts', {    
  families: {
    Roboto: [100, 300, 400, 500, 700, 900],
  }}]],
  plugins: [
    '~/plugins/fontawesome.js',
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  build: {
    transpile: ['@fortawesome/vue-fontawesome']
  },

})
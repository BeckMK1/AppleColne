// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css', '@fortawesome/fontawesome-svg-core/styles.css'],
  modules: [
    '@pinia/nuxt',
    '@tresjs/nuxt',
    '@nuxtjs/robots',
    '@nuxt/image',
    ['@nuxtjs/google-fonts', {    
    families: {
      Roboto: [100, 300, 400, 500, 700, 900],
    }}],
    "@nuxt/image"
  ],
  plugins: [
    '~/plugins/fontawesome.js',
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  image: {
    domains: [
      'apple-clone-wine-psi.vercel.app'
    ]
  },
  build: {
    transpile: ['@fortawesome/vue-fontawesome']
  },

})
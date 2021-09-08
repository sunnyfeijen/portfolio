export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Sunny Feijen',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { 
        rel: 'icon',
        type: 'image/png',
        href: '/favicon.png'
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Halant:wght@400;500;600;700&family=Nunito:wght@400;600&display=swap'
      },
    ],
    script: [
      {
          src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.7.1/gsap.min.js',
          defer: true,
      },
      {
          src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.7.1/ScrollTrigger.min.js',
          defer: true,
      }
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // SCSS file in the project
    '~/assets/css/index.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src: '~/plugins/animations.js'},
    {src: '~/plugins/date.js'},
    {ssr: false, src: '~plugins/hello' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
      name: 'Sunny\'s portfolio',
      short_name: 'Sunny\'s portfolio',
      background_color: '#16161e',
    },
    meta: {
      name: 'Sunny\'s portfolio',
      author: 'Sunny Feijen',
      theme_color: '#16161e',
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}

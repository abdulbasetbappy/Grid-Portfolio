// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@pinia/nuxt', 'nuxt-icon','@nuxt/content', ['nuxt-mail', {
    message: {
      to: 'abdulbasetbappy.official@gmail.com',
    },
    smtp: {
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: 'abdulbasetbappy.official@gmail.com',
        pass: 'uvjm iffw dsiq xall',
      },
    },
  }],
],
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  content: {
    api: {
      baseURL: '/content'
    }
  }
})
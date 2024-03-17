// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],
  plugins: [
    '~/plugins/axios',
    
  ],

  app: {
    head: {
        title: 'User Management',
        meta: [
            { name: 'description', content: 'User Roles and Permissions'}
        ],
        link: [
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'},
            { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"}
        ],

    }
}
})

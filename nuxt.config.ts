// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    css: ['~/assets/css/tailwind.css'],
    devtools: {enabled: true},
    modules: [
        '@nuxt/eslint',
        "@nuxtjs/sitemap",
        "nuxt-security",
        "@nuxt/icon",
        "@nuxt/content"
    ],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    icon: {
        customCollections: [
            {
                prefix: 'my-icon',
                dir: './assets/svg'
            },
        ],
    },
})

const websiteLink = 'https://www.vt-immobilien.com'
const websiteDescription = ''
const websiteTitle = 'VT-Immobilien'

export const appHead = {
    head: {
        templateParams: {
            site: {
                name: websiteTitle,
            },
        },
        titleTemplate: '%site.name | %s',
        htmlAttrs: {
            lang: 'de',
        },
        link: [
            {
                rel: 'favicon',
                href: '/favicon.ico',
                type: 'image/x-icon'
            },
            {
                rel: 'shortcut icon',
                href: '/shortcut_icon.png',
                type: 'image/png'
            },
            {
                rel: 'apple-touch-icon',
                sizes: '192x192',
                href: '/apple_touch.png',
                type: 'image/png'
            }
        ],
        meta: [
            {
                name: 'description',
                content: websiteDescription
            },
            {
                name: 'og:type',
                content: 'website'
            },
            {
                name: 'og:title',
                content: websiteTitle
            },
            {
                name: 'or:url',
                content: websiteLink
            },
            {
                name: 'og:site_name',
                content: 'vt-immobilien'
            },
            {
                name: 'og:description',
                content: websiteDescription
            },
            {
                name: 'og:image',
                content: '/og_image.png'
            },
            {
                name: 'og:image:width',
                content: '2500'
            },
            {
                name: 'og:image:height',
                content: '1330'
            },
            {
                name: 'twitter:image',
                content: '/og_image.png'
            },
            {
                name: 'twitter:title',
                content: websiteTitle
            },
            {
                name: 'twitter:description',
                content: websiteDescription
            },
            {
                name: 'twitter:card',
                content: 'summary_large_image'
            },
        ]
    },
}

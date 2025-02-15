import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'en-US',
  title: "Starter Docs",
  description: "A VitePress Site",
  appearance: 'force-dark', // 'dark' allows user to change theme
  base: '/docs/',
  cleanUrls: true,
  lastUpdated: true,
  // Added ignoreDeadLinks to temporarily fix build error
  ignoreDeadLinks: true,
  sitemap: {
    hostname: 'https://tagtwp.com/docs/'
  },

  head: [
    ['meta', { name: 'theme-color', content: '#000000' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'Starter Docs' }],
    ['meta', { property: 'og:url', content: 'https://tagtwp.com/docs/' }],
    ['meta', { property: 'og:description', content: 'Self hosting with superpowers: An open-source & self-hostable Heroku / Netlify / Vercel alternative.' }],
    ['meta', { property: 'og:image', content: 'https://coolcdn.b-cdn.net/assets/coolify/og-image-docs.png' }],
    ['meta', { property: 'twitter:site', content: '@coolifyio' }],
    ['meta', { property: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { property: 'twitter:title', content: 'Starter Docs' }],
    ['meta', { property: 'twitter:description', content: 'Self hosting with superpowers: An open-source & self-hostable Heroku / Netlify / Vercel alternative.' }],
    ['meta', { property: 'twitter:url', content: 'https://tagtwp.com/docs/' }],
    ['meta', { property: 'twitter:image', content: 'https://coolcdn.b-cdn.net/assets/coolify/og-image-docs.png' }],
    ['link', { rel: 'icon', href: 'starter-logo-transparent.png' }],
    ['script', { src: 'https://analytics.coollabs.io/js/script.js', 'data-domain': 'tagtwp.com/docs' }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/starter-logo-transparent.png',
    nav: [
      { text: 'Starter Theme', link: '#' },
      {
        text: 'Resources',
        items: [
          { text: 'Releases', link: '#' },
          { text: 'Support', link: '#' },
          { text: 'Sponsor us', link: '#' }
        ]
      }
    ],

    search: {
      provider: 'local'
    },

    sidebar: [
      {
        text: 'Get Started',
        collapsed: false,
        items: [
          { text: 'What is Starter?', link: '/what-is-starter' },
          { text: 'Installation', link: '/installation' },
          { text: 'Upgrade', link: '/upgrade' },
        ],
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  vite: {
    resolve: {
      alias: [
        {
          find: /^.*\/VPHero\.vue$/,
          replacement: fileURLToPath(
              new URL('./theme/components/Landing/HeroHeader.vue', import.meta.url)
          )
        },
        {
          find: /^.*\/VPBadge\.vue$/,
          replacement: fileURLToPath(
              new URL('./theme/components/VPBadge.vue', import.meta.url)
          )
        },
        {
          find: /^.*\/VPNavBar\.vue$/,
          replacement: fileURLToPath(
              new URL('./theme/components/VPNavBar.vue', import.meta.url)
          )
        },
        {
          find: /^.*\/VPSidebar\.vue$/,
          replacement: fileURLToPath(
              new URL('./theme/components/VPSidebar.vue', import.meta.url)
          )
        },
        {
          find: /^.*\/VPFeatures\.vue$/,
          replacement: fileURLToPath(
              new URL('./theme/components/VPFeatures.vue', import.meta.url)
          )
        },
        {
          find: /^.*\/VPFeature\.vue$/,
          replacement: fileURLToPath(
              new URL('./theme/components/VPFeature.vue', import.meta.url)
          )
        },
        {
          find: /^.*\/VPLocalNav\.vue$/,
          replacement: fileURLToPath(
              new URL('./theme/components/VPLocalNav.vue', import.meta.url)
          )
        },
        {
          find: /^.*\/VPDocAside\.vue$/,
          replacement: fileURLToPath(
              new URL('./theme/components/VPDocAside.vue', import.meta.url)
          )
        }
      ]
    }
  }
})

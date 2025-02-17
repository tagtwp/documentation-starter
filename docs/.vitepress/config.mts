import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'en-US',
  title: "Starter Docs",
  description: "A VitePress Site",
  // appearance: 'force-dark', // 'dark' allows user to change theme
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

    socialLinks: [
      { icon: 'github', link: 'https://github.com/tagtwp/documentation-starter' },
      { icon: 'discord', link: '#' },
      { icon: 'x', link: '#' }
    ],

    sidebar: [
      {
        text: 'Getting Started',
        collapsed: false,
        items: [
          { text: 'What is FTP?', link: '/what-is-ftp' },
          { text: 'What is cPanel?', link: '/what-is-cpanel' },
          { text: 'Configuring Server Settings', link: '/configuring-server-settings' },
        ],
      },
      {
        text: 'Theme Installation',
        collapsed: true,
        items: [
          { text: 'Using Child Theme', link: '/theme-installation/using-child-theme' },
          { text: 'Install Demo Content', link: '/theme-installation/install-demo-content' },
          { text: 'Install Default Plugins', link: '/theme-installation/install-default-plugins' },
          { text: 'How to Deactivate a Theme to Transfer a Domain', link: '/theme-installation/how-to-deactivate-a-theme-to-transfer-a-domain' },
          { text: 'How to Activate the Theme', link: '/theme-installation/how-to-activate-the-theme' },
          { text: 'How do I Update the Theme?', link: '/theme-installation/how-to-update-the-theme' },
          { text: 'Download and Install Theme', link: '/theme-installation/download-and-install-theme' },
        ],
      },
      {
        text: 'Theme Options',
        collapsed: true,
        items: [
          { text: 'Your Site Social Profiles', link: '/theme-options/your-site-social-profiles' },
          { text: 'What is Theme Options', link: '/theme-options/what-is-theme-options' },
          { text: 'Typography Options', link: '/theme-options/typography-options' },
          { text: 'Theme Design', link: '/theme-options/theme-design' },
          { text: 'Standard Blog Design & Styling', link: '/theme-options/standard-blog-design-styling' },
        ],
      },
      {
        text: 'Widgets & Sidebar',
        collapsed: true,
        items: [
          { text: 'How to Create a Weather Widget?', link: '/how-to-create-a-weather-widget' },
          { text: 'How to Create a Custom Sidebar', link: '/how-to-create-a-custom-sidebar' },
          { text: 'How to Config Sticky Sidebar?', link: '/how-to-config-sticky-sidebar' },
          { text: 'How to Add Contact Information art the Right Sidebar?', link: '/how-to-add-contact-information-art-the-right-sidebar' },
          { text: 'Editing Sidebars and Widgets', link: '/editing-sidebars-and-widgets' },
          { text: 'Assigning a sidebar to Posts & Pages', link: '/assigning-a-sidebar-to-posts-and-page' },
        ],
      }
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

const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Artemis Documentation',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Install',
        link: '/install/install.md',
      },
      {
        text: 'Config',
        link: '/config/'
      },
      {
        text: 'Buy Artemis',
        link: 'https://artemis.ac'
      }
    ],
    sidebar: {
      '/install/': [
        {
          title: ' ',
          collapsable: false,
          children: [
            '/install/install.md',
          ]
        },
        {
          title: 'Obtaining the loader',
          collapsable: false,
          children: [
            '/install/loader/getting-the-loader.md',
          ]
        },
        {
          title: 'Installation',
          collapsable: false,
          children: [
            '/install/panel/installation-pterodactyl.md'
          ]
        },
        {
          title: 'Changing your HWID',
          collapsable: false,
          children: [
            '/install/hwid/changing-hwid.md',
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}

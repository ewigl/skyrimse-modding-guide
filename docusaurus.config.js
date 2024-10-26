// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer'

const PROJECT_GITHUB_URL = 'https://www.github.com/ewigl/smgl'
const AUTHOR_GITHUB_URL = 'https://www.github.com/ewigl'

/** @type {import('@docusaurus/types').Config} */
const config = {
  // 自定义
  customFields: {
    author_github_url: 'https://www.github.com/ewigl/',
    home_desc: '上古卷轴5 天际 特别版 Mod 教程',
    project_short_name: 'SMGL',
  },
  title: '《上古卷轴5: 天际 特别版》 Mod 教程 by Licht',
  tagline: 'SkyrimSE Modding Guide by Licht',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://ewigl.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/smgl/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Licht', // Usually your GitHub org/user name.
  projectName: 'SMGL', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: PROJECT_GITHUB_URL,
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: PROJECT_GITHUB_URL,
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        gtag: {
          trackingID: 'G-886ZGC0579',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/logo.ico',
      // docs: {
      //   sidebar: {
      //     hideable: true,
      //   },
      // },
      navbar: {
        title: 'SMGL',
        logo: { alt: 'Logo', src: 'img/logo.ico' },
        items: [
          { type: 'docSidebar', sidebarId: 'tutorialSidebar', label: '教程', position: 'left' },
          { type: 'docSidebar', sidebarId: 'referencesSidebar', label: '参考', position: 'left' },
          { to: '/blog', label: '博客', position: 'left' },
          { to: '/about', label: '关于', position: 'right' },
          { href: PROJECT_GITHUB_URL, label: 'GitHub', position: 'right' },
        ],
      },
      footer: {
        style: 'light',
        // links: [
        //   {
        //     title: '链接',
        //     items: [
        //       { label: 'Intro', to: '/docs/tutorials/intro' },
        //       { label: 'Github', href: PROJECT_GITHUB_URL },
        //       { label: "SSE's NexusMods", href: 'https://www.nexusmods.com/skyrimspecialedition' },
        //     ],
        //   },
        // ],
        copyright: `Copyright © ${new Date().getFullYear()} <a href="${AUTHOR_GITHUB_URL}" target="_blank"> Licht </a>`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
}

export default config

// @ts-check
// const math = require('remark-math');
const katex = require('rehype-katex');
const path = require('path')
const beian = 'IP备案号'

// const announcementBarContent = `基于 <a href='https://docusaurus.io/'>Docusaurus v2</a> 实现`

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: ' LS Blog',
  tagline: 'Personal blog page',
  url: 'https://lag-spike.github.io',
  baseUrl: '/',
  // baseUrl: '/lag-spike.github.io/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'lag-spike',
  projectName: 'lag-spike.github.io',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,
  /* @type {import('@docusaurus/preset-classic').ThemeConfig} */
  themeConfig: {
    image: 'img/logo.png',
    // announcementBar: {
    //   id: 'announcementBar-3',
    //   content: announcementBarContent,
    // },
    metadata: [
      {
        name: 'keywords',
        content: '开发语言, 计算机基础, 协议, 单片机, 开发工具',
      },
    ],
    docs: {
      sidebar: {
        hideable: true,
      }
    },
    navbar: {
      title: '鲸语',
      logo: {
        alt: '鲸语',
        src: 'img/logo.webp',
        srcDark: 'img/logo.webp',
      },
      items: [
        {
          label: '博客',
          position: 'right',
          items: [
            {
              label: '时间归档',
              to: 'archive',
            },
            {
              label: '标签分类',
              to: 'tags',
            },
          ],
        },
        {
          label: '笔记',
          position: 'right',
          items: [
            {
              label: '技术笔记',
              to: 'docs/skill/',
            },
            {
              label: '读书笔记',
              to: 'docs/book/',
            },
            // {
            //   label: '工具推荐',
            //   to: 'docs/tools/',
            // },
            // {
            //   label: '标签分类',
            //   to: 'docs/tags',
            // },
          ],
        },
        // {
        //   label: 'Reading notes',
        //   position: 'right',
        //   to: 'docs/books/',
        // },
        {
          label: '项目',
          position: 'right',
          to: 'project',
        },
        {
          label: '链接',
          position: 'right',
          to: 'website',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '社交媒体',
          items: [
            {
              label: '首页',
              to: '/',
            },
            {
              label: '关于我',
              to: '/about',
            },
            {
              label: 'CSDN',
              href: 'https://blog.csdn.net/weixin_44113601',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/lag-spike',
            },
          ],
        },
        {
          title: '记录',
          items: [
            {
              label: '博客',
              to: '/#homepage_blogs',
            },
            {
              label: 'Project',
              to: 'project',
            },
            {
              label: '技术笔记',
              to: 'docs/skill',
            },
            {
              label: '读书笔记',
              to: 'docs/book',
            },
          ],
        },
        {
          title: '更多',
          items: [
        //   {
        //     label: '友链',
        //     position: 'right',
        //     to: 'friends',
        //   },
		  {
            label: '站点',
            position: 'right',
            to: 'website',
          },
          {
            html: `<a href="https://docusaurus.io/zh-CN/" target="_blank"><img style="height:50px;margin-top:0.5rem" src="/img/buildwith.png" /><a/>`
          },
        ],
        },
      ],
      copyright: `<p>Copyright © ${new Date().getFullYear()} 鲸语 Built with Docusaurus.</p><p><a href="http://beian.miit.gov.cn/" >${beian}</a></p>`,
    },
    prism: {
      theme: require('prism-react-renderer/themes/okaidia'),
      darkTheme: require('prism-react-renderer/themes/vsDark'),
      additionalLanguages: ['java', 'php'],
      // defaultLanguage: "javascript",
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 4,
    },
    algolia: {
      appId: '--',
      apiKey: '--',
      indexName: 'ixviii',
    },
    zoom: {
      selector: '.markdown :not(em) > img',
      background: {
        light: 'rgb(255, 255, 255)',
        dark: 'rgb(50, 50, 50)'
      },
      config: {}
    },
    matomo: {
      matomoUrl: 'https://matomo.ixviii.cn/',
      siteId: '1',
      phpLoader: 'matomo.php',
      jsLoader: 'matomo.js',
    },
    giscus: {
      repo: 'lag-spike/lag-spike.github.io',
      repoId: 'R_kgDOHvmQWg',
      category: 'General',
      categoryId: 'DIC_kwDOHvmQWs4CQqlq',
      mapping: 'title',
      lang: 'zh-CN',
      theme: "light",
      crossorigin: 'anonymous',
      loading: 'lazy',
      reactionsEnabled: '1',
      emitMetadat: '1',
    },
    liveCodeBlock: {
      playgroundPosition: 'top',
    },
    socials: {
      github: 'https://github.com/lag-spike',
      // twitter: 'https://twitter.com/ixviii',
      // juejin: 'https://juejin.cn/user/1565318510545901',
      csdn: 'https://blog.csdn.net/weixin_44113601',
      qq: 'https://wpa.qq.com/msgrd?v=3&amp;uin=1670210410&amp;site=qq',
      qqmusic: 'https://y.qq.com/n/ryqq/profile/like/song?uin=oKCloe-5oev5on**',
      // cloudmusic: 'https://music.163.com/#/user/home?id=1333010742',
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs',
          sidebarPath: 'sidebars.js',
          rehypePlugins: [katex],
        },
        blog: false,
        theme: {
          customCss: [require.resolve('./src/css/custom.css')],
        },
        sitemap: {
          changefreq: 'daily',
          priority: 0.5,
        },
        // debug: true,
      }),
    ],
  ],
  themes: ['@docusaurus/theme-live-codeblock'],
  plugins: [
    [
      path.resolve(__dirname, './src/plugin/plugin-content-blog'), {
        path: 'blog',
        routeBasePath: '/',
        editUrl: ({ locale, blogDirPath, blogPath, permalink }) =>
          `https://github.com/lag-spike/lag-spike.github.io/blob/main/${blogDirPath}/${blogPath}`,
        editLocalizedFiles: true,
        blogSidebarTitle: '近期文章',
        blogSidebarCount: 10,
        postsPerPage: 10,
        showReadingTime: true,
        readingTime: ({ content, frontMatter, defaultReadingTime }) =>
          defaultReadingTime({ content, options: { wordsPerMinute: 300 } }),
        feedOptions: {
          type: 'all',
          title: '鲸语',
          copyright: `Copyright © ${new Date().getFullYear()} 鲸语 Built with Docusaurus.<p><a href="http://beian.miit.gov.cn/" class="footer_lin">${beian}</a></p>`,
        },
      }
    ],
    path.resolve(__dirname, './src/plugin/plugin-baidu-analytics'),
    path.resolve(__dirname, './src/plugin/plugin-baidu-push'),
    'docusaurus-plugin-matomo',
    'docusaurus-plugin-image-zoom',
    [
      '@docusaurus/plugin-ideal-image', {
        disableInDev: true,
      }
    ],
    [
      '@docusaurus/plugin-pwa',
      {
        debug: true,
        offlineModeActivationStrategies: ['appInstalled', 'standalone', 'queryString'],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/logo.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json',
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: 'rgb(51 139 255)',
          },
        ],
      },
    ],
  ],
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh'],
  },
  onBrokenLinks: 'ignore',
}

module.exports = config

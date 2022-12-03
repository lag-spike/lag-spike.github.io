import { Friends } from './friend'
export interface Website {
  name: string
  logo: string
  desc?: string
  href: string
  tags?: string[]
}

export interface WebsiteCategory {
  name: string
  websites: Website[]
}

const friends: Website[] = Friends.map((f) => {
  return {
    ...f,
    name: f.title,
    desc: f.description,
    logo: f.avatar,
    href: f.website,
  }
})

export const websiteData: WebsiteCategory[] = [
  {
    name: '友链',
    websites: friends,
  },
  {
    name: '仓库托管',
    websites: [
      {
        name: 'GitHub',
        desc: '全球最大的软件项目托管平台，发现优质开源项目',
        logo: 'https://github.githubassets.com/favicons/favicon.svg',
        href: 'https://github.com/',
        tags: ['GitHub', '仓库托管','项目源码'],
      },
      {
        name: 'Gitee',
        desc: '蚂蚁集团全新一代数据可视化解决方案',
        logo: '/img/website/gitee.ico',
        href: 'https://gitee.com/',
        tags: ['Gitee', '仓库托管', '项目源码'],
      },
    ],
  }, 
  {
    name: '在线工具',
    websites: [
      {
        name: '程序员盒子',
        desc: '程序员一站式编程站点，专注于程序员学习编程提效，官网',
        logo: 'https://www.coderutil.com/favicon.ico',
        href: 'https://www.coderutil.com/',
        tags: ['在线工具','程序员盒子'],
      },
      {
        name: '菜鸟工具',
        desc: '支持前端的常用在线工具集合',
        logo: 'https://636f-codenav-8grj8px727565176-1256524210.tcb.qcloud.la/img/FD715D45-8A4B-4B77-BDA1-D75D7226AACB.jpeg-1609660318596',
        href: 'https://c.runoob.com/',
        tags: ['在线工具','菜鸟工具'],
      },
      {
        name: '半导小芯',
        desc: '都在用的芯片查询工具',
        logo: '/img/website/semiee.png',
        href: 'http://www.semiee.com/',
        tags: ['在线工具','半导小芯'],
      },
    ],
  }, 
  {
    name: '头像壁纸',
    websites: [
      {
        name: 'Octodex',
        desc: '你还在苦恼用什么头像合适吗?',
        logo: 'https://github.githubassets.com/favicons/favicon.svg',
        href: 'https://octodex.github.com/',
        tags: ['头像','octodex'],
      },
      {
        name: 'Wallhaven',
        desc: '首推优质壁纸网站',
        logo: '/img/website/wallhaven.png',
        href: 'https://wallhaven.cc/',
        tags: ['壁纸','wallhaven'],
      },
    ],
  }, 
  {
    name: '建站专栏',
    websites: [
      {
        name: 'Docusaurus',
        desc: '快速构建优化的网站，专注于您的内容',
        logo: 'https://d33wubrfki0l68.cloudfront.net/ea8e37a6a30e9c260a8936d95c579af4a2dd3df7/6ee7e/img/docusaurus_keytar.svg',
        href: 'https://docusaurus.io/',
        tags: ['docusaurus','建站', '搭建博客'],
      },
      {
        name: 'Vercel',
        desc: '可以免费将仓库的Docusaurus项目部署到云端',
        logo: 'https://assets.vercel.com/image/upload/q_auto/front/favicon/vercel/57x57.png',
        href: 'https://vercel.com/',
        tags: ['vercel','建站', '搭建博客'],
      },
      {
        name: 'Netlify',
        desc: 'Netlify 是一家提供静态网站托管的云平台，支持从 Github, GitLab, Bitbucket 等代码仓库中自动拉取代码 然后进行项目打包和部署等功能。',
        logo: 'https://www.netlify.com/v3/static/favicon/apple-touch-icon.png',
        href: 'https://www.netlify.com/',
        tags: ['netlify','建站', '搭建博客'],
      },
      {
        name: 'Fontwesome',
        desc: '可以获得优质的website图标(ico), 减少网站的麻烦, 包括亮暗主题',
        logo: 'https://fontawesome.com/favicon.ico',
        href: 'https://fontawesome.com/',
        tags: ['fontwesome','建站', '搭建博客'],
      },
      {
        name: 'Svgsilh',
        desc: '优质的小型svg格式插图',
        logo: '/img/website/svgsilh.png',
        href: 'https://svgsilh.com/',
        tags: ['svg','建站', '搭建博客'],
      },
      {
        name: 'Svgfont',
        desc: '优质大型svg矢量插图, 可换色',
        logo: '/img/website/svgfont.png',
        href: 'http://www.svgfont.com/',
        tags: ['svg','建站', '搭建博客'],
      },
    ],
  }, 
  {
    name: '学习文档',
    websites: [
      {
        name: '菜鸟教程',
        desc: '专注于各种前端技术及开发语言的综合文档',
        logo: 'https://636f-codenav-8grj8px727565176-1256524210.tcb.qcloud.la/img/FD715D45-8A4B-4B77-BDA1-D75D7226AACB.jpeg-1609660318596',
        href: 'https://www.runoob.com/',
        tags: ['菜鸟教程','学习文档'],
      },
      {
        name: 'RT-Thread',
        desc: 'RT-Thread 是一款完全由国内团队开发维护的嵌入式实时操作系统(RTOS)',
        logo: '/img/website/rtthread.png',
        href: 'https://www.rt-thread.org/document/site/#/',
        tags: ['rt-thread','学习文档'],
      },
      {
        name: 'MQTT协议',
        desc: 'MQTT是一个客户端服务端架构的发布/订阅模式的消息传输协议',
        logo: '/img/website/mqtt.png',
        href: 'https://mcxiaoke.gitbooks.io/mqtt-cn/content/',
        tags: ['mqtt','学习文档'],
      },
    ],
  },
  {
    name: 'LoRa专栏',
    websites: [
      {
        name: '开发者门户',
        desc: ' LoRa开发者学习中心, 可获得材料, 帮助对LoRa和LoRaWAN开发',
        logo: '/img/website/lora.png',
        href: 'https://lora-developers.semtech.cn/learn/',
        tags: ['LoRa专栏'],
      },
      {
        name: '深入浅出讲解LoRa通信技术',
        desc: '甘泉老师结合自身经验, 详细的讲解了LoRa相关技术',
        logo: '/img/website/lora.png',
        href: 'https://www.moore8.com/courses/3028',
        tags: ['LoRa专栏'],
      },
    ],
  }, 
]

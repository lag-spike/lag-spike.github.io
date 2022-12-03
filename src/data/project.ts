export type Tag = {
  label: string
  description: string
  color: string
}

export type TagType = 'favorite' | 'opensource' | 'blog' | 'web' | 'arm'

export type Project = {
  title: string
  description: string
  preview?: any
  website: string
  source?: string | null
  tags: TagType[]
}

export const Tags: Record<TagType, Tag> = {
  favorite: {
    label: '喜爱',
    description: '我喜欢!',
    color: '#e9669e',
  },
  opensource: {
      label: '开源',
      description: '开源!',
      color: '#39ca30',
  },
  blog: {
    label: 'Blog',
    description: '博客!',
    color: '#dfd545',
  },
  web: {
    label: '前端',
    description: '漂亮的网站!',
    color: '#a44fb7',
  },
  arm: {
    label: '嵌入式',
    description: '嵌入式的项目!',
    color: '#a44fb7',
  },
}

const Projects: Project[] = [
  {
    title: 'blog',
    description: '基于Docusaurus v2 静态网站生成器实现个人博客',
    preview: '/img/website/blog.png',
    website: 'https://lag-spike.github.io',
    source: 'https://github.com/lag-spike/lag-spike.github.io',
    tags: ['opensource', 'favorite', 'blog', 'web'],
  },
  {
    title: 'star-clock',
    description: '八卦星空钟',
    preview: '/img/website/clock.png',
    website: 'https://star-clock.app/',
    source: 'https://github.com/lag-spike/star-clock',
    tags: ['opensource', 'favorite', 'web'],
  },
]

export const TagList = Object.keys(Tags) as TagType[]
function sortProject() {
  let result = Projects
  // Sort by site name
  // result = sortBy(result, (user) => user.title.toLowerCase());
  // Sort by favorite tag, favorites first
  // result = sortBy(result, (user) => !user.tags.includes('javascript'));
  return result
}

export const sortedProjects = sortProject()

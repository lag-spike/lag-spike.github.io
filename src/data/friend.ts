import { shuffle } from '../utils/jsUtils'

export type Friend = {
  title: string
  description?: string
  website: string
  avatar?: any
}

export const Friends: Friend[] = [
  {
    title: '愧怍',
    description: '前端全栈大牛',
    website: 'https://kuizuo.cn/',
    avatar: require('./avatar/kuizuo.png'),
  },
  {
    title: 'OpenLinker',
    description: '深耕于嵌入式的老牌大牛',
    website: 'http://106.12.112.132/',
    avatar: require('./avatar/openLinker.png'),
  },
  {
    title: '峰华',
    description: '致力于帮助你以最直观, 最快速的方式学会前端开发',
    website: 'https://zxuqian.cn',
    avatar: require('./avatar/zxuqian.png'),
  },
]

export function sortFriend() {
  let result = Friends

  // shuffle(result)
  return result
}

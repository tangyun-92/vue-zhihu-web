export interface ColumnProps {
  id: number
  title: string
  avatar?: string
  description: string
}

export interface PostProps {
  id: number
  title: string
  content: string
  image?: string
  createdAt: string
  columnId: number
}

export const testData: ColumnProps[] = [
  {
    id: 1,
    title: 'test1专栏',
    description: '这是test1专栏，有一段有意思的简介，可以更新一下',
    avatar:
      'https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png',
  },
  {
    id: 2,
    title: 'test2专栏',
    description: '这是test2专栏，有一段有意思的简介，可以更新一下',
    avatar: 'https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png'
  },
  {
    id: 3,
    title: 'test3专栏',
    description: '这是test2专栏，有一段有意思的简介，可以更新一下',
    avatar:
      'https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png',
  },
  {
    id: 4,
    title: 'test4专栏',
    description: '这是test2专栏，有一段有意思的简介，可以更新一下',
    avatar:
      'https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png',
  },
]

export const testPosts: PostProps[] = [
  {
    id: 1,
    title: '这是第一篇文章',
    content: '我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容',
    image:
      'https://www.baidu.com/img/PCfb_5bf082d29588c07f842ccde3f97243ea.png',
    createdAt: '2020-12-11 11:22:12',
    columnId: 1,
  },
  {
    id: 2,
    title: '这是第二篇文章',
    content: '我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容',
    image:
      'https://www.baidu.com/img/PCfb_5bf082d29588c07f842ccde3f97243ea.png',
    createdAt: '2020-12-11 11:22:12',
    columnId: 1,
  },
  {
    id: 3,
    title: '这是第三篇文章',
    content: '我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容',
    image: './src/assets/logo.png',
    createdAt: '2020-12-11 11:22:12',
    columnId: 2,
  },
]

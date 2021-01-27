import { createStore } from 'vuex'
import { testData, testPosts } from './testData'

interface UserProps {
  isLogin: boolean
  name?: string
  id?: number
  columnId: number
}
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
export interface GlobalDataProps {
  columns: ColumnProps[]
  posts: PostProps[]
  user: UserProps
}

const store = createStore<GlobalDataProps>({
  state: {
    columns: testData,
    posts: testPosts,
    user: {
      isLogin: false,
      columnId: 1
    },
  },
  mutations: {
    login(state) {
      state.user = { ...state.user, isLogin: true, name: 'tangyun' }
    },
    createPost(state, newPost) {
      state.posts.push(newPost)
    }
  },
  getters: {
    getColumnById: (state) => (id:number) => {
      return state.columns.find(c => c.id === id)
    },
    getPostsByCid: (state) => (cid: number) => {
      return state.posts.filter(post => post.columnId === cid)
    }
  }
})

export default store

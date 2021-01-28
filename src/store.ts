import { createStore, Commit } from 'vuex'
import axios from 'axios'

interface UserProps {
  isLogin: boolean
  name?: string
  id?: number
  columnId: string
}
export interface ColumnProps {
  _id: string
  title: string
  avatar?: string
  description: string
}

export interface PostProps {
  _id: string
  title: string
  content?: string
  image?: string
  createdAt: string
  columnId: string
}
export interface GlobalDataProps {
  loading: boolean
  columns: ColumnProps[]
  posts: PostProps[]
  user: UserProps
}

const postAndCommit = async (
  url: string,
  info: object,
  mutationName: string,
  commit: Commit
) => {
  const { data } = await axios.post(url, info)
  commit(mutationName, data)
}

const store = createStore<GlobalDataProps>({
  state: {
    loading: false,
    columns: [],
    posts: [],
    user: {
      isLogin: false,
      columnId: '',
    },
  },
  mutations: {
    login(state) {
      state.user = { ...state.user, isLogin: true, name: 'tangyun' }
    },
    createPost(state, newPost) {
      state.posts.push(newPost)
    },
    fetchColumns(state, rawData) {
      state.columns = rawData.data
    },
    fetchColumn(state, rawData) {
      state.columns = rawData.data
    },
    fetchPosts(state, rawData) {
      state.posts = rawData.data
    },
    setLoading(state, status) {
      state.loading = status
    }
  },
  actions: {
    async fetchColumns({ commit }) {
      postAndCommit('/columns/getColumnList', {}, 'fetchColumns', commit)
    },
    fetchColumn({ commit }, cid) {
      postAndCommit(
        '/columns/getColumnInfo',
        { columnId: cid },
        'fetchColumn',
        commit
      )
    },
    fetchPosts({commit}, cid) {
      postAndCommit(
        '/columns/columnArticleList',
        { columnId: cid },
        'fetchPosts',
        commit
      )
    },
  },
  getters: {
    getColumnById: (state) => () => {
      return state.columns
    },
    getPostsByCid: (state) => () => {
      return state.posts
    },
  },
})

export default store

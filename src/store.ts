import { createStore, Commit } from 'vuex'
import axios from 'axios'
//持久化存储插件
import createPersistedState from 'vuex-persistedstate'

export interface UserProps {
  isLogin: boolean
  name?: string
  _id?: string
  headline?: string // 一句话介绍自己
  gender?: string
  avatarUrl?: string // 头像url
  bannerUrl?: string
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
  token: string
  loading: boolean
  columns: ColumnProps[]
  posts: PostProps[]
  user: UserProps
  error: GlobalErrorProps
}
export interface GlobalErrorProps {
  status: boolean
  message?: string
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
    error: {
      status: false
    },
    token: '',
    loading: false,
    columns: [],
    posts: [],
    user: {
      isLogin: false,
    },
  },
  mutations: {
    setError(state, e: GlobalErrorProps) {
      state.error = e
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
    },
    fetchUser(state, rawData) {
      state.user = { isLogin: true, ...rawData.data }
    },
    login(state, rawData) {
      const { token } = rawData
      state.token = token
      axios.defaults.headers.common.Authorization = `Bearer ${token}`
    },
  },
  actions: {
    // 获取专栏列表
    fetchColumns({ commit }) {
      postAndCommit('/columns/getColumnList', {}, 'fetchColumns', commit)
    },
    // 获取专栏详情
    fetchColumn({ commit }, cid) {
      postAndCommit(
        '/columns/getColumnInfo',
        { columnId: cid },
        'fetchColumn',
        commit
      )
    },
    // 获取文章列表
    fetchPosts({ commit }, cid) {
      postAndCommit(
        '/columns/columnArticleList',
        { columnId: cid },
        'fetchPosts',
        commit
      )
    },
    fetchUser({ commit }) {
      return new Promise((resolve, reject) => {
        axios.post('/users/getUserInfoByToken').then((res) => {
          if (res.data.code === 1) {
            commit('fetchUser', res.data)
            resolve(res.data)
          } else {
            reject()
          }
        })
      })
    },
    // 登录
    login({ commit }, info) {
      return new Promise((resolve, reject) => {
        axios.post('/users/login', info).then((res) => {
          if (res.data.code === 1) {
            commit('login', res.data)
            resolve(res.data)
          } else {
            reject()
          }
        })
      })
    },
    loginAndFetch({ dispatch }, loginData) {
      return dispatch('login', loginData).then(() => {
        return dispatch('fetchUser')
      })
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
  plugins: [
    createPersistedState({
      key: 'ZHIHU_WEB',
      reducer(state) {
        return {
          token: state.token,
          loading: state.loading,
          posts: state.posts,
          user: state.user,
        }
      },
    }),
  ],
})

export default store

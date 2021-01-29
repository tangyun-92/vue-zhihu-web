import { createApp } from 'vue'
import axios from 'axios'
import router from './router'
import store from './store'

import App from './App.vue'

axios.defaults.baseURL = 'http://localhost:3000'
axios.interceptors.request.use((config) => {
  store.commit('setLoading', true)
  return config
})
axios.interceptors.response.use(
  (config) => {
    store.commit('setLoading', false)
    return config
  },
  (e) => {
    const { message } = e.response.data
    store.commit('setError', { status: true, message })
    store.commit('setLoading', false)
    return Promise.reject()
  }
)

const app = createApp(App)

app.use(router)
app.use(store)
app.mount('#app')

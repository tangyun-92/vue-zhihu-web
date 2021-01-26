import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/home.vue'
import Login from './views/login.vue'
import ColumnDetail from './views/column-detail.vue'
import App from './App.vue'

const routerHistory = createWebHistory()
const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/column/:id',
      name: 'column',
      component: ColumnDetail,
    },
  ],
})

const app = createApp(App)
app.use(router)
app.mount('#app')

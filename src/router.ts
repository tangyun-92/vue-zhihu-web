import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/home.vue'
import Login from './views/login.vue'
import ColumnDetail from './views/column-detail.vue'
import CreatePost from './views/create-post.vue'
import store from './store'

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
      meta: {
        redirectAlreadyLogin: true,
      },
    },
    {
      path: '/column/:id',
      name: 'column',
      component: ColumnDetail,
    },
    {
      path: '/create',
      name: 'create',
      component: CreatePost,
      meta: {
        requiredLogin: true,
      },
    },
  ],
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiredLogin && !store.state.user.isLogin) {
    next('/login')
  } else if (to.meta.redirectAlreadyLogin && store.state.user.isLogin) {
    next('/')
  } else {
    next()
  }
})

export default router

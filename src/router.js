import Vue from 'vue'
import Router from 'vue-router'

import store from './store'
import Index from '@/pages/Index.vue'

Vue.use(Router)

const beforeEnter = (to, from, next) => {
  const isAuth = store.state.isLogin
  isAuth ? next() : next({
    name: 'login',
    query: { redirect: to.path }
  })
}

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/post/:id',
      name: 'post',
      component: () => import(/* webpackChunkName: "post" */ './pages/Post.vue')
    },
    {
      path: '/auth/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */ './pages/Login.vue'),
      props: (route) => ({ redirect: route.query.redirect }),
      meta: {
        forbidAuth: true
      }
    },
    {
      path: '/write',
      name: 'write',
      beforeEnter,
      component: () => import(/* webpackChunkName: "write" */ './pages/Write.vue')
    }
  ]
})

router.beforeEach((to, _, next) => {
  const { isAuth } = store.getters
  if (to.meta.forbidAuth) {
    !isAuth ? next() : next({ name: 'index' })
  } else {
    isAuth ? next() : next({ name: 'login' })
  }
})

export default router

import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/pages/Index.vue'
import Post from '@/pages/Post.vue'
import Login from '@/pages/Login.vue'

Vue.use(Router)

export default new Router({
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
      component: Post
    },
    {
      path: '/auth/login',
      name: 'login',
      component: Login
    }
  ]
})

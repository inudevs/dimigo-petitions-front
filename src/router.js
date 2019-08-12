import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/pages/Index.vue'
import Best from '@/pages/Best.vue'

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
      path: '/best',
      name: 'best',
      component: Best
    }
  ]
})

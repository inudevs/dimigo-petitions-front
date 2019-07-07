import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/pages/Index.vue'
import Best from '@/pages/Best.vue'
import Petitions from '@/pages/Petitions.vue'
import Answer from '@/pages/Answer.vue'

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
      path: '/petitions',
      name: 'petitions',
      component: Petitions
    },
    {
      path: '/petitions/best',
      name: 'index',
      component: Best
    },
    {
      path: '/petitions/answer',
      name: 'answer',
      component: Answer
    }
  ]
})

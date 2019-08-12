import Vue from 'vue'
import axios from 'axios'
import App from './App'
import router from './router'
import store from './store'

import './style.scss'

Vue.prototype.$api = axios.create({
  baseURL: 'http://localhost:5000/'
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})

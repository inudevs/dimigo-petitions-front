import Vue from 'vue'
import axios from 'axios'
import App from './App'
import router from './router'

import './style.scss'

Vue.prototype.$api = axios.create({
  baseURL: 'http://localhost:5001/'
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

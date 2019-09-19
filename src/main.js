import Vue from 'vue'
import VueSweetalert2 from 'vue-sweetalert2'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store/index'

import './style.scss'
import 'sweetalert2/dist/sweetalert2.min.css'

Vue.use(VueSweetalert2)

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

import Vue from 'vue'
import VueSweetalert2 from 'vue-sweetalert2'

import App from './App'
import router from './router'
import store from './store'
import createAPI from './axios'

import './style.scss'
import 'sweetalert2/dist/sweetalert2.min.css'

const api = createAPI(store)
Vue.prototype.$api = api

Vue.use(VueSweetalert2)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})

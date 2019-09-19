import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import login from './auth/login'

Vue.use(Vuex)

const enhanceAccessToken = () => {
  const { token } = localStorage
  if (!token) return
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
}
enhanceAccessToken()

export default new Vuex.Store({
  modules: {
    login: login
  }
})

import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    token: ''
  },
  mutations: {
    setToken (state, value) {
      state.isLogin = true
      state.token = value
    }
  },
  plugins: [createPersistedState({
    storage: window.sessionStorage
  })]
})

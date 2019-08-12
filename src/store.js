import Vue from 'vue'
import Vuex from 'vuex'
// import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    token: ''
  },
  mutations: {
    login (state, value) {
      state.isLogin = true
      state.token = value
    }
    // ,logout (state) {
    //   state.isLogin = false
    //   state.token = ''
    // }
  }
  // ,plugins: [createPersistedState({
  //   storage: window.sessionStorage
  // })]
})

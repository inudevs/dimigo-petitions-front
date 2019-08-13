import Vue from 'vue'
import Vuex from 'vuex'
// import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    token: '',
    id: ''
  },
  mutations: {
    login (state, token) {
      state.isLogin = true
      state.token = token
    },
    saveID (state, _id) {
      state.id = _id
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

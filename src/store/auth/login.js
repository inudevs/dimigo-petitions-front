const state = {
  isLogin: false,
  token: '',
  id: ''
}

const mutations = {
  login (state, token) {
    state.isLogin = true
    state.token = token
    localStorage.setItem('token', token)
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
  },
  saveID (state, _id) {
    state.id = _id
  },
  testmutation () {
    state.isLogin = true
    console.log('haha')
  }
}

const actions = {
  test () {
    console.log('complete')
    commit('testmutation')
  }
}

export default {
  state, mutations, actions
}

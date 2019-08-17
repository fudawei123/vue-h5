export default {
  namespaced: true, //用于在全局引用此文件里的方法时标识这一个的文件名
  state: {
    token: null,
    isLogged: false
  },
  getters: {},
  mutations: {
    setToken(state, token) {
      state.token = token
      state.isLogged = !!state.token
    }
  }
}

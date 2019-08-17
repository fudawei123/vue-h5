export default {
  namespaced: true, //用于在全局引用此文件里的方法时标识这一个的文件名
  state: {
    flag: false,
    title: null,
    rightIcon: null,
    onClickRight() {}
  },
  mutations: {
    setConfig(state, {
      flag = true,
      title = state.title,
      rightIcon = state.rightIcon,
      onClickRight = function () {}
    }) {
      state.flag = flag
      state.title = title
      state.rightIcon = rightIcon
      state.onClickRight = onClickRight
    }
  }
}

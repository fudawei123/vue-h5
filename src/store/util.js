export const setAttr = ({
  state = {},
  getters = {},
  mutations = {},
  actions = {}
} = {
  state: {},
  getters: {},
  mutations: {},
  actions: {}
}) => {
  return function (api) {
    return {
      namespaced: true, //用于在全局引用此文件里的方法时标识这一个的文件名
      state: {
        params: {
          pageNo: 1,
          length: 10
        },
        ...state,
        list: []
      },
      getters: {
        ...getters
      },
      mutations: {
        ...mutations,
        setParams(state, params) {
          state.params = {
            ...state.params,
            ...params
          }
        },
        reset(state) {
          state.list = []
          state.params = {
            ...state.params,
            pageNo: 1,
            length: state.params.length
          }
        },
        setList(state, list) {
          state.list.push(...list)
        },
        setItem(state, {
          index,
          item
        }) {
          const list = [...state.list]

          list[index] = {
            ...list[index],
            ...item
          }
          state.list = [...list]
        }
      },
      actions: {
        getList({
          state,
          commit
        }, reset) {
          !!reset && commit('setParams', {
            pageNo: 1
          })
          return api(state.params)
            .then(res => {
              !!reset && commit('reset')
              commit('setList', res.data)
              return state.list.length >= res.recordsTotal
            })
        },
        ...actions,
      }
    }
  }
}

import {
  getActivityList
} from '@/api/activity/api'
import {
  setAttr
} from '../util'


const obj = {
  state: {
    params: {
      pageNo: 1,
      length: 10
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
      return getActivityList(state.params)
        .then(res => {
          !!reset && commit('reset')
          commit('setList', res.data)
          return state.list.length >= res.totalElements
        })
    },
  }
}

export default setAttr(obj)(getActivityList)

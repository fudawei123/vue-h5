import store from '../store/index'
import {
  Notify
} from 'vant';

// 调用 android/OC 提供的方法
const Bridge = {
  /**
   * 获取用户信息
   * @param {*} bridge
   */
  getUserInfo(bridge) {
    bridge.callHandler('JS2APP_getUserInfo', {}, res => {
      console.log(res)
      store.commit('user/setUserInfo', JSON.parse(res))
    })
  },
  /**
   * 分享
   * @param {*} params
   * @param {*} bridge
   */
  share(params, bridge) {
    bridge.callHandler('JS2APP_share', JSON.stringify(params), res => {
      console.log(res)
    })
  },
  /**
   * 跳登陆
   * @param {*} bridge
   */
  login(bridge) {
    bridge.callHandler('JS2APP_login', {}, res => {
      console.log(res)
    })
  },
  /**
   * 控制loading flag 1 显示 0 隐藏
   * @param {*} flag
   * @param {*} bridge
   */
  isLoading(flag, bridge) {
    bridge.callHandler('JS2APP_isLoading', flag, res => {
      console.log(res)
    })
  },
  /**
   * 调用CDP接口
   * @param {*} params 
   * @param {*} bridge 
   */
  requestCDP(params, bridge) {
    params.params = JSON.stringify(params.params)
    return new Promise((resolve, reject) => {
      bridge.callHandler('JS2APP_requestCDP', JSON.stringify(params), res => {
        console.log(res)
        if (res.returnStatus === 'SUCCESS') {
          resolve(res)
        } else {
          Notify(res.returnMessage)
          reject()
        }
      })
    })
  }
}

for (let key in Bridge) {
  (function () {
    const fn = Bridge[key]

    Bridge[key] = function () {
      const args = arguments

      return new Promise((resolve, reject) => {
        setupWebViewJavascriptBridge(bridge => {
          Array.prototype.push.call(args, bridge)
          try {
            fn.apply(this, args)
              .then((res) => {
                resolve(res)
              })
              .catch(() => {
                return Promise.reject()
              })
          } catch (e) {
            console.log(e)
          }
        })
      })
    }
  })()
}
export default Bridge

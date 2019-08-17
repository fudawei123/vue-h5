import store from '../store/index'

// 调用 android/OC 提供的方法
const Bridge = {
  getToken(bridge) {
    bridge.callHandler('getToken', {}, res => {
      alert(res)
      store.commit('user/setToken', res)
      localStorage.setItem('token', res)
    })
  },
  share(params, bridge) {
    alert(JSON.stringify(params))
    bridge.callHandler('APP2JS_share', JSON.stringify(params), res => {
      alert(res)
    })
  },
  login(bridge) {
    bridge.callHandler('APP2JS_login', JSON.stringify(params), res => {
      alert(res)
    })
  }
}

for (let key in Bridge) {
  (function () {
    const fn = Bridge[key]

    Bridge[key] = function () {
      const args = arguments

      setupWebViewJavascriptBridge(bridge => {
        Array.prototype.push.call(args, bridge)
        fn.apply(this, args)
      })
    }
  })()
}
export default Bridge

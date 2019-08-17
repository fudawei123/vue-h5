window.baseURL = ''

setupWebViewJavascriptBridge(function (bridge) {
  bridge.callHandler('getBaseURL', {}, res => {
    alert(res)
    window.baseURL = res
  })
})

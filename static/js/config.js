window.baseURL = '' // 请求域名 
window.shareURL = '' // 分享域名

setupWebViewJavascriptBridge(function (bridge) {
  bridge.callHandler('getBaseURL', {}, res => {
    console.log(res)
    window.baseURL = res
  })
})

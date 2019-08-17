// 这里主要是注册 android/OC 将要调用的 JS 方法。
setupWebViewJavascriptBridge(bridge => {
  try {
    // android/OS 调用 js 提供的方法就会被执行
    bridge.init((message, responseCallback) => {
      console.log('JS got a message', message)
      const data = {
        'Javascript Responds': 'CMYH!'
      }

      console.log('JS responding with', data)
      responseCallback(data)
    })
  } catch (e) {
    console.log(e)
  }
  // 声明 android/OC 需要调用的 JS 方法。
  bridge.registerHanlder('testJavaScriptFunction', (data, responseCallback) => {
    // data 是 android/OC 传递过来的数据.
    // responseCallback 是 JS 调用完毕之后传递给 android/OC 的数据
    alert("JS 被 OC 调用了.");
    responseCallback({
      data: "js 的数据",
      from: "JS"
    });
  })
});

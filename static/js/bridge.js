/**
 * 这段代码是固定的，必须要放到js中
 * 获取bridge容器
 * @param {*} callback 
 */
function setupWebViewJavascriptBridge(callback) {
  if (window.WebViewJavascriptBridge) {
    callback(WebViewJavascriptBridge)
  } else {
    document.addEventListener(
      'WebViewJavascriptBridgeReady',
      () => {
        callback(WebViewJavascriptBridge)
      },
      false
    );
  }
  if (window.WVJBCallbacks) {
    return window.WVJBCallbacks.push(callback);
  }
  window.WVJBCallbacks = [callback];
  const WVJBIframe = document.createElement('iframe');

  WVJBIframe.style.display = 'none';
  WVJBIframe.src = 'https://__bridge_loaded__'; // 
  document.documentElement.appendChild(WVJBIframe);
  setTimeout(() => {
    document.documentElement.removeChild(WVJBIframe)
  }, 0)
}

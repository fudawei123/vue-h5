import axios from 'axios'
import {
  Notify
} from 'vant';
import Login from '../utils/Login'
import store from '../store/index'
import Bridge from '../bridge/call'

const instance = axios.create({
  baseURL: window.baseURL,
  // timeout: 10000,
});

/**
 * 处理loading
 */
const loading = (function () {
  const queue = [], // 请求队列
    fn = function (data) {
      return (data.pageNo && data.pageNo !== 1)
    }

  return {
    push({
      url,
      data
    }) {
      if (fn(data)) {
        return
      }
      console.log(queue.length)
      if (queue.length === 0) {
        console.log('请求开始')
        Bridge.isLoading(1)
      }
      queue.push(url)
    },
    shift({
      data
    }) {
      data = JSON.parse(data)
      if (fn(data)) {
        return
      }
      queue.shift()
      console.log(queue.length)
      if (queue.length === 0) {
        console.log('请求结束')
        Bridge.isLoading(0)
      }
    }
  }
})()

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  console.log("isLogged:" + store.state.user.isLogged)
  console.log("timaToken:" + store.state.user.userInfo.accessToken)
  if (store.state.user.isLogged) {
    config.headers.Authorization = store.state.user.userInfo.accessToken
  }
  config.headers['x-namespace-code'] = 'dms-demo-default'
  config.headers['x-microservice-name'] = 'dms-tima-gateway-zuul-svr'
  loading.push(config)
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

const checkStatus = ({
  status,
  statusText,
  data,
  config
}) => {
  loading.shift(config)
  if (status !== 200) {
    return Promise.reject(statusText)
  }
  return data
}
const checkData = data => {
  const {
    code,
    msg,
    status,
    errorMsg
  } = data

  switch (status || code) {
    case 1:
      return data
    case 403:
      Login()
      return Promise.reject(msg)
    default:
      return Promise.reject(errorMsg)
  }
}
/**
 * 打印错误信息
 * @param {*} errorMsg
 */
const printErrorMsg = errorMsg => {
  errorMsg = errorMsg || '系统报错'
  Notify(errorMsg);
  return Promise.reject()
}
/**
 * 请求主体
 * @param {*} method
 * @param {*} url
 * @param {*} data
 * @param {*} config
 */
const Ajax = (method, url, data = {}, config = {}) => {
  return instance({
      method,
      url,
      data,
      ...config
    })
    .then(checkStatus)
    .then(checkData)
    .catch(printErrorMsg)
}

export default {
  get(url, data = {}, config) {
    data = {
      params: data
    }
    return Ajax('get', url, data, config)
  },
  post(url, data, config) {
    return Ajax('post', url, data, config)
  }
}

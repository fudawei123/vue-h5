import axios from 'axios'
import {
  Notify
} from 'vant';
import Login from '../utils/Login'

const instance = axios.create({
  baseURL,
  timeout: 10000,
});
const queue = [] // 请求队列

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  if (queue.length === 0) {
    console.log('请求开始')
  }
  queue.push(config.url)
  // 在发送请求之前做些什么
  config.headers.timaToken = 'Tima eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySW5mbyI6IntcIkFBQUlkXCI6ODcsXCJhYWFUb2tlblwiOlwiYzQ4YmY1YTMtZDEyNC00MGNhLTg4ZTItNjdmOTBiNGU3ZWJjXCIsXCJhdXRoZW50aWNhdGlvblN0YXR1c1wiOjAsXCJjcmVhdGVkRGF0ZVwiOjE1MzYwMjkxODUwMDAsXCJkZWxldGVGbGFnXCI6XCIwXCIsXCJpZFwiOjk3LFwiaW5pdFVzZXJcIjowLFwibGFzdE1vZGlmaWVkRGF0ZVwiOjE1NTA0ODczMTMwMDAsXCJub1wiOlwiQUQwMjIwMTgwOTA0MTA0NjI1NTk5OTVcIixcInBlcnNvbmFsU2lnbmF0dXJlXCI6XCLkuKrmgKfnrb7lkI3vvJvkuKror7fnrb7lkI0xXCIsXCJwaG9uZVwiOlwiMTg2MjQzODEwNzRcIixcInJlYWxQaG9uZVwiOlwiMTg2KioqKjEwNzRcIixcInNleFwiOjEsXCJ1c2VyQ29kZVwiOlwiMTg2MjQzODEwNzRcIixcInVzZXJOYW1lXCI6XCLkuo7miJDpvpkxMjNcIixcInVzZXJTdGF0dXNcIjowLFwidXNlclR5cGVcIjpcIjAxXCJ9IiwiY3JlYXRlZCI6MTU2NTkyNTY4OTA5NiwidXNlck5vIjoiQUQwMjIwMTgwOTA0MTA0NjI1NTk5OTUiLCJ1c2VyVHlwZSI6IjAxIiwidXNlck5hbWUiOiLkuo7miJDpvpkxMjMiLCJleHAiOjE1NjY3ODk2ODksInVzZXJJZCI6OTd9.Hvl-RQvSRY3eTYUGRcpJ-BjdLQpRXuWpCzi2YXXq8NM'
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});
const checkStatus = ({
  status,
  statusText,
  data
}) => {
  queue.shift()
  if (queue.length === 0) {
    console.log('请求结束')
  }
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

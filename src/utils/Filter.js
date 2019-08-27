import Vue from 'vue'

function timeChange(time) {
  var date = time.substr(0, 10); //年月日
  var hours = time.substring(11, 13);
  var minutes = time.substring(14, 16);
  var seconds = time.substring(17, 19);
  var timeFlag = date + ' ' + hours + ':' + minutes + ':' + seconds;
  timeFlag = timeFlag.replace(/-/g, "/");
  timeFlag = new Date(timeFlag);
  timeFlag = new Date(timeFlag.getTime() + 8 * 3600 * 1000);
  timeFlag = timeFlag.getFullYear() + '-' + ((timeFlag.getMonth() + 1) < 10 ? "0" + (timeFlag.getMonth() + 1) : (timeFlag.getMonth() + 1)) + '-' + (timeFlag.getDate() < 10 ? "0" + timeFlag.getDate() : timeFlag.getDate()) + ' ' + timeFlag.getHours() + ':' + timeFlag.getMinutes() + ':' + (timeFlag.getSeconds() < 10 ? "0" + timeFlag.getSeconds() : timeFlag.getSeconds());
  return timeFlag;
};
const a = 7 * 24 * 60 * 60 * 1000 // 一周
const b = 6 * 24 * 60 * 60 * 1000 // 六天 
const c = 1 * 24 * 60 * 60 * 1000 // 一天
const d = 1 * 60 * 60 * 1000 // 一小时
const e = 10 * 60 * 1000 // 十分钟
const f = 1 * 60 * 1000 // 一分钟
const map = new Map([
  [(val) => { // 刚刚
    if (val <= e) {
      return true
    }
    return false
  }, () => {
    return '刚刚'
  }],
  [(val) => { // 几分钟前
    if (val > e && val < d) {
      return true
    }
    return false
  }, () => {
    return `${parseInt(val / f)}分钟前`
  }],
  [(val) => { // 几小时前
    if (val >= d && val < c) {
      return true
    }
    return false
  }, () => {
    return `${parseInt(val / d)}小时前`
  }],
  [(val) => { // 几天前
    if (val >= c && val <= b) {
      return true
    }
    return false
  }, () => {
    return `${parseInt(val / c)}天前`
  }],
  [(val) => { // 一周前
    if (val > b && val <= a) {
      return true
    }
    return false
  }, () => {
    return `一周前`
  }],
  [(val) => { // 具体时间
    if (val > a) {
      return true
    }
    return false
  }, (value) => {
    const addZero = (num) => {
      return num >= 10 ? num : `0${num}`
    }
    const date = new Date(value)
    const year = date.getFullYear()
    const month = addZero(date.getMonth() + 1)
    const day = addZero(date.getDate())

    return `${year}-${month}-${day}`
  }]
])
Vue.filter('formateDate', function (value) {
  if (!value) return ''
  if (typeof value === 'string') {
    value = timeChange(value).replace(/-/g, '/')
  }
  const currentTimestamp = new Date().getTime()

  for (let [key, val] of map) {
    if (key(currentTimestamp - new Date(value).getTime())) {
      return val(value)
    }
  }
  return ''
})

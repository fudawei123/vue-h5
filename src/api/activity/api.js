import url from './url'
import Bridge from '@/bridge/call'

const Ajax = (method, url, params) => {
  return Bridge.requestCDP({
    method,
    url,
    params
  })
}
/**
 * 获取活动列表
 * @param {*} data 
 */
export const getActivityList = (data) => Ajax('get', url.activityList, {
  pageIndex: data.pageNo,
  pageSize: data.length
})

import common from './url'
import Ajax from '../util'

/**
 * 获取签名
 * @param {*} data 
 */
export const getWeiSignGetWeiSign = data => Ajax.post(common.weiSignGetWeiSign, data)

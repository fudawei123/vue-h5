import Ajax from '../util'
import news from './url'

/**
 * 获取资讯列表
 * @param {*} data 
 */
export const getInformationIndexList = data => Ajax.post(news.informationIndexList, data)

/**
 * 获取资讯详情
 * @param {*} data 
 */
export const getInformationDetail = data => Ajax.post(news.informationDetail, data)

/**
 * 点赞
 * @param {*} data 
 */
export const setUserLikeGiveInformationLike = data => Ajax.post(news.userLikeGiveInformationLike, data)

/**
 * 取消点赞
 * @param {*} data 
 */
export const setUserLikeRemoveInformationLike = data => Ajax.post(news.userLikeRemoveInformationLike, data)

/**
 * 获取浏览量
 * @param {*} data 
 */
export const getReaderHistoryInformation = data => Ajax.post(news.readerHistoryInformation, data)

/**
 * 收藏资讯
 * @param {*} data 
 */
export const userCollectionCollectionInformation = data => Ajax.post(news.userCollectionCollectionInformation, data)

/**
 * 取消收藏资讯
 * @param {*} data 
 */
export const userCollectionUnCollectionInformation = data => Ajax.post(news.userCollectionUnCollectionInformation, data)

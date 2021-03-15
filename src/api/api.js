import ajax from './ajax'

/**视频分类 */
export const reqTypes = () => ajax('v1/weixin/getTypes', {}, {type:'GET'})
export const reqSwipes = () => ajax('v1/weixin/getSwipes', {}, {type:'GET'})
export const reqVedioById = (id) => ajax('v1/weixin/getVedioById', {id})
export const reqVediosByTypeId = (typeId, limit) => ajax('v1/weixin/getVediosByTypeId', {typeId, limit})
export const reqReads = (limit) => ajax('v1/weixin/getReads', {limit})
export const reqCustomer = (openid) => ajax('v1/weixin/getCustomer', {openid})
export const reqWatchs = (openid, limit) => ajax('v1/weixin/getWatchs', {openid, limit})
export const reqGklog = (openid, vedioId, gklog) => ajax('v1/weixin/saveWatchs', {openid, vedioId, gklog})
export const downloadPdf = (pdfSrc) => ajax('v1/weixin/downloadPdf', {pdfSrc})



export default {
  reqTypes,
  reqSwipes,
  reqVedioById,
  reqVediosByTypeId,
  reqReads,
  reqCustomer,
  reqWatchs,
  reqGklog,
  downloadPdf
}

import ajax from './ajax'

/**视频分类 */
export const reqTypes = () => ajax('v1/weixin/getTypes', {}, {type:'GET'})
export const reqSwipes = () => ajax('v1/weixin/getSwipes', {}, {type:'GET'})
export const reqVedioById = (id) => ajax('v1/weixin/getVedioById', {id})
export const reqVediosByTypeId = (typeId, limit) => ajax('v1/weixin/getVediosByTypeId', {typeId, limit})

export default {
  reqTypes,
  reqSwipes,
  reqVedioById,
  reqVediosByTypeId
}

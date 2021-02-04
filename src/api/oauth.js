import ajax from './ajax'

/**微信授权地址 */
export const reqOAuthUrl = (activityId,oauthUrl) => ajax('v1/weixin/oauthUrl', {activityId,oauthUrl})
/**获取微信授权 */
export const reqWeChatOAuth = (activityId,code) => ajax('v1/weixin/weChatOAuth', {activityId,code})
/**获取微信签名 */
export const reqGetSignature = (activityId,oauthUrl) => ajax('v1/weixin/getSignature', {activityId,oauthUrl})

export default {
  reqOAuthUrl,
  reqWeChatOAuth,
  reqGetSignature
}

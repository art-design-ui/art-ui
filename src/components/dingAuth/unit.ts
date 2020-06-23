/**
 * 创建钉钉扫码登陆用的 goto 参数值
 * @param appId 应用 appId
 * @param redirectUri goto 指定的重定向 URL，使用授权域名防止被挡
 * @param state 防止重放攻击的选项，选用
 */
export function createGotoURL(appId: any, redirectUri: string, state: any = '') {
  return encodeURIComponent(
    `https://oapi.dingtalk.com/connect/oauth2/sns_authorize?appid=${appId}&response_type=code&scope=snsapi_login&state=${state}&redirect_uri=${encodeURIComponent(
      redirectUri,
    )}`,
  )
}

/**
 * 钉钉的公用资源
 */
export const DING_CONFIG = {
  origin: 'https://login.dingtalk.com',
  comomDingUrl: '//g.alicdn.com/dingding/dinglogin/0.0.5/ddLogin.js',
}

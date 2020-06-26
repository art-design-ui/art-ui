import React, { useEffect, FC } from 'react'
import classNames from 'classnames'
import { DING_CONFIG, createGotoURL } from './unit'

interface DingProps {
  /** 钉钉ID（必填） */
  appId: string
  /** 钉钉回调地址（必填） */
  redirectUri: string
  /** 钉钉防重放（必填） */
  state: string
  /** 渲染二维码区域样式 */
  style?: string
  /** 显示二维码的区域的宽默认365 */
  width?: string
  /** 显示二维码的区域的高,默认400 */
  height?: string
  /** 扫码通信成功的回调 value是temp_code */
  onSuccess?: (value: string) => void
  [key: string]: any
}

interface DDLoginOptions {
  id: string // 钉钉二维码组件渲染的容器 DOM id
  goto: string // 需要进行 urlencode 处理
  style?: string // 渲染二维码区域样式
  width?: string // 显示二维码的区域的宽，二维码本身尺寸固定为 210px/210px
  height?: string // 显示二维码的区域的高
}
declare function DDLogin(options: DDLoginOptions): void

export const DingAuth: FC<DingProps> = (props: DingProps) => {
  const {
    appId,
    redirectUri,
    state,
    width,
    height,
    onSuccess,
    className,
    style = 'border:none;background-color:#FFFFFF;margin-top:-12px;',
  } = props
  useEffect(() => {
    const onDingBinding = () => {
      DDLogin({
        id: 'art-dingauth-login-container',
        goto: createGotoURL(appId, redirectUri, state),
        style,
        width,
        height,
      })
      const onDingMessage = (event: MessageEvent) => {
        const { origin, data } = event
        if (origin === DING_CONFIG.origin) {
          // 扫码后生成tmp_code_data
          if (onSuccess) {
            onSuccess(data)
          }
        }
      }
      window.addEventListener('message', onDingMessage, false)
    }
    const setScript = () => {
      const script = document.createElement('script')
      script.src = DING_CONFIG.comomDingUrl
      script.async = true
      script.onload = () => onDingBinding()
      document.body.appendChild(script)
    }
    setScript()
  }, [appId, height, onSuccess, redirectUri, state, style, width])
  return <div id="art-dingauth-login-container" className={classNames('art-ding', { className })} />
}

export default DingAuth

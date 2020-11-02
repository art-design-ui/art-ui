import React, { useState } from 'react'
import classnames from 'classnames'
import { getPrefixCls } from '@util'
import { CloseIcon, SuccessIcon, InfoIcon, WarningIcon, ErrorIcon } from './icons'

export type AlertType = 'success' | 'info' | 'warning' | 'error'

interface AlertProps {
  /** 自定义 class */
  className?: string
  /** 设置 Alert 类型 */
  type?: AlertType
  /** 设置 Alert 是否可以关闭 */
  closeable?: boolean
  /** 设置 Alert 的警告提示 */
  message?: string
  /** 设置 Alert 的详细描述 */
  description?: string
  /** 设置 Alert 的 icon 是否显示 */
  showIcon?: boolean
  /** 设置 Alert 大的自定义 icon */
  icon?: React.ReactNode
  /** 设置 Alert 的描述的自定义内容（slot） */
  // children: React.ReactNode;
}

const prefixCls = getPrefixCls('alert')

const Alert: React.FC<AlertProps> = (props: AlertProps) => {
  const { className, type, message, description, showIcon, icon, closeable } = props
  // 控制显示与隐藏
  const [closed, setClosed] = useState(true)

  const handleClose = (e: React.MouseEvent<HTMLElement>) => {
    setClosed(false)
  }

  const classes = classnames(prefixCls, className, {
    [`${prefixCls}-${type}`]: type,
    [`${prefixCls}-with-description`]: !!description,
    [`${prefixCls}-no-icon`]: !showIcon,
  })

  // showIcon => true 显示默认相关类型 icon
  const iconMap = {
    success: SuccessIcon,
    info: InfoIcon,
    warning: WarningIcon,
    error: ErrorIcon,
  }

  const renderIconNode = () => {
    const iconType = iconMap[type || 'warning']
    // TODO: 自定义 Icon 时的逻辑
    // if (icon) {
    // }
    // TODO: Icon
    return React.createElement('span', { className: `${prefixCls}-icon` }, iconType(iconMap))
  }

  const renderCloseIcon = () => {
    return React.createElement(
      'span',
      { className: `${prefixCls}-close-icon`, onClick: handleClose },
      CloseIcon(iconMap),
    )
  }

  if (!closed) {
    return null
  }
  return (
    <div data-show={closed} className={classes}>
      {showIcon ? renderIconNode() : null}
      <span className={`${prefixCls}-message`}>{message}</span>
      <span className={`${prefixCls}-description`}>{description}</span>
      {closeable ? renderCloseIcon() : null}
    </div>
  )
}

Alert.displayName = 'Alert'

Alert.defaultProps = {}

export default Alert

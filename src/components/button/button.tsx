import React, { FC, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react'
import classNames from 'classnames'
import { getPrefixCls } from '@util'

export type ButtonSize = 'large' | 'small' | 'default'
export type ButtonType = 'primary' | 'default' | 'link' | 'dashed'
export type ButtonHTMLType = 'submit' | 'button' | 'reset'

interface BaseButtonProps {
  /** 设置 Button 的禁用  */
  disabled?: boolean
  /** 幽灵属性，使按钮背景透明 */
  ghost?: boolean
  /** 点击跳转的地址，指定此属性 button 的行为和 a 链接一致 */
  href?: string
  /** 设置按钮的图标组件	 */
  icon?: React.ReactNode
  /** 设置按钮载入状态 */
  loading?: boolean | { delay: number }
  /** 设置 Button 的类型 */
  type?: ButtonType
  children: React.ReactNode
  /** 设置 Button 的尺寸 */
  size?: ButtonSize
  /** 设置按钮形状，可选值为 circle、 round 或者不设 */
  shape?: string
  /** 相当于 a 链接的 target 属性，href 存在时生效 */
  target?: string
  /** 将按钮宽度调整为其父宽度的选项 */
  block?: boolean
  className?: string
  /** 设置危险按钮 */
  danger?: boolean
}
type NativeButtonProps = BaseButtonProps &
  Omit<ButtonHTMLAttributes<HTMLElement>, 'type'> & { htmlType?: ButtonHTMLType }
type AnchorButtonProps = BaseButtonProps & Omit<AnchorHTMLAttributes<HTMLElement>, 'type'>
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>

const prefixCls = getPrefixCls('btn')
export const Button: FC<ButtonProps> = (props: ButtonProps) => {
  const {
    type = 'default',
    className,
    disabled,
    size,
    children,
    href,
    ghost,
    danger,
    block,
    loading,
    ...restProps
  } = props
  const classes = classNames(prefixCls, className, {
    [`${prefixCls}-${type}`]: type,
    [`${prefixCls}-small`]: size === 'small',
    [`${prefixCls}-large`]: size === 'large',
    disabled: type === 'link' && disabled,
    // 样式优先级按照这里排序
    [`${prefixCls}-ghost`]: ghost,
    [`${prefixCls}-danger`]: danger,
    [`${prefixCls}-block`]: block,
  })
  if (type === 'link' && href) {
    return (
      <a className={classes} href={href} {...restProps}>
        {children}
      </a>
    )
  }
  return (
    <button className={classes} disabled={disabled} {...restProps}>
      {children}
    </button>
  )
}

Button.displayName = 'Button'

Button.defaultProps = {
  loading: false,
  ghost: false,
  block: false,
}

export default Button

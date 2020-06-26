import React, { FC, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react'
import classNames from 'classnames'

export type ButtonSize = 'lg' | 'sm' | 'default'
export type ButtonType = 'primary' | 'default' | 'danger' | 'link' | 'warning' | 'success'

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
  btnType?: ButtonType
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
type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>

export const Button: FC<ButtonProps> = (props: ButtonProps) => {
  const { btnType, className, disabled, size, children, href, ...restProps } = props
  const classes = classNames('btn', className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    disabled: btnType === 'link' && disabled,
  })
  if (btnType === 'link' && href) {
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

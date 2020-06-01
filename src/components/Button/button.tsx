import React, { FC, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react'
import classNames from 'classnames'

export type ButtonSize = 'lg' | 'sm'

export type ButtonType = 'primary' | 'default' | 'danger' | 'link'

export interface BaseButtonProps {
  className?: string
  /** 设置 Button 的禁用 */
  disabled?: boolean
  /** 设置 Button 的尺寸 */
  size?: ButtonSize
  /** 设置 Button 的类型 */
  btnType?: ButtonType
  children: React.ReactNode
  href?: string
}
export type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>

export type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>

export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>

export const Button: FC<ButtonProps> = props => {
  const { btnType, className, disabled, size, children, href, ...restProps } = props
  // btn, btn-lg, btn-primary
  const classes = classNames('btn', className, {
    [`btn-${btnType || ''}`]: btnType,
    [`btn-${size || ''}`]: size,
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

Button.defaultProps = {
  disabled: false,
  btnType: 'default',
}

export default Button

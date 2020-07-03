import React, { FC, CSSProperties } from 'react'
import classNames from 'classnames'
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
import { getPrefixCls } from '@util'
import { library, IconProp, SizeProp } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

export type ThemeProps =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger'
  | 'light'
  | 'dark'

export interface IconProps
  extends Omit<FontAwesomeIconProps, 'className' | 'icon' | 'spin' | 'style' | 'size'> {
  /** 图标主题 */
  theme?: ThemeProps
  /** 自定义组件样式名 */
  className?: string
  /** 图标类型 [更多图标类型](https://fontawesome.com/icons?d=gallery&s=solid&m=free) */
  icon: IconProp
  pulse?: boolean
  /** 允许图标是否旋转 */
  spin?: boolean
  /** 图标内联样式 */
  style?: CSSProperties
  /** 图标尺寸 */
  size?: SizeProp
}

const prefixCls = getPrefixCls('icon')

export const Icon: FC<IconProps> = (props: IconProps) => {
  const { className, theme, ...restProps } = props
  const classes = classNames(prefixCls, className, {
    [`${prefixCls}-${theme}`]: theme,
  })
  return <FontAwesomeIcon className={classes} {...restProps} />
}

Icon.displayName = 'Icon'

Icon.defaultProps = {}

export default Icon

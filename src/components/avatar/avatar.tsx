import React, { FC, CSSProperties } from 'react'
import classNames from 'classnames'
import { getPrefixCls } from '@util'

const prefixCls = getPrefixCls('avatar')

export interface AvatarProps {
  /** 指定类名 */
  className?: string

  /** 指定头像的形状 */
  shape?: 'circle' | 'square'

  /** 组件大小，可选值为 small default large */
  size?: number | 'large' | 'small' | 'default'

  /** 图像无法显示时的替代文本 */
  alt?: string

  /** 图片类头像的资源地址 */
  src: string
}

export const Avatar: FC<AvatarProps> = (props: AvatarProps) => {
  const { className, shape, size, alt, src } = props
  const classes = classNames(prefixCls, className, {
    [`${prefixCls}-small`]: size === 'small',
    [`${prefixCls}-large`]: size === 'large',
    [`${prefixCls}-default`]: size === 'default',
    [`${prefixCls}-${shape}`]: shape,
  })
  const sizeStyle: CSSProperties =
    typeof size === 'number'
      ? {
          width: size,
          height: size,
          lineHeight: `${size}px`,
          fontSize: 0,
        }
      : {}

  return (
    <span className={classes} style={{ ...sizeStyle }}>
      <img src={src} alt={alt} />
    </span>
  )
}

Avatar.displayName = 'Avatar'

Avatar.defaultProps = {
  shape: 'square' as AvatarProps['shape'],
  size: 'default' as AvatarProps['size'],
}

export default Avatar

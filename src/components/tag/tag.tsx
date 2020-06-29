import React, { FC, HTMLAttributes } from 'react'
import classNames from 'classnames'
import { getPrefixCls } from '@util'

export type TagSize = 'lg' | 'sm' | 'default'
export type TagType = 'primary' | 'default' | 'danger' | 'warning' | 'success' | 'info'

interface BaseTagProps {
  /** 设置标签大小 */
  size?: TagSize
  /** 设置标签类型 */
  type?: TagType
  className?: string
}

export type TagProps = HTMLAttributes<HTMLSpanElement> & BaseTagProps

const prefixCls = getPrefixCls('tag')
export const Tag: FC<TagProps> = (props: TagProps) => {
  const { size, type, children, className, ...restProps } = props
  const classes = classNames(prefixCls, className, {
    [`${prefixCls}-${type}`]: type,
    [`${prefixCls}-${size}`]: size,
  })
  return (
    <span className={classes} {...restProps}>
      {children}
    </span>
  )
}

export default Tag

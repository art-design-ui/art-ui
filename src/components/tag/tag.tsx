/* eslint-disable react/jsx-props-no-spreading */
import React, { FC, HTMLAttributes, useRef, useEffect } from 'react'
import classNames from 'classnames'

export type TagSize = 'lg' | 'sm' | 'default'
export type TagType = 'primary' | 'default' | 'danger' | 'warning' | 'success' | 'info'

export interface BaseTagProps {
  className?: string
  /** 设置按钮大小 */
  size?: TagSize
  /**
   * 设置按钮类型
   */
  type?: TagType
  /** 回调ref，组件加载完成回调ref，返回值会在卸载组件时调用 */
  refcallback?: (ref: any) => any
}

export type TagProps = HTMLAttributes<HTMLSpanElement> & BaseTagProps

export const Tag: FC<TagProps> = (props: TagProps) => {
  const { size, type, children, refcallback, className, ...restProps } = props
  const classes = classNames('art-ui-tag', className, {
    [`art-ui-tag-type-${type}`]: type,
    [`art-ui-tag-size-${size}`]: size,
  })
  const tagRef = useRef(null)
  useEffect(() => {
    let uninstall: any = null
    if (refcallback) {
      uninstall = refcallback(tagRef)
    }
    return () => {
      if (typeof uninstall === 'function') {
        uninstall()
      }
    }
  }, [refcallback])
  return (
    <span className={classes} {...restProps} ref={tagRef}>
      {children}
    </span>
  )
}

export default Tag

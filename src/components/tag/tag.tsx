import React, { FC, HTMLAttributes, useRef, useEffect } from 'react'
import classNames from 'classnames'

export type TagSize = 'lg' | 'sm' | 'default'
export type TagType = 'primary' | 'default' | 'danger' | 'warning' | 'success' | 'info'

interface BaseTagProps {
  className?: string
  /** 设置标签大小 */
  size?: TagSize
  /** 设置标签类型 */
  type?: TagType
  /** 回调ref，组件加载完成回调ref，返回值会在卸载组件时调用 */
  refcallback?: (ref: any) => any
}

export type TagProps = HTMLAttributes<HTMLSpanElement> & BaseTagProps

export const Tag: FC<TagProps> = (props: TagProps) => {
  const { size, type, children, refcallback, className, ...restProps } = props
  const classes = classNames('art-tag', className, {
    [`art-tag-type-${type}`]: type,
    [`art-tag-size-${size}`]: size,
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

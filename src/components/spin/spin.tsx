import React, { FC, CSSProperties } from 'react'
import classNames from 'classnames'
import { getPrefixCls } from '@util'

const prefixCls = getPrefixCls('spin')

export type SpinSize = 'default' | 'small' | 'large'
export interface SpinProps {
  /** 组件样式名 */
  className?: string
  /** 是否为加载中状态 */
  spinning?: boolean
  style?: CSSProperties
  /** 组件大小，可选值为 small default large */
  size?: SpinSize
}

export const Spin: FC<SpinProps> = (props: SpinProps) => {
  const { spinning, size, className } = props
  const classes = classNames(prefixCls, `${prefixCls}-dot-spin`, className, {
    [`${prefixCls}-small`]: size === 'small',
    [`${prefixCls}-large`]: size === 'large',
    [`${prefixCls}-spinning`]: spinning,
  })
  return (
    <span className={classes}>
      <i className={`${prefixCls}-dot-item`} />
      <i className={`${prefixCls}-dot-item`} />
      <i className={`${prefixCls}-dot-item`} />
      <i className={`${prefixCls}-dot-item`} />
    </span>
  )
}

Spin.displayName = 'Spin'

Spin.defaultProps = {
  spinning: true,
}

export default Spin

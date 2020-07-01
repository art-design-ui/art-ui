import React, { FC, useState, useEffect, CSSProperties } from 'react'
import classNames from 'classnames'
import { getPrefixCls } from '@util'

const prefixCls = getPrefixCls('switch')

export type SwitchSize = 'small' | 'defaut'
export type SwitchChangeEventHandler = (
  checked: boolean,
  event?: React.MouseEvent<HTMLButtonElement>,
) => void
export type SwitchClickEventHandler = SwitchChangeEventHandler

export interface SwitchProps
  extends Omit<React.HTMLAttributes<HTMLButtonElement>, 'onChange' | 'onClick'> {
  /** 开关大小 */
  size?: SwitchSize
  /** Switch 器类名 */
  className?: string
  /** 指定当前是否选中 */
  checked?: boolean
  /** 初始是否选中 */
  defaultChecked?: boolean
  title?: string
  /** 是否禁用 */
  disabled?: boolean
  /** 变化时回调函数 */
  onChange?: SwitchChangeEventHandler
  /** 点击时回调函数 */
  onClick?: SwitchClickEventHandler
  style?: CSSProperties
}
const fixControlledValue = (value: boolean | undefined): boolean => {
  if (typeof value === 'undefined' || value === null) {
    return false
  }
  return value
}

export const Switch: FC<SwitchProps> = (props: SwitchProps) => {
  const {
    className,
    size,
    disabled,
    checked,
    onClick,
    onChange,
    defaultChecked,
    ...restProps
  } = props
  const [checkedState, setCheckState] = useState<boolean>(fixControlledValue(defaultChecked))
  const classes = classNames(prefixCls, className, {
    [`${prefixCls}-${size}`]: size,
    [`${prefixCls}-checked`]: checkedState,
    [`${prefixCls}-disabled`]: disabled,
  })

  useEffect(() => {
    if (typeof checked !== 'undefined' && checked !== null) {
      setCheckState(checked)
    }
  }, [checked])

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // value优先级大于defaultValue
    if (typeof checked === 'undefined' || checked === null) {
      setCheckState(!checkedState)
    }
    // 非受控组件也要暴露这些API
    onClick?.(!checked, e)
    onChange?.(!checked, e)
  }
  return (
    <button
      {...restProps}
      type="button"
      className={classes}
      disabled={disabled}
      role="switch"
      aria-checked={checkedState}
      onClick={handleClick}
    >
      <div className={`${prefixCls}-handle`} />
    </button>
  )
}

Switch.displayName = 'Switch'

Switch.defaultProps = {
  disabled: false,
}
export default Switch

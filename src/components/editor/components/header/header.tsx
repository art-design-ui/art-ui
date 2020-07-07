import React, { FC, HTMLAttributes } from 'react'
import classNames from 'classnames'
import { EditorHeaderProps, EditorHeaderMenu } from '../../interface'
import { getMenuList } from '../../utils/menu'

export type HeaderProps = Partial<HTMLAttributes<HTMLUListElement> & EditorHeaderProps>

export const EditorHeader: FC<HeaderProps> = (props: HeaderProps) => {
  const { className, menu = [] } = props
  const menuList: Array<EditorHeaderMenu> = getMenuList(menu)
  const classes = classNames(className)
  const menuItems = menuList.map((item, index) => {
    return item.click ? (
      <li key={item.icon.toString()}>
        <div onClick={item.click} onKeyDown={() => {}} role="button" tabIndex={index}>
          {item.icon}
        </div>
      </li>
    ) : (
      <li key={item.icon.toString()}>{item.icon}</li>
    )
  })
  return <ul className={classes}>{menuItems}</ul>
}

export default EditorHeader

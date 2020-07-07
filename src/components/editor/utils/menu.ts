import { EditorHeaderMenu } from '../interface'
import defaultMenu from '../config/menu'

/**
 * @description 格式化菜单列表
 * @param { Array } menu 配置菜单列表
 * @returns { Array } 格式化后的菜单列表
 */
export const getMenuList = (menu: Array<string | EditorHeaderMenu>): Array<EditorHeaderMenu> => {
  const list: Array<EditorHeaderMenu> = []
  // 判断是不是元素类型 string 表示使用默认配置，否表示使用自定义配置
  menu.forEach((item: string | EditorHeaderMenu) => {
    if (typeof item === 'string') {
      list.push(defaultMenu[item])
    } else {
      list.push(item)
    }
  })
  return list
}

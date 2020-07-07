import { IconProp } from '@fortawesome/fontawesome-svg-core'

/**
 * @description 编辑器配置
 */
export interface EditorBaseProps {
  menu?: Array<string | EditorHeaderMenu>
}

/**
 * @description 样式
 */
export interface EditorClass {
  /** 主体样式 */
  body: string
  /** 头部样式 */
  header: string
  /** 富文本样式 */
  main: string
}

/**
 * @description 头部菜单子列表
 */
export interface EditorHeaderMenuList {
  /** 列表块 */
  block: string
  /** 展示文本 */
  text: string
  /** 点击事件 */
  click?: () => void
}

/**
 * @description 默认头部菜单枚举
 */
export interface EditorHeaderMenuMap {
  [key: string]: EditorHeaderMenu
}

/**
 * @description 头部菜单
 */
export interface EditorHeaderMenu {
  /** 图标 */
  icon: IconProp
  /** 点击事件 */
  click?: () => void
  list?: Array<EditorHeaderMenuList>
}

/**
 * @description 编辑器头部配置
 */
export interface EditorHeaderProps {
  menu?: Array<string | EditorHeaderMenu>
}

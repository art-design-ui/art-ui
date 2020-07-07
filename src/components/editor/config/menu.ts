import { EditorHeaderMenuMap } from '../interface'

/**
 * @description 默认菜单枚举
 */
const defaultMenu: EditorHeaderMenuMap = {
  // H 标签
  header: {
    icon: 'heading',
    list: [
      {
        block: 'h1',
        text: 'H1',
        click: (): void => {
          console.log('h1')
        },
      },
    ],
  },
  // 字体加粗
  blod: {
    icon: 'bold',
    click: (): void => {
      console.log('bold')
    },
  },
}

export default defaultMenu

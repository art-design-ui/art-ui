import React, { FC, HTMLAttributes } from 'react'
import classNames from 'classnames'
import { getPrefixCls } from '@util'
import EditorHeader from './components/header'

/**
 * @description 样式
 */
interface EditorClass {
  /** 主体样式 */
  body: string
  /** 头部样式 */
  header: string
  /** 富文本样式 */
  main: string
}
export type EditorProps = HTMLAttributes<HTMLDivElement>

const prefixCls = getPrefixCls('editor')
export const Editor: FC<EditorProps> = (props: EditorProps) => {
  const { children, className, ...restProps } = props
  const classes: EditorClass = {
    body: classNames(prefixCls, className),
    header: classNames(`${prefixCls}-header`),
    main: classNames(`${prefixCls}-main`),
  }
  return (
    <div className={classes.body} {...restProps}>
      <EditorHeader className={classes.header} />
      <div className={classes.main} contentEditable />
    </div>
  )
}

export default Editor

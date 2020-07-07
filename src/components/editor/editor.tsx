import React, { FC, HTMLAttributes } from 'react'
import classNames from 'classnames'
import { getPrefixCls } from '@util'
import EditorHeader from './components/header'
import { EditorClass, EditorHeaderMenu } from './interface'

export type EditorProps = HTMLAttributes<HTMLDivElement>
const defautMenuConfig: Array<string | EditorHeaderMenu> = ['header', 'blod']

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
      <EditorHeader className={classes.header} menu={defautMenuConfig} />
      <div className={classes.main} contentEditable />
    </div>
  )
}

export default Editor

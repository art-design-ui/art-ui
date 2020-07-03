import React, { FC, HTMLAttributes } from 'react'
import classNames from 'classnames'

export type EditorHeaderProps = HTMLAttributes<HTMLDivElement>

export const EditorHeader: FC<EditorHeaderProps> = (props: EditorHeaderProps) => {
  const { className } = props
  const classes = classNames(className)
  return <div className={classes}>样式头部</div>
}

export default EditorHeader

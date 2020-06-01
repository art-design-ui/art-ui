import React from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from '@storybook/react'

storiesOf('Welcome page', module).add(
  'welcome',
  () => {
    return (
      <>
        <h1>欢迎来到 Art UI 组件库</h1>
        <h3>安装试试</h3>
      </>
    )
  },
  { info: { disable: true } },
)

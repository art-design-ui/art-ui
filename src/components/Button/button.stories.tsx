import React from 'react'
import { action } from '@storybook/addon-actions'

import Button from './button'

export default {
  title: '组件/Button',
  component: Button,
}

/**
 * ## 何时使用
 * 标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。<br/>
 * nbsp; 在 Ant Design 中我们提供了四种按钮。<br/>
 * nbsp; 主按钮：用于主行动点，一个操作区域只能有一个主按钮。<br/>
 * nbsp; 默认按钮：用于没有主次之分的一组行动点。<br/>
 * nbsp; 虚线按钮：常用于添加操作。<br/>
 * nbsp; 文本按钮：用于最次级的行动点。<br/>
 * nbsp; 链接按钮：用于作为外链的行动点。<br/>
 * 以及四种状态属性与上面配合使用。<br/>
 * nbsp; 危险：删除/移动/修改权限等危险操作，一般需要二次确认。<br/>
 * nbsp; 幽灵：用于背景色比较复杂的地方，常用在首页/产品页等展示场景。<br/>
 * nbsp; 禁用：行动点不可用的时候，一般需要文案解释。<br/>
 * nbsp; 加载中：用于异步操作等待反馈的时候，也可以避免多次提交。
 */

export const ButtonType = () => <Button onClick={action('clicked')}> default Button </Button>
ButtonType.story = {
  name: '按钮类型',
}

export const ButtonWithIcon = () => (
  <>
    <Button size="lg"> large Button </Button>
    <Button size="sm"> small Button </Button>
  </>
)
ButtonWithIcon.story = {
  name: '图标按钮',
}

export const ButtonWithSize = () => (
  <>
    <Button btnType="primary"> primary Button </Button>
    <Button btnType="danger"> danger Button </Button>
    <Button btnType="link" href="https://google.com">
      link Button
    </Button>
  </>
)
ButtonWithSize.story = {
  name: '按钮尺寸',
}

export const ButtonWithDisabled = () => (
  <>
    <Button btnType="primary"> primary Button </Button>
    <Button btnType="danger"> danger Button </Button>
    <Button btnType="link" href="https://google.com">
      link Button
    </Button>
  </>
)
ButtonWithDisabled.story = {
  name: '不可用状态',
}

export const ButtonWithLoading = () => (
  <>
    <Button btnType="primary"> primary Button </Button>
    <Button btnType="danger"> danger Button </Button>
    <Button btnType="link" href="https://google.com">
      link Button
    </Button>
  </>
)
ButtonWithLoading.story = {
  name: '加载中的状态',
}

export const Buttons = () => (
  <>
    <Button btnType="primary"> primary Button </Button>
    <Button btnType="danger"> danger Button </Button>
    <Button btnType="link" href="https://google.com">
      link Button
    </Button>
  </>
)
Buttons.story = {
  name: '多个按钮组合',
}

export const GhostButton = () => (
  <>
    <Button btnType="primary"> primary Button </Button>
    <Button btnType="danger"> danger Button </Button>
    <Button btnType="link" href="https://google.com">
      link Button
    </Button>
  </>
)
GhostButton.story = {
  name: '幽灵按钮',
}

export const DangerButton = () => (
  <>
    <Button btnType="primary"> primary Button </Button>
    <Button btnType="danger"> danger Button </Button>
    <Button btnType="link" href="https://google.com">
      link Button
    </Button>
  </>
)
DangerButton.story = {
  name: '危险按钮',
}

export const BlockButton = () => (
  <>
    <Button btnType="primary"> primary Button </Button>
    <Button btnType="danger"> danger Button </Button>
    <Button btnType="link" href="https://google.com">
      link Button
    </Button>
  </>
)
BlockButton.story = {
  name: 'Block按钮',
}

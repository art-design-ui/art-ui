import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Button from './button'

const defaultButton = () => <Button onClick={action('clicked')}> default Button </Button>

const ButtonWithSize = () => (
  <>
    <Button size="lg"> large Button </Button>
    <Button size="sm"> small Button </Button>
  </>
)

const ButtonWithType = () => (
  <>
    <Button btnType="primary"> primary Button </Button>
    <Button btnType="danger"> danger Button </Button>
    <Button btnType="link" href="https://google.com">
      link Button
    </Button>
  </>
)
storiesOf('Button Component', module)
  .add('Button', defaultButton)
  .add('不同尺寸的 Button', ButtonWithSize)
  .add('不同类型的 Button', ButtonWithType)

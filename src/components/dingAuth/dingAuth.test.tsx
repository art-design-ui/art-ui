import React from 'react'
import { render } from '@testing-library/react'
import DingAuth, { DingProps } from './dingAuth'

const testProps: DingProps = {
  appId: 'the shy',
  redirectUri: 'https://www.vnues.com',
  state: '78ttwahjhfiueeqq092e',
}

describe('test DingAuth component', () => {
  it('should render the correct component based on different props ', () => {
    const wrapper = render(<DingAuth {...testProps} />)
  })
})

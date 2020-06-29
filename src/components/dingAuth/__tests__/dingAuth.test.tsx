import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import DingAuth, { DingProps } from '../dingAuth'

const testProps: DingProps = {
  className: 'test-ding',
  appId: 'testappid123',
  redirectUri: 'https://vnues.github.io/art-ui',
  state: 'uuid',
}

describe('test DingAuth component', () => {
  it('should render the correct based on different props', () => {
    const wrapper = render(<DingAuth {...testProps} />)
    const element = wrapper.container
    expect(element).toBeInTheDocument()
    expect(element).not.toHaveClass()
  })
})

import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import DingAuth, { DingProps } from '../dingAuth'

const defaultProps: DingProps = {
  appId: 'testappid123',
  redirectUri: 'https://vnues.github.io/art-ui',
  state: 'uuid',
}

const testProps: DingProps = {
  className: 'test-ding',
  appId: 'testappid123',
  redirectUri: 'https://vnues.github.io/art-ui',
  state: 'uuid',
  onSuccess: (code: string) => {
    return code
  },
  width: 400,
  height: 200,
}

describe('test DingAuth component', () => {
  it('should render the correct default DingAuth', () => {
    const wrapper = render(<DingAuth {...defaultProps} />)
    const element = wrapper.container.querySelector('.art-ding') as HTMLDivElement
    expect(element.tagName).toEqual('DIV')
    expect(element).toBeInTheDocument()
    expect(element.getAttribute('id')).toEqual('art-ding-login-container')
    expect(element).toHaveClass('art-ding')
    expect(wrapper).toMatchSnapshot()
  })
  it('should render the correct component based on different props', () => {
    const wrapper = render(<DingAuth {...testProps} />)
    const element = wrapper.container.querySelector('.art-ding') as HTMLDivElement
    expect(element).toHaveClass('art-ding test-ding')
  })
})

import React from 'react'
import { render } from '@testing-library/react'
import Tag, { TagProps } from '../tag'

const defaultProps: TagProps = {
  size: 'small',
  type: 'primary',
}

describe('test Tag component', () => {
  it('should render the correct default tag', () => {
    const wrapper = render(<Tag {...defaultProps}>xixihaha</Tag>)
    const element = wrapper.getByText('xixihaha') as HTMLSpanElement
    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual('SPAN')
    expect(element).toHaveClass('art-tag art-tag-small art-tag-primary')
  })
})

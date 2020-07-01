import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import Switch, { SwitchProps } from '../Switch'

const checkeDefaultdProps: SwitchProps = {
  defaultChecked: true,
}

const haveClickProps: SwitchProps = {
  checked: false,
  onChange: jest.fn(),
  onClick: jest.fn(),
}

describe('test Switch component', () => {
  it('should render close state', () => {
    const wrapper = render(<Switch {...checkeDefaultdProps} />)
    const element = wrapper.container.querySelector('.art-switch') as HTMLButtonElement
    expect(element).toHaveClass('art-switch art-switch-checked')
    fireEvent.click(element)
    expect(element.getAttribute('aria-checked')).toEqual('false')
    expect(wrapper).toMatchSnapshot()
  })
  it('should render state base on change', () => {
    const wrapper = render(<Switch {...haveClickProps} />)
    const element = wrapper.container.querySelector('.art-switch') as HTMLButtonElement
    expect(element).toHaveClass('art-switch')
    fireEvent.click(element)
    expect(haveClickProps.checked).toEqual(false)
    expect(haveClickProps.onChange).toHaveBeenCalled()
    expect(haveClickProps.onClick).toHaveBeenCalled()
    expect(element.getAttribute('aria-checked')).toEqual('false')
  })
})

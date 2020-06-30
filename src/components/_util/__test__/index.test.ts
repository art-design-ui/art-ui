import { getPrefixCls } from '..'

describe('test getPrefixCls function', () => {
  it('should render the correct result', () => {
    expect(getPrefixCls('btn')).toEqual('art-btn')
  })
})

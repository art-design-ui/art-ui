import { createGotoURL } from '../unit'

describe('test createGotoURL function', () => {
  it('should render the correct result', () => {
    expect(createGotoURL('appid', 'https://vnues.cn', 'uuid')).toEqual(
      'https%3A%2F%2Foapi.dingtalk.com%2Fconnect%2Foauth2%2Fsns_authorize%3Fappid%3Dappid%26response_type%3Dcode%26scope%3Dsnsapi_login%26state%3Duuid%26redirect_uri%3Dhttps%253A%252F%252Fvnues.cn',
    )
  })
})

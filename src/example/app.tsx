import React from 'react'
import { hot } from 'react-hot-loader/root'
import Button from '../components/button'
import '../components/button/style'

const App = () => {
  return (
    <div>
      <Button btnType="primary">111</Button>
    </div>
  )
}

export default hot(App)

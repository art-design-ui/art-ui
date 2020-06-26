import React from 'react'
import { hot } from 'react-hot-loader/root'
import Button from '../components/button'
import '../components/button/style'

const App = () => {
  return (
    <div>
      <Button btnType="primary" danger>
        primary
      </Button>
      <Button btnType="dashed" danger>
        dashed
      </Button>
      <Button btnType="primary" disabled>
        disabled
      </Button>
    </div>
  )
}

export default hot(App)

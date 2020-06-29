import React from 'react'
import { hot } from 'react-hot-loader/root'
import Button from '../components/button'
import '../components/button/style'

const App = () => {
  return (
    <div>
      <Button type="primary" danger>
        primary
      </Button>
      <Button type="dashed" danger>
        dashed
      </Button>
      <Button type="primary" disabled>
        disabled
      </Button>
    </div>
  )
}

export default hot(App)

import React from 'react'
import { hot } from 'react-hot-loader/root'
import Button from '../components/button'
import DingAuth from '../components/dingAuth'
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
      <DingAuth
        appId="xxxx"
        redirectUri="xxx"
        width={240}
        height={300}
        state="xxx"
        className="test-dingding"
        onSuccess={() => {
          console.log('onSuccess')
        }}
      />
    </div>
  )
}

export default hot(App)

import React, { useState } from 'react'
import { hot } from 'react-hot-loader/root'
import '../components/button/style'
import '../components/switch/style'
import '../components/spin/style'
import Button from '../components/button'
import DingAuth from '../components/dingAuth'
import Switch from '../components/switch'
import Spin from '../components/spin'

const App = () => {
  const [checked, setChecked] = useState<boolean>(false)
  const handleSiwtch = (check: boolean) => {
    setChecked(check)
  }
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
      <Switch defaultChecked checked={checked} onChange={handleSiwtch} />
      <Spin />
      <br />
      <Spin size="large" />
    </div>
  )
}

export default hot(App)

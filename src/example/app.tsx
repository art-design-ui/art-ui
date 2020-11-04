import React, { useState } from 'react'
import { hot } from 'react-hot-loader/root'
import '../components/button/style'
import '../components/switch/style'
import '../components/spin/style'
import '../components/alert/style'
import { Button, DingAuth, Switch, Spin, Icon, Alert } from '../components'

const App = () => {
  const [checked, setChecked] = useState<boolean>(false)
  const handleSwitch = (check: boolean) => {
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
      <Switch defaultChecked checked={checked} onChange={handleSwitch} />
      <Spin />
      <br />
      <Spin size="large" />
      <Icon icon="ad" size="2x" theme="primary" />
      <br/>
      <div className="alert">
        <Alert type="success" message="Success Text"/>
        <br/>
        <Alert type="info" message="Info Text" closeable/>
        <br/>
        <Alert type="warning" message="Warning Text" showIcon/>
        <br/>
        <Alert type="warning" message="Warning Text" description="Warning Description Warning Description Warning Description" showIcon/>
        <br/>
        <Alert type="error" message="Error Text" description="Error Description Error Description Error Description Error Description" showIcon closeable/>
      </div>
    </div>
  )
}

export default hot(App)

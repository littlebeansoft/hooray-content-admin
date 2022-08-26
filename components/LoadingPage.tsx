import { Spin } from 'antd'
import React from 'react'

const LoadingPage: React.FC = () => {
  return (
    <div style={{ position: 'absolute', top: '50%', left: '50%' }}>
      <Spin size="large" tip="Loading..." />
    </div>
  )
}

export default LoadingPage

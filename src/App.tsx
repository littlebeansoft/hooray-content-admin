import { ConfigProvider } from 'antd'
import { ApolloProvider } from '@apollo/client'

import PageRouter from 'setup/PageRouter'
import { contentClient } from 'setup/apollo'

const App = () => {
  return (
    <ConfigProvider
      componentSize="large"
      space={{
        size: 'large',
      }}
    >
      <ApolloProvider client={contentClient}>
        <PageRouter />
      </ApolloProvider>
    </ConfigProvider>
  )
}

export default App

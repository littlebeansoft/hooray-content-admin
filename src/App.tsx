import { ConfigProvider } from 'antd'
import { ApolloProvider } from '@apollo/client'
import thTH from 'antd/lib/locale/th_TH'

import PageRouter from 'setup/PageRouter'
import { contentClient } from 'setup/apollo'

const App = () => {
  return (
    <ConfigProvider
      locale={thTH}
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

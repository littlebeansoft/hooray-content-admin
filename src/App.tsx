import { ApolloProvider } from '@apollo/client'

import PageRouter from 'setup/PageRouter'
import { contentClient } from 'setup/apollo'

const App = () => {
  return (
    <ApolloProvider client={contentClient}>
      <PageRouter />
    </ApolloProvider>
  )
}

export default App

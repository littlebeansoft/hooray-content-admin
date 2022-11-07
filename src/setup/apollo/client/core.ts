import {
  ApolloClient,
  createHttpLink,
  from,
  InMemoryCache,
} from '@apollo/client'

import { authLink, errorLink } from 'setup/apollo'

const httpLink = createHttpLink({
  uri: process.env.REACT_APP_GRAPHQL_CORE_ENDPOINT,
})

const coreClient = new ApolloClient({
  link: from([errorLink, authLink, httpLink]),
  cache: new InMemoryCache({
    addTypename: false,
  }),
})

export default coreClient

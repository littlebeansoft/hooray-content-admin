import {
  ApolloClient,
  createHttpLink,
  from,
  InMemoryCache,
} from '@apollo/client'

import { authLink, errorLink } from 'setup/apollo/link'

const httpLink = createHttpLink({
  uri: process.env.REACT_APP_GRAPHQL_LABEL_ENDPOINT,
})

const labelClient = new ApolloClient({
  link: from([errorLink, authLink, httpLink]),
  cache: new InMemoryCache({
    addTypename: false,
  }),
})

export default labelClient

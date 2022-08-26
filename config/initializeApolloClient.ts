import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { onError } from '@apollo/client/link/error'

import store from 'redux/store'

import { API } from './api'

const getClientURI = (type: string) => {
  switch (type) {
    default:
      return API.WMS.GRAPHQL.ADMIN['1.0']
    case 'CORE':
      return API.CORE.GRAPHQL.ADMIN['1.0']
  }
}

const authLink = setContext(async (_, { headers }) => {
  const accessTokenOrg = store.getState().auth.orgToken.accessTokenOrg
  const accessTokenApp = store.getState().auth.appToken.accessToken

  return {
    headers: {
      authorization: (accessTokenOrg || accessTokenApp) && `Bearer ${accessTokenOrg || accessTokenApp}`,
      ...headers,
    },
  }
})

const errorLink = onError(({ graphQLErrors, networkError, operation, forward }) => {
  if (graphQLErrors) {
    console.log('GraphQL Error', graphQLErrors)
  }

  if (networkError) {
    console.log(`[Network error]: ${networkError}`)

    if (typeof networkError === 'string' && /401/.test(networkError)) {
      console.log('Network error 401, do something')
    }
  }
})

const createLink = (httpLink: any) => authLink.concat(errorLink.concat(httpLink))

const httpLink = createLink(
  createHttpLink({
    uri: (option) => getClientURI(option.getContext().clientType),
  })
)

export function initializeApolloClient() {
  return new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache({
      addTypename: false,
    }),
  })
}

const apolloClient = initializeApolloClient()

export default apolloClient

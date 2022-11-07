import { setContext } from '@apollo/client/link/context'
import { onError } from '@apollo/client/link/error'

import { accessToken } from 'services/localStorage'

export const authLink = setContext((_, { headers }) => {
  const token = accessToken.get()

  return {
    headers: {
      ...headers,
      authorization: token || '',
    },
  }
})

export const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    )
  if (networkError) console.log(`[Network error]: ${networkError}`)
})

import { setContext } from '@apollo/client/link/context'
import { onError } from '@apollo/client/link/error'

import { getCredentialKeyFromQueryString } from 'helpers/utils'

import { accessToken } from 'services/localStorage'

export const authLink = setContext((_, { headers }) => {
  const token = accessToken.get()
  const credentialKey = getCredentialKeyFromQueryString()

  return {
    headers: {
      authorization: token || '',
      credentialKey,
      locale: 'th',
      ...headers,
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

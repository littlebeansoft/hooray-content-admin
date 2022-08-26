// import apolloClient from 'config/initializeApolloClient'

import type { ApolloError } from '@apollo/client'
import type { GraphQLError } from 'graphql'

export const isTokenExpiredError = (graphQLErrors: ReadonlyArray<GraphQLError>) => {
  return Array.isArray(graphQLErrors) && graphQLErrors.length > 0
    ? graphQLErrors[0]?.extensions?.code === 'TOKEN_IS_EXPIRED'
    : false
}

export const onDefaultErrorMessage = (error: ApolloError) => {
  if (isTokenExpiredError(error.graphQLErrors)) {
    // apolloClient.refetchQueries({
    //   include: 'active',
    // })
  }
}

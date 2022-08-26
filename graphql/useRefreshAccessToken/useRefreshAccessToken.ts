import { useMutation } from '@apollo/client'

import MUTATION_DOCUMENT from './refreshAccessToken'

import type { RefreshAccessTokenAPIPayload } from './interface'
import { APIPayloadResponse, GraphQLServiceMutationHook } from 'graphql/graphQL-service-hook'

export interface RefreshTokenData {
  refreshAccessToken: APIPayloadResponse<RefreshAccessTokenAPIPayload>
}

export interface RefreshTokenVars {
  refreshToken: string
}

const useRefreshAccessToken: GraphQLServiceMutationHook<RefreshTokenData, RefreshTokenVars> = (options) => {
  return useMutation(MUTATION_DOCUMENT, {
    onError(error) {
      console.log(error.message)
    },
    ...options,
  })
}

export default useRefreshAccessToken

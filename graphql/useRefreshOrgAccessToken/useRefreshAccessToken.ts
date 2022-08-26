import { useMutation } from '@apollo/client'

import MUTATION_DOCUMENT from './refreshOrgAccessToken'

import type { RefreshOrgAccessTokenAPIPayload } from './interface'
import { APIPayloadResponse, GraphQLServiceMutationHook } from 'graphql/graphQL-service-hook'

export interface RefreshOrgTokenData {
  refreshOrgAccessToken: APIPayloadResponse<RefreshOrgAccessTokenAPIPayload>
}

export interface RefreshOrgTokenVars {
  refreshOrgToken: string
}

const useRefreshOrgAccessToken: GraphQLServiceMutationHook<RefreshOrgTokenData, RefreshOrgTokenVars> = (options) => {
  return useMutation(MUTATION_DOCUMENT, {
    onError(error) {
      console.log(error.message)
    },
    ...options,
  })
}

export default useRefreshOrgAccessToken

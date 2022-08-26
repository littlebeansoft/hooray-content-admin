import { useQuery } from '@apollo/client'

import QUERY_DOCUMENT from './getTokenAuthCode'

import type { APIPayloadResponse, GraphQLServiceQueryHook } from 'graphql/graphQL-service-hook'
import type { AppAccessTokenWithRefAPIPayload } from './interface'

interface AppAccessTokenWithRefData {
  getAppAccessTokenWithRef: APIPayloadResponse<AppAccessTokenWithRefAPIPayload>
}

interface AppAccessTokenWithRefVars {
  tokenRef: string
}

const useGetAppAccessTokenWithRef: GraphQLServiceQueryHook<AppAccessTokenWithRefData, AppAccessTokenWithRefVars> = (
  options
) => {
  return useQuery(QUERY_DOCUMENT, {
    ...options,
  })
}

export default useGetAppAccessTokenWithRef

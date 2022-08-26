import { useQuery } from '@apollo/client'

import QUERY_DOCUMENT from './getOrgAccessTokenWithRef'

import type { APIPayloadResponse, GraphQLServiceQueryHook } from 'graphql/graphQL-service-hook'
import type { OrgAccessTokenWithRefAPIPayload } from './interface'

interface OrgAccessTokenWithRefData {
  getOrgAccessTokenWithRef: APIPayloadResponse<OrgAccessTokenWithRefAPIPayload>
}

interface OrgAccessTokenWithRefVars {
  tokenRef: string
}

const useGetOrgAccessTokenWithRef: GraphQLServiceQueryHook<OrgAccessTokenWithRefData, OrgAccessTokenWithRefVars> = (
  options
) => {
  return useQuery(QUERY_DOCUMENT, {
    ...options,
  })
}

export default useGetOrgAccessTokenWithRef

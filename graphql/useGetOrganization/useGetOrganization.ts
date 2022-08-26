import { useQuery } from '@apollo/client'

import QUERY_DOCUMENT from './getOrgranization'

import { onDefaultErrorMessage } from 'helpers/apollo'

import type { APIPayloadResponse, FindDataInput, GraphQLServiceQueryHook } from 'graphql/graphQL-service-hook'
import type { OrganizationAPIPayload } from './interface'

interface OrganizationData {
  getOrganization: APIPayloadResponse<OrganizationAPIPayload[]>
}

interface OrganizationVars {
  input?: FindDataInput
}

const useGetOrganization: GraphQLServiceQueryHook<OrganizationData, OrganizationVars> = (options) => {
  return useQuery(QUERY_DOCUMENT, {
    onError(error) {
      onDefaultErrorMessage(error)
    },
    ...options,
  })
}

export default useGetOrganization

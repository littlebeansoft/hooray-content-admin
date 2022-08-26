import { useQuery } from '@apollo/client'
import { message } from 'antd'

import QUERY_DOCUMENT from './getMyPermission'

import type { APIPayloadResponseWithPagination, FindDataInput, GraphQLServiceQueryHook } from '../graphQL-service-hook'
import type { PermissionAPIPayload } from './interface'

interface Position {
  getMyPermission: APIPayloadResponseWithPagination<PermissionAPIPayload[]>
}

interface PermissionVars {
  orgKey?: string
}

const useGetMyPermission: GraphQLServiceQueryHook<Position, PermissionVars> = (options) => {
  return useQuery(QUERY_DOCUMENT, {
    onError(error) {
      message.error(error.message)
    },
    ...options,
  })
}

export default useGetMyPermission

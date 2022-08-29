import { useQuery } from '@apollo/client'
import { message } from 'antd'

import QUERY_DOCUMENT from './getLeadData'

import type { GraphQLServiceQueryHook } from '../graphQL-service-hook'
import type { LeadData, LeadDataVars } from './interface'

const useGetLeadData: GraphQLServiceQueryHook<LeadData, LeadDataVars> = (options) => {
  return useQuery(QUERY_DOCUMENT, {
    onError(error) {
      message.error(error.message)
    },
    ...options,
  })
}

export default useGetLeadData

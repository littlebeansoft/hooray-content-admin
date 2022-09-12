import { useMutation } from '@apollo/client'
import { message } from 'antd'

import QUERY_DOCUMENT from './qualifyLead'

import type { GraphQLServiceMutationHook } from '../graphQL-service-hook'
import type { QualifyLeadInput, QualifyLeadData } from './interface'

const useQualifyLead: GraphQLServiceMutationHook<QualifyLeadData, QualifyLeadInput> = (options) => {
  return useMutation(QUERY_DOCUMENT, {
    onError() {
      message.error("Error can't qualify this lead")
    },
    ...options,
  })
}

export default useQualifyLead

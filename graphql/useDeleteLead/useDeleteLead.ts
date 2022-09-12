import { useMutation } from '@apollo/client'
import { message } from 'antd'

import QUERY_DOCUMENT from './deleteLead'

import type { GraphQLServiceMutationHook } from '../graphQL-service-hook'
import type { DeleteLeadInput, DeleteLeadData } from './interface'

const useDeleteLead: GraphQLServiceMutationHook<DeleteLeadData, DeleteLeadInput> = (options) => {
  return useMutation(QUERY_DOCUMENT, {
    onError() {
      message.error("Error can't delete this lead")
    },
    ...options,
  })
}

export default useDeleteLead

import { useMutation } from '@apollo/client'
import { message } from 'antd'

import QUERY_DOCUMENT from './createLeadToUser'

import type { GraphQLServiceMutationHook } from '../graphQL-service-hook'
import type { LeadInput, CreateLead } from './interface'

const useCreateLead: GraphQLServiceMutationHook<CreateLead, LeadInput> = (options) => {
  return useMutation(QUERY_DOCUMENT, {
    onError(err) {
      message.error(err)
    },
    ...options,
  })
}

export default useCreateLead

import { useMutation } from '@apollo/client'
import { message } from 'antd'

import QUERY_DOCUMENT from './updateLead'

import type { GraphQLServiceMutationHook } from '../graphQL-service-hook'
import type { LeadInput, UpdateLead } from './interface'

const useUpdateLead: GraphQLServiceMutationHook<UpdateLead, LeadInput> = (options) => {
  return useMutation(QUERY_DOCUMENT, {
    onError(err) {
      message.error('Disqualify lead was unsuccessful')
    },
    ...options,
  })
}

export default useUpdateLead

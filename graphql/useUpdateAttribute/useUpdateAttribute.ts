import { useMutation } from '@apollo/client'
import { message } from 'antd'

import QUERY_DOCUMENT from './updateAttribute'

import type { GraphQLServiceMutationHook } from '../graphQL-service-hook'
import type { UpdateAttributeInput, UpdateAttributeData } from './interface'

const useUpdateAttribute: GraphQLServiceMutationHook<UpdateAttributeData, UpdateAttributeInput> = (options) => {
  return useMutation(QUERY_DOCUMENT, {
    onError() {
      message.error('Update product attribute error')
    },
    ...options,
  })
}

export default useUpdateAttribute

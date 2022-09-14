import { useMutation } from '@apollo/client'
import { message } from 'antd'

import QUERY_DOCUMENT from './createCategory'

import type { GraphQLServiceMutationHook } from '../graphQL-service-hook'
import type { CreateAttributeInput, CreateAttributeData } from './interface'

const useCreateAttribute: GraphQLServiceMutationHook<CreateAttributeData, CreateAttributeInput> = (options) => {
  return useMutation(QUERY_DOCUMENT, {
    onError() {
      message.error('Create product attribute error')
    },
    ...options,
  })
}

export default useCreateAttribute

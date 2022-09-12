import { useMutation } from '@apollo/client'
import { message } from 'antd'

import QUERY_DOCUMENT from './createProductAttribute'

import type { GraphQLServiceMutationHook } from '../graphQL-service-hook'
import type { CreateProductAttributeInput, CreateProductAttributeData } from './interface'

const useCreateProductAttribute: GraphQLServiceMutationHook<CreateProductAttributeData, CreateProductAttributeInput> = (
  options
) => {
  return useMutation(QUERY_DOCUMENT, {
    onError() {
      message.error('Create product attribute error')
    },
    ...options,
  })
}

export default useCreateProductAttribute

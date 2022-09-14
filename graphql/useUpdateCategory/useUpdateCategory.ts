import { useMutation } from '@apollo/client'
import { message } from 'antd'

import QUERY_DOCUMENT from './updateCategory'

import type { GraphQLServiceMutationHook } from '../graphQL-service-hook'
import type { UpdateCategoryInput, UpdateCategoryData } from './interface'

const useUpdateCategory: GraphQLServiceMutationHook<UpdateCategoryData, UpdateCategoryInput> = (options) => {
  return useMutation(QUERY_DOCUMENT, {
    onError() {
      message.error('Update category attribute error')
    },
    ...options,
  })
}

export default useUpdateCategory

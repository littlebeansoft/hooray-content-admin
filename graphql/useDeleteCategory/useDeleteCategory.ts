import { useMutation } from '@apollo/client'
import { message } from 'antd'

import QUERY_DOCUMENT from './deleteCategory'

import type { GraphQLServiceMutationHook } from '../graphQL-service-hook'
import type { DeleteCategoryInput, DeleteCategoryData } from './interface'

const useDeleteCategory: GraphQLServiceMutationHook<DeleteCategoryData, DeleteCategoryInput> = (options) => {
  return useMutation(QUERY_DOCUMENT, {
    onError() {
      message.error('Delete category category error')
    },
    ...options,
  })
}

export default useDeleteCategory

import { useMutation } from '@apollo/client'
import { message } from 'antd'

import QUERY_DOCUMENT from './deleteAttribute'

import type { GraphQLServiceMutationHook } from '../graphQL-service-hook'
import type { DeleteAttributeInput, DeleteAttributeData } from './interface'

const useDeleteAttribute: GraphQLServiceMutationHook<DeleteAttributeData, DeleteAttributeInput> = (options) => {
  return useMutation(QUERY_DOCUMENT, {
    onError() {
      message.error("Error can't delete this attribute")
    },
    ...options,
  })
}

export default useDeleteAttribute

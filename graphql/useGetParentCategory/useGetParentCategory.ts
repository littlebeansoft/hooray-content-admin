import { useQuery } from '@apollo/client'
import { message } from 'antd'

import QUERY_DOCUMENT from './getParentCategory'

import type { GraphQLServiceQueryHook } from '../graphQL-service-hook'
import type { ParentCategoryData, GetParentCategoryInPut } from './interface'

const getParentCategory: GraphQLServiceQueryHook<ParentCategoryData, GetParentCategoryInPut> = (options) => {
  return useQuery(QUERY_DOCUMENT, {
    onError(error) {
      // message.error(error.message)
    },
    ...options,
  })
}

export default getParentCategory

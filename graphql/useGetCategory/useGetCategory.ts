import { useQuery } from '@apollo/client'
import { message } from 'antd'

import QUERY_DOCUMENT from './getCategory'

import type { GraphQLServiceQueryHook } from '../graphQL-service-hook'
import type { CategoryData, CategoryDataVars } from './interface'

const getCategory: GraphQLServiceQueryHook<CategoryData, CategoryDataVars> = (options) => {
  return useQuery(QUERY_DOCUMENT, {
    onError(error) {
      message.error(error.message)
    },
    ...options,
  })
}

export default getCategory

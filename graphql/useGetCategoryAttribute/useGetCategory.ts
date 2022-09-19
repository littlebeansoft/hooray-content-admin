import { useQuery } from '@apollo/client'
import { message } from 'antd'

import QUERY_DOCUMENT from './getCategory'

import type { GraphQLServiceQueryHook } from '../graphQL-service-hook'
import type { CategoryAttributeData, CategoryAttributeDataVars } from './interface'

const getCategoryAttribute: GraphQLServiceQueryHook<CategoryAttributeData, CategoryAttributeDataVars> = (options) => {
  return useQuery(QUERY_DOCUMENT, {
    onError(error) {
      message.error(error.message)
    },
    ...options,
  })
}

export default getCategoryAttribute

import { useQuery } from '@apollo/client'
import { message } from 'antd'

import QUERY_DOCUMENT from './getCategoryAttribute'

import type { GraphQLServiceQueryHook } from '../graphQL-service-hook'
import type { GetCategoryAttributeQuery, CategoryAttributeDataVars } from './interface'

const getCategoryAttribute: GraphQLServiceQueryHook<GetCategoryAttributeQuery, CategoryAttributeDataVars> = (
  options
) => {
  return useQuery(QUERY_DOCUMENT, {
    onError(error) {
      //message.error(error.message)
    },
    ...options,
  })
}

export default getCategoryAttribute

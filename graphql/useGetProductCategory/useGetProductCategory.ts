import { useQuery } from '@apollo/client'
import { message } from 'antd'

import QUERY_DOCUMENT from './getProductCategory'

import type { GraphQLServiceQueryHook } from '../graphQL-service-hook'
import type { ProductCategoryData, ProductCategoryDataVars } from './interface'

const getProductCategoryLevel: GraphQLServiceQueryHook<ProductCategoryData, ProductCategoryDataVars> = (options) => {
  return useQuery(QUERY_DOCUMENT, {
    onError(error) {
      message.error(error.message)
    },
    ...options,
  })
}

export default getProductCategoryLevel

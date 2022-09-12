import { useQuery } from '@apollo/client'
import { message } from 'antd'

import QUERY_DOCUMENT from './getProductAttributeList'

import type { GraphQLServiceQueryHook } from '../graphQL-service-hook'
import type { ProductAttributeListData, ProductAttributeListVars } from './interface'

const getProductAttributeList: GraphQLServiceQueryHook<ProductAttributeListData, ProductAttributeListVars> = (
  options
) => {
  return useQuery(QUERY_DOCUMENT, {
    onError(error) {
      message.error(error.message)
    },
    ...options,
  })
}

export default getProductAttributeList

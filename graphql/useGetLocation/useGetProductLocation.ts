import { useQuery } from '@apollo/client'
import { message } from 'antd'

import QUERY_DOCUMENT from './getOrgProductLocation'

import type { GraphQLServiceQueryHook } from '../graphQL-service-hook'
import type { ProductLocation, ProductLocationVars } from './interface'

const useGetProductLocation: GraphQLServiceQueryHook<ProductLocation, ProductLocationVars> = (options) => {
  return useQuery(QUERY_DOCUMENT, {
    onError(error) {
      message.error(error.message)
    },
    ...options,
  })
}

export default useGetProductLocation

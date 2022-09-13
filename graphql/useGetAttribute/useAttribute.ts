import { useQuery } from '@apollo/client'
import { message } from 'antd'

import QUERY_DOCUMENT from './getAttribute'

import type { GraphQLServiceQueryHook } from '../graphQL-service-hook'
import type { AttributeListData, AttributeListVars } from './interface'

const getAttribute: GraphQLServiceQueryHook<AttributeListData, AttributeListVars> = (options) => {
  return useQuery(QUERY_DOCUMENT, {
    onError(error) {
      message.error(error.message)
    },
    ...options,
  })
}

export default getAttribute

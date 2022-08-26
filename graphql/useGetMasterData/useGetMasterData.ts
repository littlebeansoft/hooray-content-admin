import { useQuery } from '@apollo/client'
import { message } from 'antd'

import QUERY_DOCUMENT from './getMasterData'

import type { GraphQLServiceQueryHook } from '../graphQL-service-hook'
import type { MasterData, MasterDataVars } from './interface'

const useGetMasterData: GraphQLServiceQueryHook<MasterData, MasterDataVars> = (options) => {
  return useQuery(QUERY_DOCUMENT, {
    onError(error) {
      message.error(error.message)
    },
    ...options,
  })
}

export default useGetMasterData

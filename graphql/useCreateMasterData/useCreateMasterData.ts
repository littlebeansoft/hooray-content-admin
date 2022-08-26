import { useMutation } from '@apollo/client'
import { message } from 'antd'

import QUERY_DOCUMENT from './createMasterData'

import type { GraphQLServiceMutationHook } from '../graphQL-service-hook'
import type { CreateMasterData, CreateMasterDataVars } from './interface'

const useCreateMasterData: GraphQLServiceMutationHook<CreateMasterData, CreateMasterDataVars> = (options) => {
  return useMutation(QUERY_DOCUMENT, {
    onError() {
      message.error('Create Master data failed.')
    },
    ...options,
  })
}

export default useCreateMasterData

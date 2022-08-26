import { useMutation } from '@apollo/client'
import { message } from 'antd'

import QUERY_DOCUMENT from './updateMasterData'

import type { GraphQLServiceMutationHook } from '../graphQL-service-hook'
import type { UpdateMasterData, UpdateMasterDataVars } from './interface'

const useUpdateMasterData: GraphQLServiceMutationHook<UpdateMasterData, UpdateMasterDataVars> = (options) => {
  return useMutation(QUERY_DOCUMENT, {
    onError() {
      message.error('Update Master data failed.')
    },
    ...options,
  })
}

export default useUpdateMasterData

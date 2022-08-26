import { useMutation } from '@apollo/client'
import { message } from 'antd'

import QUERY_DOCUMENT from './deleteMasterData'

import type { GraphQLServiceMutationHook } from '../graphQL-service-hook'
import type { DeleteMasterData, DeleteMasterDataVars } from './interface'

const useDeleteMasterData: GraphQLServiceMutationHook<DeleteMasterData, DeleteMasterDataVars> = (options) => {
  return useMutation(QUERY_DOCUMENT, {
    onError() {
      message.error('Delete Master data failed.')
    },
    ...options,
  })
}

export default useDeleteMasterData

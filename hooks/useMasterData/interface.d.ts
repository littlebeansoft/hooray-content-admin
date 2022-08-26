import type { MasterDataAPIPayload } from 'graphQL/useGetMasterData/interface'

interface MasterDataSelection {
  [key: string]: MasterDataAPIPayload
}

interface MasterDataList {
  [parentKey: string]: MasterDataSelection
}

export interface UseMasterDataOptions {
  parentKeys: string[]
  skip?: boolean
}

export interface UseMasterDataResponse {
  loading: boolean
  masterDataList: MasterDataList
}

import { APIPayloadResponseWithPagination, FindMasterDataInput } from 'graphql/graphQL-service-hook'
import { MasterDataLocationPayload } from 'graphql/interface'

export interface MasterDataVars {
  input?: FindMasterDataInput
}

export interface MasterData {
  getMasterData: APIPayloadResponseWithPagination<MasterDataLocationPayload[]>
}

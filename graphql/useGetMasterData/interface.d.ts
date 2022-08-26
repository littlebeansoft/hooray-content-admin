import { APIPayloadResponseWithPagination, FindDataInput } from 'graphql/graphQL-service-hook'
import { MasterDataAPIPayload } from 'graphql/interface'

export interface MasterDataVars {
  input?: FindDataInput
}

export interface MasterData {
  getMasterData: APIPayloadResponseWithPagination<MasterDataAPIPayload[]>
}

import { APIPayloadResponse } from 'graphql/graphQL-service-hook'
import { MasterDataAPIPayload, MasterDataInput, LocaleTextInput } from 'graphql/interface'

export interface DeleteMasterDataVars {
  dataKey: string
}

export interface DeleteMasterData {
  deleteMasterData: APIPayloadResponse<MasterDataAPIPayload>
}

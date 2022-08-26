import { APIPayloadResponse } from 'graphql/graphQL-service-hook'
import { MasterDataAPIPayload, MasterDataInput, LocaleTextInput } from 'graphql/interface'

export interface UpdateMasterDataVars {
  masterDataInput: MasterDataInput
  localeInputList: LocaleTextInput[]
  dataKey: string
}

export interface UpdateMasterData {
  updateMasterData: APIPayloadResponse<MasterDataAPIPayload>
}

import { APIPayloadResponse } from 'graphql/graphQL-service-hook'
import { MasterDataAPIPayload, MasterDataInput, LocaleTextInput } from 'graphql/interface'

export interface CreateMasterDataVars {
  masterDataInput: MasterDataInput
  localeListInput: LocaleTextInput[]
}

export interface CreateMasterData {
  createMasterData: APIPayloadResponse<MasterDataAPIPayload>
}

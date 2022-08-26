import { APIPayloadResponseWithPagination, FindDataInput } from 'graphql/graphQL-service-hook'
import { MasterDataLocaleText } from 'graphql/interface'

export interface LocaleTextVars {
  input?: FindDataInput
}

export interface LocaleText {
  getLocaleText: APIPayloadResponseWithPagination<MasterDataLocaleText[]>
}

import { APIPayloadResponseWithPagination, FindDataInput } from 'graphql/graphQL-service-hook'
import { ProductLocationAPIPayload } from 'graphql/interface'

export interface ProductLocationVars {
  input?: FindDataInput
}

export interface ProductLocation {
  getOrgLocation: APIPayloadResponseWithPagination<ProductLocationAPIPayload[]>
}

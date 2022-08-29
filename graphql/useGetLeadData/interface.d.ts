import { APIPayloadResponseWithPagination, FindDataInput } from 'graphql/graphQL-service-hook'
import { LeadDataAPIPayload } from 'graphql/interface'

export interface LeadDataVars {
  input?: FindDataInput
}

export interface LeadData {
  getDataLead: APIPayloadResponseWithPagination<LeadDataAPIPayload[]>
}

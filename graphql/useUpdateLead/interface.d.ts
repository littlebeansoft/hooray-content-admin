import { APIPayloadResponse } from 'graphql/graphQL-service-hook'
import {
  Phone,
  Email,
  RESOURCE_OWNER,
  CREAT_LEAD_STATUS,
  LEAD_TYPE_RESPONSE,
  ADDRESS_TYPE,
  ADDRESS_DEFAULT_SEND,
} from 'graphql/interface'

interface CreateLeadInput {
  prefixKey?: string
  firstName?: string
  lastName?: string
  dateOfBirth?: string
  citizenId?: string
  passport?: string
  phone?: Phone[]
  email?: Email[]
  dataSource?: string
  resourceOwner?: RESOURCE_OWNER
  status?: CREAT_LEAD_STATUS
  leadType?: LEAD_TYPE_RESPONSE
  image?: string
  organizationName?: string
  addressNo?: string
  subDistrict?: string
  district?: string
  province?: string
  postcode?: string
  country?: string
  latitude?: string
  longitude?: string
  addressType?: ADDRESS_TYPE
  defaultSend?: ADDRESS_DEFAULT_SEND
}

interface CreateLeadPayload {
  _id: string
}

export interface LeadInput {
  input: CreateLeadInput
  leadId: string
}

export interface UpdateLead {
  createLead: APIPayloadResponse<CreateLeadPayload>
}

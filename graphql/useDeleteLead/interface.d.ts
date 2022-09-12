import { APIPayloadResponse } from 'graphql/graphQL-service-hook'

interface DeleteLeadPayload {
  _id: string
}

export interface DeleteLeadInput {
  leadId: string
}

export interface DeleteLeadData {
  createLead: APIPayloadResponse<DeleteLeadPayload>
}

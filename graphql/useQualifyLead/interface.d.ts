import { APIPayloadResponse } from 'graphql/graphQL-service-hook'

interface CreateLeadPayload {
  _id: string
}

export interface QualifyLeadInput {
  leadId: string
}

export interface QualifyLeadData {
  createLead: APIPayloadResponse<CreateLeadPayload>
}

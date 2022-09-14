import { APIPayloadResponse } from 'graphql/graphQL-service-hook'

interface DeleteLeadPayload {
  _id: string
}

export interface DeleteAttributeInput {
  deleteAttributeId?: string
}

export interface DeleteAttributeData {
  deleteAttribute: APIPayloadResponse<DeleteLeadPayload>
}

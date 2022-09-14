import { useGetCategory } from 'graphql/useGetCategory'
import { APIPayloadResponse } from 'graphql/graphQL-service-hook'
import { ATRRIBUTE_TYPE } from 'graphql/interface'
import { GetCategoryResp, TOGGLE_STATUS } from '../useGetCategory/interface'

interface CreateCategoryInput {
  name?: string
  descriptions?: string
  status?: TOGGLE_STATUS
  parentCategoryKey?: string
}

interface CreateLeadPayload {
  _id: string
}

export interface CreateAttributeInput {
  input?: CreateCategoryInput
}

export interface CreateAttributeData {
  createCategory?: APIPayloadResponse<GetCategoryResp>
}

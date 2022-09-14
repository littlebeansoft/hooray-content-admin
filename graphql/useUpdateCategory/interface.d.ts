import { useGetCategory } from 'graphql/useGetCategory'
import { APIPayloadResponse } from 'graphql/graphQL-service-hook'
import { ATRRIBUTE_TYPE } from 'graphql/interface'
import { GetCategoryResp, TOGGLE_STATUS } from '../useGetCategory/interface'

type AttributeOptionsInput = {
  order: number
  name: string
  value: string
}

interface CreateCategoryInput {
  parentCategoryKey?: string
  name?: string
  descriptions?: string
  status?: TOGGLE_STATUS
}

interface CreateLeadPayload {
  _id: string
}

export interface UpdateCategoryInput {
  updateCategoryId?: string
  input?: CreateCategoryInput
}

export interface UpdateCategoryData {
  updateCategory: APIPayloadResponse<GetCategoryResp>
}

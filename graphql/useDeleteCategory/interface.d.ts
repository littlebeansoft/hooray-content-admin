import { useGetCategory } from 'graphql/useGetCategory'
import { APIPayloadResponse } from 'graphql/graphQL-service-hook'
import { GetCategoryResp, TOGGLE_STATUS } from '../useGetCategory/interface'

interface CreateCategoryInput {
  parentCategoryKey?: string
  name?: string
  descriptions?: string
  status?: TOGGLE_STATUS
}

interface CreateLeadPayload {
  _id: string
}

export interface DeleteCategoryInput {
  deleteCategoryId?: string
}

export interface DeleteCategoryData {
  deleteCategory: APIPayloadResponse<GetCategoryResp>
}

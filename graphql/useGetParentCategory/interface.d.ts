import { APIPayloadResponseWithPagination, Pagination } from 'graphql/graphQL-service-hook'
import { ProductCategoryAPIPayload } from 'graphql/interface'

type TOGGLE_STATUS = 'ENABLED' | 'DISABLED'

type GetCategoryQuery = {
  categoryId?: string
  categoryKey?: string
  path?: string
  pathRegex?: string
  name?: string
  descriptions?: string
  status?: string
}

type ParentCategoryRes = {
  _id: string
  categoryKey: string
  path: string
  name: string
  descriptions: string
  status: TOGGLE_STATUS
  createdAt: string
  updatedAt: string
  createdBy: string
  updatedBy: string
}

type GetParentCategoryResp = {
  _id: string
  categoryKey: string
  path: string
  name: string
  descriptions?: string
  status?: TOGGLE_STATUS
  parentCategory?: ParentCategoryRes
}

type SORT_ORDER = 'ASC' | 'DESC'

type GetProductCategoryLevelSortInput = {
  createdAt: SORT_ORDER
}

export interface GetParentCategoryInPut {
  getParentCategoryId: string
}

export interface ParentCategoryData {
  getParentCategory: APIPayloadResponseWithPagination<GetParentCategoryResp[]>
}

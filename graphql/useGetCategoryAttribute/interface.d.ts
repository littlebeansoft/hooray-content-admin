import { APIPayloadResponseWithPagination, Pagination } from 'graphql/graphQL-service-hook'
import { ProductCategoryAPIPayload } from 'graphql/interface'
import { GetCategoryResp } from 'graphql/useGetCategory/interface'
import { GetAttributeResp } from 'graphql/useGetAttribute/interface'

type TOGGLE_STATUS = 'ENABLED' | 'DISABLED'

type INPUT_GET_CATEGORY_ATTRIBUTE_QUERY = {
  categoryAttributeId?: string
  categoryId?: string
  categoryKey?: string
  attributeId?: string
  attributeKey?: string
  status?: string
}

type TYPE_CATEGORY_ATTRIBUTE_RESPONSE = {
  _id: string
  categoryKey: string
  category: GetCategoryResp
  attributeKey: string
  attribute: GetAttributeResp
  status: TOGGLE_STATUS
  createdAt: string
  updatedAt: string
  createdBy: string
  updatedBy: string
}

type SORT_ORDER = 'ASC' | 'DESC'

type GetProductCategoryLevelSortInput = {
  createdAt: SORT_ORDER
}

export interface GetCategoryInPut {
  query?: INPUT_GET_CATEGORY_ATTRIBUTE_QUERY
  sort?: JSON
  pagination?: Pagination
}

export interface CategoryAttributeDataVars {
  input?: GetCategoryInPut
}

export interface CategoryAttributeData {
  getCategoryAttribute: APIPayloadResponseWithPagination<TYPE_CATEGORY_ATTRIBUTE_RESPONSE[]>
}

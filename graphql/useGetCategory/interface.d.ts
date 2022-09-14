import { APIPayloadResponseWithPagination, Pagination } from 'graphql/graphQL-service-hook'
import { ProductCategoryAPIPayload } from 'graphql/interface'

type TOGGLE_STATUS = 'ENABLED' | 'DISABLED'

type GetCategoryQuery = {
  categoryId: string
  categoryKey: string
  path: string
  pathRegex: string
  name: string
  descriptions: string
  status: string
}

type GetCategoryResp = {
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

type SORT_ORDER = 'ASC' | 'DESC'

type GetProductCategoryLevelSortInput = {
  createdAt: SORT_ORDER
}

export interface GetCategoryInPut {
  filter?: GetProductCategoryLevel
  sort?: JSON
  pagination?: Pagination
}

export interface CategoryDataVars {
  input?: GetCategoryInPut
}

export interface CategoryData {
  getCategory: APIPayloadResponseWithPagination<GetCategoryResp[]>
}

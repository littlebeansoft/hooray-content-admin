import { APIPayloadResponseWithPagination, Pagination } from 'graphql/graphQL-service-hook'
import { ProductCategoryAPIPayload } from 'graphql/interface'

type GetProductCategoryLevel = {
  name: string
  keyLang: string
}

type SORT_ORDER = "ASC" | "DESC"

type GetProductCategoryLevelSortInput = {
  createdAt: SORT_ORDER
}


export interface GetProductCategoryLevelInput {
  filter?: GetProductCategoryLevel
  search?: GetProductCategoryLevel
  sort?: GetProductCategoryLevelSortInput
  pagination?: Pagination
}

export interface ProductCategoryDataVars {
  input?: GetProductCategoryLevelInput
}

export interface ProductCategoryData {
  getProductCategoryLevel: APIPayloadResponseWithPagination<ProductCategoryAPIPayload[]>
}

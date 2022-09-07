import { APIPayloadResponseWithPagination, Pagination } from 'graphql/graphQL-service-hook'

type ATRRIBUTE_TYPE = "CHECKBOX" | "RADIO" | "TEXT" | "NUMBER"

type GetProductAttribute = {
  type: ATRRIBUTE_TYPE[]
  name: GetProductAttributeSort
}

type OptionsResponse = {
  name: string
  _id: string
}

type GetProductAttributeSort = {
  keyLang: string
  value: string
}

type SORT_ORDER = "ASC" | "DESC"

type GetProductAttributeSort = {
  createdAt: SORT_ORDER
}

type AttributeStatus = "ENABLED" | "DISABLED"

export interface ProductAttributeDTO {
  type: ATRRIBUTE_TYPE
  name: string
  rules: string[]
  options: OptionsResponse
  _id: string
  status: AttributeStatus
}


export interface GetProductAttributeInput {
  filter?: GetProductAttribute
  search?: GetProductAttribute
  sort?: GetProductAttributeSort
  pagination?: Pagination
}

export interface ProductAttributeListVars {
  input?: GetProductAttributeInput
}

export interface ProductAttributeListData {
  getProductAttributeList: APIPayloadResponseWithPagination<ProductAttributeDTO[]>
}

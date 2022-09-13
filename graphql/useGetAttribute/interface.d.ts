import { APIPayloadResponseWithPagination, Pagination } from 'graphql/graphQL-service-hook'

type ATRRIBUTE_TYPE = 'CHECKBOX' | 'RADIO' | 'TEXT' | 'NUMBER'

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

type SORT_ORDER = 'ASC' | 'DESC'

type GetProductAttributeSort = {
  createdAt: SORT_ORDER
}

type TOGGLE_STATUS = 'ENABLED' | 'DISABLED'

type GetAttributeQuery = {
  attributeId: string
  attributeKey: string
  name: string
  descriptions: string
  type: ATRRIBUTE_TYPE
  status: TOGGLE_STATUS
}

type AttributeOptions = {
  order: number
  name: string
  value: string
}

export interface GetAttributeResp {
  _id: string
  attributeKey: string
  name: string
  descriptions: string
  type: ATRRIBUTE_TYPE
  optionList: AttributeOptions
  ruleRegExpList: string[]
  status: TOGGLE_STATUS
  createdAt: string
  updatedAt: string
  createdBy: string
  updatedBy: string
}

export interface GetAttributeInPut {
  filter?: GetProductAttribute
  sort?: JSON
  query?: GetAttributeQuery
  pagination: PaginationConfig
}

export interface AttributeListVars {
  input?: GetAttributeInPut
}

export interface AttributeListData {
  getAttribute: APIPayloadResponseWithPagination<GetAttributeResp[]>
}

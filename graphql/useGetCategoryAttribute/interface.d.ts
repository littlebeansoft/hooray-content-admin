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

export enum AttributeType {
  Checkbox = 'CHECKBOX',
  Number = 'NUMBER',
  Radio = 'RADIO',
  Text = 'TEXT',
}

export type GetCategoryAttributeQuery = {
  getCategoryAttribute: {
    code: string
    message: string
    payload: Array<{
      _id: string
      categoryKey: string
      attributeKey: string
      status: EnabledStatus
      createdAt: any
      updatedAt: any
      createdBy: string
      updatedBy: string
      category: {
        _id: string
        name: string
        categoryKey: string
        path: string
        descriptions: string
        status: EnabledStatus
        createdAt: any
        updatedAt: any
        createdBy: string
        updatedBy: string
        parentCategory: {
          _id: string
          categoryKey: string
          path: string
          name: string
          descriptions: string
          status: EnabledStatus
          createdAt: any
          updatedAt: any
          createdBy: string
          updatedBy: string
        }
      }
      attribute: {
        _id: string
        name: string
        descriptions: string
        type: AttributeType
        ruleRegExpList: Array<string>
        status: EnabledStatus
        createdAt: any
        updatedAt: any
        createdBy: string
        updatedBy: string
        attributeKey: string
        optionList: Array<{ order: number; name: string; value: string }>
      }
    }>
    pagination: { limit: number; page: number; totalItems: number; totalPages: number }
  }
}

export type CategoryAttributeRes = {
  _id: string
  categoryKey: string
  attributeKey: string
  status: EnabledStatus
  createdAt: any
  updatedAt: any
  createdBy: string
  updatedBy: string
  category: {
    _id: string
    name: string
    categoryKey: string
    path: string
    descriptions: string
    status: EnabledStatus
    createdAt: any
    updatedAt: any
    createdBy: string
    updatedBy: string
    parentCategory: {
      _id: string
      categoryKey: string
      path: string
      name: string
      descriptions: string
      status: EnabledStatus
      createdAt: any
      updatedAt: any
      createdBy: string
      updatedBy: string
    }
  }
  attribute: {
    _id: string
    name: string
    descriptions: string
    type: AttributeType
    ruleRegExpList: Array<string>
    status: EnabledStatus
    createdAt: any
    updatedAt: any
    createdBy: string
    updatedBy: string
    attributeKey: string
    optionList: Array<{ order: number; name: string; value: string }>
  }
}

/** สถานะการเปิดใช้งาน */
export enum EnabledStatus {
  Disabled = 'DISABLED',
  Enabled = 'ENABLED',
}

import { APIPayloadResponse } from 'graphql/graphQL-service-hook'
import { ATRRIBUTE_TYPE } from 'graphql/interface'
import { GetAttributeResp, TOGGLE_STATUS } from '../useGetAttribute/interface'

type AttributeOptionsInput = {
  order: number
  name: string
  value: string
}

interface CreateAttributeInput {
  name?: string
  descriptions?: string
  type?: ATRRIBUTE_TYPE
  rules?: string[]
  optionList?: AttributeOptionsInput[]
  ruleRegExpList?: string[]
  status?: TOGGLE_STATUS
}

interface CreateLeadPayload {
  _id: string
}

export interface CreateAttributeInput {
  input?: CreateAttributeInput
}

export interface CreateAttributeData {
  createAttribute: APIPayloadResponse<GetAttributeResp>
}

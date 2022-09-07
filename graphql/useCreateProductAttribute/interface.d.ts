import { APIPayloadResponse } from 'graphql/graphQL-service-hook'
import { ATRRIBUTE_TYPE } from 'graphql/interface'
import { ProductAttributeDTO } from '../useGetProductAttributeList/interface'

type Options = {
  name: string
}

interface CreateProductAttribute {
  type?: ATRRIBUTE_TYPE!
  name?: string
  rules?: string[]
  options?: Options[]
}

interface CreateLeadPayload {
  _id: string
}

export interface CreateProductAttributeInput {
  input: CreateProductAttribute
}

export interface CreateProductAttributeData {
  createProductAttribute: APIPayloadResponse<ProductAttributeDTO>
}




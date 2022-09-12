import {
  QueryHookOptions,
  QueryResult,
  MutationHookOptions,
  MutationTuple,
  OperationVariables,
  QueryTuple,
} from '@apollo/client'

export type StatusType = 'ACTIVE' | 'INACTIVE'
export type ACLType = 'PUBLIC' | 'PRIVATE'

export interface GraphQLServiceQueryHook<T, U = OperationVariables> {
  (options?: QueryHookOptions<T, U>): QueryResult<T, U>
}

export interface GraphQLServiceLazyQueryHook<T, U = OperationVariables> {
  (options?: QueryHookOptions<T, U>): QueryTuple<T, U>
}

export interface GraphQLServiceMutationHook<T, U = OperationVariables> {
  (options?: MutationHookOptions<T, U>): MutationTuple<T, U>
}

export interface APIPayloadResponse<T> {
  message?: string
  code?: string
  payload: T
}

export interface Pagination {
  limit?: number
  page?: number
  totalItems?: number
  totalPages?: number
}

export interface QUERY {
  parentKey?: string
  dataKey?: string
  attribute?: any
  locale?: string
  text?: string
}

export interface APIPayloadResponseWithPagination<T> extends APIPayloadResponse<T> {
  pagination: Pagination
}

export interface APIPayloadResponseForProductRelocation<T> extends APIPayloadResponseWithPagination<T> {
  verified: number
}

export interface FindDataInput {
  pagination?: Pagination
  findOneById?: string
  findManyById?: string[]
  query?: any
  search?: any
  filter?: any
  sort?: any
}

export interface CreateOrUpdateMutationResponse {
  _id: string
}

export interface S3PutObjectSignedUrlInput {
  acl?: ACLType
  path?: string
  objectName?: string
  contentType?: string
}

export interface S3Config {
  publicEndpoint: string
  bucket: string
  serviceEndpoint: string
}

export interface Configuration {
  configName: string
  configKey: string
  value: S3Config
  relatedConfig: string[]
  isGlobal: boolean
}

export interface Application {
  name: string
  appKey: string
  attribute: string
  status: Status
  contactEmailList: string[]
  configurationList: Configuration[]
}

export interface Credential {
  name: string
  type: CredentialType
  credentialKey: string
  status: Status
}

export interface FindMasterDataInput {
  pagination?: Pagination
  query?: QUERY
  search?: QUERY
  filter?: QUERY
}

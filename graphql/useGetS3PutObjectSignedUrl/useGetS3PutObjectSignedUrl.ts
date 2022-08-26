import { useQuery } from '@apollo/client'

import QUERY_DOCUMENT from './getS3PutObjectSignedUrl'

import type {
  APIPayloadResponse,
  GraphQLServiceQueryHook,
  S3PutObjectSignedUrlInput,
} from 'graphql/graphQL-service-hook'
import type { S3PutObjectAPIPayload } from './interface'
import { API } from 'config/api'

interface S3PutObjectSignedUrlData {
  getS3PutObjectSignedUrl: APIPayloadResponse<S3PutObjectAPIPayload[]>
}

interface S3PutObjectSignedUrlVars {
  userId?: string | null
  inputs?: S3PutObjectSignedUrlInput[]
}

const useGetS3PutObjectSignedUrl: GraphQLServiceQueryHook<S3PutObjectSignedUrlData, S3PutObjectSignedUrlVars> = (
  options
) => {
  return useQuery(QUERY_DOCUMENT, {
    context: {
      uri: API.CORE.GRAPHQL.ADMIN['1.0'],
    },
    onError(error) {
      console.log(error.message)
    },
    ...options,
  })
}

export default useGetS3PutObjectSignedUrl

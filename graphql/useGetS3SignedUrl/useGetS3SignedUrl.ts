import { useQuery } from '@apollo/client'

import QUERY_DOCUMENT from './s3GetObjectSignedUrl'

import type { APIPayloadResponse, GraphQLServiceQueryHook } from 'graphql/graphQL-service-hook'
import type { S3SignedUrlAPIPayload } from './interface'
import { API } from 'config/api'

interface S3SignedUrlData {
  getS3GetObjectSignedUrl: APIPayloadResponse<S3SignedUrlAPIPayload[]>
}

interface S3SignedUrlVars {
  fileKeys?: string[]
}

const useGetS3SignedUrl: GraphQLServiceQueryHook<S3SignedUrlData, S3SignedUrlVars> = (options) => {
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

export default useGetS3SignedUrl

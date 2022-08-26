import { gql } from '@apollo/client'

const PAGINATION = `
        pagination{
            limit
            page
            totalItems
            totalPages
        }
`

export const GET_APP_BY_CREDENTIAL = gql`
  query getAppByCredential($credentialKey: String!) {
    getAppByCredential(credentialKey: $credentialKey) {
      message
      code
      payload {
        app {
          appKey
          configurationList {
            configName
            configKey
            value {
              apiKey
              publicEndpoint
              bucket
              serviceEndpoint
            }
          }
        }
      }
    }
  }
`

export const GET_S3 = gql`
  query getS3PutObjectSignedUrl($userId: ID, $inputs: [INPUT_S3_PUT_OBJECT_SIGNED_URL]) {
    getS3PutObjectSignedUrl(userId: $userId, inputs: $inputs) {
      message
      code
      payload {
        signedUrl
        publicUrl
        filename
        fileKey
      }
    }
  }
`

export const GET_ORG_TOKEN_REF = gql`
  query getOrgAccessTokenWithRef($tokenRef: String!) {
    getOrgAccessTokenWithRef(tokenRef: $tokenRef) {
      message
      code
      payload {
        token {
          orgAccessToken
          orgRefreshToken
        }
      }
    }
  }
`

export const GET_APP_TOKEN_REF = gql`
  query getTokenAuthCode($code: String!) {
    getTokenAuthCode(code: $code) {
      message
      code
      payload {
        token {
          accessToken
          refreshToken
        }
      }
    }
  }
`

export const GET_FileUpload = gql`
query getFileUpload($input: INPUT_FIND_DATA) {
    getFileUpload(input: $input) {
        message
        code
        payload{
            _id
            refId
            fileKey
            fileName
            fileType
            fileExtension
          }
        ${PAGINATION}
    }
}
`

import { gql } from '@apollo/client'

const PAYLOAD_FILEUPLOAD = `
_id
refId
fileKey
fileName
fileType
fileExtension
`

export const PUT_S3 = gql`
  mutation getS3PutObjectSignedUrl($userId: ID, $inputs: [INPUT_S3_PUT_OBJECT_SIGNED_URL]) {
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

export const CREATE_FILEUPLOAD = gql`
    mutation createFileUpload($input: INPUT_FILEUPLOAD) {
        createFileUpload(input: $input) {
            message
            code
            payload {
                ${PAYLOAD_FILEUPLOAD}
            }
        }
    }
`

export const DELETE_FILEUPLOAD = gql`
    mutation deleteFileUpload($refId: String!, $fileKey: String!) {
        deleteFileUpload(refId: $refId, fileKey: $fileKey) {
            message
            code
            payload {
                ${PAYLOAD_FILEUPLOAD}
            }
        }
    }
`

export const IMPORT_PRODUCT = gql`
  mutation importData($fileKey: String!, $importName: String!) {
    importData(fileKey: $fileKey, importName: $importName) {
      message
      code
      payload {
        fileErrorName
        messageError
      }
    }
  }
`

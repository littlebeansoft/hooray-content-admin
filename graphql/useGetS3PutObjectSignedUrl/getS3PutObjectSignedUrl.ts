import { gql } from '@apollo/client'

const S3_PUT_OBJECT = gql`
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

export default S3_PUT_OBJECT

import { gql } from '@apollo/client'

const S3_GET_OBJECT_SIGNED_URL = gql`
  query getS3GetObjectSignedUrl($fileKeys: [String]) {
    getS3GetObjectSignedUrl(fileKeys: $fileKeys) {
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

export default S3_GET_OBJECT_SIGNED_URL

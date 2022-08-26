import { gql } from '@apollo/client'

const REFRESH_ACCESS_TOKEN = gql`
  mutation refreshAccessToken($refreshToken: String!) {
    refreshAccessToken(refreshToken: $refreshToken) {
      message
      code
      payload {
        accessToken
        refreshToken
      }
    }
  }
`

export default REFRESH_ACCESS_TOKEN

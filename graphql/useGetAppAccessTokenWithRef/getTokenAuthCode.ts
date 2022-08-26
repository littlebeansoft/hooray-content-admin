import { gql } from '@apollo/client'

const APP_ACCESS_TOKEN_WITH_REF = gql`
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

export default APP_ACCESS_TOKEN_WITH_REF

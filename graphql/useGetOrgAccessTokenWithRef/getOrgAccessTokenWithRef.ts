import { gql } from '@apollo/client'

const ORG_ACCESS_TOKEN_WITH_REF = gql`
  query getOrgAccessTokenWithRef($tokenRef: String!) {
    getOrgAccessTokenWithRef(tokenRef: $tokenRef) {
      payload {
        token {
          orgAccessToken
          orgRefreshToken
        }
      }
    }
  }
`

export default ORG_ACCESS_TOKEN_WITH_REF

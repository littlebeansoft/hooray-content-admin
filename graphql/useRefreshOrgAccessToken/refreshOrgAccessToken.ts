import { gql } from '@apollo/client'

const REFRESH_ORG_ACCESS_TOKEN = gql`
  mutation RefreshOrgAccessToken($refreshOrgToken: String!) {
    refreshOrgAccessToken(refreshOrgToken: $refreshOrgToken) {
      payload {
        token {
          orgAccessToken
          orgRefreshToken
        }
      }
    }
  }
`

export default REFRESH_ORG_ACCESS_TOKEN

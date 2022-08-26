import { gql } from '@apollo/client'

const GET_MY_PERMISSION = gql`
  query getMyPermission($orgKey: String) {
    getMyPermission(orgKey: $orgKey) {
      message
      code
      payload {
        code
        permissionKey
        scopeList
      }
    }
  }
`

export default GET_MY_PERMISSION

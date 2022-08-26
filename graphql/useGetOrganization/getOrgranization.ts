import { gql } from '@apollo/client'

const GET_ORGANIZATION = gql`
  query getOrganization($input: INPUT_FIND_DATA) {
    getOrganization(input: $input) {
      pagination {
        limit
        page
        totalItems
        totalPages
      }
      message
      code
      payload {
        name
        orgKey
        contactName
        attribute
        status
        contactEmailList
        location {
          type
          coordinates
        }
        categoryList {
          _id
        }
        address
        path
        createdAt
        updatedAt
      }
    }
  }
`

export default GET_ORGANIZATION

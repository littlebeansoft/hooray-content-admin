import { gql } from '@apollo/client'

const GET_CATEGORY = gql`
  query GetCategory($input: INPUT_GET_CATEGORY!) {
    getCategory(input: $input) {
      message
      code
      pagination {
        limit
        page
        totalItems
        totalPages
      }
      payload {
        _id
        categoryKey
        path
        parentCategory {
          _id
          name
        }
        name
        descriptions
        status
        createdAt
        updatedAt
        createdBy
        updatedBy
      }
    }
  }
`

export default GET_CATEGORY

import { gql } from '@apollo/client'

const GET_CATEGORY = gql`
  query GetCategory($input: GetCategoryInPut!) {
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

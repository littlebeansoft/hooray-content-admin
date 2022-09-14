import { gql } from '@apollo/client'

const GET_PARENT_CATEGORY = gql`
  query GetParentCategory($getParentCategoryId: String!) {
    getParentCategory(id: $getParentCategoryId) {
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
        }
        name
        descriptions
        status
      }
    }
  }
`

export default GET_PARENT_CATEGORY

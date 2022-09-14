import { gql } from '@apollo/client'

const DELETE_CATEGORY = gql`
  mutation DeleteCategory($deleteCategoryId: String!) {
    deleteCategory(id: $deleteCategoryId) {
      code
      message
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

export default DELETE_CATEGORY

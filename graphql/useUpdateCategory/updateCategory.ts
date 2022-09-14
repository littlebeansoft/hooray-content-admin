import { gql } from '@apollo/client'

const UPDATE_CATEGORY = gql`
  mutation UpdateCategory($updateCategoryId: String!, $input: CreateCategoryInput!) {
    updateCategory(id: $updateCategoryId, input: $input) {
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

export default UPDATE_CATEGORY

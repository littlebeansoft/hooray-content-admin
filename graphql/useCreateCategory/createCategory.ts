import { gql } from '@apollo/client'

const CREATE_CATEGORY = gql`
  mutation CreateCategory($input: CreateCategoryInput!) {
    createCategory(input: $input) {
      code
      message
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

export default CREATE_CATEGORY

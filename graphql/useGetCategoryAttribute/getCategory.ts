import { gql } from '@apollo/client'

const GET_CATEGORY = gql`
  query GetCategoryAttribute($input: INPUT_GET_CATEGORY_ATTRIBUTE!) {
    getCategoryAttribute(input: $input) {
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
        category {
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
        attributeKey
        attribute {
          _id
          attributeKey
          name
          descriptions
          type
          optionList {
            order
            name
            value
          }
          ruleRegExpList
          status
          createdAt
          updatedAt
          createdBy
          updatedBy
        }
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

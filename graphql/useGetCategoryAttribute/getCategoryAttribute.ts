import { gql } from '@apollo/client'

const GET_CATEGORY = gql`
  query GetAttribute($input: GetCategoryAttributeInPut!) {
    getCategoryAttribute(input: $input) {
      code
      message
      payload {
        _id
        categoryKey
        category {
          _id
          name
          categoryKey
          path
          parentCategory {
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
          attributeKey
        }
        status
        createdAt
        updatedAt
        createdBy
        updatedBy
      }
      pagination {
        limit
        page
        totalItems
        totalPages
      }
    }
  }
`

export default GET_CATEGORY

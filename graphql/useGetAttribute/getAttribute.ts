import { gql } from '@apollo/client'

const GET_ATTRIBUTE = gql`
  query getAttribute($input: INPUT_GET_ATTRIBUTE!) {
    getAttribute(input: $input) {
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
    }
  }
`

export default GET_ATTRIBUTE

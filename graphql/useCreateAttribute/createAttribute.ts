import { gql } from '@apollo/client'

const CREATE_ATTRIBUTE = gql`
  mutation CreateAttribute($input: CreateAttributeInput!) {
    createAttribute(input: $input) {
      code
      message
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

export default CREATE_ATTRIBUTE

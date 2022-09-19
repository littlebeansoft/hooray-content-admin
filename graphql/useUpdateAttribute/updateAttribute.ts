import { gql } from '@apollo/client'

const UPDATE_ATTRIBUTE = gql`
  mutation UpdateAttribute($updateAttributeId: String!, $input: INPUT_ATTRIBUTE!) {
    updateAttribute(id: $updateAttributeId, input: $input) {
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

export default UPDATE_ATTRIBUTE

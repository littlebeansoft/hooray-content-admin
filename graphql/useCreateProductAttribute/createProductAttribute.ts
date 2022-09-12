import { gql } from '@apollo/client'

const CREATE_PRODUCT_ATTRIBUTE = gql`
  mutation CreateProductAttribute($input: CreateProductAttributeInput!) {
    createProductAttribute(input: $input) {
      code
      message
      payload {
        type
        name
        options {
          name
          _id
        }
        _id
        rules
      }
    }
  }
`

export default CREATE_PRODUCT_ATTRIBUTE

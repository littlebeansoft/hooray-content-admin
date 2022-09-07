import { gql } from '@apollo/client'

const GET_PRODUCT_ATTRIBUTE_LIST = gql`
  query getProductAttributeList($input: GetProductAttributeInput) {
    getProductAttributeList(input: $input) {
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
      type
      name
      rules
      options {
        name
        _id
      }
      }
    }
  }
`

export default GET_PRODUCT_ATTRIBUTE_LIST

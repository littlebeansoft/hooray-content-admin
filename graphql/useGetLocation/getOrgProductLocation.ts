import { gql } from '@apollo/client'
export const PRODUCT_LOCATION_SCHEMA = `
    _id
    image
    globalName
    localName
    code
    description
    attachmentList
`
const GET_ORG_LOCATION = gql`
  query GetOrgLocation($input: INPUT_FIND_DATA) {
    getOrgLocation(input: $input) {
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
        image
        globalName
        localName
        code
        type
        productUsage
        parent{${PRODUCT_LOCATION_SCHEMA}}
        description
        attachmentList
      }
    }
  }
`

export default GET_ORG_LOCATION

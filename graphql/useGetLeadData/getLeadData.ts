import { gql } from '@apollo/client'

const GET_LEAD = gql`
  query getDataLead($input: INPUT_FIND_DATA) {
    getDataLead(input: $input) {
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
        firstName
        lastName
        citizenId
        passport
        phone {
          value
        }
        email {
          value
        }
        dataSource
        resourceOwner
        status
        image
        organizationName
      }
    }
  }
`

export default GET_LEAD

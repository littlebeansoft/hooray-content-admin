import { gql } from '@apollo/client'

const GET_LEAD = gql`
  query getDataLead($input: FindLeadInput) {
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
      createdAt
      updatedAt
      }
    }
  }
`

export default GET_LEAD

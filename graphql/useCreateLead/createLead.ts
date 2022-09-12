import { gql } from '@apollo/client'

const CREATE_LEAD = gql`
  mutation CreateLead($input: CreateLeadInput!) {
    createLead(input: $input) {
      code
      message
      payload {
        _id
      }
    }
  }
`

export default CREATE_LEAD

import { gql } from '@apollo/client'

const UPDATE_LEAD = gql`
  mutation UpdateLead($input: CreateLeadInput!, $leadId: String!) {
    updateLead(input: $input, leadId: $leadId) {
      code
      message
      payload {
        _id
      }
    }
  }
`

export default UPDATE_LEAD

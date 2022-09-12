import { gql } from '@apollo/client'

const DELETE_LEAD = gql`
  mutation DeleteLead($leadId: String!) {
    deleteLead(leadId: $leadId) {
      code
      message
      payload {
        _id
      }
    }
  }
`

export default DELETE_LEAD

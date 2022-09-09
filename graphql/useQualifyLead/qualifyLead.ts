import { gql } from '@apollo/client'

const QUALIFY_LEAD = gql`
 mutation QualifyLead($leadId: String!) {
  qualifyLead(leadId: $leadId) {
    code
    message
    payload {
      _id
    }
  }
}
`

export default QUALIFY_LEAD

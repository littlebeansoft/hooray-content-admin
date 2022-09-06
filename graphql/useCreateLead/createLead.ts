import { gql } from '@apollo/client'

const CREATE_LEAD = gql`
 mutation CreateLead($createLeadInput: CreateLeadInput) {
  createLead(input: $createLeadInput) {
    code
    message
    payload {
      _id
    }
  }
}
`

export default CREATE_LEAD

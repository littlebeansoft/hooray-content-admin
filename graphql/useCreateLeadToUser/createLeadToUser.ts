import { gql } from '@apollo/client'

const CREATE_LEAD = gql`
 mutation CreateLeadToUser($input: CreateLeadInput!) {
  createLeadToUser(input: $input) {
    code
    message
    payload {
      _id
    }
  }
}
`

export default CREATE_LEAD

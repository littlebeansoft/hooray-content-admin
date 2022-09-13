import { gql } from '@apollo/client'

const DELETE_ATTRIBUTE = gql`
  mutation DeleteAttribute($deleteAttributeId: String!) {
    deleteAttribute(id: $deleteAttributeId) {
      code
      message
      payload {
        _id
      }
    }
  }
`

export default DELETE_ATTRIBUTE

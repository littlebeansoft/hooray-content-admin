import { gql } from '@apollo/client'

const DELETE_MATER_DATA = gql`
  mutation deleteMasterData($dataKey: String!) {
    deleteMasterData(dataKey: $dataKey) {
      message
      code
      payload {
        dataKey
      }
    }
  }
`

export default DELETE_MATER_DATA

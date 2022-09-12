import { gql } from '@apollo/client'

const GET_MASTER_DATA_LOCATION = gql`
  query GetMasterData($input: FindMasterDataInput) {
    getMasterData(input: $input) {
      message
      code
      pagination {
        limit
        page
        totalItems
        totalPages
      }
      payload {
        locale
        text
        searchable
        parentKey
        dataKey
        attribute
      }
    }
  }
`

export default GET_MASTER_DATA_LOCATION

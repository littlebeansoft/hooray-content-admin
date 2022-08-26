import { gql } from '@apollo/client'

const GET_PRODUCT = gql`
  query GetMasterData($input: INPUT_FIND_DATA) {
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
        parentKey
        dataKey
        localeText {
          text
          dataKey
          locale
        }
        localeTextList {
          text
          dataKey
          locale
        }
      }
    }
  }
`

export default GET_PRODUCT

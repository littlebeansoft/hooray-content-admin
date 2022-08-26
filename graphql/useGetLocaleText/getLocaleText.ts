import { gql } from '@apollo/client'

const GET_LOCALE_TEXT = gql`
  query getLocaleText($input: INPUT_FIND_DATA) {
    getLocaleText(input: $input) {
      message
      code
      pagination {
        limit
        page
        totalItems
        totalPages
      }
      payload {
        dataKey
        locale
        text
      }
    }
  }
`

export default GET_LOCALE_TEXT

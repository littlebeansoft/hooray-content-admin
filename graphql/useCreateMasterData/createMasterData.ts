import { gql } from '@apollo/client'

const CREATE_PRODUCT = gql`
  mutation createMasterData($masterDataInput: INPUT_MASTER_DATA, $localeListInput: [INPUT_LOCALE_MASTER_DATA]) {
    createMasterData(masterDataInput: $masterDataInput, localeInputList: $localeListInput) {
      message
      code
      payload {
        dataKey
      }
    }
  }
`

export default CREATE_PRODUCT

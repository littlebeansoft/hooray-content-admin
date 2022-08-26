import { gql } from '@apollo/client'

const UPDATE_PRODUCT = gql`
  mutation updateMasterData(
    $dataKey: String!
    $masterDataInput: INPUT_MASTER_DATA
    $localeListInput: [INPUT_LOCALE_MASTER_DATA]
  ) {
    updateMasterData(dataKey: $dataKey, masterDataInput: $masterDataInput, localeInputList: $localeListInput) {
      message
      code
      payload {
        dataKey
      }
    }
  }
`

export default UPDATE_PRODUCT

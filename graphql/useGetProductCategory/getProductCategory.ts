import { gql } from '@apollo/client'

const GET_PRODUCT_CATEGORY_LEVEL = gql`
  query getProductCategoryLevel($input: GetProductCategoryLevelInput) {
    getProductCategoryLevel(input: $input) {
      message
      code
      pagination {
        limit
        page
        totalItems
        totalPages
      }
      payload {
        name
        parent
        key
        _id
        tree
        hasChildren
        treeFull {
          _id
          key
          parent
          name
          hasChildren
        }
      }
    }
  }
`

export default GET_PRODUCT_CATEGORY_LEVEL

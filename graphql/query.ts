export const paginationQuerySchema = `
  limit
  page
  totalItems
  totalPages
`

export const productRelocationLocationQuerySchema = `
  declaration {
    _id
    declarationControl {
      declarationNo
    }
  }
  declarationDetail {
    _id
    itemNo
  }
  toLocation {
    _id
    type
    globalName
    localName
  }
  fromLocation {
    _id
    type
    globalName
    localName
  }
  type
  quantity
  beforeProductNumber
  remark
`

export const adminFinanceDocumentQuerySchema = `
  _id
  customerName
  customerId
  contactDetail {
    address
    zipCode
    taxId
    branch
  }
  priceDetail {
    total
    grandTotal
    date
    totalForeign
    totalLocal
    grandTotalLocal
    grandTotalForeign
  }
  productList {
    id
    name
    code
    quantity
    unit
    unitId
    unitPriceLocal
    unitPriceForeign
    unitPriceForeignCurrency {
      dataKey
      value {
        dataKey
        locale
        text
      }
    }
    unitPriceLocalCurrency {
      dataKey
      value {
        dataKey
        locale
        text
      }
    }
    exchangeRate
    totalForeign
    totalLocal
  }
  remark
  companyStamp
  signature
  attachFileList
  createdBy
  createdAt
  updatedAt
`

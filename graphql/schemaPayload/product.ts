import { PRODUCT_PROPERTY } from './productProperty'

export const MASTER_DATA = `
  dataKey
  value {
    dataKey
    locale
    text
  }
`

export const PRODUCT = `
  _id
  type
  globalName
  localName
  code
  image
  productUnit {
    ${PRODUCT_PROPERTY}
  }
  productCategory {
    ${PRODUCT_PROPERTY}
  }
  productType {
    ${PRODUCT_PROPERTY}
  }
  weight
  productWeightUnit {
    ${PRODUCT_PROPERTY}
  }
  unitPrice
  tariffCode
  statisticCode
  tariffRate
  effectiveDate
  description
  attachmentList
  customsCode
  tariffSequence
  brandName
  productYear
  remaining
  scrap{
    _id
  }
  canProduce
  cctvId
  currency {
    dataKey
  }
  imageList
`

export const PRODUCT_RELOCATION = `
  _id
  type
  declaration
  declarationDetail
  productionOrder
  reserve
  product {${PRODUCT}}
  ref
  no
  date
  locationList {
    type
    quantity
    declaration
    declarationDetail
    fromLocation {
      _id
    }
    toLocation {
      _id
    }
    beforeProductNumber
    remark
  }
  attachmentList
  status
`

export const PRODUCT_QRCODE = `
  _id
  type
  globalName
  localName
  brandName
  customsCode
  code
  productUnit{
    _id
    globalName
    localName
    code
  }
  productCategory{
    _id
    globalName
    localName
    code
  }
  productType{
    _id
    globalName
    localName
    code
  }
  unitPrice
  productLocationList{
    _id
    date
    location{
      _id
      globalName
    localName
      code
    }
  }
`

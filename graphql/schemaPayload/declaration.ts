import { PRODUCT_PROPERTY_SCHEMA } from 'graphql/useGetProductProperty/getOrgProductProperty'
import { PRODUCT } from './product'

export const DECLARATION_CONTROL = `
    _id
    date
    refNo
    productType
    docType {
    dataKey
    value {
        dataKey
        locale
        text
    }
    }
    declarationNo
    drokerTaxNo
    brokerBranch
    customsClearanceCard
    managerNo
    transportMode {
    dataKey
    value {
        dataKey
        locale
        text
    }
    }
    vesselName
    masterBillLading
    establishNo
    releasePort
    originCountry {
    dataKey
    value {
        dataKey
        locale
        text
    }
    }
    shippingMark
    netWeightUnit {${PRODUCT_PROPERTY_SCHEMA}}
    currencyCode {
    dataKey
    value {
        dataKey
        locale
        text
    }
    }
    rgsCode
    bankCode
    paymentMethod {
    dataKey
    value {
        dataKey
        locale
        text
    }
    }
    paymentMethod {
    dataKey
    value {
        dataKey
        locale
        text
    }
    }
    totalDeposit
    assessmentRequestCode
    departureDate
    approvalNo
    dateTransmit
    customsClearanceName
    managerName
    cargoPackingType {
    dataKey
    value {
        dataKey
        locale
        text
    }
    }
    arrivalDate
    houseBillLading
    factoryNo
    dischargePort
    consignmentCountry {
    dataKey
    value {
        dataKey
        locale
        text
    }
    }
    packageUnit {${PRODUCT_PROPERTY_SCHEMA}}
    grossWeightUnit{${PRODUCT_PROPERTY_SCHEMA}}
    exchangeRate
    customsBankCode
    bankBranchCode
    totalTax
    refNoCommonAccess
    inspectionRequestCode
    approvalPort
    uidTransmit
    timeTransmit
`

export const DECLARATION_INVOICE = `
    _id
    invoiceNo
    invoiceDate
    purchaseOrderNumber
    termPayment {
    dataKey
    value {
        dataKey
        locale
        text
    }
    }
    term {
    dataKey
    value {
        dataKey
        locale
        text
    }
    }
    consigneeStatus {
    dataKey
    value {
        dataKey
        locale
        text
    }
    }
    invoiceCurrency {
    dataKey
    value {
        dataKey
        locale
        text
    }
    }
    forwardingCF
    freightAF
    insuranceAF
    packingCAF
    foreignInlandFreightCAF
    otherCAF
    buyerStatus {
    dataKey
    value {
        dataKey
        locale
        text
    }
    }
    commercialLevel {
    dataKey
    value {
        dataKey
        locale
        text
    }
    }
    forwardingCC{
        dataKey
        value {
            dataKey
            locale
            text
        }
        }
    freightCurrency{
        dataKey
        value {
            dataKey
            locale
            text
        }
        }
    insuranceCurrency{
        dataKey
        value {
            dataKey
            locale
            text
        }
        }
    packingCC{
        dataKey
        value {
            dataKey
            locale
            text
        }
        }
    foreignInlandFreightCC{
        dataKey
        value {
            dataKey
            locale
            text
        }
        }
    otherCC{
        dataKey
        value {
            dataKey
            locale
            text
        }
        }
`
export const DECLARATION_DETAIL = `
    _id
    product {${PRODUCT}}
    declarationOut
    declarationDetailOut
    itemNo
    invoiceNo
    invoiceItem
    tariffCode
    tariffSequence
    statisticalCode
    importTariff
    privilegeCode
    ahtnCode
    depositReason
    natureTransaction
    undgNumber
    productAttribute1
    productAttribute2
    productYear
    remark
    originCountry{
        dataKey
        value {
            dataKey
            locale
            text
        }
    }
    netWeight
    netWeightUnit{${PRODUCT_PROPERTY_SCHEMA}}
    quantity
    quantityUnit{${PRODUCT_PROPERTY_SCHEMA}}
    currency{
        dataKey
        value {
            dataKey
            locale
            text
        }
    }
    exchangeRate
    unitPriceForeign
    unitPriceLocal
    invoiceQuantity
    invoiceQuantityUnit{${PRODUCT_PROPERTY_SCHEMA}}
    invoiceAmountForeign
    invoiceAmountLocal
    increasedPriceForeign
    increasedPriceLocal
    incotermsValueForeign
    incotermsValueLocal
    incotermsValueAssess
    shippingMark
    packageAmount
    packageUnit{${PRODUCT_PROPERTY_SCHEMA}}
    reImportationCertificate 
    boi 
    bond 
    bis19 
    reExport 
    freeZone 
    epz 
    serveral 
    exportDeclarationNo
    exportDeclarationLineNo
    assessQuantity
    exemptIncotermsLocal
    exciseNo
    exciseQuantity
    exciseQuantityUnit{${PRODUCT_PROPERTY_SCHEMA}}
    assessExciseQuantity
    lastEntry 
    status
    relocationRef
    productRelocation {
        _id
        ref
        reserve
        no
        date
        product {
            globalName
        }
        locationList {
            type
            quantity
            beforeProductNumber
            remark
            productionOrder {
              _id
            }
            declaration{
                _id
            }
            declarationDetail{
                _id
            }
            fromLocation {
                _id
            }
            toLocation {
                _id
            }
        }
        attachmentList
        status
    }
    productUpload {
        globalName
        localName
        code
    }
`

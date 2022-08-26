import cloneDeep from 'lodash/cloneDeep'
import isUndefined from 'lodash/isUndefined'
import omitBy from 'lodash/omitBy'

import type { ProfileAttribute } from 'graphql/interface'
import type { OrgProductLocationAPIPayload } from 'graphql/useGetProductLocation/interface'
import type { MasterDataSelection } from 'hooks/useMasterData/interface'
import type { AdminFinanceDocumentProductWithProductID } from 'components/AdminFinanceDocument/AdminFinanceDocumentTableForm'

interface SelectOption {
  label: string
  value: string
}

export const isDev = process.env.NODE_ENV === 'development'

export const fallBackValueTable = (value: string | number | undefined = '') => {
  if (typeof value === 'string') {
    return value.trim() ? value : '-'
  }
  return value ? value : '-'
}

export const checkDateThaiFallBackString = (date: Date | string) => {
  if (date) {
    return new Date(date).toLocaleDateString('th-TH', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }
  return '-'
}

export const checkDateFallBackString = (date: Date | string) => {
  if (date) {
    return new Date(date).toLocaleDateString('en-US')
  }
  return '-'
}

export const checkDurationFallBackString = (startDate: Date | string, endDate: Date | string) => {
  if (!startDate && !endDate) {
    return '-'
  }
  const start = new Date(startDate).toLocaleString('en-US', { year: 'numeric', month: 'numeric', day: 'numeric' })
  const end = new Date(endDate).toLocaleString('en-US', { year: 'numeric', month: 'numeric', day: 'numeric' })

  return `${start} - ${end}`
}

export const getMaximumAllocateProductQuantity = (locationList: OrgProductLocationAPIPayload[]): number => {
  if (locationList.length === 0) {
    return 0
  }

  return locationList.reduce((prev, cur) => prev + cur.remaining, 0)
}

export function filterUndefinedObjectValues<T extends object>(object: T): T {
  const cloneDeepObject = cloneDeep(omitBy(object, isUndefined)).valueOf() as T

  return cloneDeepObject
}

export const fallBackValueFullName = (attribute?: ProfileAttribute) => {
  if (attribute?.firstName && attribute?.lastName) {
    return `${attribute?.firstName} ${attribute?.lastName}`
  } else if (attribute?.firstName) {
    return attribute?.firstName
  } else if (attribute?.lastName) {
    return attribute?.lastName
  }
  return '-'
}

export const toSelectOptions = (masterData?: MasterDataSelection): SelectOption[] => {
  return masterData
    ? Object.values(masterData).map((item) => ({
        label: item.text,
        value: item.dataKey,
      }))
    : []
}

export const createFinanceDocumentForCreateOrUpdate = (
  values: any,
  key?: 'quotationNumber' | 'invoiceNumber',
  financeDocumentNumber?: string
) => {
  const result = {
    ...values,
    productList: values.productList.map(({ id, productID, ...rest }: AdminFinanceDocumentProductWithProductID) => ({
      ...rest,
      id: productID || id,
    })),
  }

  if (key == null) {
    return result
  }
  delete values._id
  return {
    ...values,
    [key]: financeDocumentNumber,
    productList: values.productList.map(({ id, productID, ...rest }: AdminFinanceDocumentProductWithProductID) => ({
      ...rest,
      id: productID || id,
    })),
  }
}

export const isAcceptQRCodeValue = (value: string) => {
  const regex = /^(FG|MC|SC|RM|IMP|EXP|PDO):[a-f\d]{21,24}$/gi

  return regex.test(value)
}

export const getQRBarcodeDestinationRoutePath = (id: string, type: string) => {
  const path = '/org/[orgToken]'

  switch (type) {
    case 'RM':
      return `${path}/product-raw-material/${id}`
    case 'MC':
      return `${path}/product-machine/${id}`
    case 'FG':
      return `${path}/product-finish-goods/${id}`
    case 'IMP':
      return `${path}/inbound-import-declaration/${id}/view-detail-all`
    case 'EXP':
      return `${path}/outbound-export-declaration/${id}/view-detail-all`
    case 'PDO':
      return `${path}/production-order/${id}/detail`
    default:
      return
  }
}

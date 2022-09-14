import type { CateogoryAPIPayload } from 'graphql/useGetCategory/interface'

type OrganizationStatusType =
  | 'APPROVED'
  | 'DECLINED'
  | 'REVIEWING'
  | 'BLOCKED'
  | 'CLOSED'
  | 'PREPARING'
  | 'NEED_MORE_INFORMATION'
  | 'REJECTED'
  | 'SUSPENDED'

export interface OrganizationAddress {
  province: string
  district: string
  subDistrict: string
  postCode: string
}

export interface OrganizationAPIPayload {
  name: string
  orgKey: string
  contactName: string
  attribute: any
  status: OrganizationStatusType
  contactEmailList: string[]
  categoryList: CateogoryAPIPayload[]
  location: {
    type: string
    coordinates: [number, number]
  }
  address: OrganizationAddress
  path: string
  createdAt: Date
  updatedAt: Date
}

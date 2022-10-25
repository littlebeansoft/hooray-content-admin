import { FormInstance } from 'antd'
import { GetAttributeResp } from 'graphql/useGetAttribute/interface'

export interface LeadDataProp {
  id: String
  prefixKey: String
  prefixName: String
  firstName: String
  lastName: String
  leadTypeKey: String
  leadTypeName: String
  organizationKey: String
  organizationName: String
  status: String
  telephone: String
  email: String
  createdAt: Date
  updatedAt: Date
  createBy: String
  updateBy: String
}

export interface AddressDataProp {
  orgKey: String
  refId: String
  address: String
  subDistrict: String
  district: String
  province: String
  postcode: String
  country: String
  latitude: String
  longitude: String
  addressType: String
  defaultSend: String
}

export interface AttributeCreateFormProps {
  attribute?: GetAttributeResp
  form: FormInstance<any>
  loading?: boolean
  onFinish?: (fieldValue: any) => void
  onCancel?: () => void
}

export interface AttributeUpdateProps {
  attribute?: GetAttributeResp
  loading?: boolean
}
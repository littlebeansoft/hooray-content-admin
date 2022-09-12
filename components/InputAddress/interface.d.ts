import { FormInstance } from 'antd'
import { LeadAddressRESP } from 'graphql/interface'

export interface InputAddressProps {
  form?: FormInstance<any>
  loading?: boolean
  onFinish?: (fieldValue: any) => void
  onCancel?: () => void
  addressRes?: LeadAddressRESP
}

import { FormInstance } from 'antd'
import { LeadAddressRESP } from 'graphql/interface'

export interface InputAddressProps {
  form?: FormInstance<LeadAddressRESP> | null
  loading?: boolean
  onFinish?: (fieldValue: any) => void
  onCancel?: () => void
  addressRes?: LeadAddressRESP
}

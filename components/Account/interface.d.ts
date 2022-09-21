import { FormInstance } from 'antd'

export interface AccountCreateFormProps {
  account?: any
  form: FormInstance<any>
  loading?: boolean
  onFinish?: (fieldValue: any) => void
  onCancel?: () => void
  edit?: boolean
}

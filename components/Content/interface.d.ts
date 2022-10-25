import { FormInstance } from 'antd'

export interface ContentCreateFormProps {
  data?: any
  form: FormInstance<any>
  loading?: boolean
  onFinish?: (fieldValue: any) => void
  onCancel?: () => void
}
F

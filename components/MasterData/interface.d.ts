import { FormInstance } from 'antd'
export interface ContactFormProps {
  form: FormInstance<any>
  loading?: boolean
  onFinish?: (fieldValue: any) => void
  onCancel?: () => void
}

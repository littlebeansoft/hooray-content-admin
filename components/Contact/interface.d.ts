import { FormInstance } from 'antd'
import { ContactResponse } from 'graphql/interface'

export interface ContactCreateFormProps {
  data?: ContactResponse
  form: FormInstance<any>
  loading?: boolean
  onFinish?: (fieldValue: any) => void
  onCancel?: () => void
  edit?: boolean
}

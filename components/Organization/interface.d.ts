
import { FormInstance} from 'antd'

export interface OrganizationCreateFormProps {
    product?: any
    form: FormInstance<any>
    loading?: boolean
    onFinish?: (fieldValue: any) => void
    onCancel?: () => void
  }
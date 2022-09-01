
export interface ProductCreateFormProps {
    product?: any
    form: FormInstance<any>
    loading?: boolean
    onFinish?: (fieldValue: any) => void
    onCancel?: () => void
  }
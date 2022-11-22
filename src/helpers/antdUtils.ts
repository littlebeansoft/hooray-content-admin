import type { Rule } from 'antd/es/form'

import { FormProps } from 'antd'

export const baseFormProps: FormProps = {
  layout: 'vertical',
  colon: false,
}

export const ruleRequired: Rule = {
  required: true,
  message: 'โปรดระบุ',
}

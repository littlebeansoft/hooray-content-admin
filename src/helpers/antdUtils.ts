import type { Rule } from 'antd/lib/form'

import { FormProps } from 'antd'

export const baseFormProps: FormProps = {
  layout: 'vertical',
  colon: false,
}

export const ruleRequired: Rule = {
  required: true,
  message: 'โปรดระบุ',
}

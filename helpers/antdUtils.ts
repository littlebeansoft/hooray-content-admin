import { FormProps } from 'antd'
import { Rule } from 'antd/lib/form'

interface AntdOption {
  label: string
  value: string
}

export const commonFormProps: FormProps = {
  layout: 'vertical',
  colon: true,
}

export const ruleRequired: Rule = {
  required: true,
  message: 'Required',
}

export const onFilterSelect = (input: string, option?: AntdOption) =>
  option?.label ? option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0 : false

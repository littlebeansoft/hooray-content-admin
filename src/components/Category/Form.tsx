import { Button, Col, Form, FormInstance, Row } from 'antd'

import BottomActionBar from 'components/BottomActionBar'
import CategoryFormGeneral from './FormGeneral'
import CategoryFormSetting from './FormSetting'

import { baseFormProps } from 'helpers/antdUtils'

import { EnabledStatus } from 'graphql/__generated/operations'

import type { QR_GetCategoryResult } from 'graphql/queryResponseTypes'

interface FormValues extends QR_GetCategoryResult {
  active?: boolean
}

interface CategoryFormProps {
  loading?: boolean
  form: FormInstance<FormValues>
  onFinish?: (values: FormValues) => void
}

const { useForm, useFormInstance } = Form

const CategoryForm = ({ loading, form, onFinish }: CategoryFormProps) => {
  const handleBeforeOnFinish = ({ active, ...values }: FormValues) => {
    const status = active ? EnabledStatus.Enabled : EnabledStatus.Disabled

    const result = {
      ...values,
      status,
    }

    onFinish?.(result)
  }

  return (
    <Form {...baseFormProps} form={form} onFinish={handleBeforeOnFinish}>
      <Row gutter={32}>
        <Col span={16}>
          <CategoryFormGeneral />
        </Col>
        <Col span={8}>
          <CategoryFormSetting />
        </Col>
      </Row>

      <BottomActionBar visible>
        <div
          style={{
            textAlign: 'right',
          }}
        >
          <Button loading={loading} type="primary" htmlType="submit">
            บันทึก
          </Button>
        </div>
      </BottomActionBar>
    </Form>
  )
}

export default CategoryForm

export const useParentFormInstance = () => useForm<FormValues>()

export const useChildFormInstance = () => useFormInstance<FormValues>()

export const createInitialValues = (category: FormValues): any => {
  return {
    ...category,
    active: category.status === EnabledStatus.Enabled ? true : false,
  }
}

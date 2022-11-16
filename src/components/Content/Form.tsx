import { Button, Col, Form, FormInstance, Row } from 'antd'

import BottomActionBar from 'components/BottomActionBar'
import ContentFormGeneral from './FormGeneral'

import { baseFormProps } from 'helpers/antdUtils'

import type { QR_GetContentPackByIDResult as FormValues } from 'graphql/queryResponseTypes'

const { useForm, useFormInstance } = Form

interface ContentFormProps {
  loading?: boolean
  form: FormInstance<FormValues>
}

const ContentForm = ({ loading, form }: ContentFormProps) => {
  return (
    <Form {...baseFormProps} form={form} onFinish={console.log}>
      <Row gutter={32}>
        <Col span={16}>
          <ContentFormGeneral />
        </Col>
      </Row>

      <BottomActionBar>
        <Button type="primary" htmlType="submit" loading={loading}>
          บันทึก
        </Button>
      </BottomActionBar>
    </Form>
  )
}

export default ContentForm

export const useParentFormInstance = () => useForm<FormValues>()

export const useChildFormInstance = () => useFormInstance<FormValues>()

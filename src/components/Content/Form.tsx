import { Button, Col, Form, FormInstance, Row } from 'antd'

import BottomActionBar from 'components/BottomActionBar'
import ContentFormGeneral from './FormGeneral'
import ContentFormSetting from './FormSetting'
import ContentFormPrice from './FormPrice'
import FormCreator from './FormCreator'

import { baseFormProps } from 'helpers/antdUtils'

import type { QR_GetContentPackByIDResult as FormValues } from 'graphql/queryResponseTypes'

const { useForm, useFormInstance } = Form

interface ContentFormProps {
  loading?: boolean
  form: FormInstance<FormValues>
  onFinish?: (values: FormValues) => void
}

const ContentForm = ({ loading, form, onFinish }: ContentFormProps) => {
  return (
    <Form {...baseFormProps} form={form} onFinish={onFinish}>
      <Row gutter={32}>
        <Col span={16}>
          <ContentFormGeneral />
        </Col>
        <Col span={8}>
          <FormCreator />

          <ContentFormSetting />

          <ContentFormPrice />
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

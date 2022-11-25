import { Button, Col, Form, FormInstance, Row } from 'antd'

import BottomActionBar from 'components/BottomActionBar'
import ContentFormGeneral from './FormGeneral'
import ContentPackFormSetting from './FormSetting'
import ContentFormDocument from './FormDocument'
import ContentFormVideo from './FormVideo'

import { baseFormProps } from 'helpers/antdUtils'

import type { QR_GetContentByIDResult as FormValues } from 'graphql/queryResponseTypes'

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
          <ContentPackFormSetting />

          <ContentFormVideo />

          <ContentFormDocument />
        </Col>
      </Row>

      <BottomActionBar visible>
        <div style={{ textAlign: 'right' }}>
          <Button loading={loading} type="primary" htmlType="submit">
            บันทึก
          </Button>
        </div>
      </BottomActionBar>
    </Form>
  )
}

export default ContentForm

export const useParentFormInstance = () => useForm()

export const useChildFormInstance = () => useFormInstance()

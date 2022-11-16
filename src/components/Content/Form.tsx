import { Col, Dropdown, Form, FormInstance, Input, Row } from 'antd'
import { CaretUpOutlined } from '@ant-design/icons'

import BottomActionBar from 'components/BottomActionBar'
import ContentFormGeneral from './FormGeneral'
import ContentFormSetting from './FormSetting'
import ContentFormPrice from './FormPrice'
import FormCreator from './FormCreator'

import { baseFormProps } from 'helpers/antdUtils'

import { Status } from 'graphql/__generated/operations'

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
      <Form.Item hidden>
        <Form.Item name="status">
          <Input />
        </Form.Item>
      </Form.Item>

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
        <div
          style={{
            textAlign: 'right',
          }}
        >
          <Dropdown.Button
            size="large"
            placement="topLeft"
            menu={{
              items: [
                {
                  key: 'saveAndRequest',
                  label: 'บันทึกแล้วส่งให้แอดมินตรวจสอบ',
                  onClick: () => {
                    form.setFieldValue('status', Status.Reviewing)

                    form.submit()
                  },
                },
              ],
            }}
            type="primary"
            loading={loading}
            icon={<CaretUpOutlined />}
            onClick={() => {
              form.setFieldValue('status', Status.Draft)

              form.submit()
            }}
          >
            บันทึก
          </Dropdown.Button>
        </div>
      </BottomActionBar>
    </Form>
  )
}

export default ContentForm

export const useParentFormInstance = () => useForm<FormValues>()

export const useChildFormInstance = () => useFormInstance<FormValues>()

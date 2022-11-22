import { Col, Dropdown, Form, FormInstance, Input, Row } from 'antd'
import { CaretUpOutlined } from '@ant-design/icons'

import BottomActionBar from 'components/BottomActionBar'
import ContentPackFormGeneral from './FormGeneral'
import ContentPackFormSetting from './FormSetting'
import ContentPackFormPrice from './FormPrice'
import ContentPackFormCreator from './FormCreator'

import { baseFormProps } from 'helpers/antdUtils'

import { Status } from 'graphql/__generated/operations'

import type { QR_GetContentPackByIDResult as FormValues } from 'graphql/queryResponseTypes'

const { useForm, useFormInstance } = Form

interface ContentPackFormProps {
  loading?: boolean
  form: FormInstance<FormValues>
  onFinish?: (values: FormValues) => void
}

const ContentPackForm = ({ loading, form, onFinish }: ContentPackFormProps) => {
  return (
    <Form {...baseFormProps} form={form} onFinish={onFinish}>
      <Form.Item hidden>
        <Form.Item name="status">
          <Input />
        </Form.Item>
      </Form.Item>

      <Row gutter={32}>
        <Col span={16}>
          <ContentPackFormGeneral />
        </Col>
        <Col span={8}>
          <ContentPackFormCreator />

          <ContentPackFormSetting />

          <ContentPackFormPrice />
        </Col>
      </Row>

      <BottomActionBar visible>
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

export default ContentPackForm

export const useParentFormInstance = () => useForm<FormValues>()

export const useChildFormInstance = () => useFormInstance<FormValues>()

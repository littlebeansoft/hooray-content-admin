import { Button, Form, Input, Typography } from 'antd'
import FullWidthSpace from 'components/FullWidthSpace'
import UploadImage from 'components/UploadImage'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { ContentCreateFormProps } from '../interface'

const { Title } = Typography

const ContentCreateForm: React.FC<ContentCreateFormProps> = ({ data, form, loading, onFinish, onCancel }) => {
  const { t, i18n } = useTranslation()
  const handleFinished = (values: any) => {
    onFinish?.({
      ...values,
    })
  }

  return (
    <Form
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 18 }}
      id="content-pack"
      name="content-pack"
      form={form}
      onFinish={handleFinished}
      onValuesChange={() => {}}
      labelAlign="left"
      // onFieldsChange={() => {
      //   setChoices(form.getFieldValue('choices'))
      // }}
    >
      <Title level={5} style={{ color: '#2699FB', marginBottom: 30 }}>
        ข้อมูล Content
      </Title>
      <Form.Item name="name" label={t('content:card:name')} rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <UploadImage aclType="PUBLIC" allowFileExtensions={''} />

      <Form.Item>
        {/* <FullWidthSpace style={{ display: 'flex' }}> */}
        <Button type="primary" htmlType="submit" loading={loading} style={{ minWidth: '10em' }}>
          Save
        </Button>
        {/* </FullWidthSpace> */}
      </Form.Item>
    </Form>
  )
}

export default ContentCreateForm

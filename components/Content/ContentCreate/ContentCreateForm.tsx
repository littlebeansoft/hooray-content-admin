import { Button, Form, Input, Select, Switch, Typography } from 'antd'
import FullWidthSpace from 'components/FullWidthSpace'
import UploadImage from 'components/UploadImage'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { ContentCreateFormProps } from '../interface'
import { allowFileExtensionsImage } from 'config'
import { STATUS } from 'constant/option'

const { Title } = Typography

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
}

const formLayout = {}

const ContentCreateForm: React.FC<ContentCreateFormProps> = ({ data, form, loading, onFinish, onCancel }) => {
  const { t, i18n } = useTranslation()

  const tempCategory = [
    {
      label: 'Fantasy',
      value: 'fantasy',
    },
    {
      label: 'Fairytale',
      value: 'fairytale',
    },
    {
      label: 'Programmer',
      value: 'programmer',
    },
    {
      label: 'Game',
      value: 'game',
    },
  ]
  const tempCreator = [
    {
      label: 'Steven',
      value: 'steven',
    },
    {
      label: 'Mark',
      value: 'mark',
    },
    {
      label: 'Spiderman',
      value: 'spiderman',
    },
    {
      label: 'Ironman',
      value: 'ironman',
    },
  ]

  const statusOption = [
    {
      label: t('global:status:active'),
      value: STATUS.ACTIVE,
    },
    {
      label: t('global:status:inActive'),
      value: STATUS.INACTIVE,
    },
  ]

  const handleFinished = (values: any) => {
    onFinish?.({
      ...values,
    })
  }

  return (
    <Form
      {...layout}
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
        {t('content:form:title:content')}
      </Title>
      <Form.Item name="name" label={t('content:form:coverImage')}>
        <UploadImage isEdit allowFileExtensions={allowFileExtensionsImage} />
      </Form.Item>
      <Form.Item name="name" label={t('content:form:thumbnail')}>
        <UploadImage isEdit allowFileExtensions={allowFileExtensionsImage} />
      </Form.Item>
      <Form.Item name="name" label={t('content:form:name')}>
        <Input />
      </Form.Item>
      <Form.Item name="description" label={t('content:form:description')}>
        <Input />
      </Form.Item>

      <Form.Item name="creator" label={t('content:form:creator')}>
        <Select
          options={tempCreator}
          mode="multiple"
          allowClear
          style={{ width: '100%' }}
          placeholder="Please select"
          // defaultValue={['a10', 'c12']}
          onChange={() => {}}
        />
      </Form.Item>

      <Form.Item name="category" label={t('content:form:category')}>
        <Select
          options={tempCategory}
          mode="multiple"
          allowClear
          style={{ width: '100%' }}
          placeholder="Please select"
          // defaultValue={['a10', 'c12']}
          onChange={() => {}}
        />
      </Form.Item>
      <Form.Item name="recommend" valuePropName="recommend" label={t('content:form:recommend')}>
        <Switch />
      </Form.Item>
      <Form.Item name="status" label={t('content:form:status')} rules={[{ required: true }]}>
        <Select
          defaultValue={STATUS.ACTIVE}
          options={statusOption}
          onChange={(value) => {
            console.log(value)
          }}
        />
      </Form.Item>
      <Form.Item>
        {/* <FullWidthSpace style={{ display: 'flex' }}> */}
        <Button type="primary" htmlType="submit" loading={loading} style={{ minWidth: '10em' }}>
          {t('global:button:save')}
        </Button>
        {/* </FullWidthSpace> */}
      </Form.Item>
    </Form>
  )
}

export default ContentCreateForm

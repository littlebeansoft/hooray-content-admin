import { PlusCircleOutlined } from '@ant-design/icons'
import { Button, DatePicker, Form, Input, Select, Spin, Typography } from 'antd'
import FullWidthSpace from 'components/FullWidthSpace'
import UploadImage from 'components/UploadImage'
import UploadFileDocument from 'components/UploadFileDocument'
import { allowFileExtensionsDocument, allowFileExtensionsImage } from 'config'
import React, { useEffect, useState } from 'react'
import { LeadCreateFormProps } from '../interface'

const { TextArea } = Input
const { Option } = Select

const { Title } = Typography

const ruleRequired = {
  required: true,
  message: 'Required',
}

const LeadCreateForm: React.FC<LeadCreateFormProps> = ({ product, form, loading, onFinish, onCancel }) => {
  const handleFinished = (values: any) => {
    onFinish?.({
      ...values,
    })
  }

  const children: React.ReactNode[] = []
  for (let i = 10; i < 36; i++) {
    children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>)
  }

  const handleChange = (value: string[]) => {
    console.log(`selected ${value}`)
  }

  return (
    <Form
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 20 }}
      id="content-pack"
      name="content-pack"
      form={form}
      onFinish={handleFinished}
      onValuesChange={() => {}}
      labelAlign="left"
    >
      <Title level={5} style={{ color: '#2699FB', marginBottom: 30 }}>
        ข้อมูล Lead
      </Title>
      <Form.Item name="status" label="Status">
        <Select
          //showSearch
          allowClear
          showArrow
          style={{ width: 207 }}
          placeholder="Please Select"
          // onSearch={categoryProperty.onSearch}
          filterOption={false}
          //  notFoundContent={categoryProperty.loading ? <Spin size="small" /> : null}
          // options={categoryProperty.options}
        />
      </Form.Item>

      <Form.Item name="categoryName" label="ชื่อหมวดหมู่" rules={[ruleRequired]}>
        <Input placeholder="ชื่อหมวดหมู่" style={{ width: 221 }} />
      </Form.Item>
      <Form.Item name="categoryParent" label="Category Parent">
        <Select
          showSearch
          allowClear
          showArrow
          style={{ width: 207 }}
          placeholder="Please Select"
          // onSearch={categoryProperty.onSearch}
          filterOption={false}
          //  notFoundContent={categoryProperty.loading ? <Spin size="small" /> : null}
          // options={categoryProperty.options}
        />
      </Form.Item>
      <Form.Item name="property" label="property">
        <Select
          mode="multiple"
          allowClear
          style={{ width: 207 }}
          placeholder="Please Select"
          onChange={handleChange}
          showSearch
          // onSearch={categoryProperty.onSearch}
          filterOption={false}
          //  notFoundContent={categoryProperty.loading ? <Spin size="small" /> : null}
          // options={categoryProperty.options}
        >
          {children}
        </Select>
      </Form.Item>
      <Form.Item>
        <FullWidthSpace style={{ display: 'flex' }}>
          <Button
            type="primary"
            htmlType="submit"
            loading={loading}
            style={{ minWidth: '10em' }}
            icon={<PlusCircleOutlined />}
          >
            Save
          </Button>
        </FullWidthSpace>
      </Form.Item>
    </Form>
  )
}

export default LeadCreateForm

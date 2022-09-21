import { PlusCircleOutlined } from '@ant-design/icons'
import { Button, DatePicker, Form, Input, Select, Spin, Typography } from 'antd'
import FullWidthSpace from 'components/FullWidthSpace'
import UploadImage from 'components/UploadImage'
import UploadFileDocument from 'components/UploadFileDocument'
import { allowFileExtensionsDocument, allowFileExtensionsImage } from 'config'
import React, { useEffect, useState } from 'react'
import { AccountCreateFormProps } from '../interface'
import { accountTypeOptions, leadTypeOptions } from 'constant/option'
import CategorySelectInput from 'components/CategorySelectInput/CategorySelectInput'
import InputAddress from 'components/InputAddress/InputAddress'

const { TextArea } = Input
const { Option } = Select

const { Title } = Typography

const ruleRequired = {
  required: true,
  message: 'Required',
}

const AccountCreateForm: React.FC<AccountCreateFormProps> = ({ account, form, loading, onFinish, onCancel }) => {
  const handleFinished = (values: any) => {
    onFinish?.({
      ...values,
    })
  }

  return (
    <Form
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 18 }}
      id="content-pack"
      name="content-pack"
      form={form}
      onFinish={handleFinished}
      onValuesChange={() => {}}
      labelAlign="left"
    >
      <Title level={5} style={{ color: '#2699FB', marginBottom: 30, marginTop: 30 }}>
        ข้อมูลหน่วยงาน
      </Title>
      <Form.Item name="fileList" label="รูปโรงงาน">
        <UploadImage isEdit allowFileExtensions={allowFileExtensionsImage} />
      </Form.Item>
      <Form.Item name="imageList" label="รูปภาพ สินค้าที่ขาย">
        <UploadImage isEdit allowFileExtensions={allowFileExtensionsImage} />
      </Form.Item>
      <Form.Item name="status" label="Status" rules={[ruleRequired]}>
        <Select
          //showSearch
          allowClear
          showArrow
          style={{ width: 207 }}
          placeholder="Please Select"
          // onSearch={categoryProperty.onSearch}
          filterOption={false}
          //  notFoundContent={categoryProperty.loading ? <Spin size="small" /> : null}
          options={accountTypeOptions}
        />
      </Form.Item>
      <Form.Item name="accountType" label="ประเภท(หน่วยงาน)" rules={[ruleRequired]}>
        <Select
          //showSearch
          allowClear
          showArrow
          style={{ width: 207 }}
          placeholder="Please Select"
          // onSearch={categoryProperty.onSearch}
          filterOption={false}
          //  notFoundContent={categoryProperty.loading ? <Spin size="small" /> : null}
          options={leadTypeOptions}
        />
      </Form.Item>
      <CategorySelectInput />
      <Form.Item name="name" label="ชื่อโรงงาน" rules={[ruleRequired]}>
        <Input placeholder="ชื่อโรงงาน" style={{ width: 221 }} />
      </Form.Item>
      <Form.Item name="phone" label="เบอร์โทรศัพท์มือถือ" rules={[ruleRequired]}>
        <Input placeholder="เบอร์โทรศัพท์มือถือ" style={{ width: 221 }} />
      </Form.Item>
      <Form.Item name="email" label="อีเมล" rules={[ruleRequired]}>
        <Input placeholder="Email" style={{ width: 221 }} />
      </Form.Item>
      <Form.Item name="website" label="เว็บไซต์">
        <Input placeholder="เว็บไซต์" style={{ width: 221 }} />
      </Form.Item>
      <Form.Item name="addressNo" label="ที่อยุ่">
        <TextArea rows={2} style={{ width: 395 }} />
      </Form.Item>
      <InputAddress />
      <Title level={5} style={{ color: '#2699FB', marginBottom: 30, marginTop: 30 }}>
        ข้อมูลเพิ่มเติม
      </Title>
      <Form.Item name="note" label="โน๊ต">
        <TextArea rows={2} style={{ width: 395 }} />
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

export default AccountCreateForm

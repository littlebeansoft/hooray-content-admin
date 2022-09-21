import { PlusCircleOutlined } from '@ant-design/icons'
import { Button, Col, DatePicker, Form, Input, Row, Select, Spin, Typography } from 'antd'
import FullWidthSpace from 'components/FullWidthSpace'
import UploadImage from 'components/UploadImage'
import UploadFileDocument from 'components/UploadFileDocument'
import { allowFileExtensionsDocument, allowFileExtensionsImage } from 'config'
import React, { useEffect, useState } from 'react'
import { UserCreateFormProps } from '../interface'
import InputAddress from 'components/InputAddress/InputAddress'
import { leadStatusOptions, leadTypeOptions } from 'constant/option'

const { TextArea } = Input
const { Option } = Select

const { Title } = Typography

const ruleRequired = {
  required: true,
  message: 'Required',
}

const UserCreateForm: React.FC<UserCreateFormProps> = ({ product, form, loading, onFinish, onCancel }) => {
  const [leadType, setLeadType] = useState('')

  const handleFinished = (values: any) => {
    onFinish?.({
      ...values,
    })
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
      autoComplete="off"
    >
      <Title level={5} style={{ color: '#2699FB', marginBottom: 30 }}>
        ข้อมูล Contact
      </Title>
      <Form.Item name="image" label="Profile Image">
        <UploadImage isEdit allowFileExtensions={allowFileExtensionsImage} maximumUploadItems={1} />
      </Form.Item>
      <Form.Item name="contactType" label="Contact Type" rules={[ruleRequired]}>
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
          onSelect={(value: string, values: any) => {
            setLeadType(values.text)
          }}
        />
      </Form.Item>
      <Form.Item name="firstName" label="First Name" rules={[ruleRequired]}>
        <Input placeholder="First Name" style={{ width: 221 }} />
      </Form.Item>
      <Form.Item name="lastName" label="Last Name" rules={[ruleRequired]}>
        <Input placeholder="Last Name" style={{ width: 221 }} />
      </Form.Item>
      <Form.Item name="citizenId" label="Citizen ID" rules={[ruleRequired]}>
        <Input placeholder="Citizen ID" style={{ width: 221 }} />
      </Form.Item>
      <Form.Item name="phone" label="Phone Number" rules={[ruleRequired]}>
        <Input placeholder="Phone Number" style={{ width: 221 }} />
      </Form.Item>
      <Form.Item name="email" label="Email" rules={[ruleRequired]}>
        <Input type={'email'} placeholder="Email" style={{ width: 221 }} />
      </Form.Item>
      <Title level={5} style={{ color: '#2699FB', marginBottom: 30, marginTop: 30 }}>
        ข้อมูลหน่วยงาน
      </Title>
      <Form.Item name="factoryImages" label="รูปโรงงาน">
        <UploadImage isEdit allowFileExtensions={allowFileExtensionsImage} />
      </Form.Item>
      <Form.Item name="productImages" label="รูปภาพ สินค้าที่ขาย">
        <UploadImage isEdit allowFileExtensions={allowFileExtensionsImage} />
      </Form.Item>
      {/* <Row style={{ marginBottom: 20 }}>
        <Col span={4}>
          <Typography>ประเภทโรงงาน</Typography>
        </Col>
        <Col span={20}>{leadType}</Col>
      </Row> */}

      {/* <Form.Item name="productType" label="ประเภทสินค้า">
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
          </Form.Item> */}
      {/* <Form.Item name="organizationName" label="ชื่อโรงงาน" rules={[ruleRequired]}>
        <Input placeholder="ชื่อโรงงาน" style={{ width: 221 }} />
      </Form.Item> */}
      <Form.Item name="addressNo" label="ที่อยุ่">
        <TextArea rows={2} style={{ width: 395 }} />
      </Form.Item>
      <InputAddress />
      {/* <Title level={5} style={{ color: '#2699FB', marginBottom: 30, marginTop: 30 }}>
        ข้อมูลเพิ่มเติม
      </Title> */}
      {/* <Form.Item name="remark" label="โน๊ต">
        <TextArea rows={2} style={{ width: 395 }} />
      </Form.Item> */}
      {/* <Form.Item name="attachmentList" label="ไฟล์">
      <UploadFileDocument isEdit allowFileExtensions={allowFileExtensionsDocument} />
    </Form.Item> */}
      <Form.Item>
        <FullWidthSpace style={{ display: 'flex' }}>
          <Button
            type="primary"
            htmlType="submit"
            loading={loading}
            style={{ minWidth: '10em', marginTop: 20 }}
            icon={<PlusCircleOutlined />}
          >
            Save
          </Button>
        </FullWidthSpace>
      </Form.Item>
    </Form>
  )
}

export default UserCreateForm

import { PlusCircleOutlined } from '@ant-design/icons'
import { Button, Col, DatePicker, Form, Input, Row, Select, Spin, Typography } from 'antd'
import UploadImage from 'components/UploadImage'
import { allowFileExtensionsImage } from 'config'
import React, { useEffect, useState } from 'react'
import ProductListSelect from './ProductListSelect'

const { TextArea } = Input
const { Option } = Select

const { Title } = Typography

const ruleRequired = {
  required: true,
  message: 'Required',
}

const ProductInformationForm: React.FC = () => {
  return (
    <>
      <Title level={5} style={{ color: '#2699FB', marginBottom: 30 }}>
        ข้อมูลสินค้า
      </Title>
      <Form.Item name="productImage" label="Product Image">
        <UploadImage isEdit allowFileExtensions={allowFileExtensionsImage} maximumUploadItems={5} />
      </Form.Item>
      <Form.Item name="productName" label="ชื่อสินค้า" rules={[ruleRequired]}>
        <Input placeholder="ชื่อสินค้า" style={{ width: 395 }} showCount maxLength={120} />
      </Form.Item>
      <Form.Item name="description" label="คำอธิบาย">
        <TextArea rows={2} style={{ width: 395 }} maxLength={5000} showCount autoSize />
      </Form.Item>
      <Form.Item name="imageDiscription" label="รูปอธิบายสินค้า">
        <UploadImage isEdit allowFileExtensions={allowFileExtensionsImage} maximumUploadItems={5} />
      </Form.Item>
      <Form.Item name="country" label="หมวดหมู่สินค้า">
        <ProductListSelect />
      </Form.Item>
    </>
  )
}

export default ProductInformationForm

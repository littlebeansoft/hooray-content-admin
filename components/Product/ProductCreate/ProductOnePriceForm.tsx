import { PlusCircleOutlined } from '@ant-design/icons'
import { Button, Col, DatePicker, Form, Input, Row, Select, Spin, Typography } from 'antd'
import FullWidthSpace from 'components/FullWidthSpace'
import UploadImage from 'components/UploadImage'
import UploadFileDocument from 'components/UploadFileDocument'
import { allowFileExtensionsDocument, allowFileExtensionsImage } from 'config'
import React, { useEffect, useState } from 'react'
import { ProductCreateFormProps } from '../interface'
import ProductListSelect from './ProductListSelect'
import ProductPropertyForm from './ProductPropertyForm'

const { TextArea } = Input
const { Option } = Select

const { Title } = Typography

const ruleRequired = {
  required: true,
  message: 'Required',
}

interface ProductOnePriceFornProp {
  setChoicesPrice: Function
}

const ProductOnePriceForm: React.FC<ProductOnePriceFornProp> = ({ setChoicesPrice }) => {
  return (
    <>
      <Row align="middle" style={{ marginBottom: '30px' }}>
        <Col xl={6} sm={24}>
          <Typography>ตัวเลือกสินค้า</Typography>
        </Col>
        <Col xl={18} sm={24}>
          <Button
            type="dashed"
            icon={<PlusCircleOutlined />}
            style={{ borderColor: 'rgb(38 153 251)', color: 'rgb(38 153 251)', width: '50%' }}
            onClick={() => {
              setChoicesPrice(true)
            }}
          >
            เปิดใช้งานตัวเลือกสินค้า
          </Button>
        </Col>
      </Row>
      <Form.Item name="price" label="ราคา" rules={[ruleRequired]}>
        <Input placeholder="ราคา" style={{ width: 217 }} />
      </Form.Item>
      <Form.Item name="stock" label="สต๊อก" rules={[ruleRequired]}>
        <Input placeholder="ราคา" style={{ width: 217 }} />
      </Form.Item>
    </>
  )
}

export default ProductOnePriceForm

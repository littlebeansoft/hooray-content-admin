import { PlusCircleOutlined } from '@ant-design/icons'
import { Button, Form, Typography } from 'antd'
import FullWidthSpace from 'components/FullWidthSpace'
import React, { useEffect, useState } from 'react'
import { ProductCreateFormProps } from '../interface'
import ProductInformationForm from './ProductInfomationForm'
import ProductPropertyForm from './ProductPropertyForm'

import ProductManyPriceChoice from './ProducManyPriceChoice'

const { Title } = Typography

const ProductCreateForm: React.FC<ProductCreateFormProps> = ({ product, form, loading, onFinish, onCancel }) => {
  const [choices, setChoices] = useState<any>([])

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
      onFieldsChange={() => {
        //console.log("Choices", form.getFieldValue('choices'));
        setChoices(form.getFieldValue('choices'))
      }}
    >
      <ProductInformationForm />
      <ProductPropertyForm />
      <Title level={5} style={{ color: '#2699FB', marginBottom: 30 }}>
        ตัวเลือราคาสินค้า
      </Title>
      <ProductManyPriceChoice form={form} choices={choices} />
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

export default ProductCreateForm

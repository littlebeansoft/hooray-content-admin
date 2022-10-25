import { MinusCircleOutlined, PlusOutlined, DeleteOutlined } from '@ant-design/icons'
import { Button, Col, Form, FormInstance, Input, Row, Space, Typography } from 'antd'
import React, { Fragment, useEffect, useState } from 'react'
import ProductManyPriceForm from './ProductManyPriceForm'

interface ProductManyPriceChoiceProps {
  form: FormInstance
  choices: any
}

const ProductManyPriceChoice: React.FC<ProductManyPriceChoiceProps> = ({ form, choices }) => {
  const [count, setCount] = useState(0)

  return (
    <>
      <Form.List name="choices">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, ...restField }) => (
              <Fragment key={key}>
                <Row>
                  <Col span={6}>ตัวเลือก {name + 1}</Col>
                  <Col span={18}>
                    <Space
                      key={key}
                      style={{ display: 'flex', marginBottom: 8, flexDirection: 'column' }}
                      align="baseline"
                    >
                      <Space style={{ display: 'flex' }} align="baseline">
                        <Form.Item
                          {...restField}
                          name={[name, 'name']}
                          fieldKey={[key, 'name']}
                          rules={[{ required: true, message: 'Missing first name' }]}
                          label="ชื่อตัวเลือก"
                        >
                          <Input style={{ marginLeft: 20 }} placeholder="First Name" />
                        </Form.Item>
                        <DeleteOutlined style={{ marginLeft: 20, fontSize: 16 }} onClick={() => remove(name)} />
                      </Space>
                      <ProductManyPriceForm name={name} form={form} choice={choices[name]?.choice} />
                    </Space>
                  </Col>
                </Row>
              </Fragment>
            ))}
            <Row>
              <Col span={6}></Col>
              <Col span={18}>
                <Form.Item>
                  <Button
                    type="dashed"
                    block
                    icon={<PlusOutlined />}
                    style={{
                      borderColor: 'rgb(38 153 251)',
                      color: 'rgb(38 153 251)',
                      width: '100%',
                    }}
                    onClick={() => add()}
                  >
                    เพิ่ม
                  </Button>
                </Form.Item>
              </Col>
            </Row>
          </>
        )}
      </Form.List>
    </>
  )
}

export default ProductManyPriceChoice

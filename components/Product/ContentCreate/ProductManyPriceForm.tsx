import { MinusCircleOutlined, PlusOutlined, DeleteOutlined, DragOutlined } from '@ant-design/icons'
import { Button, Col, Form, FormInstance, Input, List, Row, Space, Typography } from 'antd'
import React, { Fragment, useEffect, useState } from 'react'
import ReactDragListView from 'react-drag-listview'
import { move } from 'utils/utils'

interface ProductManyPriceFormProps {
  name: number
  form: FormInstance
  choice: any
}

const ProductManyPriceForm: React.FC<ProductManyPriceFormProps> = ({ name, form, choice }) => {
  const [formData, setFormData] = useState<any>([])

  const onDragEnd = (fromIndex: any, toIndex: any, index: number) => {
    if (toIndex < 0) return
    if (!choice) return
    // console.log("formData", choice)
    const newData = move(choice, fromIndex, toIndex)
    form.setFieldsValue({
      radios: newData,
    })
  }

  return (
    <>
      <Form.List name={[name, 'choice']}>
        {(fields, { add, remove }) => (
          <Fragment key={name}>
            <ReactDragListView
              nodeSelector=".ant-list-item.draggable-item"
              lineClassName="dragLine"
              onDragEnd={(fromIndex, toIndex) => onDragEnd(fromIndex, toIndex, fromIndex)}
              key={name}
            >
              {fields.map((field, index) => (
                <List.Item key={index} style={{}} className="draggable-item">
                  <Space key={field.key} align="baseline">
                    <Form.Item
                      {...field}
                      label="ตัวเลือก"
                      fieldKey={[field.key, 'item']}
                      name={[field.name, 'item']}
                      className="form-item"
                    >
                      <Input style={{ marginLeft: 25 }} />
                    </Form.Item>
                    <DragOutlined style={{ marginLeft: 30 }} className="icon" />
                    <DeleteOutlined onClick={() => remove(field.name)} />
                  </Space>
                </List.Item>
              ))}
            </ReactDragListView>
            <Space style={{ display: 'flex', marginBottom: 8 }} align="baseline">
              <Form.Item>
                <Button
                  type="dashed"
                  block
                  icon={<PlusOutlined />}
                  style={{
                    borderColor: 'rgb(38 153 251)',
                    color: 'rgb(38 153 251)',
                    width: 210,
                    marginLeft: 90,
                  }}
                  onClick={() => add()}
                >
                  เพิ่มตัวเลือก
                </Button>
              </Form.Item>
            </Space>
          </Fragment>
        )}
      </Form.List>
    </>
  )
}

export default ProductManyPriceForm

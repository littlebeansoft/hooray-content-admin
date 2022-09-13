import { PlusCircleOutlined, DeleteOutlined, PlusOutlined, DragOutlined } from '@ant-design/icons'
import { Button, Col, Form, Input, List, Row, Select, Space, Typography } from 'antd'
import FullWidthSpace from 'components/FullWidthSpace'
import React, { useEffect, useState } from 'react'
import { LeadCreateFormProps } from '../interface'
import ReactDragListView from 'react-drag-listview'
import { FormListFieldData } from 'antd/lib/form/FormList'
import { move } from 'utils/utils'

const { Option } = Select

const { Title } = Typography

const ruleRequired = {
  required: true,
  message: 'Required',
}

const LeadCreateForm: React.FC<LeadCreateFormProps> = ({ product, form, loading, onFinish, onCancel }) => {
  const [propertyType, setPropertyType] = useState('TEXT')
  const [formData, setFormDate] = useState<any>([])

  const handleFinished = (values: any) => {
    onFinish?.({
      ...values,
      type: propertyType,
    })
  }

  const onDragEnd = (fromIndex: any, toIndex: any, index: number) => {
    // console.log("Form Index:", fromIndex);
    // console.log("To Index:", toIndex);
    // console.log("Values", formData);
    if (toIndex < 0) return
    const newData = move(formData, fromIndex, toIndex)
    form.setFieldsValue({
      radios: newData,
    })
  }

  const switchPorperty = (id: string) => {
    switch (id) {
      case 'TEXT':
        return <>{/* <Input style={{ width: 221 }} /> */}</>
      case 'NUMBER':
        return <>{/* <Input type={'number'} style={{ width: 221 }} /> */}</>
      case 'RADIO':
        return (
          <>
            <Form.List name="radios">
              {(fields, { add, remove }) => (
                <>
                  <ReactDragListView
                    nodeSelector=".ant-list-item.draggable-item"
                    lineClassName="dragLine"
                    onDragEnd={(fromIndex, toIndex) => onDragEnd(fromIndex, toIndex, fromIndex)}
                  >
                    {fields.map((field, index) => (
                      <List.Item key={index} style={{ paddingBottom: 0 }} className="draggable-item">
                        <Space key={field.key} align="baseline">
                          <Form.Item {...field} label="" name={[field.name, 'radio']} className="form-item">
                            <Input style={{ width: 221 }} />
                          </Form.Item>
                          <DragOutlined className="icon" />
                          <DeleteOutlined onClick={() => remove(field.name)} />
                        </Space>
                      </List.Item>
                    ))}
                  </ReactDragListView>
                  <Form.Item>
                    <Button
                      type="dashed"
                      onClick={() => add()}
                      icon={<PlusOutlined />}
                      style={{
                        borderColor: 'rgb(38 153 251)',
                        color: 'rgb(38 153 251)',
                        width: 150,
                      }}
                    >
                      เพิ่มตัวเลือก
                    </Button>
                  </Form.Item>
                </>
              )}
            </Form.List>
          </>
        )
      case 'CHECKBOX':
        return (
          <>
            <Form.List name="checkboxs">
              {(fields, { add, remove }) => (
                <>
                  <ReactDragListView
                    nodeSelector=".ant-list-item.draggable-item"
                    lineClassName="dragLine"
                    onDragEnd={(fromIndex, toIndex) => onDragEnd(fromIndex, toIndex, fromIndex)}
                  >
                    {fields.map((field, index) => (
                      <List.Item key={index} style={{ paddingBottom: 0 }} className="draggable-item">
                        <Space key={field.key} align="baseline">
                          <Form.Item {...field} label="" name={[field.name, 'checkbox']} className="form-item">
                            <Input style={{ width: 221 }} />
                          </Form.Item>
                          <DragOutlined className="icon" />
                          <DeleteOutlined onClick={() => remove(field.name)} />
                        </Space>
                      </List.Item>
                    ))}
                  </ReactDragListView>
                  <Form.Item>
                    <Button
                      type="dashed"
                      onClick={() => add()}
                      icon={<PlusOutlined />}
                      style={{
                        borderColor: 'rgb(38 153 251)',
                        color: 'rgb(38 153 251)',
                        width: 150,
                      }}
                    >
                      เพิ่มตัวเลือก
                    </Button>
                  </Form.Item>
                </>
              )}
            </Form.List>
          </>
        )
      default:
        return (
          <>
            <Input style={{ width: 221 }} />
          </>
        )
    }
  }

  return (
    <Form
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 18 }}
      id="content-pack"
      name="content-pack"
      form={form}
      onFinish={handleFinished}
      onFieldsChange={(values) => {
        if (propertyType === 'RADIO') {
          setFormDate(form.getFieldValue('radios'))
        }
        if (propertyType === 'CHECKBOX') {
          setFormDate(form.getFieldValue('checkboxs'))
        }
      }}
      labelAlign="left"
    >
      <Title level={5} style={{ color: '#2699FB', marginBottom: 30 }}>
        ข้อมูลคุณสมบัติ
      </Title>
      <Form.Item name="name" label="ชื่อคุณสมบัติ" rules={[ruleRequired]}>
        <Input placeholder="ชื่อคุณสมบัติ" style={{ width: 221 }} />
      </Form.Item>
      <Form.Item name="propertyType" label="Property Type">
        <Select
          showArrow
          style={{ width: 207 }}
          placeholder="Please Select"
          filterOption={false}
          defaultValue={propertyType}
          onChange={(value) => {
            setPropertyType(value)
          }}
        >
          <Option value="TEXT">ข้อความ</Option>
          <Option value="NUMBER">ตัวเลข</Option>
          <Option value="CHECKBOX">Checkbox</Option>
          <Option value="RADIO">Radio</Option>
        </Select>
      </Form.Item>
      <Row>
        <Col span={6}></Col>
        <Col span={18}>{switchPorperty(propertyType)}</Col>
      </Row>
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

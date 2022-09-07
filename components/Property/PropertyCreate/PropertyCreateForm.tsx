import { PlusCircleOutlined, DeleteOutlined } from '@ant-design/icons'
import { Button, Col, DatePicker, Form, Input, Row, Select, Spin, Typography } from 'antd'
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
    const [propertyType, setPropertyType] = useState('TEXT')

    const handleFinished = (values: any) => {
        onFinish?.({
            ...values,
            type: propertyType
        })
    }


    const switchPorperty = (id: string) => {
        switch (id) {
            case 'TEXT':
                return <><Input style={{ width: 221 }} /></>
            case 'NUMBER':
                return <><Input type={'number'} style={{ width: 221 }} /></>
            case 'RADIO':
                return <>
                    <Input style={{ width: 221 }} />
                    <DeleteOutlined style={{ color: "#FF0000", fontSize: 22, marginLeft: 10, marginRight: 10 }} />
                    <Button type={'primary'} ghost icon={<PlusCircleOutlined />} >
                        เพิ่มตัวเลือก
                    </Button>
                </>
            case 'CHECKBOX':
                return <>
                    <Input style={{ width: 221 }} />
                    <DeleteOutlined style={{ color: "#FF0000", fontSize: 22, marginLeft: 10, marginRight: 10 }} />
                    <Button type={'primary'} ghost icon={<PlusCircleOutlined />} >
                        เพิ่มตัวเลือก
                    </Button>
                </>
            default:
                return <><Input style={{ width: 221 }} /></>
        }
    }







    return (
        <Form
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 20 }}
            id="content-pack"
            name="content-pack"
            form={form}
            onFinish={handleFinished}
            onValuesChange={() => { }}
            labelAlign="left"
        >
            <Title level={5} style={{ color: '#2699FB', marginBottom: 30 }}>ข้อมูลคุณสมบัติ</Title>
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
                        setPropertyType(value);
                    }}
                >
                    <Option value="TEXT">ข้อความ</Option>
                    <Option value="NUMBER">ตัวเลข</Option>
                    <Option value="CHECKBOX">Checkbox</Option>
                    <Option value="RADIO">Radio</Option>
                </Select>
            </Form.Item>
            <Row>
                <Col span={4} ></Col>
                <Col span={20}>
                    {switchPorperty(propertyType)}
                </Col>
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

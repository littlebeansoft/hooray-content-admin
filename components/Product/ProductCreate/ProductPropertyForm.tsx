import { PlusCircleOutlined } from '@ant-design/icons'
import { Button, Col, DatePicker, Form, Input, Row, Select, Spin, Typography } from 'antd'
import FullWidthSpace from 'components/FullWidthSpace'
import UploadImage from 'components/UploadImage'
import UploadFileDocument from 'components/UploadFileDocument'
import { allowFileExtensionsDocument, allowFileExtensionsImage } from 'config'
import React, { useEffect, useState } from 'react'
import { ProductCreateFormProps } from '../interface'


const { TextArea } = Input
const { Option } = Select

const { Title } = Typography



const ruleRequired = {
    required: true,
    message: 'Required',
}

const ProductPropertyForm: React.FC = () => {





    return (
        <>
            <Title level={5} style={{ color: '#2699FB', marginBottom: 30 }}>คุณลักษณสินค้า</Title>

            <Row>
                <Col xl={12} md={12} sm={24} >
                    <Form.Item name="band" label="แบรนด์" >
                        <Select
                            allowClear
                            showArrow
                            style={{ width: 207 }}
                            placeholder="Please Select"
                            filterOption={false}
                        />
                    </Form.Item>
                    <Form.Item name="style" label="สไตล์เสื้อผ้า" >
                        <Select
                            allowClear
                            showArrow
                            style={{ width: 207 }}
                            placeholder="Please Select"
                            filterOption={false}
                        />
                    </Form.Item>
                    <Form.Item name="height" label="ความสูงเอว" >
                        <Select
                            allowClear
                            showArrow
                            style={{ width: 207 }}
                            placeholder="Please Select"
                            filterOption={false}
                        />
                    </Form.Item>
                    <Form.Item name="season" label="ฤดูกาล" >
                        <Select
                            allowClear
                            showArrow
                            style={{ width: 207 }}
                            placeholder="Please Select"
                            filterOption={false}
                        />
                    </Form.Item>
                    <Form.Item name="country" label="ประเทศต้นกำเนิด" >
                        <Select
                            allowClear
                            showArrow
                            style={{ width: 207 }}
                            placeholder="Please Select"
                            filterOption={false}
                        />
                    </Form.Item>
                    
                </Col>
                <Col xl={12} md={12} sm={24}>
                    <Form.Item name="material" label="วัสดุ">
                        <Select
                            allowClear
                            showArrow
                            style={{ width: 207 }}
                            placeholder="Please Select"
                            filterOption={false}
                        />
                    </Form.Item>
                    <Form.Item name="size" label="ขนาด" >
                        <Select
                            allowClear
                            showArrow
                            style={{ width: 207 }}
                            placeholder="Please Select"
                            filterOption={false}
                        />
                    </Form.Item>
                    <Form.Item name="length" label="ความยาวของกางเกง" >
                        <Select
                            allowClear
                            showArrow
                            style={{ width: 207 }}
                            placeholder="Please Select"
                            filterOption={false}
                        />
                    </Form.Item>
                    <Form.Item name="height" label="เล็กกระทัดลัด" >
                        <Select
                            allowClear
                            showArrow
                            style={{ width: 207 }}
                            placeholder="Please Select"
                            filterOption={false}
                        />
                    </Form.Item>
                    <Form.Item name="height" label="ลวดลาย" >
                        <Select
                            allowClear
                            showArrow
                            style={{ width: 207 }}
                            placeholder="Please Select"
                            filterOption={false}
                        />
                    </Form.Item>
                </Col>
            </Row>

        </>
    )
}

export default ProductPropertyForm

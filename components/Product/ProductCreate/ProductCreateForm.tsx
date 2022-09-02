import { PlusCircleOutlined } from '@ant-design/icons'
import { Button, DatePicker, Form, Input, Select, Spin, Typography } from 'antd'
import FullWidthSpace from 'components/FullWidthSpace'
import UploadImage from 'components/UploadImage'
import UploadFileDocument from 'components/UploadFileDocument'
import { allowFileExtensionsDocument, allowFileExtensionsImage } from 'config'
import React, { useEffect, useState } from 'react'
import { ProductCreateFormProps } from '../interface'
import ProductInformationForm from './ProductInfomationForm'
import ProductPropertyForm from './ProductPropertyForm'
import ProductOnePriceForm from './ProductOnePriceForm'

const { TextArea } = Input
const { Option } = Select

const { Title } = Typography



const ruleRequired = {
    required: true,
    message: 'Required',
}

const ProductCreateForm: React.FC<ProductCreateFormProps> = ({ product, form, loading, onFinish, onCancel }) => {





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
            onValuesChange={() => { }}
            labelAlign="left"
        >
            <ProductInformationForm />
            <ProductPropertyForm />
            <Title level={5} style={{ color: '#2699FB', marginBottom: 30 }}>ตัวเลือราคาสินค้า</Title>
            <ProductOnePriceForm />
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

import { PlusCircleOutlined } from '@ant-design/icons'
import { Button, DatePicker, Form, Input, Select, Spin } from 'antd'
import FullWidthSpace from 'components/FullWidthSpace'
import UploadImage from 'components/UploadImage'
import { allowFileExtensionsDocument, allowFileExtensionsImage } from 'config'
import React, { useEffect, useState } from 'react'
import { ContentCreateFormProps } from './interface'

const { TextArea } = Input
const { Option } = Select




const ruleRequired = {
    required: true,
    message: 'Required',
}

const ContentCreateForm: React.FC<ContentCreateFormProps> = ({ product, form, loading, onFinish, onCancel }) => {





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
            <Form.Item name="title" label="Title" rules={[ruleRequired]}>
                <Input />
            </Form.Item>
            <Form.Item name="subtitle" label="Subtitle" rules={[ruleRequired]}>
                <Input />
            </Form.Item>
            <Form.Item name="description" label="Description">
                <TextArea rows={4} />
            </Form.Item>
            <Form.Item name="lengthText" label="Length" rules={[ruleRequired]}>
                <Input />
            </Form.Item>
            <Form.Item name="price" label="Price" rules={[ruleRequired]}>
                <Input type="number" />
            </Form.Item>
            <Form.Item name="categoryIDs" label="Category">
                <Select
                    showSearch
                    allowClear
                    showArrow
                    style={{ width: '100%' }}
                    placeholder="Search"
                    // onSearch={categoryProperty.onSearch}
                    filterOption={false}
                //  notFoundContent={categoryProperty.loading ? <Spin size="small" /> : null}
                // options={categoryProperty.options}
                />
            </Form.Item>
            <Form.Item name="image" label="Cover">
                <UploadImage isEdit allowFileExtensions={allowFileExtensionsImage} maximumUploadItems={1} />
            </Form.Item>
            <Form.Item name="thumbnail" label="Thumbnail">
                <UploadImage isEdit allowFileExtensions={allowFileExtensionsImage} />
            </Form.Item>
            <Form.Item name="attachmentList" label="Attachment">
                <UploadImage isEdit allowFileExtensions={allowFileExtensionsDocument} />
            </Form.Item>
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

export default ContentCreateForm

import { PlusCircleOutlined } from '@ant-design/icons'
import { Button, DatePicker, Form, Input, Select, Spin, Typography } from 'antd'
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





    const handleFinished = (values: any) => {
        onFinish?.({
            ...values,
        })
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
            <Title level={5} style={{ color: '#2699FB', marginBottom: 30 }}>ข้อมูล Lead</Title>
            <Form.Item name="profileImage" label="Profile Image">
                <UploadImage isEdit allowFileExtensions={allowFileExtensionsImage} maximumUploadItems={1} />
            </Form.Item>
            <Form.Item name="type" label="Type">
                <Select
                    //showSearch
                    allowClear
                    showArrow
                    style={{ width: 207 }}
                    placeholder="Please Select"
                    // onSearch={categoryProperty.onSearch}
                    filterOption={false}
                //  notFoundContent={categoryProperty.loading ? <Spin size="small" /> : null}
                // options={categoryProperty.options}
                />
            </Form.Item>
            <Form.Item name="status" label="Status">
                <Select
                    //showSearch
                    allowClear
                    showArrow
                    style={{ width: 207 }}
                    placeholder="Please Select"
                    // onSearch={categoryProperty.onSearch}
                    filterOption={false}
                //  notFoundContent={categoryProperty.loading ? <Spin size="small" /> : null}
                // options={categoryProperty.options}
                />
            </Form.Item>
            <Form.Item name="fistname" label="First Name" rules={[ruleRequired]}>
                <Input placeholder="First Name" style={{ width: 221 }} />
            </Form.Item>
            <Form.Item name="lastName" label="Last Name" rules={[ruleRequired]}>
                <Input placeholder="Last Name" style={{ width: 221 }} />
            </Form.Item>
            <Form.Item name="phoneNumber" label="Phone Number" rules={[ruleRequired]}>
                <Input placeholder="Phone Number" style={{ width: 221 }} />
            </Form.Item>
            <Form.Item name="email" label="Email" rules={[ruleRequired]}>
                <Input type={"email"} placeholder="Email" style={{ width: 221 }} />
            </Form.Item>
            <Title level={5} style={{ color: '#2699FB', marginBottom: 30, marginTop: 30 }}>ข้อมูลหน่วยงาน</Title>
            <Form.Item name="factoryThumbnail" label="รูปโรงงาน">
                <UploadImage isEdit allowFileExtensions={allowFileExtensionsImage} />
            </Form.Item>
            <Form.Item name="productThumbnail" label="รูปภาพ สินค้าที่ขาย">
                <UploadImage isEdit allowFileExtensions={allowFileExtensionsImage} />
            </Form.Item>
            <Form.Item name="orgType" label="ประเภทOrg(โรงงาน)">
                <Select
                    //showSearch
                    allowClear
                    showArrow
                    style={{ width: 207 }}
                    placeholder="Please Select"
                    // onSearch={categoryProperty.onSearch}
                    filterOption={false}
                //  notFoundContent={categoryProperty.loading ? <Spin size="small" /> : null}
                // options={categoryProperty.options}
                />
            </Form.Item>
            <Form.Item name="productType" label="ประเภทสินค้า">
                <Select
                    //showSearch
                    allowClear
                    showArrow
                    style={{ width: 207 }}
                    placeholder="Please Select"
                    // onSearch={categoryProperty.onSearch}
                    filterOption={false}
                //  notFoundContent={categoryProperty.loading ? <Spin size="small" /> : null}
                // options={categoryProperty.options}
                />
            </Form.Item>
            <Form.Item name="factoryName" label="ชื่อโรงงาน" rules={[ruleRequired]}>
                <Input placeholder="ชื่อโรงงาน" style={{ width: 221 }} />
            </Form.Item>
            <Form.Item name="address" label="ที่อยุ่">
                <TextArea rows={2} style={{ width: 395 }} />
            </Form.Item>
            <Form.Item name="country" label="ประเทศ">
                <Select
                    //showSearch
                    allowClear
                    showArrow
                    style={{ width: 207 }}
                    placeholder="Please Select"
                    // onSearch={categoryProperty.onSearch}
                    filterOption={false}
                //  notFoundContent={categoryProperty.loading ? <Spin size="small" /> : null}
                // options={categoryProperty.options}
                />
            </Form.Item>
            <Form.Item name="provice" label="จังหวัด">
                <Select
                    //showSearch
                    allowClear
                    showArrow
                    style={{ width: 207 }}
                    placeholder="Please Select"
                    // onSearch={categoryProperty.onSearch}
                    filterOption={false}
                //  notFoundContent={categoryProperty.loading ? <Spin size="small" /> : null}
                // options={categoryProperty.options}
                />
            </Form.Item>
            <Form.Item name="district" label="เขต/อำเภอ">
                <Select
                    //showSearch
                    allowClear
                    showArrow
                    style={{ width: 207 }}
                    placeholder="Please Select"
                    // onSearch={categoryProperty.onSearch}
                    filterOption={false}
                //  notFoundContent={categoryProperty.loading ? <Spin size="small" /> : null}
                // options={categoryProperty.options}
                />
            </Form.Item>
            <Form.Item name="tambon" label="แขวง/ตำบล">
                <Select
                    //showSearch
                    allowClear
                    showArrow
                    style={{ width: 207 }}
                    placeholder="Please Select"
                    // onSearch={categoryProperty.onSearch}
                    filterOption={false}
                //  notFoundContent={categoryProperty.loading ? <Spin size="small" /> : null}
                // options={categoryProperty.options}
                />
            </Form.Item>
            <Form.Item name="zipCode" label="เลขที่ไปรษณีย์" rules={[ruleRequired]}>
                <Input placeholder="เลขที่ไปรษณีย์" style={{ width: 221 }} />
            </Form.Item>
            <Title level={5} style={{ color: '#2699FB', marginBottom: 30, marginTop: 30 }}>ข้อมูลเพิ่มเติม</Title>
            <Form.Item name="remark" label="โน๊ต">
                <TextArea rows={2} style={{ width: 395 }} />
            </Form.Item>
            <Form.Item name="attachmentList" label="ไฟล์">
                <UploadFileDocument isEdit allowFileExtensions={allowFileExtensionsDocument} />
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

export default LeadCreateForm

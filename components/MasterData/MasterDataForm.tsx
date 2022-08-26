import React from 'react'
import { Button, Form, Input, Select, Spin, Typography } from 'antd'
import FullWidthSpace from 'components/FullWidthSpace'
import { PlusCircleOutlined } from '@ant-design/icons'
import { ContactFormProps } from './interface'
import UploadImage from 'components/UploadImage'
import { allowFileExtensionsDocument } from 'config'
import useProductPropertyAutoComplete from 'hooks/useProductPropertyAutoComplete'
import router from 'next/router'
const { TextArea } = Input
const { Text } = Typography
const ContactForm: React.FC<ContactFormProps> = ({ form, loading, onFinish, onCancel }) => {
  const { parentKey = '' } = router.query
  const options = [
    {
      label: 'English (EN)',
      value: 'en',
    },
    {
      label: 'Thai (TH)',
      value: 'th',
    },
  ]
  return (
    <Form
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 14 }}
      id="masterData"
      name="masterData"
      //   colon={false}
      form={form}
      onFinish={onFinish}
      labelAlign="left"
      //   className="w-100"
    >
      <Form.Item name="dataKey" label={'Data Key'}>
        <Input addonBefore={parentKey ? parentKey + '.' : ''} />
      </Form.Item>
      <Form.Item label={'Locale'}>
        <Form.List name="localeTextList">
          {(fields) => (
            <>
              {fields.map((field) => (
                <>
                  {/* <Text>{field.key}</Text> */}
                  <Form.Item {...field} name={[field.name, 'locale']}>
                    <Select
                      disabled
                      allowClear
                      showArrow
                      style={{ width: '100%' }}
                      placeholder="Select"
                      filterOption={false}
                      // notFoundContent={localeTextIncoterms.loading ? <Spin size="small" /> : null}
                      options={options}
                    />
                  </Form.Item>
                  <Form.Item {...field} name={[field.name, 'text']}>
                    <TextArea />
                  </Form.Item>
                </>
              ))}
            </>
          )}
        </Form.List>
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

export default ContactForm

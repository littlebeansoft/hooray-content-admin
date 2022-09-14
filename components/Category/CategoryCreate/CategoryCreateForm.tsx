import { PlusCircleOutlined } from '@ant-design/icons'
import { Breadcrumb, Button, Col, DatePicker, Form, Input, Row, Select, Spin, Typography } from 'antd'
import FullWidthSpace from 'components/FullWidthSpace'
import React, { useEffect, useRef, useState } from 'react'
import { LeadCreateFormProps } from '../interface'
import useGetCategory from 'graphql/useGetCategory'
import { CategoryData, GetCategoryResp } from 'graphql/useGetCategory/interface'
import _ from 'lodash'
import useGetParentCategory from 'graphql/useGetParentCategory'
import { GetParentCategoryResp } from 'graphql/useGetParentCategory/interface'

const { TextArea } = Input
const { Option } = Select

const { Title } = Typography

const ruleRequired = {
  required: true,
  message: 'Required',
}

const LeadCreateForm: React.FC<LeadCreateFormProps> = ({ product, form, loading, onFinish, onCancel }) => {
  const [searchValue, setSearchValue] = useState<string | undefined>(undefined)
  const [parentId, setParentId] = useState<string | ''>('')
  const [parentCategoryKey, setParentCategoryKey] = useState<string | undefined>(undefined)
  const timer = useRef<ReturnType<typeof setTimeout>>()

  const handleFinished = (values: any) => {
    onFinish?.({
      ...values,
      parentCategoryKey,
    })
  }

  const onSearch = (value: string) => {
    clearTimeout(timer.current!)

    timer.current = setTimeout(() => {
      setSearchValue(value)
    }, 500)
  }

  const categoryList = useGetCategory({
    context: { clientType: 'LABEL' },
    fetchPolicy: 'cache-first',
    variables: {
      input: {
        query: {
          name: searchValue,
        },
        pagination: {
          limit: 30,
          page: 1,
        },
      },
    },
  })

  const parentCategoryList = useGetParentCategory({
    context: { clientType: 'LABEL' },
    fetchPolicy: 'cache-first',
    variables: {
      getParentCategoryId: parentId,
    },
  })

  const children: React.ReactNode[] = []
  for (let i = 10; i < 36; i++) {
    children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>)
  }

  const handleChange = (value: string[]) => {
    console.log(`selected ${value}`)
  }

  const getOptions = (payload: GetCategoryResp[] | null) => {
    if (!payload) {
      return
    }
    let options = payload.map((item: GetCategoryResp) => {
      return {
        key: item._id,
        value: item.name,
        categoryKey: item.categoryKey,
      }
    })
    return options
  }

  return (
    <Form
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 20 }}
      id="content-pack"
      name="content-pack"
      form={form}
      onFinish={handleFinished}
      labelAlign="left"
    >
      <Title level={5} style={{ color: '#2699FB', marginBottom: 30 }}>
        ข้อมูลประเภทสินค้า
      </Title>
      <Form.Item name="name" label="ชื่อหมวดหมู่" rules={[ruleRequired]}>
        <Input placeholder="ชื่อหมวดหมู่" style={{ width: 221 }} />
      </Form.Item>
      <Form.Item name="categoryParent" label="Category Parent">
        <Select
          showSearch
          allowClear
          showArrow
          style={{ width: 207 }}
          placeholder="Please Select"
          onSearch={onSearch}
          filterOption={false}
          notFoundContent={categoryList.loading ? <Spin size="small" /> : null}
          options={getOptions(categoryList.data?.getCategory.payload ?? null)}
          onSelect={(value: string, values: any) => {
            setParentId(values.key)
            setParentCategoryKey(values.categoryKey)
          }}
        />
      </Form.Item>
      <Row style={{ marginBottom: 20 }}>
        <Col span={4}></Col>
        <Col span={20}>
          <Breadcrumb>
            {parentCategoryList.data?.getParentCategory?.payload?.map((item: GetParentCategoryResp) => {
              return <Breadcrumb.Item key={item._id}>{item.name}</Breadcrumb.Item>
            }) ?? null}
          </Breadcrumb>
        </Col>
      </Row>
      <Form.Item name="property" label="property">
        <Select
          mode="multiple"
          allowClear
          style={{ width: 207 }}
          placeholder="Please Select"
          onChange={handleChange}
          showSearch
          // onSearch={categoryProperty.onSearch}
          filterOption={false}
          //  notFoundContent={categoryProperty.loading ? <Spin size="small" /> : null}
          // options={categoryProperty.options}
        >
          {children}
        </Select>
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

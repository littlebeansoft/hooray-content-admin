import { PlusCircleOutlined } from '@ant-design/icons'
import { Breadcrumb, Button, Col, DatePicker, Form, Input, message, Row, Select, Spin, Typography } from 'antd'
import FullWidthSpace from 'components/FullWidthSpace'
import React, { useEffect, useRef, useState } from 'react'
import { CategoryCreateFormProps } from '../interface'
import useGetCategory from 'graphql/useGetCategory'
import { CategoryData, GetCategoryResp } from 'graphql/useGetCategory/interface'
import _ from 'lodash'
import useGetParentCategory from 'graphql/useGetParentCategory'
import { GetParentCategoryResp } from 'graphql/useGetParentCategory/interface'
import useGetCategoryAttribute from 'graphql/useGetCategoryAttribute'
import { CategoryAttributeRes } from 'graphql/useGetCategoryAttribute/interface'
import getAttribute from 'graphql/useGetAttribute'
import { AttribueResponse } from 'graphql/interface'
import {
  useAddCategoryAttributeMutation,
  useDeleteCategoryAttributeMutation,
  useRemoveCategoryAttributeMutation,
} from 'graphql/generated/operations'

const { TextArea } = Input
const { Option } = Select

const { Title } = Typography

const ruleRequired = {
  required: true,
  message: 'Required',
}

interface OptionDefault {
  key: string
  value: string
  id: string
}

const LeadCreateForm: React.FC<CategoryCreateFormProps> = ({ category, form, loading, onFinish, categoryId }) => {
  const [searchValue, setSearchValue] = useState<string | undefined>(undefined)
  const [searchAttribute, setSearchAttribute] = useState<string | undefined>(undefined)
  const [parentId, setParentId] = useState<string | ''>('')
  const [parentCategoryKey, setParentCategoryKey] = useState<string | undefined>(undefined)
  const [categoryAttributeData, setCategoryAttributeData] = useState<CategoryAttributeRes[]>()
  const [categoryAttributeDefault, setCategoryAttributeDefault] = useState<OptionDefault[]>()
  const [attribute, setAttribute] = useState<AttribueResponse[]>()
  const [selectAttribute, setSelectAttribute] = useState<any>([])
  // const [hideAttribute, setHideAttribute] = useState<boolean>(false)
  const timer = useRef<ReturnType<typeof setTimeout>>()

  useEffect(() => {
    if (category) {
      form.setFieldsValue({
        name: category.name,
        categoryParent: category.parentCategory.name,
      })
      setParentId(category.parentCategory._id)
      setParentCategoryKey(category.parentCategory.categoryKey)

      // setHideAttribute(true)
    }
  }, [category])

  const handleFinished = (values: any) => {
    onFinish?.({
      ...values,
      parentCategoryKey,
      selectAttribute,
    })
  }

  const onSearch = (value: string) => {
    clearTimeout(timer.current!)

    timer.current = setTimeout(() => {
      setSearchValue(value)
    }, 500)
  }
  const onSearchAttribute = (value: string) => {
    clearTimeout(timer.current!)

    timer.current = setTimeout(() => {
      setSearchAttribute(value)
    }, 500)
  }

  const categoryList = useGetCategory({
    context: { clientType: 'LABEL' },
    fetchPolicy: 'network-only',
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

  const [addCategoryAttribute] = useAddCategoryAttributeMutation({
    context: { clientType: 'LABEL' },
    onCompleted() {
      message.success('Add Category Attribute was Successfully')
      categoryAttribute.refetch()
    },
  })

  const [removeCategoryAttribute] = useRemoveCategoryAttributeMutation({
    context: { clientType: 'LABEL' },
    onCompleted() {
      message.success('Remove Category Attribute was Successfully')
      categoryAttribute.refetch()
    },
  })

  const [deleteCategoryAttribute] = useDeleteCategoryAttributeMutation({
    context: { clientType: 'LABEL' },
    onCompleted() {
      message.success('Delete Category Attribute was Successfully')
      categoryAttribute.refetch()
    },
  })

  const categoryAttribute = useGetCategoryAttribute({
    context: { clientType: 'LABEL' },
    fetchPolicy: 'network-only',
    variables: {
      input: {
        query: {
          categoryId: categoryId,
        },
        pagination: {
          limit: 999,
          page: 1,
        },
      },
    },
    onCompleted: (data) => {
      setCategoryAttributeData(data.getCategoryAttribute.payload)
      const defaultData = data.getCategoryAttribute.payload.map((item) => {
        return { key: item.attribute._id, value: item.attribute.name, id: item._id }
      })
      setCategoryAttributeDefault(defaultData)
      form.setFieldsValue({
        attribute: defaultData,
      })
      const defaultDataKey = data.getCategoryAttribute.payload.map((item) => {
        return item.attribute._id
      })
      setSelectAttribute(defaultDataKey)
    },
  })

  const parentCategoryList = useGetParentCategory({
    context: { clientType: 'LABEL' },
    fetchPolicy: 'cache-first',
    variables: {
      getParentCategoryId: parentId,
    },
  })

  const attributeList = getAttribute({
    context: {
      clientType: 'LABEL',
    },
    fetchPolicy: 'network-only',
    variables: {
      input: {
        query: {
          name: searchAttribute,
        },
      },
    },
    onCompleted(resp: any) {
      setAttribute(resp.getAttribute.payload)
    },
  })

  const children: React.ReactNode[] = []
  attribute?.map((item) => {
    children.push(<Option key={item._id}>{item.name}</Option>)
  })

  const handleChange = (value: string[]) => {
    console.log('handleChange', value)
  }

  const handleOnDeselect = (value: string) => {
    console.log('onDeselect', value)
    console.log('categoryAttributeDefault', categoryAttributeDefault)
    const id = categoryAttributeDefault?.find((item) => item.value === value)?.id
    console.log('id', id)
    deleteCategoryAttribute({
      variables: {
        deleteCategoryAttributeId: id as string,
      },
    })
  }

  const handleSelectAttribute = (value: string) => {
    addCategoryAttribute({
      variables: {
        input: {
          categoryId: categoryId as string,
          attributeIdList: [value],
        },
      },
    })
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

      <Form.Item name="attribute" label="Attribute">
        <Select
          mode="multiple"
          allowClear
          style={{ width: 207 }}
          placeholder="Please Select"
          onChange={handleChange}
          showSearch
          // defaultValue={categoryAttributeDefault?.map((item) => item.value)}
          onSearch={onSearchAttribute}
          filterOption={false}
          notFoundContent={attributeList.loading ? <Spin size="small" /> : null}
          onSelect={handleSelectAttribute}
          onDeselect={handleOnDeselect}
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

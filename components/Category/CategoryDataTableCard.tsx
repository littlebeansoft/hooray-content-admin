import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { Button, Card, Input, Radio, Typography } from 'antd'
import { PlusCircleOutlined, SearchOutlined } from '@ant-design/icons'

import { defaultPagination } from 'config/paginationConfig'
import CustomTable from 'components/CustomTable'
import { fallBackValueTable } from 'helpers/util'

import type { ColumnsType } from 'antd/lib/table'
import type { Pagination } from 'graphql/graphQL-service-hook'
import useGetProductCategory from 'graphql/useGetProductCategory'
import { ProductCategoryAPIPayload } from 'graphql/interface'
import CategoryDataTableDropDown from './CategoryDataTableDropDown'
import dayjs from 'dayjs'

const { Search } = Input

const CategoryDataTableCard: React.FC = () => {
  const router = useRouter()
  const [pagination, setPagination] = useState<Pagination>(defaultPagination)
  const [search, setSearch] = useState<string>()
  const [selectedRowKeys, setSelectRowKeys] = useState<React.Key[]>([])

  const productCategory = useGetProductCategory({
    // skip: !router.isReady,
    context: { clientType: 'PRODUCT' },
    fetchPolicy: 'network-only',
    variables: {
      input: {
        pagination: {
          limit: 10,
          page: 1,
        },
      },
    },
    onCompleted(resp: any) {
      const { pagination } = resp.getProductCategoryLevel
      setPagination(pagination)
    },
  })

  const productCategoryData = productCategory.data?.getProductCategoryLevel.payload
  const columns: ColumnsType<ProductCategoryAPIPayload> = [
    {
      title: 'Category Name',
      key: 'Name',
      fixed: 'left',
      width: 100,
      ellipsis: true,
      render: (_text: ProductCategoryAPIPayload) => fallBackValueTable(_text?.name),
    },
    {
      title: 'Category Parent',
      key: 'Type',
      fixed: 'left',
      width: 100,
      ellipsis: true,
      render: (_text: ProductCategoryAPIPayload) => fallBackValueTable(_text?.parent),
    },

    // {
    //   title: 'Status',
    //   key: 'Status',
    //   fixed: 'left',
    //   width: 100,
    //   ellipsis: true,
    //   render: (_text: ProductCategoryAPIPayload) => fallBackValueTable(_text?.status),
    // },
    // {
    //   title: 'Modify Date',
    //   dataIndex: 'ModifyDate',
    //   key: 'ModifyDate',
    //   fixed: 'left',
    //   width: 100,
    //   ellipsis: true,
    //   render: (_text: ProductCategoryAPIPayload) => (_text.updatedAt ? dayjs(_text.updatedAt) : '-'),
    // },
    // {
    //   title: 'Modify By',
    //   dataIndex: 'ModifyBy',
    //   key: 'ModifyBy',
    //   fixed: 'left',
    //   width: 100,
    //   ellipsis: true,
    //   render: (_text: ProductCategoryAPIPayload) => fallBackValueTable(_text.updateBy),
    // },
    // {
    //   title: 'Create Date',
    //   dataIndex: 'CreateDate',
    //   key: 'CreateDate',
    //   fixed: 'left',
    //   width: 100,
    //   ellipsis: true,
    //   render: (_text: ProductCategoryAPIPayload) => (_text.createdAt ? dayjs(_text.updatedAt) : '-'),
    // },
    // {
    //   title: 'Create By',
    //   dataIndex: 'CreateBy',
    //   key: 'CreateBy',
    //   fixed: 'left',
    //   width: 100,
    //   ellipsis: true,
    //   render: (_text: ProductCategoryAPIPayload) => fallBackValueTable(_text.createBy),
    // },
    // {
    //   fixed: 'right',
    //   key: 'eventAction',
    //   width: 100,
    //   render: (_text, record) => <CategoryDataTableDropDown leadData={record} setPagination={setPagination} />,
    // },
  ]

  const onSelectItems = (selectedRowKeys: React.Key[]) => {
    setSelectRowKeys(selectedRowKeys)
  }

  const hasSelected = selectedRowKeys.length > 0

  return (
    <Card className="w-100" style={{ marginTop: '1.5em' }}>
      <CustomTable
        rowSelection={{ selectedRowKeys, onChange: onSelectItems }}
        rowSelectAmount={selectedRowKeys.length}
        header={[
          <Radio.Group key="radioButton" disabled={!hasSelected} onChange={() => {}} defaultValue="a" style={{}}>
            <Radio.Button value="qualify">Qualify</Radio.Button>
            <Radio.Button value="delete">Delete</Radio.Button>
          </Radio.Group>,
          <Search
            key="searchInput"
            placeholder={'Input search text'}
            allowClear
            enterButton={<Button icon={<SearchOutlined />}></Button>}
            size="middle"
            onSearch={(value: string) => {
              setSearch(value)
            }}
          />,
          <Button
            key="addProductType"
            type="primary"
            icon={<PlusCircleOutlined />}
            onClick={() => {
              router.push({
                pathname: `${router.pathname}/create`,
                query: {
                  ...router.query,
                },
              })
            }}
          >
            Add New Category
          </Button>,
        ]}
        rowKey="_id"
        scroll={{ x: 800, y: 400 }}
        loading={productCategory.loading}
        pagination={{
          current: pagination?.page,
          pageSize: pagination?.limit,
          total: pagination?.totalItems,
          onChange: (page: number) => {
            setPagination({ ...pagination, page })
          },
        }}
        columns={columns}
        dataSource={productCategoryData}
      />
    </Card>
  )
}

export default CategoryDataTableCard

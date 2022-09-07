import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { Button, Card, Input, Radio, Typography } from 'antd'
import { PlusCircleOutlined, SearchOutlined } from '@ant-design/icons'

import { defaultPagination } from 'config/paginationConfig'
import CustomTable from 'components/CustomTable'
import { fallBackValueTable } from 'helpers/util'

import type { ColumnsType } from 'antd/lib/table'
import type { Pagination } from 'graphql/graphQL-service-hook'
import getProductAttributeList from 'graphql/useGetProductAttributeList'
import { ProductAttributeDTO } from 'graphql/useGetProductAttributeList/interface'
import CategoryDataTableDropDown from './PropertyDataTableDropDown'
import dayjs from 'dayjs'

const { Search } = Input


const PropertyDataTableCard: React.FC = () => {
  const router = useRouter()
  const [pagination, setPagination] = useState<Pagination>(defaultPagination)
  const [search, setSearch] = useState<string>()
  const [selectedRowKeys, setSelectRowKeys] = useState<React.Key[]>([])


  const productAttributeList = getProductAttributeList({
    context: { 
      clientType: 'PRODUCT',
      headers: {
        credentialKey: 'BANG_BOW_ADMIN',
      },
    },
    variables: {
      input: {
        pagination: {
          limit: pagination.limit,
          page: pagination.page,
        },
      },
    },
    onCompleted(resp: any) {
      const { pagination } = resp.getProductAttributeList
      setPagination(pagination)
    },
  })

  const productAttributeListData = productAttributeList.data?.getProductAttributeList.payload
  const columns: ColumnsType<ProductAttributeDTO> = [
    {
      title: 'Property Name',
      key: 'Name',
      fixed: 'left',
      width: 100,
      ellipsis: true,
      render: (_text: ProductAttributeDTO) => fallBackValueTable(_text.name),
    },
    {
      title: 'Property Type',
      key: 'Type',
      fixed: 'left',
      width: 100,
      ellipsis: true,
      render: (_text: ProductAttributeDTO) => fallBackValueTable(_text.type),
    },

    // {
    //   title: 'Status',
    //   dataIndex: 'Status',
    //   key: 'Status',
    //   fixed: 'left',
    //   width: 100,
    //   ellipsis: true,
    //   render: (_text: ProductAttributeDTO) => fallBackValueTable(_text.status),
    // },
    // {
    //   title: 'Modify Date',
    //   dataIndex: 'ModifyDate',
    //   key: 'ModifyDate',
    //   fixed: 'left',
    //   width: 100,
    //   ellipsis: true,
    //   render: (_text: ProductAttributeDTO) => (_text.updatedAt ? dayjs(_text.updatedAt) : '-'),
    // },
    // {
    //   title: 'Modify By',
    //   dataIndex: 'ModifyBy',
    //   key: 'ModifyBy',
    //   fixed: 'left',
    //   width: 100,
    //   ellipsis: true,
    //   render: (_text: ProductAttributeDTO) => fallBackValueTable(_text.updateBy),
    // },
    // {
    //   title: 'Create Date',
    //   dataIndex: 'CreateDate',
    //   key: 'CreateDate',
    //   fixed: 'left',
    //   width: 100,
    //   ellipsis: true,
    //   render: (_text: ProductAttributeDTO) => (_text.createdAt ? dayjs(_text.updatedAt) : '-'),
    // },
    // {
    //   title: 'Create By',
    //   dataIndex: 'CreateBy',
    //   key: 'CreateBy',
    //   fixed: 'left',
    //   width: 100,
    //   ellipsis: true,
    //   render: (_text: ProductAttributeDTO) => fallBackValueTable(_text.createBy),
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

  const hasSelected = selectedRowKeys.length > 0;

  return (
    <Card className="w-100" style={{ marginTop: '1.5em' }}>
      <CustomTable
        rowSelection={{ selectedRowKeys, onChange: onSelectItems }}
        rowSelectAmount={selectedRowKeys.length}
        header={[
          <Radio.Group disabled={!hasSelected} onChange={() => { }} defaultValue="a" style={{}}>
            <Radio.Button value="qualify">Qualify</Radio.Button>
            <Radio.Button value="delete">Delete</Radio.Button>
          </Radio.Group>,
          <Search
            placeholder={'Input search text'}
            allowClear
            enterButton={
              <Button icon={<SearchOutlined />}>

              </Button>
            }
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
            Add New Property
          </Button>,
        ]}
        rowKey="_id"
        scroll={{ x: 800, y: 300 }}
        loading={productAttributeList.loading}
        pagination={{
          current: pagination?.page,
          pageSize: pagination?.limit,
          total: pagination?.totalItems,
          onChange: (page: number) => {
            setPagination({ ...pagination, page })
          },
        }}
        columns={columns}
        dataSource={productAttributeListData}
      />
    </Card>
  )
}

export default PropertyDataTableCard

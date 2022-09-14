import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { Button, Card, Input, Radio, Typography } from 'antd'
import { PlusCircleOutlined, SearchOutlined } from '@ant-design/icons'

import { defaultPagination } from 'config/paginationConfig'
import CustomTable from 'components/CustomTable'
import { fallBackValueTable } from 'helpers/util'

import type { ColumnsType } from 'antd/lib/table'
import type { Pagination } from 'graphql/graphQL-service-hook'
import useGetCategory from 'graphql/useGetCategory'
import { GetCategoryResp } from 'graphql/useGetCategory/interface'
import CategoryDataTableDropDown from './CategoryDataTableDropDown'
import dayjs from 'dayjs'
import { formatDate } from 'helpers/formatter'

const { Search } = Input
const { Text } = Typography

const CategoryDataTableCard: React.FC = () => {
  const router = useRouter()
  const [pagination, setPagination] = useState<Pagination>(defaultPagination)
  const [search, setSearch] = useState<string>()
  const [selectedRowKeys, setSelectRowKeys] = useState<React.Key[]>([])

  const categoryList = useGetCategory({
    // skip: !router.isReady,
    context: { clientType: 'LABEL' },
    fetchPolicy: 'network-only',
    variables: {
      input: {
        pagination: {
          limit: pagination.limit,
          page: pagination.page,
        },
      },
    },
    onCompleted(resp: any) {
      const { pagination } = resp.getCategory
      setPagination(pagination)
    },
  })

  const categoryData = categoryList.data?.getCategory.payload
  const columns: ColumnsType<GetCategoryResp> = [
    {
      title: 'Category Name',
      key: 'Name',
      fixed: 'left',
      width: 130,
      ellipsis: true,
      render: (_text: GetCategoryResp) => fallBackValueTable(_text?.name),
    },
    {
      title: 'Category Parent',
      key: 'Type',
      fixed: 'left',
      width: 130,
      ellipsis: true,
      render: (_text: GetCategoryResp) => fallBackValueTable(_text?.parentCategory?.name),
    },
    {
      title: 'Status',
      key: 'Status',
      fixed: 'left',
      width: 100,
      ellipsis: true,
      render: (text: GetCategoryResp, record) => {
        let _tColor
        let _iCon
        let _text
        switch (text.status) {
          default:
          case 'DISABLED':
            _tColor = '#A30404'
            _text = 'Disabled'
            break
          case 'ENABLED':
            _tColor = '#34B53A'
            _text = 'Enabled'
            break
        }
        return (
          <>
            <Text style={{ color: _tColor }} /* type={_tColor || 'warning'} */>{_text}</Text>
          </>
        ) // just for decoration
      },
    },
    {
      title: 'Modify Date',
      key: 'ModifyDate',
      fixed: 'left',
      width: 100,
      ellipsis: true,
      render: (_text: GetCategoryResp) => (_text.updatedAt ? formatDate(_text.updatedAt) : '-'),
    },
    // {
    //   title: 'Modify By',
    //   dataIndex: 'ModifyBy',
    //   key: 'ModifyBy',
    //   fixed: 'left',
    //   width: 100,
    //   ellipsis: true,
    //   render: (_text: ProductCategoryAPIPayload) => fallBackValueTable(_text.updateBy),
    // },
    {
      title: 'Create Date',
      key: 'CreateDate',
      fixed: 'left',
      width: 100,
      ellipsis: true,
      render: (_text: GetCategoryResp) => (_text.createdAt ? formatDate(_text.updatedAt) : '-'),
    },
    // {
    //   title: 'Create By',
    //   dataIndex: 'CreateBy',
    //   key: 'CreateBy',
    //   fixed: 'left',
    //   width: 100,
    //   ellipsis: true,
    //   render: (_text: ProductCategoryAPIPayload) => fallBackValueTable(_text.createBy),
    // },
    {
      fixed: 'right',
      key: 'eventAction',
      width: 100,
      render: (_text, record) => (
        <CategoryDataTableDropDown data={record} setPagination={setPagination} refetch={categoryList.refetch} />
      ),
    },
  ]

  // const onSelectItems = (selectedRowKeys: React.Key[]) => {
  //   setSelectRowKeys(selectedRowKeys)
  // }

  // const hasSelected = selectedRowKeys.length > 0

  return (
    <Card className="w-100" style={{ marginTop: '1.5em' }}>
      <CustomTable
        //rowSelection={{ selectedRowKeys, onChange: onSelectItems }}
        // rowSelectAmount={selectedRowKeys.length}
        header={[
          // <Radio.Group key="radioButton" disabled={!hasSelected} onChange={() => { }} defaultValue="a" style={{}}>
          //   <Radio.Button value="qualify">Qualify</Radio.Button>
          //   <Radio.Button value="delete">Delete</Radio.Button>
          // </Radio.Group>,
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
        loading={categoryList.loading}
        pagination={{
          current: pagination?.page,
          pageSize: pagination?.limit,
          total: pagination?.totalItems,
          onChange: (page: number) => {
            setPagination({ ...pagination, page })
          },
        }}
        columns={columns}
        dataSource={categoryData}
      />
    </Card>
  )
}

export default CategoryDataTableCard

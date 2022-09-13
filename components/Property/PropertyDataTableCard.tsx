import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { Button, Card, Input, Radio, Typography } from 'antd'
import { PlusCircleOutlined, SearchOutlined } from '@ant-design/icons'

import { defaultPagination } from 'config/paginationConfig'
import CustomTable from 'components/CustomTable'
import { fallBackValueTable } from 'helpers/util'

import type { ColumnsType } from 'antd/lib/table'
import type { Pagination } from 'graphql/graphQL-service-hook'
import getAttribute from 'graphql/useGetAttribute'
import { GetAttributeResp } from 'graphql/useGetAttribute/interface'
import CategoryDataTableDropDown from './PropertyDataTableDropDown'
import dayjs from 'dayjs'
import { formatDate } from 'helpers/formatter'

const { Search } = Input
const { Text } = Typography

const PropertyDataTableCard: React.FC = () => {
  const router = useRouter()
  const [pagination, setPagination] = useState<Pagination>(defaultPagination)
  const [search, setSearch] = useState<string>()
  const [selectedRowKeys, setSelectRowKeys] = useState<React.Key[]>([])

  const attributeList = getAttribute({
    context: {
      clientType: 'LABEL',
    },
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
      const { pagination } = resp.getAttribute
      setPagination(pagination)
    },
  })

  const attributeListData = attributeList.data?.getAttribute.payload
  const columns: ColumnsType<GetAttributeResp> = [
    {
      title: 'Property Name',
      key: 'Name',
      fixed: 'left',
      width: 100,
      ellipsis: true,
      render: (_text: GetAttributeResp) => fallBackValueTable(_text?.name),
    },
    {
      title: 'Property Type',
      key: 'Type',
      fixed: 'left',
      width: 100,
      ellipsis: true,
      render: (_text: GetAttributeResp) => fallBackValueTable(_text?.type),
    },

    {
      title: 'Status',
      key: 'Status',
      fixed: 'left',
      width: 100,
      ellipsis: true,
      render: (text: GetAttributeResp, record) => {
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
      width: 100,
      ellipsis: true,
      render: (_text: GetAttributeResp) => (_text.updatedAt ? formatDate(_text?.updatedAt) : '-'),
    },
    // {
    //   title: 'Modify By',
    //   dataIndex: 'ModifyBy',
    //   key: 'ModifyBy',
    //   fixed: 'left',
    //   width: 100,
    //   ellipsis: true,
    //   render: (_text: ProductAttributeDTO) => fallBackValueTable(_text.updateBy),
    // },
    {
      title: 'Create Date',
      key: 'CreateDate',
      width: 100,
      ellipsis: true,
      render: (_text: GetAttributeResp) => (_text.createdAt ? formatDate(_text?.createdAt) : '-'),
    },
    // {
    //   title: 'Create By',
    //   dataIndex: 'CreateBy',
    //   key: 'CreateBy',
    //   fixed: 'left',
    //   width: 100,
    //   ellipsis: true,
    //   render: (_text: ProductAttributeDTO) => fallBackValueTable(_text.createBy),
    // },
    {
      fixed: 'right',
      key: 'eventAction',
      width: 150,
      render: (_text, record) => <CategoryDataTableDropDown data={record} setPagination={setPagination} />,
    },
  ]

  // const onSelectItems = (selectedRowKeys: React.Key[]) => {
  //   setSelectRowKeys(selectedRowKeys)
  // }

  // const hasSelected = selectedRowKeys.length > 0

  return (
    <Card className="w-100" style={{ marginTop: '1.5em' }}>
      <CustomTable
        //  rowSelection={{ selectedRowKeys, onChange: onSelectItems }}
        // rowSelectAmount={selectedRowKeys.length}
        header={[
          // <Radio.Group key="radioButton1" disabled={!hasSelected} onChange={() => { }} defaultValue="a" style={{}}>
          //   <Radio.Button value="qualify">Qualify</Radio.Button>
          //   <Radio.Button value="delete">Delete</Radio.Button>
          // </Radio.Group>,
          <Search
            key="searchButton"
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
            Add New Property
          </Button>,
        ]}
        rowKey="_id"
        scroll={{ x: 800, y: 400 }}
        loading={attributeList.loading}
        pagination={{
          current: pagination?.page,
          pageSize: pagination?.limit,
          total: pagination?.totalItems,
          onChange: (page: number) => {
            setPagination({ ...pagination, page })
          },
        }}
        columns={columns}
        dataSource={attributeListData}
      />
    </Card>
  )
}

export default PropertyDataTableCard

import React, { useState } from 'react'
import { Button, Card, Input, Typography } from 'antd'
import { PlusCircleOutlined, SearchOutlined } from '@ant-design/icons'

import { defaultPagination } from 'config/paginationConfig'
import CustomTable from 'components/CustomTable'
import { fallBackValueTable } from 'helpers/util'

import type { ColumnsType } from 'antd/lib/table'
import type { Pagination } from 'graphql/graphQL-service-hook'
import { AccountResponse } from 'graphql/interface'
import { dateUnixFormatter } from 'utils/utils'
import { GetDataAccountQuery, useGetDataAccountQuery } from 'graphql/generated/operations'
import { useRouter } from 'next/router'

const { Search } = Input
const { Text } = Typography

const AccountDataTableCard: React.FC = () => {
  const router = useRouter()

  const [pagination, setPagination] = useState<Pagination>(defaultPagination)
  const [search, setSearch] = useState<string>()
  const [selectedRowKeys, setSelectRowKeys] = useState<React.Key[]>([])

  const leadData = useGetDataAccountQuery({
    // skip: !router.isReady,
    context: { clientType: 'CUSTOMER' },
    fetchPolicy: 'cache-and-network',
    variables: {
      input: {
        pagination: {
          limit: pagination.limit,
          page: pagination.page,
        },
        search: {
          name: search as string,
          category: search as string,
        },
      },
    },
    onCompleted(resp: GetDataAccountQuery) {
      const { pagination } = resp.getDataAccount
      setPagination(pagination)
    },
  })

  const LeadData = leadData.data?.getDataAccount.payload
  const columns: ColumnsType<AccountResponse> = [
    {
      title: 'Organization Name',
      key: 'organizationName',
      fixed: 'left',
      width: 180,
      ellipsis: true,
      render: (_text: AccountResponse) => fallBackValueTable(_text?.name),
    },
    {
      title: 'Organization Type',
      key: 'Type',
      fixed: 'left',
      width: 180,
      ellipsis: true,
      render: (_text: AccountResponse) => fallBackValueTable(_text?.leadType),
    },
    // {
    //   title: 'Organization Owner',
    //   key: 'Type',
    //   fixed: 'left',
    //   width: 180,
    //   ellipsis: true,
    //   render: (_text: AccountResponse) => fallBackValueTable(_text?.resourceOwner),
    // },
    {
      title: 'Status',
      key: 'Status',
      fixed: 'left',
      width: 100,
      ellipsis: true,
      render: (text: AccountResponse, record) => {
        let _tColor
        let _iCon
        let _text
        switch (text.status) {
          default:
          case 'APPROVED':
            _tColor = '#34B53A'
            _text = 'Approved'
            break
          case 'REVIWING':
            _tColor = '#FFC107'
            _text = 'Reviwing'
            break
          case 'PREPARING':
            _tColor = '#FFC107'
            _text = 'Preparing'
            break
          case 'NEED_MORE_INFORMATION':
            _tColor = '#FFC107'
            _text = 'Need More Information'
            break
          case 'SUSPENDED':
            _tColor = '#FFC107'
            _text = 'Suspended'
            break
          case 'REJECTED':
            _tColor = '#FF0000'
            _text = 'Rejected'
            break
          case 'BLOCKED':
            _tColor = '#FF0000'
            _text = 'Blocked'
            break
          case 'DECLINED':
            _tColor = '#FF0000'
            _text = 'Declined'
            break
          case 'CLOSED':
            _tColor = '#FF0000'
            _text = 'Closed'
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
      width: 150,
      ellipsis: true,
      render: (_text: AccountResponse) => (_text?.updatedAt ? dateUnixFormatter(parseInt(_text?.updatedAt)) : '-'),
    },
    {
      title: 'Modify By',
      key: 'ModifyBy',
      width: 100,
      ellipsis: true,
      render: (_text: AccountResponse) => fallBackValueTable(_text?.updatedAtBy?.email[0].value || '-'),
    },
    {
      title: 'Create Date',
      key: 'CreateDate',
      width: 150,
      ellipsis: true,
      render: (_text: AccountResponse) => (_text?.createdAt ? dateUnixFormatter(parseInt(_text?.createdAt)) : '-'),
    },
    {
      title: 'Create By',
      key: 'CreateBy',
      width: 100,
      ellipsis: true,
      render: (_text: AccountResponse) => fallBackValueTable(_text?.createdAtBy?.email[0].value || '-'),
    },
    // {
    //   fixed: 'right',
    //   key: 'eventAction',
    //   width: 140,
    //   render: (_text, record) => (
    //     <LeadDataTableDropDown leadData={record} setPagination={setPagination} refetch={leadData.refetch} />
    //   ),
    // },
  ]

  // const onSelectItems = (selectedRowKeys: React.Key[]) => {
  //   setSelectRowKeys(selectedRowKeys)
  // }

  // const hasSelected = selectedRowKeys.length > 0

  return (
    <Card className="w-100" style={{ marginTop: '1.5em' }}>
      <CustomTable
        // rowSelection={{ selectedRowKeys, onChange: onSelectItems }}
        // rowSelectAmount={selectedRowKeys.length}
        header={[
          // hasSelected ? (
          //   <Button key="deleteButton" danger>
          //     Delete
          //   </Button>
          // ) : null,
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
            Add Account
          </Button>,
        ]}
        rowKey="_id"
        scroll={{ x: 800, y: 400 }}
        loading={leadData.loading}
        pagination={{
          current: pagination?.page,
          pageSize: pagination?.limit,
          total: pagination?.totalItems,
          onChange: (page: number) => {
            setPagination({ ...pagination, page })
          },
        }}
        columns={columns}
        dataSource={LeadData}
      />
    </Card>
  )
}

export default AccountDataTableCard

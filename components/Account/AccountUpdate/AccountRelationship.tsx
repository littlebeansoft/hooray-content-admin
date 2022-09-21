import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { Button, Card, Input, Radio, Typography } from 'antd'
import { PlusCircleOutlined, SearchOutlined } from '@ant-design/icons'

import { defaultPagination } from 'config/paginationConfig'
import CustomTable from 'components/CustomTable'
import { fallBackValueTable } from 'helpers/util'

import type { ColumnsType } from 'antd/lib/table'
import type { Pagination } from 'graphql/graphQL-service-hook'
import { GetDataAccountQuery, useGetDataAccountQuery } from 'graphql/generated/operations'
import { LeadDataAPIPayload } from 'graphql/interface'
import dayjs from 'dayjs'

const { Search } = Input

const UserRelationship: React.FC = () => {
  const router = useRouter()
  const [pagination, setPagination] = useState<Pagination>(defaultPagination)
  const [search, setSearch] = useState<string>()
  const [selectedRowKeys, setSelectRowKeys] = useState<React.Key[]>([])

  const leadData = useGetDataAccountQuery({
    // skip: !router.isReady,
    fetchPolicy: 'network-only',
    variables: {
      input: {
        pagination: {
          limit: pagination.limit,
          page: pagination.page,
        },
        search: {},
      },
    },
    onCompleted(resp: any) {
      const { pagination } = resp.getDataLead
      setPagination(pagination)
    },
  })

  const LeadData = leadData.data?.getDataAccount.payload
  const columns: ColumnsType<LeadDataAPIPayload> = [
    {
      title: 'User Name',
      dataIndex: 'User Name',
      key: 'UserName',
      fixed: 'left',
      width: 100,
      ellipsis: true,
      render: (_text: LeadDataAPIPayload) => fallBackValueTable(_text.firstName + (_text.lastName || '')),
    },
    {
      title: 'User Type',
      dataIndex: 'User Type',
      key: 'UserType',
      fixed: 'left',
      width: 100,
      ellipsis: true,
      render: (_text: LeadDataAPIPayload) => fallBackValueTable(_text.leadType),
    },
    {
      title: 'Create At',
      dataIndex: 'CreateAt',
      key: 'CreateAt',
      width: 100,
      ellipsis: true,
      render: (_text: LeadDataAPIPayload) => (_text.createdAt ? dayjs(_text.updatedAt) : '-'),
    },
    // {
    //   title: 'Create By',
    //   dataIndex: 'CreateBy',
    //   key: 'CreateBy',
    //   width: 100,
    //   ellipsis: true,
    //   render: (_text: LeadDataAPIPayload) => fallBackValueTable(_text.createBy),
    // },
  ]

  const onSelectItems = (selectedRowKeys: React.Key[]) => {
    setSelectRowKeys(selectedRowKeys)
  }

  const hasSelected = selectedRowKeys.length > 0

  return (
    <div style={{ marginTop: -32 }}>
      <CustomTable
        header={[]}
        rowKey="_id"
        scroll={{ x: 800, y: 300 }}
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
    </div>
  )
}

export default UserRelationship

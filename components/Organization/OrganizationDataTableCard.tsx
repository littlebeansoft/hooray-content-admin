import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { Button, Card, Input, Radio, Typography } from 'antd'
import { PlusCircleOutlined, SearchOutlined } from '@ant-design/icons'

import { defaultPagination } from 'config/paginationConfig'
import CustomTable from 'components/CustomTable'
import { fallBackValueTable } from 'helpers/util'

import type { ColumnsType } from 'antd/lib/table'
import type { Pagination } from 'graphql/graphQL-service-hook'
import { GetDataLeadQuery, useGetDataLeadQuery } from 'graphql/generated/operations'
import { LeadDataAPIPayload } from 'graphql/interface'
import dayjs from 'dayjs'

const { Search } = Input

const OrganizationDataTableCard: React.FC = () => {
  const router = useRouter()
  const [pagination, setPagination] = useState<Pagination>(defaultPagination)
  const [search, setSearch] = useState<string>()
  const [selectedRowKeys, setSelectRowKeys] = useState<React.Key[]>([])

  const leadData = useGetDataLeadQuery({
    // skip: !router.isReady,
    fetchPolicy: 'network-only',
    variables: {
      input: {
        pagination: {
          limit: pagination.limit,
          page: pagination.page,
        },
        search: {
          firstName: search,
          lastName: search,
          citizenId: search,
          passport: search,
        },
      },
    },
    onCompleted(resp: any) {
      const { pagination } = resp.getDataLead
      setPagination(pagination)
    },
  })

  const LeadData = leadData.data?.getDataLead.payload
  const columns: ColumnsType<LeadDataAPIPayload> = [
    {
      title: 'Organization Name',
      dataIndex: 'User Name',
      key: 'UserName',
      fixed: 'left',
      width: 100,
      ellipsis: true,
      render: (_text: LeadDataAPIPayload) => fallBackValueTable(_text.firstName + (_text.lastName || '')),
    },
    {
      title: 'Organization Type',
      dataIndex: 'User Type',
      key: 'UserType',
      fixed: 'left',
      width: 100,
      ellipsis: true,
      render: (_text: LeadDataAPIPayload) => fallBackValueTable(_text.leadType),
    },
    {
      title: 'Owner Name',
      dataIndex: 'Organization Name',
      key: 'TOrganizationype',
      fixed: 'left',
      width: 120,
      ellipsis: true,
      render: (_text: LeadDataAPIPayload) => fallBackValueTable(_text.organizationName),
    },
    {
      title: 'Status',
      dataIndex: 'Status',
      key: 'Status',
      fixed: 'left',
      width: 100,
      ellipsis: true,
      render: (_text: LeadDataAPIPayload) => fallBackValueTable(_text.status),
    },
    {
      title: 'Update At',
      dataIndex: 'UpdateAt',
      key: 'UpdateAt',
      width: 100,
      ellipsis: true,
      render: (_text: LeadDataAPIPayload) => (_text.updatedAt ? dayjs(_text.updatedAt) : '-'),
    },
    // {
    //   title: 'Update By',
    //   dataIndex: 'UpdateBy',
    //   key: 'UpdateBy',
    //   width: 100,
    //   ellipsis: true,
    //   render: (_text: LeadDataAPIPayload) => fallBackValueTable(_text.updateBy),
    // },
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
    <Card className="w-100" style={{ marginTop: '1.5em' }}>
      <CustomTable
        rowSelection={{ selectedRowKeys, onChange: onSelectItems }}
        rowSelectAmount={selectedRowKeys.length}
        header={[
          hasSelected ? (
            <Button key="dangerButton" danger>
              Delete
            </Button>
          ) : null,
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
            Add Organization
          </Button>,
        ]}
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
    </Card>
  )
}

export default OrganizationDataTableCard

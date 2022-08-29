import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { Button, Card, Typography } from 'antd'
import { PlusCircleOutlined } from '@ant-design/icons'

import { defaultPagination } from 'config/paginationConfig'
import CustomTable from 'components/CustomTable'
import { fallBackValueTable } from 'helpers/util'

import type { ColumnsType } from 'antd/lib/table'
import type { Pagination } from 'graphql/graphQL-service-hook'
import useGetLeadData from 'graphql/useGetLeadData'
import { LeadDataAPIPayload } from 'graphql/interface'
import LeadDataTableDropDown from './LeadDataTableDropDown'
import dayjs from 'dayjs'

const LeadDataTableCard: React.FC<LeadDataAPIPayload> = () => {
  const router = useRouter()
  const [pagination, setPagination] = useState<Pagination>(defaultPagination)
  const [search, setSearch] = useState<string>()

  const leadData = useGetLeadData({
    // skip: !router.isReady,
    fetchPolicy: 'network-only',
    variables: {
      input: {
        pagination: {
          limit: pagination.limit,
          page: pagination.page,
        },
        search: {
          organizationName: search,
          firstName: search,
          lastName: search,
          phone: search,
          email: search,
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
      title: 'Name',
      dataIndex: 'Name',
      key: 'Name',
      fixed: 'left',
      width: 100,
      ellipsis: true,
      render: (_text: LeadDataAPIPayload) => fallBackValueTable(_text.firstName + (_text.lastName || '')),
    },
    {
      title: 'Type',
      dataIndex: 'Type',
      key: 'Type',
      fixed: 'left',
      width: 100,
      ellipsis: true,
      render: (_text: LeadDataAPIPayload) => fallBackValueTable(_text.leadTypeName),
    },
    {
      title: 'Organization',
      dataIndex: 'Organization',
      key: 'TOrganizationype',
      fixed: 'left',
      width: 100,
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
      title: 'Telephone',
      dataIndex: 'Telephone',
      key: 'Telephone',
      fixed: 'left',
      width: 100,
      ellipsis: true,
      render: (_text: LeadDataAPIPayload) => fallBackValueTable(_text.telephone),
    },
    {
      title: 'Email',
      dataIndex: 'Email',
      key: 'Email',
      fixed: 'left',
      width: 100,
      ellipsis: true,
      render: (_text: LeadDataAPIPayload) => fallBackValueTable(_text.email),
    },
    {
      title: 'Modify Date',
      dataIndex: 'ModifyDate',
      key: 'ModifyDate',
      fixed: 'left',
      width: 100,
      ellipsis: true,
      render: (_text: LeadDataAPIPayload) => (_text.updatedAt ? dayjs(_text.updatedAt) : '-'),
    },
    {
      title: 'Modify By',
      dataIndex: 'ModifyBy',
      key: 'ModifyBy',
      fixed: 'left',
      width: 100,
      ellipsis: true,
      render: (_text: LeadDataAPIPayload) => fallBackValueTable(_text.updateBy),
    },
    {
      title: 'Create Date',
      dataIndex: 'CreateDate',
      key: 'CreateDate',
      fixed: 'left',
      width: 100,
      ellipsis: true,
      render: (_text: LeadDataAPIPayload) => (_text.createdAt ? dayjs(_text.updatedAt) : '-'),
    },
    {
      title: 'Create By',
      dataIndex: 'CreateBy',
      key: 'CreateBy',
      fixed: 'left',
      width: 100,
      ellipsis: true,
      render: (_text: LeadDataAPIPayload) => fallBackValueTable(_text.createBy),
    },
    {
      key: 'eventAction',
      width: 100,
      render: (_text, record) => <LeadDataTableDropDown leadData={record} setPagination={setPagination} />,
    },
  ]
  return (
    <Card className="w-100" style={{ marginTop: '1.5em' }}>
      <CustomTable
        onSearch={(value: string) => {
          setSearch(value)
        }}
        header={[
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
            Create
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

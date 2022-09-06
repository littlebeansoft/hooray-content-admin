import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { Button, Card, Input, Radio, Typography } from 'antd'
import { PlusCircleOutlined, SearchOutlined } from '@ant-design/icons'

import { defaultPagination } from 'config/paginationConfig'
import CustomTable from 'components/CustomTable'
import { fallBackValueTable } from 'helpers/util'

import type { ColumnsType } from 'antd/lib/table'
import type { Pagination } from 'graphql/graphQL-service-hook'
import useGetLeadData from 'graphql/useGetLeadData'
import { LeadDataAPIPayload } from 'graphql/interface'
import LeadDataTableDropDown from './LeadDataTableDropDown'
import dayjs from 'dayjs'

const { Search } = Input


const LeadDataTableCard: React.FC = () => {
  const router = useRouter()
  const [pagination, setPagination] = useState<Pagination>(defaultPagination)
  const [search, setSearch] = useState<string>()
  const [selectedRowKeys, setSelectRowKeys] = useState<React.Key[]>([])


  const leadData = useGetLeadData({
    // skip: !router.isReady,
    context: { clientType: 'CUSTOMER' },
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
  console.log("value", LeadData);
  const columns: ColumnsType<LeadDataAPIPayload> = [
    {
      title: 'Name',
      key: 'firstName',
      fixed: 'left',
      width: 150,
      ellipsis: true,
      render: (_text: LeadDataAPIPayload) => fallBackValueTable(_text?.firstName + ' ' + _text?.lastName)
    },
    {
      title: 'Type Name',
      key: 'Type',
      fixed: 'left',
      width: 120,
      ellipsis: true,
      render: (_text: LeadDataAPIPayload) => fallBackValueTable(_text?.leadTypeName),
    },
    {
      title: 'Organization',
      key: 'TOrganizationype',
      fixed: 'left',
      width: 150,
      ellipsis: true,
      render: (_text: LeadDataAPIPayload) => fallBackValueTable(_text?.organizationName),
    },
    {
      title: 'Status',
      key: 'Status',
      fixed: 'left',
      width: 100,
      ellipsis: true,
      render: (_text: LeadDataAPIPayload) => fallBackValueTable(_text?.status),
    },
    {
      title: 'Telephone',
      dataIndex: 'Telephone',
      key: 'Telephone',
      fixed: 'left',
      width: 100,
      ellipsis: true,
      render: (_text: LeadDataAPIPayload) => fallBackValueTable(_text?.telephone),
    },
    {
      title: 'Email',
      dataIndex: 'Email',
      key: 'Email',
      fixed: 'left',
      width: 100,
      ellipsis: true,
      render: (_text: LeadDataAPIPayload) => fallBackValueTable(_text?.email),
    },
    {
      title: 'Modify Date',
      dataIndex: 'ModifyDate',
      key: 'ModifyDate',
      fixed: 'left',
      width: 100,
      ellipsis: true,
      render: (_text: LeadDataAPIPayload) => (_text?.updatedAt ? dayjs(_text?.updatedAt) : '-'),
    },
    {
      title: 'Modify By',
      dataIndex: 'ModifyBy',
      key: 'ModifyBy',
      fixed: 'left',
      width: 100,
      ellipsis: true,
      render: (_text: LeadDataAPIPayload) => fallBackValueTable(_text?.updateBy),
    },
    {
      title: 'Create Date',
      dataIndex: 'CreateDate',
      key: 'CreateDate',
      fixed: 'left',
      width: 100,
      ellipsis: true,
      render: (_text: LeadDataAPIPayload) => (_text?.createdAt ? dayjs(_text?.updatedAt) : '-'),
    },
    {
      title: 'Create By',
      dataIndex: 'CreateBy',
      key: 'CreateBy',
      fixed: 'left',
      width: 100,
      ellipsis: true,
      render: (_text: LeadDataAPIPayload) => fallBackValueTable(_text?.createBy),
    },
    {
      fixed: 'right',
      key: 'eventAction',
      width: 100,
      render: (_text, record) => <LeadDataTableDropDown leadData={record} setPagination={setPagination} />,
    },
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
            Add New Lead
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

export default LeadDataTableCard

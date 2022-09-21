import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { Button, Card, Input, Radio, Typography } from 'antd'
import { PlusCircleOutlined, SearchOutlined } from '@ant-design/icons'

import { defaultPagination } from 'config/paginationConfig'
import CustomTable from 'components/CustomTable'
import { fallBackValueTable } from 'helpers/util'

import type { ColumnsType } from 'antd/lib/table'
import type { Pagination } from 'graphql/graphQL-service-hook'
import { LeadDataAPIPayload } from 'graphql/interface'
import OrganizationLabelDataTableDropDown from './OrganizationLabelDataTableDropDown'
import dayjs from 'dayjs'
import { GetDataLeadQuery, useGetDataLeadQuery } from 'graphql/generated/operations'
const { Search } = Input

const OrganizationLabelDataTableCard: React.FC = () => {
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
      title: 'Organization Label Name',
      dataIndex: 'Name',
      key: 'Name',
      fixed: 'left',
      width: 100,
      ellipsis: true,
      render: (_text: LeadDataAPIPayload) => fallBackValueTable(_text.firstName + (_text.lastName || '')),
    },
    {
      title: 'Organization Label Parent',
      dataIndex: 'Type',
      key: 'Type',
      fixed: 'left',
      width: 100,
      ellipsis: true,
      render: (_text: LeadDataAPIPayload) => fallBackValueTable(_text.leadType),
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
      title: 'Modify Date',
      dataIndex: 'ModifyDate',
      key: 'ModifyDate',
      fixed: 'left',
      width: 100,
      ellipsis: true,
      render: (_text: LeadDataAPIPayload) => (_text.updatedAt ? dayjs(_text.updatedAt) : '-'),
    },
    // {
    //   title: 'Modify By',
    //   dataIndex: 'ModifyBy',
    //   key: 'ModifyBy',
    //   fixed: 'left',
    //   width: 100,
    //   ellipsis: true,
    //   render: (_text: LeadDataAPIPayload) => fallBackValueTable(_text.updateBy),
    // },
    {
      title: 'Create Date',
      dataIndex: 'CreateDate',
      key: 'CreateDate',
      fixed: 'left',
      width: 100,
      ellipsis: true,
      render: (_text: LeadDataAPIPayload) => (_text.createdAt ? dayjs(_text.updatedAt) : '-'),
    },
    // {
    //   title: 'Create By',
    //   dataIndex: 'CreateBy',
    //   key: 'CreateBy',
    //   fixed: 'left',
    //   width: 100,
    //   ellipsis: true,
    //   render: (_text: LeadDataAPIPayload) => fallBackValueTable(_text.createBy),
    // },
    {
      fixed: 'right',
      key: 'eventAction',
      width: 100,
      render: (_text, record) => <OrganizationLabelDataTableDropDown leadData={record} setPagination={setPagination} />,
    },
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
            <Radio.Button key="radioButton1" value="qualify">
              Qualify
            </Radio.Button>
            <Radio.Button key="radioButton2" value="delete">
              Delete
            </Radio.Button>
          </Radio.Group>,
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
            Add New Organization Label
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

export default OrganizationLabelDataTableCard

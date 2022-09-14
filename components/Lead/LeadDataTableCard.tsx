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
import { formatDate } from 'helpers/formatter'
import { dateUnixFormatter } from 'utils/utils'

const { Search } = Input
const { Text } = Typography

const LeadDataTableCard: React.FC = () => {
  const router = useRouter()
  const [pagination, setPagination] = useState<Pagination>(defaultPagination)
  const [search, setSearch] = useState<string>()
  const [selectedRowKeys, setSelectRowKeys] = useState<React.Key[]>([])

  const leadData = useGetLeadData({
    // skip: !router.isReady,
    context: { clientType: 'CUSTOMER' },
    fetchPolicy: 'cache-and-network',
    variables: {
      input: {
        pagination: {
          limit: pagination.limit,
          page: pagination.page,
        },
        query: {
          status: 'NORMAL',
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
      title: 'Name',
      key: 'firstName',
      fixed: 'left',
      width: 150,
      ellipsis: true,
      render: (_text: LeadDataAPIPayload) => fallBackValueTable(_text?.firstName + ' ' + _text?.lastName),
    },
    {
      title: 'Lead Type',
      key: 'Type',
      fixed: 'left',
      width: 120,
      ellipsis: true,
      render: (_text: LeadDataAPIPayload) => fallBackValueTable(_text?.leadTypeName),
    },
    {
      title: 'Organization Name',
      key: 'TOrganizationype',
      fixed: 'left',
      width: 160,
      ellipsis: true,
      render: (_text: LeadDataAPIPayload) => fallBackValueTable(_text?.organizationName),
    },
    {
      title: 'Status',
      key: 'Status',
      fixed: 'left',
      width: 100,
      ellipsis: true,
      render: (text: LeadDataAPIPayload, record) => {
        let _tColor
        let _iCon
        let _text
        switch (text.status) {
          default:
          case 'NORMAL':
            _tColor = '#FFB200'
            _text = 'Normal'
            break
          case 'DISQUALIFY':
            _tColor = '#A30404'
            _text = 'Disqualify'
            break
          case 'QUALIFY':
            _tColor = '#34B53A'
            _text = 'Qualify'
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
      title: 'Telephone',
      key: 'Telephone',
      width: 120,
      ellipsis: true,
      render: (_text: LeadDataAPIPayload) => fallBackValueTable(_text?.phone[0]?.value),
    },
    {
      title: 'Email',
      key: 'Email',
      width: 180,
      ellipsis: true,
      render: (_text: LeadDataAPIPayload) => fallBackValueTable(_text?.email[0]?.value),
    },
    {
      title: 'Modify Date',
      key: 'ModifyDate',
      width: 150,
      ellipsis: true,
      render: (_text: LeadDataAPIPayload) => (_text?.updatedAt ? dateUnixFormatter(_text?.updatedAt) : '-'),
    },
    // {
    //   title: 'Modify By',
    //   dataIndex: 'ModifyBy',
    //   key: 'ModifyBy',
    //   fixed: 'left',
    //   width: 100,
    //   ellipsis: true,
    //   render: (_text: LeadDataAPIPayload) => fallBackValueTable(_text?.updateBy),
    // },
    {
      title: 'Create Date',
      key: 'CreateDate',
      width: 150,
      ellipsis: true,
      render: (_text: LeadDataAPIPayload) => (_text?.createdAt ? dateUnixFormatter(_text?.createdAt) : '-'),
    },
    // {
    //   title: 'Create By',
    //   dataIndex: 'CreateBy',
    //   key: 'CreateBy',
    //   fixed: 'left',
    //   width: 100,
    //   ellipsis: true,
    //   render: (_text: LeadDataAPIPayload) => fallBackValueTable(_text?.createBy),
    // },
    {
      fixed: 'right',
      key: 'eventAction',
      width: 140,
      render: (_text, record) => (
        <LeadDataTableDropDown leadData={record} setPagination={setPagination} refetch={leadData.refetch} />
      ),
    },
  ]

  const onSelectItems = (selectedRowKeys: React.Key[]) => {
    setSelectRowKeys(selectedRowKeys)
  }

  const hasSelected = selectedRowKeys.length > 0

  return (
    <Card className="w-100" style={{ marginTop: '1.5em' }}>
      <CustomTable
        // rowSelection={{ selectedRowKeys, onChange: onSelectItems }}
        rowSelectAmount={undefined}
        header={[
          // <Radio.Group disabled={!hasSelected} onChange={() => { }} defaultValue="a" style={{}}>
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
            Add New Lead
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

export default LeadDataTableCard

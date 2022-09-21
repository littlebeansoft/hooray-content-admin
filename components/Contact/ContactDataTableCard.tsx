import React, { useState } from 'react'
import { Button, Card, Input, Typography } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

import { defaultPagination } from 'config/paginationConfig'
import CustomTable from 'components/CustomTable'
import { fallBackValueTable } from 'helpers/util'

import type { ColumnsType } from 'antd/lib/table'
import type { Pagination } from 'graphql/graphQL-service-hook'
import { ContactResponse } from 'graphql/interface'
import { dateUnixFormatter } from 'utils/utils'
import { GetDataContactQuery, useGetDataContactQuery } from 'graphql/generated/operations'

const { Search } = Input
const { Text } = Typography

const ContactDataTableCard: React.FC = () => {
  const [pagination, setPagination] = useState<Pagination>(defaultPagination)
  const [search, setSearch] = useState<string>()
  const [selectedRowKeys, setSelectRowKeys] = useState<React.Key[]>([])

  const leadData = useGetDataContactQuery({
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
          citizenId: search as string,
          firstName: search as string,
          lastName: search as string,
          passport: search as string,
        },
      },
    },
    onCompleted(resp: GetDataContactQuery) {
      const { pagination } = resp.getDataContact
      setPagination(pagination)
    },
  })

  const LeadData = leadData.data?.getDataContact.payload
  const columns: ColumnsType<ContactResponse> = [
    {
      title: 'Name',
      key: 'firstName',
      fixed: 'left',
      width: 150,
      ellipsis: true,
      render: (_text: ContactResponse) => fallBackValueTable(_text?.firstName + ' ' + _text?.lastName),
    },
    {
      title: 'Lead Type',
      key: 'Type',
      fixed: 'left',
      width: 120,
      ellipsis: true,
      render: (_text: ContactResponse) => fallBackValueTable(_text?.leadType),
    },
    {
      title: 'Citizen ID',
      key: 'TOrganizationype',
      fixed: 'left',
      width: 160,
      ellipsis: true,
      render: (_text: ContactResponse) => fallBackValueTable(_text?.citizenId),
    },
    {
      title: 'Status',
      key: 'Status',
      fixed: 'left',
      width: 100,
      ellipsis: true,
      render: (text: ContactResponse, record) => {
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
      render: (_text: ContactResponse) => fallBackValueTable(_text?.phone[0]?.value),
    },
    {
      title: 'Email',
      key: 'Email',
      width: 180,
      ellipsis: true,
      render: (_text: ContactResponse) => fallBackValueTable(_text?.email[0]?.value),
    },
    {
      title: 'Modify Date',
      key: 'ModifyDate',
      width: 150,
      ellipsis: true,
      render: (_text: ContactResponse) => (_text?.updatedAt ? dateUnixFormatter(parseInt(_text?.updatedAt)) : '-'),
    },
    {
      title: 'Modify By',
      key: 'ModifyBy',
      width: 100,
      ellipsis: true,
      render: (_text: ContactResponse) => fallBackValueTable(_text?.updatedAtBy?.email[0].value || '-'),
    },
    {
      title: 'Create Date',
      key: 'CreateDate',
      width: 150,
      ellipsis: true,
      render: (_text: ContactResponse) => (_text?.createdAt ? dateUnixFormatter(parseInt(_text?.createdAt)) : '-'),
    },
    {
      title: 'Create By',
      key: 'CreateBy',
      width: 100,
      ellipsis: true,
      render: (_text: ContactResponse) => fallBackValueTable(_text?.createdAtBy?.email[0].value || '-'),
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

  const onSelectItems = (selectedRowKeys: React.Key[]) => {
    setSelectRowKeys(selectedRowKeys)
  }

  const hasSelected = selectedRowKeys.length > 0

  return (
    <Card className="w-100" style={{ marginTop: '1.5em' }}>
      <CustomTable
        // rowSelection={{ selectedRowKeys, onChange: onSelectItems }}
        // rowSelectAmount={selectedRowKeys.length}
        header={[
          hasSelected ? (
            <Button key="deleteButton" danger>
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
          // <Button
          //   key="addProductType"
          //   type="primary"
          //   icon={<PlusCircleOutlined />}
          //   onClick={() => {
          //     router.push({
          //       pathname: `${router.pathname}/create`,
          //       query: {
          //         ...router.query,
          //       },
          //     })
          //   }}
          // >
          //   Add New User
          // </Button>,
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

export default ContactDataTableCard

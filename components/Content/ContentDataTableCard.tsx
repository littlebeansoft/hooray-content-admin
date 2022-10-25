import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { Button, Card, Input } from 'antd'
import { PlusCircleOutlined, SearchOutlined } from '@ant-design/icons'

import { defaultPagination } from 'config/paginationConfig'
import CustomTable from 'components/CustomTable'
import { fallBackValueTable } from 'helpers/util'

import type { ColumnsType } from 'antd/lib/table'
import type { Pagination } from 'graphql/graphQL-service-hook'

import { LeadDataAPIPayload } from 'graphql/interface'
import dayjs from 'dayjs'
import { useTranslation } from 'react-i18next'

const { Search } = Input

const ContentDataTableCard: React.FC = () => {
  const { t, i18n } = useTranslation()
  const router = useRouter()
  const [pagination, setPagination] = useState<Pagination>(defaultPagination)
  const [search, setSearch] = useState<string>()
  const [selectedRowKeys, setSelectRowKeys] = useState<React.Key[]>([])

  const columns: ColumnsType<LeadDataAPIPayload> = [
    {
      title: 'Content Name',
      dataIndex: 'Content Name',
      key: 'ContentName',
      fixed: 'left',
      width: 100,
      ellipsis: true,
      sorter: (a, b) => {
        console.log(a, ', ', b)
        return 1
      },
      render: (_text: LeadDataAPIPayload) => fallBackValueTable(_text.firstName + (_text.lastName || '')),
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
      render: (_text: LeadDataAPIPayload) => (_text.updatedAt ? dayjs(_text.updatedAt).toString() : '-'),
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
      render: (_text: LeadDataAPIPayload) => (_text.createdAt ? dayjs(_text.updatedAt).toString() : '-'),
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
          <Button
            key="addContentType"
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
            {t('content:button:addNewContent')}
          </Button>,
        ]}
        rowKey="_id"
        scroll={{ x: 800, y: 300 }}
        loading={false}
        pagination={{
          current: pagination?.page,
          pageSize: pagination?.limit,
          total: pagination?.totalItems,
          onChange: (page: number) => {
            setPagination({ ...pagination, page })
          },
        }}
        columns={columns}
        dataSource={[]}
      />
    </Card>
  )
}

export default ContentDataTableCard

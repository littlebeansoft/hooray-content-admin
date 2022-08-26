import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { Button, Card, Typography } from 'antd'
import { PlusCircleOutlined } from '@ant-design/icons'

import { defaultPagination } from 'config/paginationConfig'
import CustomTable from 'components/CustomTable'
import { fallBackValueTable } from 'helpers/util'

import type { ColumnsType } from 'antd/lib/table'
import type { Pagination } from 'graphql/graphQL-service-hook'
import type { MasterDataAPIPayload } from 'graphql/interface'
import useGetMasterData from 'graphql/useGetMasterData'
import MasterDataTableDroupDown from './MasterDataTableDroupDown'

const { Text } = Typography

const MasterDataTableCard: React.FC = () => {
  const router = useRouter()
  const [pagination, setPagination] = useState<Pagination>(defaultPagination)
  const [search, setSearch] = useState<string>()
  // const [parentKey, setParentKey] = useState<string | null>(null)
  const { parentKey = '' } = router.query
  const masterData = useGetMasterData({
    skip: !router.isReady,
    fetchPolicy: 'network-only',
    variables: {
      input: {
        pagination: {
          limit: pagination.limit,
          page: pagination.page,
        },
        query: {
          parentKey: parentKey || null,
        },
        search: {
          dataKey: search,
        },
      },
    },
    onCompleted(resp) {
      const { pagination } = resp.getMasterData
      setPagination(pagination)
    },
  })
  const MasterDataData = masterData.data?.getMasterData.payload
  const columns: ColumnsType<MasterDataAPIPayload> = [
    {
      title: 'Data key',
      dataIndex: 'dataKey',
      key: 'dataKey',
      fixed: 'left',
      width: 100,
      ellipsis: true,
      render: (_text) => fallBackValueTable(_text),
    },
    {
      title: 'Global Text',
      dataIndex: 'localeText',
      key: 'localeText',
      fixed: 'left',
      width: 100,
      ellipsis: true,
      render: (_text) => fallBackValueTable(_text.text),
    },
    {
      key: 'eventAction',
      width: 100,
      render: (_text, record) => <MasterDataTableDroupDown masterData={record} setPagination={setPagination} />,
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
                  parentKey,
                },
              })
            }}
          >
            Create
          </Button>,
        ]}
        rowKey="_id"
        scroll={{ x: 800, y: 300 }}
        loading={masterData.loading}
        pagination={{
          current: pagination?.page,
          pageSize: pagination?.limit,
          total: pagination?.totalItems,
          onChange: (page: number) => {
            setPagination({ ...pagination, page })
          },
        }}
        columns={columns}
        dataSource={MasterDataData}
      />
    </Card>
  )
}

export default MasterDataTableCard

import { Key, useState } from 'react'
import {
  Badge,
  Button,
  Popconfirm,
  Space,
  TablePaginationConfig,
  TableProps,
} from 'antd'
import { useQueryParams, StringParam } from 'use-query-params'

import {
  Status,
  useGetContentPackListQuery,
} from 'graphql/__generated/operations'

import usePaginationForAPI from 'hooks/usePaginationForAPI'

import ContentListTable, { RecordType } from './ListTable'
import ContentListControl, { Filter, OnFilterChangeType } from './ListControl'

import { getActiveBooleanValue } from 'helpers/utils'
import BottomActionBar from 'components/BottomActionBar'

interface ContentListProps {
  loading?: boolean
  filter?: Filter
  dataSource?: RecordType[]
  pagination?: TablePaginationConfig
  onFilterChange?: OnFilterChangeType
  onTableChange?: TableProps<RecordType>['onChange']
  onDeleteListContentPacks?: (contentPackIDs: string[]) => void
}

const ContentList = ({
  loading,
  dataSource,
  pagination,
  filter,
  onFilterChange,
  onTableChange,
  onDeleteListContentPacks,
}: ContentListProps) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<Key[]>([])

  return (
    <Space style={{ width: '100%' }} direction="vertical">
      <ContentListControl filter={filter} onFilterChange={onFilterChange} />

      <ContentListTable
        loading={loading}
        dataSource={dataSource}
        pagination={pagination}
        onChange={onTableChange}
        rowSelection={{
          selectedRowKeys,
          onChange: setSelectedRowKeys,
        }}
      />

      <BottomActionBar visible={selectedRowKeys.length > 0}>
        <Space>
          <Space size="small">
            <Badge count={selectedRowKeys.length} />
            <span>จำนวนหลักสูตรที่เลือกไว้</span>
          </Space>

          <Popconfirm
            title="แน่ใจที่จะลบหรือไม่?"
            placement="topRight"
            onConfirm={() => {
              onDeleteListContentPacks?.(selectedRowKeys as string[])
            }}
            okButtonProps={{
              danger: true,
            }}
          >
            <Button type="primary" danger>
              ลบ
            </Button>
          </Popconfirm>
        </Space>
      </BottomActionBar>
    </Space>
  )
}

export default ContentList

export const useGetContentList = () => {
  const [filter, setFilter] = useQueryParams({
    active: StringParam,
    status: StringParam,
  })

  const {
    paginationVariables,
    changeToFirstPage,
    createAntdPagination,
    onAntdTableChange,
  } = usePaginationForAPI()

  const query = useGetContentPackListQuery({
    fetchPolicy: 'network-only',
    variables: {
      input: {
        pagination: paginationVariables,
        filter: {
          active: getActiveBooleanValue(filter.active),
          status:
            filter.status === 'all' ? undefined : (filter.status as Status),
        },
      },
    },
  })

  const data = query.data?.getContentPackList

  const onFilterChange: OnFilterChangeType = (name, value) => {
    changeToFirstPage()

    setFilter({
      [name]: value,
    })
  }

  return {
    filter,
    query,
    pagination: createAntdPagination(data?.pagination),
    onFilterChange,
    onTableChange: onAntdTableChange,
  }
}

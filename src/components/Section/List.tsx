import { Key, useState } from 'react'
import {
  Badge,
  Button,
  message,
  Popconfirm,
  Space,
  TablePaginationConfig,
  TableProps,
} from 'antd'
import { useParams } from 'react-router-dom'
import { StringParam, useQueryParams } from 'use-query-params'

import BottomActionBar from 'components/BottomActionBar'
import SectionListControl, { Filter, OnFilterChangeType } from './ListControl'
import SectionListTable, { RecordType } from './ListTable'

import usePaginationForAPI from 'hooks/usePaginationForAPI'

import {
  useDeleteSectionMutation,
  useGetSectionListQuery,
} from 'graphql/__generated/operations'

import { getActiveBooleanValue } from 'helpers/utils'

interface SectionListProps {
  loading?: boolean
  filter?: Filter
  dataSource?: RecordType[]
  pagination?: TablePaginationConfig
  onFilterChange?: OnFilterChangeType
  onTableChange?: TableProps<RecordType>['onChange']
}

const SectionList = ({
  loading,
  filter,
  dataSource,
  pagination,
  onFilterChange,
  onTableChange,
}: SectionListProps) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<Key[]>([])

  const [deleteSection, query] = useDeleteSectionMutation({
    refetchQueries: ['getSectionList'],
    onCompleted() {
      message.success('ลบบทเรียนเรียบร้อยแล้ว')
    },
    onError(error) {
      console.log(error)

      message.error('ไม่สามารถลบบทเรียนได้ โปรดลองใหม่อีกครั้ง')
    },
  })

  return (
    <>
      <Space style={{ width: '100%' }} direction="vertical">
        <SectionListControl filter={filter} onFilterChange={onFilterChange} />

        <SectionListTable
          loading={loading}
          dataSource={dataSource}
          pagination={pagination}
          onChange={onTableChange}
          rowSelection={{
            selectedRowKeys,
            onChange: setSelectedRowKeys,
          }}
        />
      </Space>

      <BottomActionBar visible={selectedRowKeys.length > 0}>
        <Space>
          <Space size="small">
            <Badge count={selectedRowKeys.length} />
            <span>จำนวนบทเรียนที่เลือกไว้</span>
          </Space>

          <Popconfirm
            title="แน่ใจที่จะลบหรือไม่?"
            placement="topRight"
            onConfirm={() => {
              deleteSection({
                variables: {
                  ids: selectedRowKeys as string[],
                },
              })
            }}
            okButtonProps={{
              danger: true,
            }}
          >
            <Button loading={query.loading} type="primary" danger>
              ลบ
            </Button>
          </Popconfirm>
        </Space>
      </BottomActionBar>
    </>
  )
}

export default SectionList

export const useGetSectionList = () => {
  const [filter, setFilter] = useQueryParams({
    active: StringParam,
    keyword: StringParam,
  })

  const params = useParams()
  const contentPackID = params.id as string

  const {
    paginationVariables,
    changeToFirstPage,
    createAntdPagination,
    onAntdTableChange,
  } = usePaginationForAPI()

  const query = useGetSectionListQuery({
    fetchPolicy: 'network-only',
    variables: {
      contentPackID,
      input: {
        pagination: paginationVariables,
        filter: {
          active: getActiveBooleanValue(filter.active),
        },
        search: {
          title: filter.keyword == null ? undefined : filter.keyword,
        },
      },
    },
  })

  const data = query.data?.getSectionList

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

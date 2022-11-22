import { Space, TablePaginationConfig, TableProps } from 'antd'
import { useParams } from 'react-router-dom'
import { StringParam, useQueryParams } from 'use-query-params'

import SectionListControl, { Filter, OnFilterChangeType } from './ListControl'
import SectionListTable, { RecordType } from './ListTable'

import usePaginationForAPI from 'hooks/usePaginationForAPI'

import { useGetSectionListQuery } from 'graphql/__generated/operations'

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
  return (
    <Space style={{ width: '100%' }} direction="vertical">
      <SectionListControl filter={filter} onFilterChange={onFilterChange} />

      <SectionListTable
        loading={loading}
        dataSource={dataSource}
        pagination={pagination}
        onChange={onTableChange}
      />
    </Space>
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

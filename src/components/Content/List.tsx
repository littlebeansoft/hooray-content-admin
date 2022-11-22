import { Space, TablePaginationConfig, TableProps } from 'antd'
import { useParams } from 'react-router-dom'
import { StringParam, useQueryParams } from 'use-query-params'

import ContentListControl, { Filter, OnFilterChangeType } from './ListControl'
import ContentListTable, { RecordType } from './ListTable'

import usePaginationForAPI from 'hooks/usePaginationForAPI'

import { useGetGroupSectionWithContentListQuery } from 'graphql/__generated/operations'

import { getActiveBooleanValue } from 'helpers/utils'

interface ContentListProps {
  loading?: boolean
  filter?: Filter
  dataSource?: RecordType[]
  pagination?: TablePaginationConfig
  onFilterChange?: OnFilterChangeType
  onTableChange?: TableProps<RecordType>['onChange']
}

const ContentList = ({
  loading,
  filter,
  dataSource,
  pagination,
  onFilterChange,
  onTableChange,
}: ContentListProps) => {
  return (
    <Space style={{ width: '100%' }} direction="vertical">
      <ContentListControl filter={filter} onFilterChange={onFilterChange} />

      <ContentListTable
        loading={loading}
        dataSource={dataSource}
        pagination={pagination}
        onChange={onTableChange}
      />
    </Space>
  )
}

export default ContentList

export const useGetContentList = () => {
  const [filter, setFilter] = useQueryParams({
    active: StringParam,
    keyword: StringParam,
  })

  const params = useParams()
  const sectionID = params.sectionID as string

  const {
    paginationVariables,
    changeToFirstPage,
    createAntdPagination,
    onAntdTableChange,
  } = usePaginationForAPI()

  const query = useGetGroupSectionWithContentListQuery({
    fetchPolicy: 'network-only',
    variables: {
      id: sectionID,
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

  const data = query.data?.getContentList

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

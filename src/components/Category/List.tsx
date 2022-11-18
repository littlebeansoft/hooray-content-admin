import { Space, TablePaginationConfig, TableProps } from 'antd'
import { StringParam, useQueryParams, withDefault } from 'use-query-params'

import CategoryListControl, { Filter, OnFilterChangeType } from './ListControl'
import CategoryListTable, { RecordType } from './ListTable'

import usePaginationForAPI from 'hooks/usePaginationForAPI'

import { getActiveToEnableStatus } from 'helpers/utils'

import { labelClient } from 'setup/apollo'

import { useGetListCategoriesQuery } from 'graphql/__generated/operations'

interface CategoryListProps {
  loading?: boolean
  filter?: Filter
  dataSource?: RecordType[]
  pagination?: TablePaginationConfig
  onFilterChange?: OnFilterChangeType
  onTableChange?: TableProps<RecordType>['onChange']
}

const CategoryList = ({
  loading,
  dataSource,
  pagination,
  filter,
  onFilterChange,
  onTableChange,
}: CategoryListProps) => {
  return (
    <Space style={{ width: '100%' }} direction="vertical">
      <CategoryListControl filter={filter} onFilterChange={onFilterChange} />

      <CategoryListTable
        loading={loading}
        pagination={pagination}
        dataSource={dataSource}
        onChange={onTableChange}
      />
    </Space>
  )
}

export default CategoryList

export const useGetListCategories = () => {
  const [filter, setFilter] = useQueryParams({
    active: StringParam,
    keyword: withDefault(StringParam, undefined),
  })

  const {
    paginationVariables,
    changeToFirstPage,
    createAntdPagination,
    onAntdTableChange,
  } = usePaginationForAPI()

  const query = useGetListCategoriesQuery({
    client: labelClient,
    fetchPolicy: 'network-only',
    variables: {
      input: {
        pagination: paginationVariables,
        query: {
          status: getActiveToEnableStatus(filter.active),
          name: filter.keyword,
          descriptions: filter.keyword,
          categoryKey: filter.keyword,
        },
      },
    },
  })

  const data = query.data?.getCategory

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

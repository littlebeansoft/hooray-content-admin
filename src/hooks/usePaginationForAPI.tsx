import type { TablePaginationConfig, TableProps } from 'antd'

import { useSearchParams } from 'react-router-dom'

import { searchParamsToObject } from 'helpers/utils'

import type {
  PaginatedFindType,
  TypePagination,
} from 'graphql/__generated/operations'

type OnAntdTableChangeType = TableProps<any>['onChange']

interface UsePaginationForAPIResponse {
  paginationVariables: PaginatedFindType
  changeToFirstPage: VoidFunction
  createAntdPagination: (
    defaultAPIPagination?: TypePagination
  ) => TablePaginationConfig
  onAntdTableChange: OnAntdTableChangeType
}

const usePaginationForAPI = (): UsePaginationForAPIResponse => {
  const [searchParams, setSearchParams] = useSearchParams()

  const page = Number(searchParams.get('page')) || 1

  const changeToFirstPage = () => {
    setSearchParams({
      page: '1',
    })
  }

  const createAntdPagination = (
    defaultAPIPagination?: TypePagination
  ): TablePaginationConfig => {
    return {
      current: defaultAPIPagination?.page,
      pageSize: defaultAPIPagination?.limit,
      total: defaultAPIPagination?.totalItems,
      showSizeChanger: false,
      hideOnSinglePage: true,
      showTotal: (total) => `จำนวนทั้งหมด ${total} รายการ`,
    }
  }

  const onAntdTableChange: OnAntdTableChangeType = (paginationConfig) => {
    const restQuery = searchParamsToObject(searchParams)

    setSearchParams({
      ...restQuery,
      page: `${paginationConfig.current}`,
    })
  }

  return {
    paginationVariables: {
      page,
      limit: 10,
    },
    changeToFirstPage,
    createAntdPagination,
    onAntdTableChange,
  }
}

export default usePaginationForAPI

import { Key, useState } from 'react'
import {
  Badge,
  Button,
  Form,
  Select,
  Space,
  TablePaginationConfig,
  TableProps,
} from 'antd'
import { StringParam, useQueryParams } from 'use-query-params'

import BottomActionBar from 'components/BottomActionBar'
import ContentApprovalListControl, {
  Filter,
  OnFilterChangeType,
} from './ListControl'
import ContentApprovalListTable, { RecordType } from './ListTable'

import usePaginationForAPI from 'hooks/usePaginationForAPI'

import { getActiveBooleanValue } from 'helpers/utils'
import { baseFormProps } from 'helpers/antdUtils'

import {
  Status,
  useGetContentPackListQuery,
} from 'graphql/__generated/operations'

interface FormValues {
  status: Status
}

interface ContentApprovalListProps {
  loading?: boolean
  filter?: Filter
  dataSource?: RecordType[]
  pagination?: TablePaginationConfig
  onFilterChange?: OnFilterChangeType
  onTableChange?: TableProps<RecordType>['onChange']
  onFinish?: (values: FormValues) => void
}

const { Option } = Select

const ContentApprovalList = ({
  loading,
  dataSource,
  pagination,
  filter,
  onFilterChange,
  onTableChange,
  onFinish,
}: ContentApprovalListProps) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<Key[]>([])

  return (
    <Form {...baseFormProps} onFinish={onFinish}>
      <Space
        direction="vertical"
        style={{
          width: '100%',
        }}
      >
        <ContentApprovalListControl
          filter={filter}
          onFilterChange={onFilterChange}
        />

        <ContentApprovalListTable
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
            <span>จำนวนหลักสูตรที่เลือกไว้</span>
          </Space>

          <Form.Item noStyle name="status">
            <Select style={{ width: 300 }} placeholder="เลือกสถานะที่จะเปลี่ยน">
              <Option value="all">ทั้งหมด</Option>
              <Option value={Status.Draft}>แบบร่าง</Option>
              <Option value={Status.Reviewing}>กำลังตรวจสอบ</Option>
              <Option value={Status.Approve}>อนุมัติ</Option>
              <Option value={Status.Reject}>ไม่อนุมัติ</Option>
              <Option value={Status.Suspended}>ระงับ</Option>
            </Select>
          </Form.Item>
          <Button htmlType="submit" type="primary">
            เปลี่ยนสถานะหลักสูตร
          </Button>
        </Space>
      </BottomActionBar>
    </Form>
  )
}

export default ContentApprovalList

export const useGetContentApprovalList = () => {
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

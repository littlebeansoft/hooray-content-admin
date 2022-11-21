import type { ColumnsType } from 'antd/lib/table'

import { Table, TableProps } from 'antd'
import { Link } from 'react-router-dom'

import ActiveStatusTag from 'components/ActiveStatusTag'
import GetUserProfileName from 'components/GetUserProfileName'

import { routeTo } from 'helpers/utils'
import { humanReadableDateTimeFormat } from 'helpers/formatter'

import { EnabledStatus } from 'graphql/__generated/operations'

import { paths } from 'setup/PageRouter'

import type { QR_GetCategoryResult } from 'graphql/queryResponseTypes'

export type RecordType = QR_GetCategoryResult

const CategoryListTable = (props: Omit<TableProps<RecordType>, 'columns'>) => {
  const columns: ColumnsType<RecordType> = [
    {
      title: 'ชื่อหมวดหมู่',
      width: 300,
      render: (_, { _id, name }) => (
        <Link
          to={routeTo(paths.appCategoryUpdate, {
            params: {
              id: _id,
            },
          })}
        >
          {name}
        </Link>
      ),
    },
    {
      title: 'คำอธิบายหมวดหมู่',
      dataIndex: 'description',
      width: 400,
      render: (description) => description || '-',
    },
    {
      dataIndex: 'updatedAt',
      title: 'แก้ไขเมื่อ',
      render: (updatedAt) => {
        return humanReadableDateTimeFormat(updatedAt)
      },
    },
    {
      dataIndex: 'updatedBy',
      title: 'แก้ไขโดย',
      render: (updatedBy) => {
        if (updatedBy == null) {
          return '-'
        }

        return <GetUserProfileName userID={updatedBy} />
      },
    },
    {
      dataIndex: 'createdAt',
      title: 'สร้างเมื่อ',
      render: (createdAt) => {
        return humanReadableDateTimeFormat(createdAt)
      },
    },
    {
      dataIndex: 'createdBy',
      title: 'สร้างโดย',
      render: (createdBy) => {
        if (createdBy == null) {
          return '-'
        }

        return <GetUserProfileName userID={createdBy} />
      },
    },
    {
      title: 'สถานะ',
      width: 120,
      align: 'center',
      fixed: 'right',
      render: (_, { status }) => {
        const active = status === EnabledStatus.Enabled ? true : false

        return <ActiveStatusTag active={active} />
      },
    },
  ]

  return <Table {...props} columns={columns} />
}

export default CategoryListTable

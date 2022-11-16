import type { ColumnsType } from 'antd/lib/table'

import { Space, Table, TableProps, Tag } from 'antd'
import { Link } from 'react-router-dom'

import ActiveStatusTag from 'components/ActiveStatusTag'
import ApprovalStatusTag from 'components/ApprovalStatusTag'
import GetInstructorProfileName from 'components/GetInstructorProfileName'

import { routeTo } from 'helpers/utils'

import { paths } from 'setup/PageRouter'

import type { QR_GetContentPackListResult } from 'graphql/queryResponseTypes'

export type RecordType = QR_GetContentPackListResult

const ContentApprovalListTable = (
  tableProps: Omit<TableProps<RecordType>, 'columns'>
) => {
  const columns: ColumnsType<RecordType> = [
    {
      title: 'ชื่อหลักสูตร',
      fixed: true,
      width: 400,
      render: (_, { _id, title }) => {
        return (
          <Link
            to={routeTo(paths.appContentApprovalDetail, {
              params: {
                id: _id,
              },
            })}
          >
            {title}
          </Link>
        )
      },
    },
    {
      dataIndex: 'categories',
      title: 'หมวดหมู่',
      render: (_, { categories, recommend }) => {
        const __customCategories = [...categories]

        if (recommend) {
          __customCategories.unshift({
            _id: 'recommended',
            name: 'หลักสูตรแนะนำ',
          })
        }

        if (__customCategories.length === 0) {
          return '-'
        }

        return (
          <Space size="small">
            {__customCategories.map((category) => (
              <Tag key={category._id} color="warning">
                {category.name}
              </Tag>
            ))}
          </Space>
        )
      },
    },
    {
      dataIndex: 'creatorIDs',
      title: 'ชื่อผู้สอน',
      render(creatorIDs) {
        if (creatorIDs.length === 0) {
          return '-'
        }

        return <GetInstructorProfileName userIDs={creatorIDs} />
      },
    },
    {
      dataIndex: 'active',
      title: 'สถานะ',
      width: 120,
      align: 'center',
      fixed: 'right',
      render: (active) => <ActiveStatusTag active={active} />,
    },
    {
      dataIndex: 'status',
      title: 'สถานะการยืนยัน',
      width: 180,
      align: 'center',
      fixed: 'right',
      render: (status) => <ApprovalStatusTag status={status} />,
    },
  ]

  return <Table {...tableProps} rowKey="_id" columns={columns} />
}

export default ContentApprovalListTable

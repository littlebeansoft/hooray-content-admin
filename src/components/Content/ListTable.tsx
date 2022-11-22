import type { ColumnsType } from 'antd/es/table'

import { Table, TableProps } from 'antd'
import { Link, useParams } from 'react-router-dom'

import GetUserProfileName from 'components/GetUserProfileName'
import ActiveStatusTag from 'components/ActiveStatusTag'

import { routeTo, videoDurationTimeFormat } from 'helpers/utils'
import { humanReadableDateTimeFormat } from 'helpers/formatter'

import { paths } from 'setup/PageRouter'

import type { QR_ContentListResult } from 'graphql/queryResponseTypes'

export type RecordType = QR_ContentListResult[number]

const ContentListTable = (
  tableProps: Omit<TableProps<RecordType>, 'columns'>
) => {
  const params = useParams()
  const contentPackID = params.contentPackID as string
  const sectionID = params.sectionID as string

  const columns: ColumnsType<RecordType> = [
    {
      title: 'ลำดับ',
      width: 80,
      dataIndex: 'sortOrder',
      align: 'center',
      fixed: true,
    },
    {
      title: 'ชื่อเนื้อหา',
      fixed: true,
      width: 400,
      render: (_, { _id, title }) => {
        return (
          <Link
            to={routeTo(paths.orgContentUpdate, {
              params: {
                contentID: _id,
                sectionID,
                contentPackID,
              },
            })}
          >
            {title}
          </Link>
        )
      },
    },
    {
      dataIndex: 'length',
      title: 'ความยาวเนื้อหาทั้งหมด',
      width: 180,
      render: (length) => videoDurationTimeFormat(length),
    },
    {
      dataIndex: 'updatedAt',
      title: 'แก้ไขเมื่อ',
      width: 200,
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
      width: 200,
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
      dataIndex: 'active',
      title: 'สถานะ',
      width: 120,
      align: 'center',
      fixed: 'right',
      render: (active) => <ActiveStatusTag active={active} />,
    },
  ]

  return <Table {...tableProps} rowKey="_id" columns={columns} />
}

export default ContentListTable

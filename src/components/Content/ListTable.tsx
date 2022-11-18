import type { ColumnsType } from 'antd/lib/table'

import { Link } from 'react-router-dom'
import { Space, Table, TableProps, Tag } from 'antd'

import ActiveStatusTag from 'components/ActiveStatusTag'
import ApprovalStatusTag from 'components/ApprovalStatusTag'
import GetUserProfileName from 'components/GetUserProfileName'
import GetInstructorProfileName from 'components/GetInstructorProfileName'

import { routeTo, videoDurationTimeFormat } from 'helpers/utils'
import { humanReadableDateTimeFormat, numberFormat } from 'helpers/formatter'

import { paths } from 'setup/PageRouter'

import type { QR_GetContentPackListResult } from 'graphql/queryResponseTypes'

export type RecordType = QR_GetContentPackListResult

const ContentListTable = (
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
            to={routeTo(paths.orgContentUpdate, {
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
      dataIndex: 'price',
      title: 'ราคาเริ่มต้น (บาท)',
      width: 180,
      render: (_, { price }) => {
        return numberFormat(price.basePrice)
      },
    },
    {
      dataIndex: 'purchaseAmount',
      title: 'จำนวนผู้เรียน',
      width: 160,
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
    {
      dataIndex: 'status',
      title: 'สถานะการยืนยัน',
      width: 180,
      align: 'center',
      fixed: 'right',
      render: (status) => <ApprovalStatusTag status={status} />,
    },
  ]

  return (
    <Table
      rowKey="_id"
      columns={columns}
      scroll={{
        x: 2600,
      }}
      {...tableProps}
    />
  )
}

export default ContentListTable

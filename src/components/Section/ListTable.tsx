import type { ColumnsType } from 'antd/es/table'

import { Table, TableProps } from 'antd'
import { Link, useParams } from 'react-router-dom'

import ActiveStatusTag from 'components/ActiveStatusTag'
import GetUserProfileName from 'components/GetUserProfileName'

import { QR_GetSectionResult } from 'graphql/queryResponseTypes'

import { routeTo } from 'helpers/utils'
import { humanReadableDateTimeFormat } from 'helpers/formatter'

import { paths } from 'setup/PageRouter'

export type RecordType = QR_GetSectionResult['payload'][number]

const SectionListTable = (
  tableProps: Omit<TableProps<RecordType>, 'columns'>
) => {
  const params = useParams()
  const contentPackID = params.id as string

  const columns: ColumnsType<RecordType> = [
    {
      title: 'ลำดับ',
      width: 80,
      dataIndex: 'sortOrder',
    },
    {
      title: 'ชื่อบทเรียน',
      width: 500,
      render: (_, { _id, title }) => (
        <Link
          to={routeTo(paths.orgContent, {
            params: {
              contentPackID,
              sectionID: _id,
            },
          })}
        >
          {title}
        </Link>
      ),
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

  return <Table {...tableProps} columns={columns} />
}

export default SectionListTable

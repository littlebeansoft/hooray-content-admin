import type { ColumnsType } from 'antd/es/table'

import { useState } from 'react'
import { StringParam, useQueryParam } from 'use-query-params'
import { Button, message, Space, Table, TableProps } from 'antd'
import { Link, useParams } from 'react-router-dom'
import { EditOutlined } from '@ant-design/icons'

import ActiveStatusTag from 'components/ActiveStatusTag'
import GetUserProfileName from 'components/GetUserProfileName'
import SectionFormModal, { useParentFormInstance } from './FormModal'

import {
  useGetSectionByIdLazyQuery,
  useUpdateSectionMutation,
} from 'graphql/__generated/operations'

import { routeTo } from 'helpers/utils'
import { humanReadableDateTimeFormat } from 'helpers/formatter'

import { paths } from 'setup/PageRouter'

import type { QR_GetSectionResult } from 'graphql/queryResponseTypes'

export type RecordType = QR_GetSectionResult['payload'][number]

const SectionListTable = (
  tableProps: Omit<TableProps<RecordType>, 'columns'>
) => {
  const [sectionID, setSectionID] = useQueryParam('sectionID', StringParam)

  const params = useParams()
  const contentPackID = params.id as string

  const [form] = useParentFormInstance()

  const [openCreateSectionModal, setOpenCreateSectionModal] = useState(false)

  const [getSectionByID, query] = useGetSectionByIdLazyQuery({
    fetchPolicy: 'no-cache',
    onCompleted({ getSectionByID }) {
      form.setFieldsValue(getSectionByID.payload)
    },
    onError(error) {
      console.log(error)

      message.error(
        'ไม่สามารถแก้ไขข้อมูลบทเรียนที่เลือกได้ โปรดลองใหม่อีกครั้ง'
      )
    },
  })

  const [update, { loading }] = useUpdateSectionMutation({
    refetchQueries: ['getSectionList'],
    onCompleted() {
      setOpenCreateSectionModal(false)
      setSectionID(undefined)

      message.success('แก้ไขบทเรียนสำเร็จ')
    },
    onError(error) {
      console.log(error)

      message.error('ไม่สามารถแก้ไขข้อมูลบทเรียนได้ โปรดลองใหม่อีกครั้ง')
    },
  })

  const columns: ColumnsType<RecordType> = [
    {
      title: 'ลำดับ',
      width: 80,
      dataIndex: 'sortOrder',
      align: 'center',
    },
    {
      title: 'ชื่อบทเรียน',
      width: 500,
      render: (_, { _id, title }) => {
        return (
          <Space size="small">
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

            <Button
              loading={query.loading && sectionID === _id}
              type="text"
              size="small"
              icon={<EditOutlined />}
              onClick={() => {
                setSectionID(_id)

                getSectionByID({
                  variables: {
                    id: _id,
                  },
                })

                setOpenCreateSectionModal(true)
              }}
            />
          </Space>
        )
      },
    },
    {
      title: 'จำนวนเนื้อหา',
      width: 120,
      dataIndex: 'numOfContent',
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

  const onCancel = () => {
    setOpenCreateSectionModal(false)
    setSectionID(undefined)
  }

  return (
    <>
      <Table {...tableProps} rowKey="_id" columns={columns} />

      <SectionFormModal
        form={form}
        onFinish={(values) => {
          if (sectionID == null) {
            return
          }

          update({
            variables: {
              id: sectionID,
              input: values,
            },
          })
        }}
        modalProps={{
          title: 'สร้างบทเรียน',
          open: sectionID != null || openCreateSectionModal,
          onCancel,
          footer: (
            <div style={{ textAlign: 'right' }}>
              <Space>
                <Button onClick={onCancel}>ยกเลิก</Button>

                <Button loading={loading} type="primary" onClick={form.submit}>
                  แก้ไขบทเรียน
                </Button>
              </Space>
            </div>
          ),
        }}
      />
    </>
  )
}

export default SectionListTable

import type { ColumnsType } from 'antd/es/table'

import { useState } from 'react'
import { Button, Drawer, message, Space, Table } from 'antd'

import VerifyTagStatus from 'components/VerifyTagStatus'

import { useGetListCreatorsProfileQuery } from 'graphql/__generated/operations'

import { coreClient } from 'setup/apollo'

import type { QR_GetCreatorResult } from 'graphql/queryResponseTypes'

export type RecordType = QR_GetCreatorResult

interface CreatorSelectTableProps {
  value?: string[]
  onChange?: (value: string[]) => void
}

const CreatorSelectTable = ({
  value = [],
  onChange,
}: CreatorSelectTableProps) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<string[]>(value)
  const [open, setOpen] = useState(false)

  const query = useGetListCreatorsProfileQuery({
    client: coreClient,
  })

  const dataSource = query.data?.getResourceAdmin.payload

  const columns: ColumnsType<QR_GetCreatorResult> = [
    {
      title: 'ชื่อ',
      render: (_, { attribute }) => {
        return attribute.firstName
      },
    },
    {
      title: 'นามสกุล',
      render: (_, { attribute }) => {
        return attribute.lastName
      },
    },
    {
      title: 'อีเมล',
      render: (_, { email }) => {
        const userEmail = email[0]

        if (userEmail == null) {
          return '-'
        }

        return (
          <Space size="small">
            {userEmail?.value}

            <VerifyTagStatus status={userEmail?.verifyStatus} />
          </Space>
        )
      },
    },
    {
      title: 'อาชีพ',
      render: (_, { attribute }) => {
        return attribute.jobTitle || '-'
      },
    },
    {
      title: 'เบอร์โทรศัพท์',
      render: (_, { phone }) => {
        const userPhone = phone[0]

        if (userPhone == null) {
          return '-'
        }

        return (
          <Space size="small">
            {userPhone.value}

            <VerifyTagStatus status={userPhone.verifyStatus} />
          </Space>
        )
      },
    },
  ]

  return (
    <>
      <Space>
        เพิ่มผู้สอน
        <Button type="link" size="small" onClick={() => setOpen(true)}>
          {value.length > 0 ? `เลือกแล้ว ${value.length} คน` : 'ระบุผู้สอน'}
        </Button>
      </Space>

      <Drawer
        width="768px"
        title="เพิ่มผู้สอน"
        open={open}
        onClose={() => setOpen(false)}
        footer={
          <div style={{ textAlign: 'right' }}>
            <Space size="small">
              <Button onClick={() => setOpen(false)}>ยกเลิก</Button>
              <Button
                type="primary"
                onClick={() => {
                  message.success('บันทึกข้อมูลผู้สอนสำเร็จ')

                  setOpen(false)

                  onChange?.(selectedRowKeys)
                }}
              >
                บันทึก
              </Button>
            </Space>
          </div>
        }
      >
        <Table
          rowKey="_id"
          columns={columns}
          dataSource={dataSource}
          rowSelection={{
            selectedRowKeys,
            onChange: (value) => setSelectedRowKeys(value as string[]),
          }}
        />
      </Drawer>
    </>
  )
}

export default CreatorSelectTable

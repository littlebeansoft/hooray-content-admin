import { useState } from 'react'
import { PlusOutlined } from '@ant-design/icons'
import { useParams } from 'react-router-dom'
import { Button, Col, Input, message, Row, Space } from 'antd'

import ActiveSelectInput from 'components/ActiveSelectInput'
import SectionFormModal, { useParentFormInstance } from './FormModal'

import { useCreateSectionMutation } from 'graphql/__generated/operations'

export type FilterKey = 'active' | 'keyword'

export type Filter = Record<FilterKey, string | null | undefined>

export type OnFilterChangeType = (name: FilterKey, value: string) => void

interface SectionListControlProps {
  filter?: Filter
  onFilterChange?: OnFilterChangeType
}

const SectionListControl = ({
  filter,
  onFilterChange,
}: SectionListControlProps) => {
  const [form] = useParentFormInstance()

  const params = useParams()
  const contentPackID = params.id as string

  const [openCreateSectionModal, setOpenCreateSectionModal] = useState(false)

  const [create, { loading }] = useCreateSectionMutation({
    refetchQueries: ['getSectionList'],
    onCompleted() {
      setOpenCreateSectionModal(false)

      message.success('สร้างบทเรียนสำเร็จ')
    },
    onError(error) {
      console.log(error)

      message.error('ไม่สามารถสร้างบทเรียนได้ โปรดลองใหม่อีกครั้ง')
    },
  })

  return (
    <>
      <Row gutter={[32, 32]} align="bottom">
        <Col span={16}>
          <Space align="end">
            <ActiveSelectInput
              filter={filter}
              onFilterChange={onFilterChange}
            />
            <Input.Search
              allowClear
              placeholder="ค้นหาบทเรียน"
              defaultValue={filter?.keyword || undefined}
              onSearch={(value) => onFilterChange?.('keyword', value)}
            />
          </Space>
        </Col>
        <Col span={8}>
          <div style={{ textAlign: 'right' }}>
            <Button
              icon={<PlusOutlined />}
              type="primary"
              onClick={() => setOpenCreateSectionModal(true)}
            >
              สร้างบทเรียน
            </Button>
          </div>
        </Col>
      </Row>

      <SectionFormModal
        form={form}
        onFinish={(values) => {
          create({
            variables: {
              input: {
                ...values,
                contentPackID,
              },
            },
          })
        }}
        modalProps={{
          title: 'สร้างบทเรียน',
          open: openCreateSectionModal,
          onCancel: () => setOpenCreateSectionModal(false),
          footer: (
            <div style={{ textAlign: 'right' }}>
              <Space>
                <Button onClick={() => setOpenCreateSectionModal(false)}>
                  ยกเลิก
                </Button>

                <Button loading={loading} type="primary" onClick={form.submit}>
                  สร้างบทเรียน
                </Button>
              </Space>
            </div>
          ),
        }}
      />
    </>
  )
}

export default SectionListControl

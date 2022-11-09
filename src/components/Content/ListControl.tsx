import { Button, Col, Row, Select, Space } from 'antd'
import { Link } from 'react-router-dom'
import { PlusOutlined } from '@ant-design/icons'

import Label from 'components/Label'

import { routeTo } from 'helpers/utils'

import { tokenRef } from 'services/localStorage'

import { paths } from 'setup/PageRouter/routes'

import { Status } from 'graphql/__generated/operations'

export type FilterKey = 'status' | 'active'

export type Filter = Record<FilterKey, string | null | undefined>

export type OnFilterChangeType = (name: FilterKey, value: string) => void

interface ContentListControlProps {
  filter?: Filter
  onFilterChange?: OnFilterChangeType
}

const { Option } = Select

const ContentListControl = ({
  filter,
  onFilterChange,
}: ContentListControlProps) => {
  return (
    <Row gutter={[32, 32]} align="bottom">
      <Col span={16}>
        <Space>
          <Space direction="vertical" size="small">
            <Label>สถานะ</Label>
            <Select
              style={{ width: 300 }}
              defaultValue="all"
              value={filter?.active}
              onChange={(value) => onFilterChange?.('active', value)}
            >
              <Option value="all">ทั้งหมด</Option>
              <Option value="true">ใช้งาน</Option>
              <Option value="false">ไม่ใช้งาน</Option>
            </Select>
          </Space>

          <Space direction="vertical" size="small">
            <Label>สถานะการยืนยัน</Label>
            <Select
              style={{ width: 300 }}
              defaultValue="all"
              value={filter?.status}
              onChange={(value) => onFilterChange?.('status', value)}
            >
              <Option value="all">ทั้งหมด</Option>
              <Option value={Status.Draft}>แบบร่าง</Option>
              <Option value={Status.Reviewing}>กำลังตรวจสอบ</Option>
              <Option value={Status.Approve}>อนุมัติ</Option>
              <Option value={Status.Reject}>ไม่อนุมัติ</Option>
              <Option value={Status.Suspended}>ระงับ</Option>
            </Select>
          </Space>
        </Space>
      </Col>

      <Col span={8}>
        <div style={{ textAlign: 'right' }}>
          <Link
            to={routeTo(paths.orgContentCreate, {
              params: {
                ref: tokenRef.get(),
              },
            })}
          >
            <Button icon={<PlusOutlined />} type="primary">
              สร้างหลักสูตร
            </Button>
          </Link>
        </div>
      </Col>
    </Row>
  )
}

export default ContentListControl

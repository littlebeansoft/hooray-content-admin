import { PlusOutlined } from '@ant-design/icons'
import { Button, Col, Input, Row, Space } from 'antd'

import ActiveSelectInput from 'components/ActiveSelectInput'

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
  return (
    <Row gutter={[32, 32]} align="bottom">
      <Col span={16}>
        <Space align="end">
          <ActiveSelectInput filter={filter} onFilterChange={onFilterChange} />
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
          <Button icon={<PlusOutlined />} type="primary">
            สร้างบทเรียน
          </Button>
        </div>
      </Col>
    </Row>
  )
}

export default SectionListControl

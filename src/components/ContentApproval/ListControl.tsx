import { Col, Row, Space } from 'antd'

import ActiveSelectInput from 'components/ActiveSelectInput'
import ContentStatusSelectInput from 'components/ContentStatusSelectInput'

export type FilterKey = 'status' | 'active'

export type Filter = Record<FilterKey, string | null | undefined>

export type OnFilterChangeType = (name: FilterKey, value: string) => void

interface ContentApprovalListControlProps {
  filter?: Filter
  onFilterChange?: OnFilterChangeType
}

const ContentApprovalListControl = ({
  filter,
  onFilterChange,
}: ContentApprovalListControlProps) => {
  return (
    <Row gutter={[32, 32]} align="bottom">
      <Col span={16}>
        <Space>
          <ActiveSelectInput filter={filter} onFilterChange={onFilterChange} />

          <ContentStatusSelectInput
            filter={filter}
            onFilterChange={onFilterChange}
          />
        </Space>
      </Col>
    </Row>
  )
}

export default ContentApprovalListControl

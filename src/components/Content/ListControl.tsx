import { PlusOutlined } from '@ant-design/icons'
import { Button, Col, Input, Row, Space } from 'antd'
import { Link, useParams } from 'react-router-dom'

import ActiveSelectInput from 'components/ActiveSelectInput'

import { routeTo } from 'helpers/utils'

import { paths } from 'setup/PageRouter'

export type FilterKey = 'active' | 'keyword'

export type Filter = Record<FilterKey, string | null | undefined>

export type OnFilterChangeType = (name: FilterKey, value: string) => void

interface ContentListControlProps {
  filter?: Filter
  onFilterChange?: OnFilterChangeType
}

const ContentListControl = ({
  filter,
  onFilterChange,
}: ContentListControlProps) => {
  const params = useParams()
  const contentPackID = params.contentPackID as string
  const sectionID = params.sectionID as string

  return (
    <Row gutter={[32, 32]} align="bottom">
      <Col span={16}>
        <Space align="end">
          <ActiveSelectInput filter={filter} onFilterChange={onFilterChange} />

          <Input.Search
            allowClear
            placeholder="ค้นหาเนื้อหา"
            defaultValue={filter?.keyword || undefined}
            onSearch={(value) => onFilterChange?.('keyword', value)}
          />
        </Space>
      </Col>
      <Col span={8}>
        <div
          style={{
            textAlign: 'right',
          }}
        >
          <Link
            to={routeTo(paths.orgContentCreate, {
              params: {
                contentPackID,
                sectionID,
              },
            })}
          >
            <Button type="primary" icon={<PlusOutlined />}>
              สร้างเนื้อหา
            </Button>
          </Link>
        </div>
      </Col>
    </Row>
  )
}

export default ContentListControl

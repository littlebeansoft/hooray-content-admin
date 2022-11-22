import { Button, Col, Row, Space } from 'antd'
import { Link } from 'react-router-dom'
import { PlusOutlined } from '@ant-design/icons'

import ActiveSelectInput from 'components/ActiveSelectInput'
import ContentStatusSelectInput from 'components/ContentStatusSelectInput'

import { routeTo } from 'helpers/utils'

import { tokenRef } from 'services/localStorage'

import { paths } from 'setup/PageRouter/routes'

export type FilterKey = 'status' | 'active'

export type Filter = Record<FilterKey, string | null | undefined>

export type OnFilterChangeType = (name: FilterKey, value: string) => void

interface ContentPackListControlProps {
  filter?: Filter
  onFilterChange?: OnFilterChangeType
}

const ContentPackListControl = ({
  filter,
  onFilterChange,
}: ContentPackListControlProps) => {
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

      <Col span={8}>
        <div style={{ textAlign: 'right' }}>
          <Link
            to={routeTo(paths.orgContentPackCreate, {
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

export default ContentPackListControl

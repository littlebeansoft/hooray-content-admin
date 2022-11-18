import { PlusOutlined } from '@ant-design/icons'
import { Button, Col, Input, Row, Space } from 'antd'
import { Link } from 'react-router-dom'

import ActiveSelectInput from 'components/ActiveSelectInput'

import { routeTo } from 'helpers/utils'

import { tokenRef } from 'services/localStorage'

import { paths } from 'setup/PageRouter'

export type FilterKey = 'active' | 'keyword'

export type Filter = Record<FilterKey, string | null | undefined>

export type OnFilterChangeType = (name: FilterKey, value: string) => void

interface CategoryListControlProps {
  filter?: Filter
  onFilterChange?: OnFilterChangeType
}

const CategoryListControl = ({
  filter,
  onFilterChange,
}: CategoryListControlProps) => {
  return (
    <Row gutter={[32, 32]} align="bottom">
      <Col span={16}>
        <Space align="end">
          <ActiveSelectInput filter={filter} onFilterChange={onFilterChange} />

          <Input.Search
            allowClear
            placeholder="ค้นหาหมวดหมู่"
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
            to={routeTo(paths.appCategoryCreate, {
              params: {
                ref: tokenRef.get(),
              },
            })}
          >
            <Button icon={<PlusOutlined />} type="primary">
              สร้างหมวดหมู่
            </Button>
          </Link>
        </div>
      </Col>
    </Row>
  )
}

export default CategoryListControl

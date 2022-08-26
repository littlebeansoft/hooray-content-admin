import React from 'react'
import { Button, Input, Space, Table } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

import FullWidthSpace from './FullWidthSpace'
import type { TableCardProps } from './interface'

const { Search } = Input

const CustomTable: React.FunctionComponent<Omit<TableCardProps, 'children'>> = ({
  onSearch,
  header,
  searchPlaceholder = 'Input search text',
  ...props
}) => {
  return (
    <FullWidthSpace direction="vertical" size={32}>
      <FullWidthSpace direction="horizontal" style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Search
          placeholder={searchPlaceholder}
          allowClear
          enterButton={
            <Button type="primary" icon={<SearchOutlined />}>
              Search
            </Button>
          }
          size="middle"
          onSearch={onSearch}
        />
        <Space size="large">{header?.map((component) => component)}</Space>
      </FullWidthSpace>

      <Table {...props} />
    </FullWidthSpace>
  )
}

export default CustomTable

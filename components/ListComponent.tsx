import React from 'react'
import { Button, Input, Space, Empty } from 'antd'
import { SearchOutlined, PlusCircleOutlined } from '@ant-design/icons'

import FullWidthSpace from './FullWidthSpace'
import type { ListComponentProps } from './interface'

const { Search } = Input

const ListComponent: React.FunctionComponent<Omit<ListComponentProps, 'children'>> = ({
  onSearch,
  header,
  searchPlaceholder = 'Input search text',
  children,
  emptyText
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
      {children ? children : (<Empty
        image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
        imageStyle={{
          height: 60,
        }}
        description={
          <span>
            {emptyText}
          </span>
        }
      >
      </Empty>)}
    </FullWidthSpace>
  )
}

export default ListComponent

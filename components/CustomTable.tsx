import React, { Fragment } from 'react'
import { Space, Table } from 'antd'

import FullWidthSpace from './FullWidthSpace'
import type { TableCardProps } from './interface'

const CustomTable: React.FunctionComponent<Omit<TableCardProps, 'children'>> = ({
  onSearch,
  header,
  searchPlaceholder = 'Input search text',
  rowSelectAmount,
  ...props
}) => {
  return (
    <FullWidthSpace direction="vertical" size={32}>
      <FullWidthSpace direction="horizontal" style={{ display: 'flex', justifyContent: 'space-between' }}>
        {rowSelectAmount !== undefined && <span>เลือกแล้ว {rowSelectAmount}</span>}

        {rowSelectAmount === undefined && <span></span>}

        <Space size="large">
          {header?.map((component, index) => (
            <Fragment key={index}>{component}</Fragment>
          ))}
        </Space>
      </FullWidthSpace>

      <Table {...props} />
    </FullWidthSpace>
  )
}

export default CustomTable

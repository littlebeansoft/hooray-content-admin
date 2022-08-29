import React from 'react'
import { useRouter } from 'next/router'
import { Menu, Dropdown, Button, Typography, Space } from 'antd'

import { defaultPagination } from 'config/paginationConfig'
import { DownOutlined, FormOutlined } from '@ant-design/icons'
import type { EventMenu, EventMenuKey } from 'components/interface'
import { LeadDataAPIPayload } from 'graphql/interface'
const { Text } = Typography

interface props {
  leadData: LeadDataAPIPayload
  setPagination: any
}
const menuData: EventMenu[] = [
  {
    key: 'EDIT_DETAIL',
    value: 'Edit',
  },
]

const ProductCategoryTableDroupDown: React.FC<props> = ({ leadData, setPagination }) => {
  const router = useRouter()
  const { parentKey = null } = router.query
  const handleMenuClick = (e: any) => {
    const key: EventMenuKey = e.key
    switch (key) {
      case 'EDIT_DETAIL':
        router.push({
          pathname: `${router.pathname}/[leadId]`,
          query: {
            ...router.query,
          },
        })
        break
      default:
        break
    }
  }

  const menu = (
    <Menu onClick={handleMenuClick} style={{ color: '#4fb3ff', borderColor: '#4fb3ff' }}>
      {menuData.map((menu) => (
        <Menu.Item key={menu.key}>
          <Space>
            <FormOutlined style={{ color: '#4fb3ff' }} />
            <Text style={{ color: '#4fb3ff' }}>{menu.value}</Text>
          </Space>
        </Menu.Item>
      ))}
    </Menu>
  )

  return (
    <Dropdown.Button
      onClick={() => {
        setPagination(defaultPagination)
        router.push({
          pathname: `${router.pathname}`,
          query: {
            ...router.query,
          },
        })
      }}
      overlay={menu}
      trigger={['click']}
    >
      <Button style={{ color: '#4fb3ff', borderColor: '#4fb3ff' }}>
        Action <DownOutlined />
      </Button>
    </Dropdown.Button>
  )
}

export default ProductCategoryTableDroupDown

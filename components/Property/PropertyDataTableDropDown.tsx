import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Menu, Dropdown, Button, Typography, Space } from 'antd'

import { defaultPagination } from 'config/paginationConfig'
import { DownOutlined, FormOutlined } from '@ant-design/icons'
import type { EventMenu, EventMenuKey } from 'components/interface'
import { GetAttributeResp } from 'graphql/useGetAttribute/interface'
const { Text } = Typography

interface props {
  data: GetAttributeResp
  setPagination: any
}
const menuStatusNormal: EventMenu[] = [
  {
    key: 'EDIT',
    value: 'Edit',
  },
  {
    key: 'DELETE',
    value: 'Delete',
  },
]

const menuStatusDisqualify: EventMenu[] = [
  {
    key: 'DELETE',
    value: 'Delete',
  },
]

const CategoryDataTableDropDown: React.FC<props> = ({ data, setPagination }) => {
  const router = useRouter()
  const [menuData, setMenuData] = useState<EventMenu[]>([])
  const { parentKey = null } = router.query
  const handleMenuClick = (e: any) => {
    const key: EventMenuKey = e.key
    switch (key) {
      case 'DISABLED':
        break
      default:
        break
    }
  }

  useEffect(() => {
    if (data.status === 'ENABLED') {
      setMenuData(menuStatusNormal)
    } else {
      setMenuData(menuStatusDisqualify)
    }
  }, [data])

  const menu = (
    <Menu onClick={handleMenuClick} style={{ color: '#4fb3ff', borderColor: '#4fb3ff' }}>
      {menuData.map((menu) => (
        <Menu.Item key={menu.key}>
          <Space>
            {menu.icons}
            <Text>{menu.value}</Text>
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
      {data.status === 'ENABLED' ? 'Disabled' : 'Enabled'}
    </Dropdown.Button>
  )
}

export default CategoryDataTableDropDown

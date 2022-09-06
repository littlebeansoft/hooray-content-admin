import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Menu, Dropdown, Button, Typography, Space } from 'antd'

import { defaultPagination } from 'config/paginationConfig'
import { DownOutlined, FormOutlined, DeleteOutlined } from '@ant-design/icons'
import type { EventMenu, EventMenuKey } from 'components/interface'
import { LeadDataAPIPayload } from 'graphql/interface'
const { Text } = Typography

interface props {
  leadData: LeadDataAPIPayload
  setPagination: any
}
const menuStatusNormal: EventMenu[] = [
  {
    key: "DELETE",
    value: "Delete",
  },
  {
    key: "DISQUALIFY",
    value: 'Disqualify',
  },
]

const menuStatusDisqualify: EventMenu[] = [
  {
    key: "DELETE",
    value: "Delete",
  }
];

const LeadDataTableDropDown: React.FC<props> = ({ leadData, setPagination }) => {
  const router = useRouter()
  const [menuData, setMenuData] = useState<EventMenu[]>([])
  const { parentKey = null } = router.query
  const handleMenuClick = (e: any) => {
    const key: EventMenuKey = e.key
    switch (key) {
      case 'DISQUALIFY':
          
        break
      default:
        break
    }
  }

  useEffect(() => {
    if (leadData.status === 'NORMAL') {
      setMenuData(menuStatusNormal)
    }
  }, [leadData])


  const menu = (
    <Menu onClick={handleMenuClick} style={{ color: '#4fb3ff', borderColor: '#4fb3ff' }}>
      {menuData.map((menu) => (
        <Menu.Item key={menu.key}>
          <Space>
            {menu.icons }
            <Text >{menu.value}</Text>
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
      {leadData.status === "NORMAL" ? "Qualify" : "NORMAL"}
    </Dropdown.Button>
  )
}

export default LeadDataTableDropDown

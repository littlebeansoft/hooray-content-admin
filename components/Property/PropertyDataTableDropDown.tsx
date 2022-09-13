import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Menu, Dropdown, Button, Typography, Space, Modal, message } from 'antd'

import { defaultPagination } from 'config/paginationConfig'
import { DownOutlined, ExclamationCircleOutlined, FormOutlined } from '@ant-design/icons'
import type { EventMenu, EventMenuKey } from 'components/interface'
import { GetAttributeResp } from 'graphql/useGetAttribute/interface'
import useDeleteAttribute from 'graphql/useDeleteAttribute'
const { Text } = Typography
const { confirm } = Modal

interface props {
  data: GetAttributeResp
  setPagination: any
  refetch: Function
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

const CategoryDataTableDropDown: React.FC<props> = ({ data, setPagination, refetch }) => {
  const router = useRouter()
  const [menuData, setMenuData] = useState<EventMenu[]>([])
  const { parentKey = null } = router.query

  const [deleteAttribute] = useDeleteAttribute({
    onCompleted() {
      message.success('Delete lead was Successfully')
      refetch()
    },
  })

  const showConfirmDelete = () => {
    confirm({
      title: 'Are you sure delete this Attribute ?',
      icon: <ExclamationCircleOutlined />,
      content: 'การลบ Attribute นี้จะทำให้ Attribute หายไปจากรายชื่อ เมื่อทำการลบแล้วจะไม่สามรถย้อนกลับได้',
      okType: 'danger',
      onOk() {
        deleteAttribute({
          context: {
            clientType: 'LABEL',
          },
          variables: {
            deleteAttributeId: data._id,
          },
        })
      },
      onCancel() {},
    })
  }

  const handleMenuClick = (e: any) => {
    const key: EventMenuKey = e.key
    switch (key) {
      case 'EDIT':
        break
      case 'DELETE':
        showConfirmDelete()
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

  const renderButton = (status: string) => {
    switch (status) {
      case 'DISABLED':
        return (
          <Dropdown.Button onClick={() => {}} overlay={menu} trigger={['click']}>
            Enabled
          </Dropdown.Button>
        )
      case 'ENABLED':
        return (
          <Dropdown.Button onClick={() => {}} overlay={menu} trigger={['click']}>
            Disabled
          </Dropdown.Button>
        )
      default:
        break
    }
  }

  return <>{renderButton(data.status)}</>
}

export default CategoryDataTableDropDown

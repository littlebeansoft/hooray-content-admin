import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Menu, Dropdown, Button, Typography, Space, message, Popconfirm, Modal } from 'antd'

import { ExclamationCircleOutlined } from '@ant-design/icons'
import type { EventMenu, EventMenuKey } from 'components/interface'
import { ContactResponse } from 'graphql/interface'
import { Enum_Creat_Lead_Status, useDeleteContactMutation } from 'graphql/generated/operations'
const { Text } = Typography
const { confirm } = Modal

interface props {
  data: ContactResponse
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

const ContactDataTableDropDown: React.FC<props> = ({ data, setPagination, refetch }) => {
  const router = useRouter()
  const [menuData, setMenuData] = useState<EventMenu[]>([])
  const { parentKey = null } = router.query
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
    if (data.status === 'ACTIVE') {
      setMenuData(menuStatusNormal)
    }
  }, [data])

  const [deleteLead] = useDeleteContactMutation({
    onCompleted() {
      message.success('Delete Contact was Successfully')
      refetch()
    },
  })

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

  const showConfirmDelete = () => {
    confirm({
      title: 'Are you sure delete this Contact ?',
      icon: <ExclamationCircleOutlined />,
      content: 'การลบ Contact นี้จะทำให้ Contact หายไปจากรายชื่อ เมื่อทำการลบแล้วจะไม่สามรถย้อนกลับได้',
      okType: 'danger',
      onOk() {
        deleteLead({
          context: { clientType: 'CUSTOMER' },
          variables: {
            contactId: data._id,
          },
        })
      },
      onCancel() {},
    })
  }

  const renderButton = (status: string) => {
    switch (status) {
      case 'ACTIVE':
        return (
          <Dropdown.Button onClick={() => {}} overlay={menu} trigger={['click']}>
            View
          </Dropdown.Button>
        )
      default:
        break
    }
  }

  return <>{renderButton(data.status)}</>
}

export default ContactDataTableDropDown

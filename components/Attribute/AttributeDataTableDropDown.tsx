import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Menu, Dropdown, Button, Typography, Space, Modal, message } from 'antd'

import { ExclamationCircleOutlined } from '@ant-design/icons'
import type { EventMenu, EventMenuKey } from 'components/interface'
import { GetAttributeResp } from 'graphql/useGetAttribute/interface'
import useUpdateAttribute from 'graphql/useUpdateAttribute'
import { EnabledStatus, useDeleteAttributeMutation, useUpdateAttributeMutation } from 'graphql/generated/operations'
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

  const [deleteAttribute] = useDeleteAttributeMutation({
    onCompleted() {
      message.success('Delete lead was Successfully')
      refetch()
    },
  })

  const [updateStatus] = useUpdateAttributeMutation({
    onCompleted() {
      message.success('Update lead status was Successfully')
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
            deleteAttributeId: data._id as string,
          },
        })
      },
      onCancel() {},
    })
  }

  const showConfirmDisabled = () => {
    confirm({
      title: 'Are you sure disabled this attribute ?',
      icon: <ExclamationCircleOutlined />,
      content:
        'การ Disabled Attribute จะทำให้ status ของ Attribute เปลี่ยนเป็น Disabled สามารถเปลี่ยนกับด้วยการคลิก Enabled',
      onOk() {
        updateStatus({
          context: {
            clientType: 'LABEL',
          },
          variables: {
            updateAttributeId: data._id as string,
            input: {
              status: 'DISABLED' as EnabledStatus,
            },
          },
        })
      },
      onCancel() {
        //console.log('Cancel');
      },
    })
  }

  const showConfirmEnable = () => {
    confirm({
      title: 'Are you sure enabled this attribute ?',
      icon: <ExclamationCircleOutlined />,
      content:
        'การ Enabled Attribute จะทำให้ status ของ Attribute เปลี่ยนเป็น Enabled สามารถเปลี่ยนกับด้วยการคลิก Disabled',
      onOk() {
        updateStatus({
          context: {
            clientType: 'LABEL',
          },
          variables: {
            updateAttributeId: data._id as string,
            input: {
              status: 'ENABLED' as EnabledStatus,
            },
          },
        })
      },
      onCancel() {
        //console.log('Cancel');
      },
    })
  }

  const handleMenuClick = (e: any) => {
    const key: EventMenuKey = e.key
    switch (key) {
      case 'EDIT':
        router.push({
          pathname: `${router.pathname}/[attributeId]`,
          query: {
            ...router.query,
            attributeId: data._id,
          },
        })
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
          <Dropdown.Button
            onClick={() => {
              showConfirmEnable()
            }}
            overlay={menu}
            trigger={['click']}
          >
            Enabled
          </Dropdown.Button>
        )
      case 'ENABLED':
        return (
          <Dropdown.Button
            onClick={() => {
              showConfirmDisabled()
            }}
            overlay={menu}
            trigger={['click']}
          >
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

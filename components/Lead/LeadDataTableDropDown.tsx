import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Menu, Dropdown, Button, Typography, Space, message, Popconfirm, Modal } from 'antd'

import { defaultPagination } from 'config/paginationConfig'
import { DownOutlined, FormOutlined, DeleteOutlined, ExclamationCircleOutlined } from '@ant-design/icons'
import type { EventMenu, EventMenuKey } from 'components/interface'
import { LeadDataAPIPayload } from 'graphql/interface'
import useQualifyLead from 'graphql/useQualifyLead'
import useDeleteLead from 'graphql/useDeleteLead'
const { Text } = Typography
const { confirm } = Modal;

interface props {
  leadData: LeadDataAPIPayload
  setPagination: any
  refetch: Function
}
const menuStatusNormal: EventMenu[] = [
  {
    key: "EDIT",
    value: "Edit"
  },
  {
    key: "DISQUALIFY",
    value: 'Disqualify',
  },
  {
    key: "DELETE",
    value: "Delete",
  },

]

const menuStatusDisqualify: EventMenu[] = [
  {
    key: "DELETE",
    value: "Delete",
  }
];

const menuStatusQualify: EventMenu[] = [
  {
    key: "EDIT",
    value: "Edit"
  },
  {
    key: 'DISQUALIFY',
    value: 'Disqualify'
  },
  {
    key: 'DELETE',
    value: 'Delete',
  }
]

const LeadDataTableDropDown: React.FC<props> = ({ leadData, setPagination, refetch }) => {
  const router = useRouter()
  const [menuData, setMenuData] = useState<EventMenu[]>([])
  const { parentKey = null } = router.query
  const handleMenuClick = (e: any) => {
    const key: EventMenuKey = e.key
    switch (key) {
      case 'DISQUALIFY':
        console.log("Click on Disqualify")
        break
      case 'DELETE':
        showConfirmDelete()
      default:
        break
    }
  }

  useEffect(() => {
    if (leadData.status === 'NORMAL') {
      setMenuData(menuStatusNormal)
    } else if (leadData.status === 'DISQUALIFY') {
      setMenuData(menuStatusDisqualify)
    } else if (leadData.status === 'QUALIFY') {
      setMenuData(menuStatusQualify)
    }

  }, [leadData])


  const [qualifyLead] = useQualifyLead({
     onCompleted() {
       message.success('Qualify lead was Successfully')
      // setPagination(defaultPagination)
      refetch();
    },
    onError() {
      // message.error('Qualify lead was Error')
    }
  })

  const [deleteLead] = useDeleteLead({
      onCompleted() {
       message.success('Delete lead was Successfully')
      refetch();
    }
  })


  const menu = (
    <Menu onClick={handleMenuClick} style={{ color: '#4fb3ff', borderColor: '#4fb3ff' }}>
      {menuData.map((menu) => (
        <Menu.Item key={menu.key}>
          <Space>
            {menu.icons}
            <Text >{menu.value}</Text>
          </Space>
        </Menu.Item>
      ))}
    </Menu>
  )

  const showConfirm = () => {
    confirm({
      title: 'Are you sure qualify this lead ?',
      icon: <ExclamationCircleOutlined />,
      content: 'การอนุมัติ Lead นี้จะทำให้ type ของ Lead เปลี่ยนเป็น User เมื่อทำการอนุมัติแล้วจะไม่สามรถย้อนกลับได้',
      onOk() {
        console.log("Lead ID", leadData._id);
        qualifyLead({
          context: { clientType: 'CUSTOMER' },
          variables: {
            leadId: leadData._id,
          },
        })
        //
      },
      onCancel() {
        //console.log('Cancel');
      },
    });
  };

  const showConfirmDelete = () => {
    confirm({
      title: 'Are you sure delete this lead ?',
      icon: <ExclamationCircleOutlined />,
      content: 'การลบ Lead นี้จะทำให้ Lead หายไปจากรายชื่อ เมื่อทำการลบแล้วจะไม่สามรถย้อนกลับได้',
      okType: 'danger',
      onOk() {
        deleteLead({
          context: { clientType: 'CUSTOMER' },
          variables: {
            leadId: leadData._id
          }
        })
      },
      onCancel() {

      },
    });
  }

  const renderButton = (status: string) => {
    switch (status) {
      case 'DISQUALIFY':
        return (<Dropdown.Button
          onClick={() => {
            showConfirm()
          }}
          overlay={menu}
          trigger={['click']}
        >
          Normal
        </Dropdown.Button>)
      case 'QUALIFY':
        return (
          <Dropdown.Button
            onClick={() => {

            }}
            overlay={menu}
            trigger={['click']}
          >
            Qualify
          </Dropdown.Button>
        )
      case 'NORMAL':
        return (
          <Dropdown.Button
            onClick={() => {
              showConfirm()
            }}
            overlay={menu}
            trigger={['click']}
          >
            Qualify
          </Dropdown.Button>
        )
      default:
        break;
    }
  }


  return (
    <>
      {renderButton(leadData.status)}
    </>
  )
}

export default LeadDataTableDropDown

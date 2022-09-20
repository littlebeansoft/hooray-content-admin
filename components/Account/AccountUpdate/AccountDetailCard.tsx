import { Card, Form } from 'antd'
import DangerZone from 'components/DangerZone'
import FullWidthSpace from 'components/FullWidthSpace'
import { Tab } from 'components/interface'
import TabLayout from 'components/TabLayout'
import { useRouter } from 'next/router'
import React from 'react'
import UserCreateForm from '../AccountCreate/AccountCreateForm'
import UserRelationship from './AccountRelationship'

const UserDetailCard: React.FC = () => {
  const router = useRouter()

  const [form] = Form.useForm()

  const tabs: Tab[] = [
    {
      title: 'ข้อมูลทั่วไป',
      key: '1',
      component: (
        <>
          <UserCreateForm form={form} />
          <DangerZone topic={'User'} onDelete={() => {}} buttonLabel={'Delete this User'} />
        </>
      ),
    },
    {
      title: 'ความสัมพันธ์',
      key: '2',
      component: <UserRelationship />,
    },
  ]

  const onBack = () => {
    router.push({
      pathname: `/org/[orgToken]/content-pack`,
      query: {
        ...router.query,
      },
    })
  }

  const onFinish = (values: any) => {
    console.log('value: ' + values)
  }

  return (
    <Card className="w-100" style={{ marginTop: '1.5em' }}>
      <FullWidthSpace direction="vertical">
        <TabLayout title="" tabs={tabs} />
      </FullWidthSpace>
    </Card>
  )
}

export default UserDetailCard

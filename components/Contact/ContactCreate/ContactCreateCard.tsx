import { Card, Form, message } from 'antd'
import FullWidthSpace from 'components/FullWidthSpace'
import { useCreateContactMutation } from 'graphql/generated/operations'
import { useRouter } from 'next/router'
import React from 'react'
import LeadCreateForm from './ContactCreateForm'

const UserCreateCard: React.FC = () => {
  const router = useRouter()

  const [form] = Form.useForm()

  const [createContact] = useCreateContactMutation({
    onCompleted() {
      message.success('Created Contact was Successfully')
      router.push({
        pathname: `/app/[appToken]/contact`,
        query: {
          ...router.query,
        },
      })
    },
  })

  const onFinish = (values: any) => {
    console.log('values:-->', values)
    createContact({
      context: { clientType: 'CUSTOMER' },
      variables: {
        input: {
          ...values,
          image: values?.image[0],
          phone: [{ value: values.phone }],
          email: [{ value: values.email }],
        },
      },
    })
  }

  return (
    <Card className="w-100" style={{ marginTop: '1.5em' }}>
      <FullWidthSpace direction="vertical">
        <LeadCreateForm form={form} onFinish={onFinish} />
      </FullWidthSpace>
    </Card>
  )
}

export default UserCreateCard

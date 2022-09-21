import { Card, Form, message } from 'antd'
import FullWidthSpace from 'components/FullWidthSpace'
import { useCreateAccountMutation } from 'graphql/generated/operations'
import { useRouter } from 'next/router'
import React from 'react'
import LeadCreateForm from './AccountCreateForm'
import { AccountResponse } from 'graphql/interface'

interface AccountCreateProps {
  account: AccountResponse
  loading: boolean
  edit: boolean
}

const AccountCreateCard: React.FC = () => {
  const router = useRouter()

  const [form] = Form.useForm()

  const [createAccount] = useCreateAccountMutation({
    onCompleted() {
      message.success('Created Account was Successfully')
      router.push({
        pathname: `/app/[appToken]/account`,
        query: {
          ...router.query,
        },
      })
    },
  })

  const onFinish = (values: any) => {
    console.log('value: ', values)
    createAccount({
      context: { clientType: 'CUSTOMER' },
      variables: {
        input: {
          ...values,
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

export default AccountCreateCard

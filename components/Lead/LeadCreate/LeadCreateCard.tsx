import { Card, Form, message } from 'antd'
import FullWidthSpace from 'components/FullWidthSpace'
import { useCreateLeadMutation, useCreateLeadToUserMutation } from 'graphql/generated/operations'
import useCreateLeadToUser from 'graphql/useCreateLeadToUser'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import LeadCreateForm from './LeadCreateForm'

const LeadCreateCard: React.FC = () => {
  const router = useRouter()

  const [form] = Form.useForm()

  const [createLead] = useCreateLeadMutation({
    onCompleted() {
      message.success('Created Lead was Successfully')
      router.push({
        pathname: `/app/[appToken]/lead`,
        query: {
          ...router.query,
        },
      })
    },
  })

  const [createLeadToUser] = useCreateLeadToUserMutation({
    onCompleted() {
      message.success('Created User was Successfully')
      router.push({
        pathname: `/app/[appToken]/lead`,
        query: {
          ...router.query,
        },
      })
    },
  })

  const onFinish = (values: any) => {
    //console.log("Value: -->" + JSON.stringify(values));
    if (values.leadType === 'FACTORY' || values.leadType === 'AGENT') {
      createLead({
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
    } else {
      createLeadToUser({
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
  }

  return (
    <Card className="w-100" style={{ marginTop: '1.5em' }}>
      <FullWidthSpace direction="vertical">
        <LeadCreateForm form={form} onFinish={onFinish} />
      </FullWidthSpace>
    </Card>
  )
}

export default LeadCreateCard

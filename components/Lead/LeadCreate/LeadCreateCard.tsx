import { Card, Form, message } from 'antd'
import FullWidthSpace from 'components/FullWidthSpace'
import useCreateLead from 'graphql/useCreateLead'
import useCreateLeadToUser from 'graphql/useCreateLeadToUser'
import useGetLeadData from 'graphql/useGetLeadData'
import GET_LEAD from 'graphql/useGetLeadData/getLeadData'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import LeadCreateForm from './LeadCreateForm'

const LeadCreateCard: React.FC = () => {
  const router = useRouter()

  const [form] = Form.useForm()

  const [createLead] = useCreateLead({
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

  const [createLeadToUser] = useCreateLeadToUser({
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

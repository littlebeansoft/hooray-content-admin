import { Card, Form, message } from 'antd'
import FullWidthSpace from 'components/FullWidthSpace'
import { useUpdateLeadMutation } from 'graphql/generated/operations'
import { useRouter } from 'next/router'
import React from 'react'
import LeadCreateForm from './LeadCreate/LeadCreateForm'

const LeadUpdateCard: React.FC = () => {
  const router = useRouter()

  const [form] = Form.useForm()

  const [createLead, createLeadResp] = useUpdateLeadMutation({
    onCompleted() {
      message.success('Create Transfer In Successfully')
    },
    onError(err) {
      message.error(err.message)
    },
  })

  const onFinish = (values: any) => {
    // console.log('Value: -->' + JSON.stringify(values))

    createLead({
      context: { clientType: 'CUSTOMER' },
      variables: {
        leadId: '',
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

export default LeadUpdateCard

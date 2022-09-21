import { Card, Form, message } from 'antd'
import FullWidthSpace from 'components/FullWidthSpace'
import { useUpdateLeadMutation } from 'graphql/generated/operations'
import { LeadDataAPIPayload } from 'graphql/interface'
import { useRouter } from 'next/router'
import React from 'react'
import LeadCreateForm from './LeadCreate/LeadCreateForm'

interface LeadUpdateCardProps {
  leadData?: LeadDataAPIPayload
  loading?: boolean
  edit?: boolean
}

const LeadUpdateCard: React.FC<LeadUpdateCardProps> = ({ leadData, loading, edit }) => {
  const router = useRouter()

  const [form] = Form.useForm()

  console.log('leadData-->', leadData)

  const [updateLead] = useUpdateLeadMutation({
    onCompleted() {
      message.success('Update Lead was successfully')
      router.push({
        pathname: `/app/[appToken]/lead`,
        query: {
          ...router.query,
        },
      })
    },
    onError(err) {
      message.error(err.message)
    },
  })

  const onFinish = (values: any) => {
    // console.log('Value: -->' + JSON.stringify(values))

    updateLead({
      context: { clientType: 'CUSTOMER' },
      variables: {
        leadId: leadData?._id as string,
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
        <LeadCreateForm form={form} onFinish={onFinish} leadData={leadData} loading={loading} />
      </FullWidthSpace>
    </Card>
  )
}

export default LeadUpdateCard

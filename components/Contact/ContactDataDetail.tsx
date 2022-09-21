import { Card, Form, message } from 'antd'
import FullWidthSpace from 'components/FullWidthSpace'
import { useUpdateContactMutation } from 'graphql/generated/operations'
import { ContactResponse } from 'graphql/interface'
import { useRouter } from 'next/router'
import React from 'react'
import ContactCreateForm from './ContactCreate/ContactCreateForm'

interface ContactDataDetailProps {
  contact?: ContactResponse
  loading?: boolean
  edit?: boolean
}

const ContactDetailCard: React.FC<ContactDataDetailProps> = ({ contact, loading, edit }) => {
  const router = useRouter()

  const [form] = Form.useForm()

  const [updateContact] = useUpdateContactMutation({
    onCompleted() {
      message.success('Update Contact was Successfully')
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
    updateContact({
      context: { clientType: 'CUSTOMER' },
      variables: {
        contactId: contact?._id as string,
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
        <ContactCreateForm form={form} loading={loading} data={contact} edit={edit} onFinish={onFinish} />
      </FullWidthSpace>
    </Card>
  )
}

export default ContactDetailCard

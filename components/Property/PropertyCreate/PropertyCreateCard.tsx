import { Card, Form, message } from 'antd'
import FullWidthSpace from 'components/FullWidthSpace'
import useCreateProductAttribute from 'graphql/useCreateProductAttribute'
import { useRouter } from 'next/router'
import React from 'react'
import CategoryCreateForm from './PropertyCreateForm'

const PropertyCreateCard: React.FC = () => {
  const router = useRouter()

  const [form] = Form.useForm()

  const [createProductAttribute, createProductAttributeRes] = useCreateProductAttribute({
    context: { clientType: 'PRODUCT' },
    onCompleted: () => {
      message.success('Create Product Property success')
    },
    refetchQueries: ['GET_PRODUCT_ATTRIBUTE_LIST'],
  })

  const onFinish = (values: any) => {
    console.log('value: ', values)
    createProductAttribute({
      variables: {
        input: {
          name: values.name,
          type: 'TEXT',
          options: [],
          rules: [],
        },
      },
    })
  }

  return (
    <Card className="w-100" style={{ marginTop: '1.5em' }}>
      <FullWidthSpace direction="vertical">
        <CategoryCreateForm form={form} onFinish={onFinish} />
      </FullWidthSpace>
    </Card>
  )
}

export default PropertyCreateCard

import { Card, Form, message } from 'antd'
import FullWidthSpace from 'components/FullWidthSpace'
import useCreateProductAttribute from 'graphql/useCreateAttribute'
import { useRouter } from 'next/router'
import React from 'react'
import CategoryCreateForm from './PropertyCreateForm'
import GET_ATTRIBUTE from 'graphql/useGetAttribute/getAttribute'

const PropertyCreateCard: React.FC = () => {
  const router = useRouter()

  const [form] = Form.useForm()

  const [createProductAttribute, createProductAttributeRes] = useCreateProductAttribute({
    context: { clientType: 'LABEL' },
    onCompleted: () => {
      message.success('Create Product Property success')
      router.push({
        pathname: `/org/[orgToken]/property`,
        query: {
          ...router.query,
        },
      })
    },
  })

  const onFinish = (values: any) => {
    console.log('value: ', values)
    if (values.propertyType === 'RADIO') {
      values.array = values.radios.map((item: any, index: number) => {
        return {
          order: index,
          name: item.radio,
          value: '',
        }
      })
    }

    if (values.propertyType === 'CHECKBOX') {
      values.array = values.checkboxs.map((item: any, index: number) => {
        return {
          order: index,
          name: item.checkbox,
          value: '',
        }
      })
    }

    console.log('value: ', values.array)

    createProductAttribute({
      variables: {
        input: {
          name: values.name,
          descriptions: '',
          type: values.propertyType,
          optionList: values.array,
          ruleRegExpList: [],
          status: 'ENABLED',
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

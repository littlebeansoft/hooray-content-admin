import { Card, Form, message } from 'antd'
import FullWidthSpace from 'components/FullWidthSpace'
import useUpdateAttribute from 'graphql/useUpdateAttribute'
import { useRouter } from 'next/router'
import React from 'react'
import CategoryCreateForm from './AttributeCreate/AttributeCreateForm'
import { AttributeUpdateProps } from './interface'

const AttributeCreateCard: React.FC<AttributeUpdateProps> = ({ attribute, loading }) => {
  const router = useRouter()

  const [form] = Form.useForm()

  const [updateAttribute] = useUpdateAttribute({
    context: { clientType: 'LABEL' },
    onCompleted: () => {
      message.success('Update Attribute success')
      router.push({
        pathname: `/app/[appToken]/attribute`,
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

    updateAttribute({
      variables: {
        updateAttributeId: attribute?._id,
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
        <CategoryCreateForm form={form} onFinish={onFinish} loading={loading} attribute={attribute} />
      </FullWidthSpace>
    </Card>
  )
}

export default AttributeCreateCard

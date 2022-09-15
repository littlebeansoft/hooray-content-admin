import { Card, Form, message } from 'antd'
import FullWidthSpace from 'components/FullWidthSpace'
import useCreateCategory from 'graphql/useCreateCategory'
import { useRouter } from 'next/router'
import React from 'react'
import CategoryCreateForm from './CategoryCreateForm'

const CategoryCreateCard: React.FC = () => {
  const router = useRouter()

  const [form] = Form.useForm()

  const [createCategory] = useCreateCategory({
    context: { clientType: 'LABEL' },
    onCompleted() {
      message.success('Create Category was Successfully')
      router.push({
        pathname: `/org/[orgToken]/category`,
        query: {
          ...router.query,
        },
      })
    },
  })

  const onFinish = (values: any) => {
    //console.log('value: ', values)
    createCategory({
      variables: {
        input: {
          name: values.name,
          status: 'ENABLED',
          descriptions: '',
          parentCategoryKey: values.parentCategoryKey,
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

export default CategoryCreateCard

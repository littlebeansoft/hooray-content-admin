import { Card, Form, message } from 'antd'
import FullWidthSpace from 'components/FullWidthSpace'
import useUpdateCategory from 'graphql/useUpdateCategory'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import CategoryCreateForm from './CategoryCreate/CategoryCreateForm'
import { CategoryUpdateProps } from './interface'

const CategoryCreateCard: React.FC<CategoryUpdateProps> = ({ category, loading }) => {
  const router = useRouter()

  const [form] = Form.useForm()

  const [createCategory] = useUpdateCategory({
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
        updateCategoryId: category?._id,
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
        <CategoryCreateForm category={category} form={form} onFinish={onFinish} loading={loading} />
      </FullWidthSpace>
    </Card>
  )
}

export default CategoryCreateCard

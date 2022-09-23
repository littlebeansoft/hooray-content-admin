import { Card, Form, message } from 'antd'
import FullWidthSpace from 'components/FullWidthSpace'
import { EnabledStatus, useUpdateCategoryMutation } from 'graphql/generated/operations'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { CategoryUpdateProps } from '../interface'
import CategoryUpdateForm from './CategoryUpdateForm'

const CategoryCreateCard: React.FC<CategoryUpdateProps> = ({ category, loading, categoryId }) => {
  const router = useRouter()

  const [form] = Form.useForm()

  // const [categoryAttribute, setCategoryAttribute] = useState<TYPE_CATEGORY_ATTRIBUTE_RESPONSE[]>()

  const [updateCategory] = useUpdateCategoryMutation({
    context: { clientType: 'LABEL' },
    onCompleted() {
      message.success('Create Category was Successfully')
      router.push({
        pathname: `/app/[appToken]/category`,
        query: {
          ...router.query,
        },
      })
    },
  })

  const onFinish = (values: any) => {
    //console.log('value: ', values)
    updateCategory({
      variables: {
        updateCategoryId: category?._id as string,
        input: {
          name: values.name,
          status: values.enabled as EnabledStatus,
          descriptions: values.descriptions,
          parentCategoryKey: values.parentCategoryKey,
        },
      },
    })
  }

  return (
    <Card className="w-100" style={{ marginTop: '1.5em' }}>
      <FullWidthSpace direction="vertical">
        <CategoryUpdateForm
          category={category}
          form={form}
          onFinish={onFinish}
          loading={loading}
          categoryId={categoryId}
        />
      </FullWidthSpace>
    </Card>
  )
}

export default CategoryCreateCard

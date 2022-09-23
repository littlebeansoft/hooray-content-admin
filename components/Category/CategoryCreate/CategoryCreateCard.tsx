import { Card, Form, message } from 'antd'
import FullWidthSpace from 'components/FullWidthSpace'
import { useAddCategoryAttributeMutation } from 'graphql/generated/operations'
import useCreateCategory from 'graphql/useCreateCategory'
import { useRouter } from 'next/router'
import React from 'react'
import CategoryCreateForm from './CategoryCreateForm'

const CategoryCreateCard: React.FC = () => {
  const router = useRouter()

  const [form] = Form.useForm()

  const [createCategory] = useCreateCategory({
    context: { clientType: 'LABEL' },
  })

  const [addCategoryAttribute] = useAddCategoryAttributeMutation({
    context: { clientType: 'LABEL' },
    onCompleted() {
      message.success('Add Category Attribute was Successfully')
      router.push({
        pathname: `/app/[appToken]/category`,
        query: {
          ...router.query,
        },
      })
    },
  })

  const onFinish = (values: any) => {
    console.log('value: ', values)
    if (values.parentCategoryKey !== undefined) {
      console.log('values.parentCategoryKey: ', values.parentCategoryKey)
      createCategory({
        variables: {
          input: {
            name: values.name,
            status: 'ENABLED',
            descriptions: '',
            parentCategoryKey: values.parentCategoryKey,
          },
        },
        onCompleted(resp: any) {
          const { _id } = resp.createCategory.payload
          addCategoryAttribute({
            variables: {
              input: {
                categoryId: _id as string,
                attributeIdList: values.selectAttribute,
              },
            },
          })
        },
      })
    } else {
      console.log('values.parentCategoryKey: ', 'NONE')

      createCategory({
        variables: {
          input: {
            name: values.name,
            status: 'ENABLED',
            descriptions: '',
            parentCategoryKey: 'NONE',
          },
        },
        onCompleted(resp: any) {
          const { _id } = resp.createCategory.payload
          addCategoryAttribute({
            variables: {
              input: {
                categoryId: _id as string,
                attributeIdList: values.selectAttribute,
              },
            },
          })
        },
      })
    }
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

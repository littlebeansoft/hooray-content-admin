import { Alert, message } from 'antd'
import { useNavigate, useParams } from 'react-router-dom'
import { LeftOutlined, LoadingOutlined } from '@ant-design/icons'

import CategoryForm, {
  createInitialValues,
  useParentFormInstance,
} from 'components/Category/Form'
import PageTitle from 'components/PageTitle'

import {
  useGetListCategoriesQuery,
  useUpdateCategoryMutation,
} from 'graphql/__generated/operations'

import { labelClient } from 'setup/apollo'

const CategoryUpdatePage = () => {
  const [form] = useParentFormInstance()

  const navigate = useNavigate()

  const params = useParams()
  const categoryId = params.id as string

  const query = useGetListCategoriesQuery({
    client: labelClient,
    variables: {
      input: {
        query: {
          categoryId,
        },
      },
    },
    fetchPolicy: 'no-cache',
    onCompleted({ getCategory }) {
      form.setFieldsValue(createInitialValues(getCategory.payload[0]))
    },
  })

  const [update, { loading }] = useUpdateCategoryMutation({
    client: labelClient,
    onCompleted() {
      message.success('แก้ไขข้อมูลหลักสูตรสำเร็จ')
    },
    onError(error) {
      console.log(error)

      message.error(
        `ไม่สามารแก้ไขข้อมูลหลักสูตร ID: ${categoryId} ได้โปรดลองใหม่อีกครั้ง`
      )
    },
  })

  if (query.loading) {
    return <LoadingOutlined />
  }

  if (query.error) {
    return (
      <Alert
        type="error"
        message={`ไม่สามารถเรียกข้อมูลหมวดหมู่หลักสูตร ID: ${params.id} ได้โปรดลองใหม่อีกครั้ง`}
      />
    )
  }

  const data = query.data?.getCategory.payload[0]

  return (
    <>
      <PageTitle>
        <LeftOutlined onClick={() => navigate(-1)} />
        {data?.name}
      </PageTitle>

      <CategoryForm
        loading={loading}
        form={form}
        onFinish={(values) =>
          update({
            variables: {
              id: categoryId,
              input: values,
            },
          })
        }
      />
    </>
  )
}

export default CategoryUpdatePage

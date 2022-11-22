import { message } from 'antd'
import { useNavigate } from 'react-router-dom'
import { LeftOutlined } from '@ant-design/icons'

import CategoryForm, { useParentFormInstance } from 'components/Category/Form'
import PageTitle from 'components/PageTitle'

import { useCreateCategoryMutation } from 'graphql/__generated/operations'

import { labelClient } from 'setup/apollo'

const CategoryCreatePage = () => {
  const [form] = useParentFormInstance()

  const navigate = useNavigate()

  const [create, { loading }] = useCreateCategoryMutation({
    client: labelClient,
    onCompleted() {
      message.success('สร้างหมวดหมู่หลักสูตรสำเร็จ')

      navigate(-1)
    },
    onError(error) {
      console.log(error)

      message.error('ไม่สามารถสร้างหมวดหมู่หลักสูตรได้')
    },
  })

  return (
    <>
      <PageTitle>
        <LeftOutlined onClick={() => navigate(-1)} />
        สร้างหมวดหมู่หลักสูตร
      </PageTitle>

      <CategoryForm
        loading={loading}
        form={form}
        onFinish={(values) => {
          create({
            variables: {
              input: {
                ...values,
                parentCategoryKey: 'NONE',
              },
            },
          })
        }}
      />
    </>
  )
}

export default CategoryCreatePage

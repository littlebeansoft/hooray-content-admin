import { message } from 'antd'
import { useNavigate, useParams } from 'react-router-dom'
import { LeftOutlined } from '@ant-design/icons'

import PageTitle from 'components/PageTitle'
import ContentForm, { useParentFormInstance } from 'components/Content/Form'

import { useCreateContentMutation } from 'graphql/__generated/operations'

const ContentCreatePage = () => {
  const navigate = useNavigate()

  const params = useParams()
  const sectionID = params.sectionID as string

  const [form] = useParentFormInstance()

  const [create, { loading }] = useCreateContentMutation({
    onCompleted() {
      message.success('สร้างเนื้อหาสำเร็จ')

      navigate(-1)
    },
    onError(error) {
      console.log(error)

      message.error('ไม่สามารถสร้างเนื้อหาได้')
    },
  })

  return (
    <>
      <PageTitle>
        <LeftOutlined onClick={() => navigate(-1)} />
        สร้างเนื้อหา
      </PageTitle>

      <ContentForm
        loading={loading}
        form={form}
        onFinish={(values) =>
          create({
            variables: {
              input: {
                ...values,
                sectionID,
              },
            },
          })
        }
      />
    </>
  )
}

export default ContentCreatePage

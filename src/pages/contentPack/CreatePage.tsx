import { useNavigate } from 'react-router-dom'
import { message } from 'antd'

import ContentPackForm, {
  useParentFormInstance,
} from 'components/ContentPack/Form'
import PageTitle from 'components/PageTitle'

import { useCreateContentPackMutation } from 'graphql/__generated/operations'
import { LeftOutlined } from '@ant-design/icons'

const ContentPackCreatePage = () => {
  const [form] = useParentFormInstance()

  const navigate = useNavigate()

  const [create, { loading }] = useCreateContentPackMutation({
    onCompleted() {
      navigate(-1)
    },
    onError(error) {
      console.log(error)

      message.error('ไม่สามารถสร้างหลักสูตรได้ โปรดลองใหม่อีกครั้ง')
    },
  })

  return (
    <>
      <PageTitle>
        <LeftOutlined onClick={() => navigate(-1)} />
        สร้างหลักสูตร
      </PageTitle>

      <ContentPackForm
        loading={loading}
        form={form}
        onFinish={(values) =>
          create({
            variables: {
              input: values,
            },
          })
        }
      />
    </>
  )
}

export default ContentPackCreatePage

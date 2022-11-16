import { LeftOutlined, LoadingOutlined } from '@ant-design/icons'
import { useNavigate, useParams } from 'react-router-dom'
import { Alert, message, Space } from 'antd'

import PageTitle from 'components/PageTitle'
import ContentForm, { useParentFormInstance } from 'components/Content/Form'

import {
  useGetContentPackByIdQuery,
  useUpdateContentPackMutation,
} from 'graphql/__generated/operations'

const ContentUpdatePage = () => {
  const [form] = useParentFormInstance()

  const navigate = useNavigate()

  const params = useParams()
  const contentID = params.id as string

  const query = useGetContentPackByIdQuery({
    variables: {
      id: contentID,
    },
    fetchPolicy: 'no-cache',
    onCompleted({ getContentPackByID }) {
      form.setFieldsValue(getContentPackByID.payload)
    },
  })

  const [update, { loading }] = useUpdateContentPackMutation({
    onCompleted() {
      message.success('แก้ไขข้อมูลหลักสูตรสำเร็จ')
    },
    onError(error) {
      console.log(error)

      message.error(
        `ไม่สามารแก้ไขข้อมูลหลักสูตร ID: ${contentID} ได้โปรดลองใหม่อีกครั้ง`
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
        message={`ไม่สามารถเรียกข้อมูลหลักสูตร ID: ${params.id} ได้โปรดลองใหม่อีกครั้ง`}
      />
    )
  }

  const data = query.data?.getContentPackByID.payload

  return (
    <>
      <PageTitle>
        <Space>
          <LeftOutlined onClick={() => navigate(-1)} />
          {data?.title}
        </Space>
      </PageTitle>

      <ContentForm
        loading={loading}
        form={form}
        onFinish={(values) => {
          update({
            variables: {
              id: contentID,
              input: values,
            },
          })
        }}
      />
    </>
  )
}

export default ContentUpdatePage

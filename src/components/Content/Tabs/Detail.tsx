import { Alert, message } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
import { useParams } from 'react-router-dom'

import ContentPackForm, { useParentFormInstance } from 'components/Content/Form'

import {
  useGetContentPackByIdQuery,
  useUpdateContentPackMutation,
} from 'graphql/__generated/operations'

const ContentPackTabsDetail = () => {
  const [form] = useParentFormInstance()

  const params = useParams()
  const contentPackID = params.id as string

  const query = useGetContentPackByIdQuery({
    variables: {
      id: contentPackID,
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
        `ไม่สามารแก้ไขข้อมูลหลักสูตร ID: ${contentPackID} ได้โปรดลองใหม่อีกครั้ง`
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

  return (
    <ContentPackForm
      loading={loading}
      form={form}
      onFinish={(values) => {
        update({
          variables: {
            id: contentPackID,
            input: values,
          },
        })
      }}
    />
  )
}

export default ContentPackTabsDetail

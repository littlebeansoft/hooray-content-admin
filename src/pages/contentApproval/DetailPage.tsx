import { Alert, Space } from 'antd'
import { useNavigate, useParams } from 'react-router-dom'
import { LeftOutlined, LoadingOutlined } from '@ant-design/icons'

import PageTitle from 'components/PageTitle'
import ContentApprovalPreview from 'components/ContentApproval/Preview'

import { useGetContentPackByIdQuery } from 'graphql/__generated/operations'

const ContentApprovalDetailPage = () => {
  const params = useParams()
  const contentID = params.id as string

  const navigate = useNavigate()

  const query = useGetContentPackByIdQuery({
    variables: {
      id: contentID,
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

  const contentPack = query.data?.getContentPackByID.payload

  return (
    <>
      <PageTitle>
        <Space>
          <LeftOutlined onClick={() => navigate(-1)} />

          {contentPack?.title}
        </Space>
      </PageTitle>

      <ContentApprovalPreview data={contentPack} />
    </>
  )
}

export default ContentApprovalDetailPage

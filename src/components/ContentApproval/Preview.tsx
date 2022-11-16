import { Col, Row } from 'antd'

import ContentApprovalPreviewGeneral from './PreviewGeneral'
import ContentApprovalPreviewVideo from './PreviewVideo'
import ContentApprovalPreviewCreator from './PreviewCreator'
import ContentApprovalPreviewPrice from './PreviewPrice'

import type { QR_GetContentPackByIDResult } from 'graphql/queryResponseTypes'

interface ContentApprovalPreviewProps {
  data?: QR_GetContentPackByIDResult
}

const ContentApprovalPreview = ({ data }: ContentApprovalPreviewProps) => {
  return (
    <Row gutter={32}>
      <Col span={16}>
        <ContentApprovalPreviewGeneral data={data} />
      </Col>

      <Col span={8}>
        <ContentApprovalPreviewVideo data={data} />

        <ContentApprovalPreviewCreator data={data} />

        <ContentApprovalPreviewPrice data={data} />
      </Col>
    </Row>
  )
}

export default ContentApprovalPreview

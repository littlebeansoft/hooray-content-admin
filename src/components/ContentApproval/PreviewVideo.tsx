import ContentBlock from 'components/ContentBlock'
import { NotFoundContent } from './PreviewUtils'

import { withS3URL } from 'helpers/app'

import type { QR_GetContentPackByIDResult } from 'graphql/queryResponseTypes'

interface ContentApprovalPreviewVideoProps {
  data?: QR_GetContentPackByIDResult
}

const ContentApprovalPreviewVideo = ({
  data,
}: ContentApprovalPreviewVideoProps) => {
  const previewUrl = data?.previewUrls[0]

  return (
    <ContentBlock title="ตัวอย่างวิดิโอ">
      {previewUrl == null ? (
        <NotFoundContent>- ไม่พบข้อมูล -</NotFoundContent>
      ) : (
        <video
          style={{ width: '100%' }}
          controls
          src={withS3URL(previewUrl?.file)}
        />
      )}
    </ContentBlock>
  )
}

export default ContentApprovalPreviewVideo

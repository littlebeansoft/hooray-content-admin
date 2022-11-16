import ContentBlock from 'components/ContentBlock'
import GetInstructorProfileName from 'components/GetInstructorProfileName'
import { DisplayLabel, DisplayValue, NotFoundContent } from './PreviewUtils'

import type { QR_GetContentPackByIDResult } from 'graphql/queryResponseTypes'

interface ContentApprovalPreviewCreatorProps {
  data?: QR_GetContentPackByIDResult
}

const ContentApprovalPreviewCreator = ({
  data,
}: ContentApprovalPreviewCreatorProps) => {
  return (
    <ContentBlock title="ข้อมูลผู้สอน">
      <DisplayLabel>ผู้สอน</DisplayLabel>

      <DisplayValue>
        {data?.creatorIDs == null || data.creatorIDs.length === 0 ? (
          <NotFoundContent>- ไม่พบข้อมูล -</NotFoundContent>
        ) : (
          <GetInstructorProfileName userIDs={data.creatorIDs} />
        )}
      </DisplayValue>
    </ContentBlock>
  )
}

export default ContentApprovalPreviewCreator

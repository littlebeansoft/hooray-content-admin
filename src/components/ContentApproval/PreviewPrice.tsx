import ContentBlock from 'components/ContentBlock'
import { DisplayLabel, DisplayValue, NotFoundContent } from './PreviewUtils'

import { numberFormat } from 'helpers/formatter'

import type { QR_GetContentPackByIDResult } from 'graphql/queryResponseTypes'

interface ContentApprovalPreviewPriceProps {
  data?: QR_GetContentPackByIDResult
}

const ContentApprovalPreviewPrice = ({
  data,
}: ContentApprovalPreviewPriceProps) => {
  return (
    <ContentBlock title="ราคา">
      <DisplayLabel>ราคา</DisplayLabel>

      <DisplayValue>
        {data?.price == null || data.price.basePrice === 0 ? (
          <NotFoundContent>- ไม่พบข้อมูล -</NotFoundContent>
        ) : (
          <span>{numberFormat(data.price.basePrice)} บาท</span>
        )}
      </DisplayValue>
    </ContentBlock>
  )
}

export default ContentApprovalPreviewPrice

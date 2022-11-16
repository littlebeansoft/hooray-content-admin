import { Col, Image, Row, Tag } from 'antd'

import ContentBlock from 'components/ContentBlock'
import { LabelContainer } from 'components/Label'
import { DisplayLabel, DisplayValue, NotFoundContent } from './PreviewUtils'

import { withS3URL } from 'helpers/app'

import type { QR_GetContentPackByIDResult } from 'graphql/queryResponseTypes'

interface ContentApprovalPreviewGeneralProps {
  data?: QR_GetContentPackByIDResult
}

const ContentApprovalPreviewGeneral = ({
  data,
}: ContentApprovalPreviewGeneralProps) => {
  const thumbnail = data?.thumbnails[0]
  const cover = data?.covers[0]

  return (
    <ContentBlock
      title={
        <LabelContainer
          style={{
            gap: 8,
            paddingBottom: 0,
          }}
        >
          <span>ข้อมูลหลักสูตร</span>
          {data?.recommend ? <Tag color="orange">หลักสูตรแนะนำ</Tag> : null}
        </LabelContainer>
      }
    >
      <Row gutter={[32, 16]}>
        <Col span={24}>
          <DisplayLabel>รูปปกหลักสูตร</DisplayLabel>

          <DisplayValue>
            {cover == null ? (
              <NotFoundContent>- ไม่พบข้อมูล -</NotFoundContent>
            ) : (
              <Image width={100} src={withS3URL(cover.file)} />
            )}
          </DisplayValue>
        </Col>

        <Col span={24}>
          <DisplayLabel>รูปปกหลักสูตร</DisplayLabel>

          <DisplayValue>
            {thumbnail == null ? (
              <NotFoundContent>- ไม่พบข้อมูล -</NotFoundContent>
            ) : (
              <Image width={100} src={withS3URL(thumbnail.file)} />
            )}
          </DisplayValue>
        </Col>

        <Col span={12}>
          <DisplayLabel>ชื่อหลักสูตร</DisplayLabel>

          <DisplayValue>{data?.title}</DisplayValue>
        </Col>
        <Col span={12}>
          <DisplayLabel>หมวดหมู่</DisplayLabel>

          <DisplayValue>
            {data?.categories.length === 0 ? (
              <NotFoundContent>- ไม่พบข้อมูล -</NotFoundContent>
            ) : (
              data?.categories.map((item) => (
                <Tag key={item._id}>{item.name}</Tag>
              ))
            )}
          </DisplayValue>
        </Col>

        <Col span={24}>
          <DisplayLabel>คำอธิบาย</DisplayLabel>

          <DisplayValue
            dangerouslySetInnerHTML={{
              __html: data?.description || '',
            }}
          />
        </Col>

        <Col span={24}>
          <DisplayLabel>วัตถุประสงค์</DisplayLabel>

          <DisplayValue>
            {data?.objectives.length === 0 ? (
              <NotFoundContent>- ไม่พบข้อมูล -</NotFoundContent>
            ) : (
              <ul>
                {data?.objectives.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </DisplayValue>
        </Col>

        <Col span={24}>
          <DisplayLabel>ข้อกำหนดการเรียน</DisplayLabel>

          <DisplayValue>
            {data?.requirements.length === 0 ? (
              <NotFoundContent>- ไม่พบข้อมูล -</NotFoundContent>
            ) : (
              <ul>
                {data?.requirements.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </DisplayValue>
        </Col>

        <Col span={24}>
          <DisplayLabel>ใครเหมาะสำหรับหลักสูตรนี้</DisplayLabel>

          <DisplayValue>
            {data?.suitables.length === 0 ? (
              <NotFoundContent>- ไม่พบข้อมูล -</NotFoundContent>
            ) : (
              <ul>
                {data?.suitables.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </DisplayValue>
        </Col>
      </Row>
    </ContentBlock>
  )
}

export default ContentApprovalPreviewGeneral

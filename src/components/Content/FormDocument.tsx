import { Col, Form, Row } from 'antd'

import ContentBlock from 'components/ContentBlock'
import UploadFile from 'components/UploadFile'

import { allowDocumentFileExtensions } from 'helpers/utils'

const ContentFormDocument = () => {
  return (
    <ContentBlock title="เอกสาร">
      <Row gutter={[32, 16]}>
        <Col span={24}>
          <Form.Item label="เอกสารเนื้อหา">
            <UploadFile
              allowFileExtension={allowDocumentFileExtensions}
              maxUploadItems={5}
            />
          </Form.Item>
        </Col>
      </Row>
    </ContentBlock>
  )
}

export default ContentFormDocument

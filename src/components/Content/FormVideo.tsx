import { Col, Form, Row, Switch } from 'antd'

import ContentBlock from 'components/ContentBlock'
import UploadFile from 'components/UploadFile'

import { allowVideoFileExtensions } from 'helpers/utils'

const ContentFormVideo = () => {
  return (
    <ContentBlock title="วิดีโอ">
      <Row gutter={[32, 16]}>
        <Col span={12}>
          <Form.Item label="เนื้อหาวิดีโอ" name="contentUrl">
            <UploadFile
              allowFileExtension={allowVideoFileExtensions}
              maxUploadItems={1}
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="เนื้อหาวิดีโอตัวอย่าง" name="previewUrls">
            <UploadFile
              allowFileExtension={allowVideoFileExtensions}
              maxUploadItems={1}
            />
          </Form.Item>
        </Col>

        <Col span={12} offset={12}>
          <Form.Item
            label="เล่นวิดีโอตัวอย่างได้"
            name="canBePreviewed"
            valuePropName="checked"
            tooltip="สามารถเล่นวิดีโอตัวอย่างได้ในหน้ารายละเอียดหลักสูตร"
          >
            <Switch />
          </Form.Item>
        </Col>
      </Row>
    </ContentBlock>
  )
}

export default ContentFormVideo

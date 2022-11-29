import { Col, Form, Input, InputNumber, Row } from 'antd'

import ContentBlock from 'components/ContentBlock'
import TinyEditor from 'components/TinyEditor'
import UploadFile from 'components/UploadFile'

import { ruleRequired } from 'helpers/antdUtils'

const ContentFormGeneral = () => {
  return (
    <ContentBlock title="ข้อมูลเนื้อหา">
      <Row gutter={[32, 16]}>
        <Col span={24}>
          <Form.Item
            label="รูปขนาดย่อ"
            name="thumbnails"
            help="ขนาดรูปที่แนะนำคือ 16:9 เช่น 1920 x 1080 px ถ้าหากขนาดไม่ถูกต้องการแสดงผลอาจจะผิดพลาด"
            rules={[ruleRequired]}
          >
            <UploadFile />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item label="ชื่อ" name="title" rules={[ruleRequired]}>
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="ลำดับ" name="sortOrder" rules={[ruleRequired]}>
            <InputNumber style={{ width: '100%' }} />
          </Form.Item>
        </Col>

        <Col span={24}>
          <Form.Item
            label="คำอธิบาย"
            name="description"
            trigger="onEditorChange"
            rules={[ruleRequired]}
          >
            <TinyEditor />
          </Form.Item>
        </Col>
      </Row>
    </ContentBlock>
  )
}

export default ContentFormGeneral

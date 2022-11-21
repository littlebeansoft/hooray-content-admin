import { Col, Form, Input, Row } from 'antd'

import ContentBlock from 'components/ContentBlock'

import { ruleRequired } from 'helpers/antdUtils'

const CategoryFormGeneral = () => {
  return (
    <ContentBlock title="ข้อมูลหมวดหมู่">
      <Row gutter={[32, 16]}>
        <Col span={24}>
          <Form.Item label="ชื่อ" name="name" rules={[ruleRequired]}>
            <Input placeholder="ระบุชื่อหมวดหมู่หลักสูตร" />
          </Form.Item>
        </Col>

        <Col span={24}>
          <Form.Item
            label="คำอธิบาย"
            name="descriptions"
            rules={[ruleRequired]}
          >
            <Input.TextArea
              rows={4}
              placeholder="ระบุคำอธิบายหมวดหมู่หลักสูตร"
            />
          </Form.Item>
        </Col>
      </Row>
    </ContentBlock>
  )
}

export default CategoryFormGeneral

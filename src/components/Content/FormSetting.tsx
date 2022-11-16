import { Checkbox, Col, Form, Row, Switch } from 'antd'

import ContentBlock from 'components/ContentBlock'

const ContentFormSetting = () => {
  return (
    <ContentBlock title="ตั้งค่า">
      <Row gutter={[32, 16]}>
        <Col span={24}>
          <Form.Item label="เปิดใช้งาน" name="active" valuePropName="checked">
            <Switch />
          </Form.Item>
        </Col>

        <Col span={24}>
          <Form.Item noStyle name="recommend" valuePropName="checked">
            <Checkbox>เป็นหลักสูตรแนะนำ</Checkbox>
          </Form.Item>
        </Col>
      </Row>
    </ContentBlock>
  )
}

export default ContentFormSetting

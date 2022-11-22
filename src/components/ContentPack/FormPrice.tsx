import { Col, Form, InputNumber, Row } from 'antd'

import ContentBlock from 'components/ContentBlock'

const ContentFormPrice = () => {
  return (
    <ContentBlock title="ราคา">
      <Row gutter={[32, 16]}>
        <Col span={24}>
          <Form.Item label="ราคา" name={['price', 'basePrice']}>
            <InputNumber addonAfter="บาท" />
          </Form.Item>
        </Col>
      </Row>
    </ContentBlock>
  )
}

export default ContentFormPrice

import { Col, Form, InputNumber, Row } from 'antd'

import ContentBlock from 'components/ContentBlock'

import { numberFormat } from 'helpers/formatter'

const ContentPackFormPrice = () => {
  return (
    <ContentBlock title="ราคา">
      <Row gutter={[32, 16]}>
        <Col span={24}>
          <Form.Item label="ราคา" name={['price', 'basePrice']}>
            <InputNumber
              addonAfter="บาท"
              formatter={(value) => numberFormat(value)}
            />
          </Form.Item>
        </Col>
      </Row>
    </ContentBlock>
  )
}

export default ContentPackFormPrice

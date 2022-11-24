import { Col, Form, Row } from 'antd'

import ContentBlock from 'components/ContentBlock'
import CreatorSelectTable from 'components/CreatorSelectTable'

const ContentPackFormCreator = () => {
  return (
    <ContentBlock title="ข้อมูลผู้สอน">
      <Row gutter={[32, 16]}>
        <Col span={24}>
          <Form.Item name="creatorIDs" noStyle>
            <CreatorSelectTable />
          </Form.Item>
        </Col>
      </Row>
    </ContentBlock>
  )
}

export default ContentPackFormCreator

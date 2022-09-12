import React from 'react'
import { Col, Collapse, Row, Typography, Button, Popconfirm } from 'antd'
import { QuestionCircleOutlined, CloseSquareOutlined } from '@ant-design/icons'
const { Panel } = Collapse
const { Text, Title } = Typography
interface Props {
  topic: string
  buttonLabel?: string
  loading?: boolean
  onDelete: () => void
}

const DangerZone: React.FC<Props> = ({ topic, buttonLabel, loading, onDelete }) => {
  const text = (
    <>
      <Text strong type="danger" style={{ paddingLeft: 24 }}>
        Danger Zone
      </Text>
      <Title level={5} style={{ paddingLeft: 24 }}>
        Delete this {topic}
      </Title>
      <Text type="secondary" style={{ paddingLeft: 24 }}>
        Once you delete a {topic}, there is no going back. Please be certain.
      </Text>
    </>
  )

  const handleOk = () => {
    onDelete()
  }

  return (
    <Collapse defaultActiveKey={['1']} style={{ borderColor: '#A30404' }}>
      <Panel
        header={
          <Text strong type="danger">
            Danger Zone
          </Text>
        }
        key="1"
        style={{ borderColor: '#A30404' }}
      >
        <Row>
          <Col span={16}>{text}</Col>
          <Col span={8} className="d-flex justify-end" style={{ alignItems: 'center' }}>
            <Popconfirm
              title="Are you sure?"
              onConfirm={handleOk}
              okButtonProps={{ loading }}
              icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
            >
              <Button danger type="primary" size="large" icon={<CloseSquareOutlined />}>
                {buttonLabel}
              </Button>
            </Popconfirm>
          </Col>
        </Row>
      </Panel>
    </Collapse>
  )
}

export default DangerZone

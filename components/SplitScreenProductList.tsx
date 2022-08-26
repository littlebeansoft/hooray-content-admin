import { Card, Col, Input, Row } from 'antd'

interface SplitScreenProductListProps {
  leftComponent?: React.ReactNode
  rightComponent?: React.ReactNode
}

const cardStyle = {
  height: '100%',
}

const SplitScreenProductList: React.FC<SplitScreenProductListProps> = ({ leftComponent, rightComponent }) => {
  return (
    <Row itemType="flex" gutter={[16, 16]}>
      <Col span={12}>
        <Card style={cardStyle}>{leftComponent}</Card>
      </Col>
      {rightComponent && (
        <Col span={12}>
          <Card style={cardStyle}>{rightComponent}</Card>
        </Col>
      )}
    </Row>
  )
}

export default SplitScreenProductList

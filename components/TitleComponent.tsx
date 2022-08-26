import React from 'react'
import { Button, Typography, Space } from 'antd'
import { LeftOutlined } from '@ant-design/icons'
import { TitleComponentProps } from './interface'

const { Title } = Typography

const TitleComponent: React.FC<TitleComponentProps> = ({ onBack, title, noMargin }) => {
  return (
    <Space style={{ marginBottom: noMargin ? 0 : 16 }}>
      {onBack && (
        <Button type="primary" ghost icon={<LeftOutlined />} onClick={onBack}>
          Back
        </Button>
      )}

      <Title level={4} style={{ color: '#2699FB', marginBottom: 0 }}>
        {title}
      </Title>
    </Space>
  )
}

export default TitleComponent

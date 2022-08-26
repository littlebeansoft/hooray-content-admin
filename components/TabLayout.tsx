import React from 'react'
import { Card, Tabs } from 'antd'
import { TabLayoutProps } from './interface'
const { TabPane } = Tabs

const TabLayout: React.FC<TabLayoutProps> = ({ title, tabs, defaultActiveKey, cardActionButton, onChange }) => {
  return (
    <Card className="w-100" style={{ marginTop: '1.5em' }} title={<strong>{title}</strong>} extra={cardActionButton}>
      <Tabs defaultActiveKey={defaultActiveKey} onChange={onChange}>
        {tabs.map((tab) => (
          <TabPane tab={tab.title} key={tab.key}>
            {tab.component}
          </TabPane>
        ))}
      </Tabs>
    </Card>
  )
}

export default TabLayout

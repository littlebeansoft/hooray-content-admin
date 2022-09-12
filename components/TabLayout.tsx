import React from 'react'
import { Card, Tabs } from 'antd'
import { TabLayoutProps } from './interface'
const { TabPane } = Tabs

const TabLayout: React.FC<TabLayoutProps> = ({ title, tabs, defaultActiveKey, cardActionButton, onChange }) => {
  return (
    <Tabs type="card" defaultActiveKey={defaultActiveKey} onChange={onChange}>
      {tabs.map((tab) => (
        <TabPane tab={tab.title} key={tab.key}>
          {tab.component}
        </TabPane>
      ))}
    </Tabs>
  )
}

export default TabLayout

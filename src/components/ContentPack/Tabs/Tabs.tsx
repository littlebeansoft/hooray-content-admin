import { Tabs } from 'antd'
import { StringParam, useQueryParam, withDefault } from 'use-query-params'

import ContentPackTabsDetail from './Detail'

const { TabPane } = Tabs

const ContentPackTabs = () => {
  const [tabKey, setTabKey] = useQueryParam(
    'tab',
    withDefault(StringParam, 'detail')
  )

  return (
    <Tabs defaultActiveKey={tabKey} onChange={setTabKey}>
      <TabPane key="detail" tab="ข้อมูลหลัก">
        <ContentPackTabsDetail />
      </TabPane>

      <TabPane key="section" tab="บทเรียน">
        <h1>This is section</h1>
      </TabPane>
    </Tabs>
  )
}

export default ContentPackTabs

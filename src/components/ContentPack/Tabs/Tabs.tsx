import { Tabs, TabsProps } from 'antd'
import { StringParam, useQueryParam, withDefault } from 'use-query-params'

import ContentPackTabsDetail from './Detail'
import ContentPackTabsSection from './Section'

const ContentPackTabs = () => {
  const [tabKey, setTabKey] = useQueryParam(
    'tab',
    withDefault(StringParam, 'detail')
  )

  const items: TabsProps['items'] = [
    {
      key: 'detail',
      tabKey: 'detail',
      label: 'ข้อมูลหลัก',
      children: <ContentPackTabsDetail />,
    },
    {
      key: 'section',
      tabKey: 'section',
      label: 'บทเรียน',
      children: <ContentPackTabsSection />,
    },
  ]

  return <Tabs defaultActiveKey={tabKey} onChange={setTabKey} items={items} />
}

export default ContentPackTabs

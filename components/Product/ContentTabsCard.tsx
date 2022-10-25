import React, { useMemo, useState } from 'react'
import { Button, Tabs } from 'antd'
import MainLayout from 'layouts/MainLayout'
import TitleComponent from 'components/TitleComponent'
import ContentCreateCard from './ContentCreate/ContentCreateCard'
import { useRouter } from 'next/router'
import ContentPriceStockCard from './ContentCreate/ContentPriceStockCard'

const operations = (
  <div style={{ paddingLeft: 20, paddingRight: 20 }}>
    <Button type="primary">Submit for Review</Button>
  </div>
)

const ContentTabsCard: React.FC = () => {
  const router = useRouter()

  return (
    <>
      <Tabs
        size="middle"
        tabPosition="left"
        tabBarExtraContent={operations}
        style={{
          height: 220,
        }}
      >
        <Tabs.TabPane tab="ข้อมูลสินค้า" key="1">
          <MainLayout breadcrumb={['Home', 'Add New Content']}>
            <TitleComponent
              title="Add New Content"
              onBack={() =>
                router.push({
                  pathname: `/org/[orgToken]/Content`,
                  query: {
                    ...router.query,
                  },
                })
              }
            />
            <ContentCreateCard />
          </MainLayout>
        </Tabs.TabPane>
        <Tabs.TabPane tab="ราคาและสต๊อก" key="2">
          <MainLayout breadcrumb={['Home', 'Add New Content']}>
            <TitleComponent
              title="Add New Content"
              onBack={() =>
                router.push({
                  pathname: `/org/[orgToken]/Content`,
                  query: {
                    ...router.query,
                  },
                })
              }
            />
            <ContentPriceStockCard />
          </MainLayout>
        </Tabs.TabPane>
      </Tabs>
    </>
  )
}

export default ContentTabsCard

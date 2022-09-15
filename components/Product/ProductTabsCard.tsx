import React, { useMemo, useState } from 'react'
import { Button, Tabs } from 'antd'
import MainLayout from 'layouts/MainLayout'
import TitleComponent from 'components/TitleComponent'
import ProductCreateCard from './ProductCreate/ProductCreateCard'
import { useRouter } from 'next/router'
import ProductPriceStockCard from './ProductCreate/ProductPriceStockCard'

const operations = (
  <div style={{ paddingLeft: 20, paddingRight: 20 }}>
    <Button type="primary">Submit for Review</Button>
  </div>
)

const ProductTabsCard: React.FC = () => {
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
          <MainLayout breadcrumb={['Home', 'Add New Product']}>
            <TitleComponent
              title="Add New Product"
              onBack={() =>
                router.push({
                  pathname: `/org/[orgToken]/product`,
                  query: {
                    ...router.query,
                  },
                })
              }
            />
            <ProductCreateCard />
          </MainLayout>
        </Tabs.TabPane>
        <Tabs.TabPane tab="ราคาและสต๊อก" key="2">
          <MainLayout breadcrumb={['Home', 'Add New Product']}>
            <TitleComponent
              title="Add New Product"
              onBack={() =>
                router.push({
                  pathname: `/org/[orgToken]/product`,
                  query: {
                    ...router.query,
                  },
                })
              }
            />
            <ProductPriceStockCard />
          </MainLayout>
        </Tabs.TabPane>
      </Tabs>
    </>
  )
}

export default ProductTabsCard

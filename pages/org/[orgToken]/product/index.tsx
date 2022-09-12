import React from 'react'
import MainLayout from 'layouts/MainLayout/MainLayout'
import TitleComponent from 'components/TitleComponent'
import withAuth from 'middlewares/withAuth'
import ProductDataTableCard from 'components/Product/ProductDataTableCard'

const AllProduct: React.FC = () => {
  return (
    <MainLayout breadcrumb={['Home', '']}>
      <TitleComponent title="All Product" />
      <ProductDataTableCard />
    </MainLayout>
  )
}

export default withAuth(AllProduct)

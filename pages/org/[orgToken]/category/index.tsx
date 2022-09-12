import React from 'react'
import MainLayout from 'layouts/MainLayout/MainLayout'
import TitleComponent from 'components/TitleComponent'
import withAuth from 'middlewares/withAuth'
import CategoryDataTableCard from 'components/Category/CategoryDataTableCard'

const AllCategory: React.FC = () => {
  return (
    <MainLayout breadcrumb={['Home', '']}>
      <TitleComponent title="All Category" />
      <CategoryDataTableCard />
    </MainLayout>
  )
}

export default withAuth(AllCategory)

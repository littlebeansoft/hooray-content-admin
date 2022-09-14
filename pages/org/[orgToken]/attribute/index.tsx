import React from 'react'
import MainLayout from 'layouts/MainLayout/MainLayout'
import TitleComponent from 'components/TitleComponent'
import withAuth from 'middlewares/withAuth'
import PropertyDataTableCard from 'components/Attribute/AttributeDataTableCard'

const AllProperty: React.FC = () => {
  return (
    <MainLayout breadcrumb={['Home', '']}>
      <TitleComponent title="All Property" />
      <PropertyDataTableCard />
    </MainLayout>
  )
}

export default withAuth(AllProperty)

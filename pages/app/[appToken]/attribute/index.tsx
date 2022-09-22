import React from 'react'
import MainLayout from 'layouts/MainLayout/MainLayout'
import TitleComponent from 'components/TitleComponent'
import withAuth from 'middlewares/withAuth'
import AttributeDataTableCard from 'components/Attribute/AttributeDataTableCard'

const AllAttribute: React.FC = () => {
  return (
    <MainLayout breadcrumb={['Home', '']}>
      <TitleComponent title="Attribue" />
      <AttributeDataTableCard />
    </MainLayout>
  )
}

export default withAuth(AllAttribute)

import React from 'react'
import MainLayout from 'layouts/MainLayout/MainLayout'
import TitleComponent from 'components/TitleComponent'
import withAuth from 'middlewares/withAuth'
import ContentDataTableCard from 'components/Content/ContentDataTableCard'

const AllContent: React.FC = () => {
  return (
    <MainLayout breadcrumb={['Home']}>
      <TitleComponent title="All Content" />
      <ContentDataTableCard />
    </MainLayout>
  )
}

export default withAuth(AllContent)

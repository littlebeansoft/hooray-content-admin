import React from 'react'
import MainLayout from 'layouts/MainLayout/MainLayout'
import TitleComponent from 'components/TitleComponent'
import withAuth from 'middlewares/withAuth'

const AllLead: React.FC = () => {
  return (
    <MainLayout breadcrumb={['Home', '']}>
      <TitleComponent title="Lead" />
    </MainLayout>
  )
}

export default withAuth(AllLead)

import React from 'react'
import MainLayout from 'layouts/MainLayout/MainLayout'
import TitleComponent from 'components/TitleComponent'
import withAuth from 'middlewares/withAuth'
import AccountDataTableCard from 'components/Account/AccountDataTableCard'

const AllUser: React.FC = () => {
  return (
    <MainLayout breadcrumb={['Home', '']}>
      <TitleComponent title="Account" />
      <AccountDataTableCard />
    </MainLayout>
  )
}

export default withAuth(AllUser)

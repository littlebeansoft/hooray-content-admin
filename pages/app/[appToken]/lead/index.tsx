import React from 'react'
import MainLayout from 'layouts/MainLayout/MainLayout'
import TitleComponent from 'components/TitleComponent'
import LeadDataTableCard from 'components/Lead/LeadDataTableCard'
import withAuth from 'middlewares/withAuth'

const AllLead: React.FC = () => {
  return (
    <MainLayout breadcrumb={['Home', 'Lead']}>
      <TitleComponent title="Lead" />
      <LeadDataTableCard />
    </MainLayout>
  )
}

export default withAuth(AllLead)

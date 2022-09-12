import React from 'react'
import MainLayout from 'layouts/MainLayout/MainLayout'
import TitleComponent from 'components/TitleComponent'
import withAuth from 'middlewares/withAuth'
import OragnizationLabelDataTableCard from 'components/OrganizationLabel/OrganizationLabelDataTableCard'

const AllOrganizationLabel: React.FC = () => {
  return (
    <MainLayout breadcrumb={['Home', '']}>
      <TitleComponent title="All Organization Label" />
      <OragnizationLabelDataTableCard />
    </MainLayout>
  )
}

export default withAuth(AllOrganizationLabel)

import React from 'react'
import MainLayout from 'layouts/MainLayout/MainLayout'
import TitleComponent from 'components/TitleComponent'
import withAuth from 'middlewares/withAuth'
import OrganizationDataTableCard from 'components/Organization/OrganizationDataTableCard'

const AllOrganization: React.FC = () => {
    return (
        <MainLayout breadcrumb={['Home', '']}>
            <TitleComponent title="All Organization" />
            <OrganizationDataTableCard />
        </MainLayout>
    )
}

export default withAuth(AllOrganization)

import React from 'react'
import MainLayout from 'layouts/MainLayout/MainLayout'
import TitleComponent from 'components/TitleComponent'
import withAuth from 'middlewares/withAuth'
import { useRouter } from 'next/router'
import OrganizationDetailCard from 'components/Organization/OrganizationDetail/OrganizationDetailCard'

const OrganizationDetail: React.FC = () => {
    const router = useRouter()

    return (
        <MainLayout breadcrumb={['Home', 'Organization']}>
            <TitleComponent
                title="Organization"
                onBack={() =>
                    router.push({
                        pathname: `/org/[orgToken]/organization`,
                        query: {
                            ...router.query,
                        },
                    })
                }
            />
            <OrganizationDetailCard />
        </MainLayout>
    )
}

export default withAuth(OrganizationDetail)

import React from 'react'
import MainLayout from 'layouts/MainLayout/MainLayout'
import TitleComponent from 'components/TitleComponent'
import withAuth from 'middlewares/withAuth'
import { useRouter } from 'next/router'
import OrganizationCreateCard from 'components/Organization/OrganizationCreate/OrganizationCreateCard'

const OrganizationCreate: React.FC = () => {
    const router = useRouter()

    return (
        <MainLayout breadcrumb={['Home', 'Add New Organization']}>
            <TitleComponent
                title="Add New Organization"
                onBack={() =>
                    router.push({
                        pathname: `/org/[orgToken]/organization`,
                        query: {
                            ...router.query,
                        },
                    })
                }
            />
            <OrganizationCreateCard />
        </MainLayout>
    )
}

export default withAuth(OrganizationCreate)

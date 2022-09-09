import React from 'react'
import MainLayout from 'layouts/MainLayout/MainLayout'
import TitleComponent from 'components/TitleComponent'
import withAuth from 'middlewares/withAuth'
import { useRouter } from 'next/router'
import LeadCreateCard from 'components/Lead/LeadCreate/LeadCreateCard'

const LeadCreatePack: React.FC = () => {
    const router = useRouter()
    const { leadId = '' } = router.query

    console.log("Lead id", leadId)

    return (
        <MainLayout breadcrumb={['Home', '']}>
            <TitleComponent
                title="Lead NAME"
                onBack={() =>
                    router.push({
                        pathname: `/org/[orgToken]/lead`,
                        query: {
                            ...router.query,
                        },
                    })
                }
            />
            <LeadCreateCard />
        </MainLayout>
    )
}

export default withAuth(LeadCreatePack)

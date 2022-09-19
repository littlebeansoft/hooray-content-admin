import React from 'react'
import MainLayout from 'layouts/MainLayout/MainLayout'
import TitleComponent from 'components/TitleComponent'
import withAuth from 'middlewares/withAuth'
import { useRouter } from 'next/router'
import LeadCreateCard from 'components/Lead/LeadCreate/LeadCreateCard'

const LeadCreatePack: React.FC = () => {
  const router = useRouter()

  return (
    <MainLayout breadcrumb={['Addmin Panel', 'Add New Lead']}>
      <TitleComponent
        title="Add New Lead"
        onBack={() =>
          router.push({
            pathname: `/app/[appToken]/lead`,
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

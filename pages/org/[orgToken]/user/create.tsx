import React from 'react'
import MainLayout from 'layouts/MainLayout/MainLayout'
import TitleComponent from 'components/TitleComponent'
import withAuth from 'middlewares/withAuth'
import { useRouter } from 'next/router'
import UserCreateCard from 'components/User/UserCreate/UserCreateCard'

const LeadCreatePack: React.FC = () => {
  const router = useRouter()

  return (
    <MainLayout breadcrumb={['Home', 'Add New User']}>
      <TitleComponent
        title="Add New User"
        onBack={() =>
          router.push({
            pathname: `/org/[orgToken]/user`,
            query: {
              ...router.query,
            },
          })
        }
      />
      <UserCreateCard />
    </MainLayout>
  )
}

export default withAuth(LeadCreatePack)

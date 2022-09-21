import React from 'react'
import MainLayout from 'layouts/MainLayout/MainLayout'
import TitleComponent from 'components/TitleComponent'
import withAuth from 'middlewares/withAuth'
import { useRouter } from 'next/router'
import AccountCreateCard from 'components/Account/AccountCreate/AccountCreateCard'

const UserCreate: React.FC = () => {
  const router = useRouter()

  return (
    <MainLayout breadcrumb={['Home', 'Account']}>
      <TitleComponent
        title="Account"
        onBack={() =>
          router.push({
            pathname: `/app/[appToken]/account`,
            query: {
              ...router.query,
            },
          })
        }
      />
      <AccountCreateCard />
    </MainLayout>
  )
}

export default withAuth(UserCreate)

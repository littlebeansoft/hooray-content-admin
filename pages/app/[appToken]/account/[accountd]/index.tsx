import React from 'react'
import MainLayout from 'layouts/MainLayout/MainLayout'
import TitleComponent from 'components/TitleComponent'
import withAuth from 'middlewares/withAuth'
import { useRouter } from 'next/router'
import UseDetailCard from 'components/Account/AccountUpdate/AccountDetailCard'

const UserDetail: React.FC = () => {
  const router = useRouter()

  return (
    <MainLayout breadcrumb={['Home', 'Account']}>
      <TitleComponent
        title="Account"
        onBack={() =>
          router.push({
            pathname: `/org/[orgToken]/user`,
            query: {
              ...router.query,
            },
          })
        }
      />
      <UseDetailCard />
    </MainLayout>
  )
}

export default withAuth(UserDetail)

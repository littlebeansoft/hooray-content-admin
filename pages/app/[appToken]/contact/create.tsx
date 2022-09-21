import React from 'react'
import MainLayout from 'layouts/MainLayout/MainLayout'
import TitleComponent from 'components/TitleComponent'
import withAuth from 'middlewares/withAuth'
import { useRouter } from 'next/router'
import ContactCreateCard from 'components/Contact/ContactCreate/ContactCreateCard'

const UserCreate: React.FC = () => {
  const router = useRouter()

  return (
    <MainLayout breadcrumb={['Home', 'Contact']}>
      <TitleComponent
        title="Contact"
        onBack={() =>
          router.push({
            pathname: `/app/[appToken]/contact`,
            query: {
              ...router.query,
            },
          })
        }
      />
      <ContactCreateCard />
    </MainLayout>
  )
}

export default withAuth(UserCreate)
